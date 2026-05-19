#!/usr/bin/env python3
"""
Phase 3 — Content Integration Script
Maps SEO Writer deliverables into Astro content collection files.
Run from project root: python3 scripts/phase3-integrate-content.py
"""
import re
import yaml
import os
from pathlib import Path
from datetime import datetime

# ── paths ──────────────────────────────────────────────────────────────────────
DELIVERABLES = Path("/Users/nachomini/.paperclip/instances/default/workspaces/2d48101b-9c95-421b-8ea8-c6ca6fbf8fec/content-deliverables")
CONTENT_ROOT = Path(__file__).parent.parent / "src" / "content"

# ── helpers ────────────────────────────────────────────────────────────────────

MONTH_MAP = {
    "jan": "01", "january": "01",
    "feb": "02", "february": "02",
    "mar": "03", "march": "03",
    "apr": "04", "april": "04",
    "may": "05",
    "jun": "06", "june": "06",
    "jul": "07", "july": "07",
    "aug": "08", "august": "08",
    "sep": "09", "september": "09",
    "oct": "10", "october": "10",
    "nov": "11", "november": "11",
    "dec": "12", "december": "12",
}

def parse_date(s: str) -> str:
    """Convert 'Jul 2024', 'January 2025', '2026-05-19' → YYYY-MM-DD."""
    s = s.strip()
    if re.match(r"\d{4}-\d{2}-\d{2}", s):
        return s
    m = re.match(r"([A-Za-z]+)\s+(\d{4})", s)
    if m:
        month = MONTH_MAP.get(m.group(1).lower(), "01")
        return f"{m.group(2)}-{month}-01"
    return "2026-05-19"


def parse_frontmatter(text: str) -> tuple[dict, str]:
    """Split YAML frontmatter from body. Returns (fm_dict, body_str)."""
    if not text.startswith("---"):
        return {}, text
    end = text.index("---", 3)
    fm = yaml.safe_load(text[3:end]) or {}
    body = text[end + 3:].lstrip("\n")
    return fm, body


def strip_metadata_tail(body: str) -> str:
    """Remove the non-content metadata sections appended to body."""
    # Remove HTML comment metadata blocks
    body = re.sub(r"<!--.*?-->", "", body, flags=re.DOTALL)
    # Remove everything after a `---` that is followed by a metadata key word
    # (internal_links, indications, institutional_anchors, SCHEMA_CONTENT_MATCH, etc.)
    body = re.sub(
        r"\n---\n+(?:\*\*)?(?:internal_links|indications|institutional_anchors|SCHEMA_CONTENT_MATCH|INFORMATION_REQUIRING_VERIFICATION).*$",
        "",
        body,
        flags=re.DOTALL | re.IGNORECASE,
    )
    return body.rstrip()


def extract_faqs(body: str) -> list[dict]:
    """Extract FAQ H3 Q&A pairs from body markdown."""
    faqs = []
    # Find FAQ sections by H2 header containing FAQ/FAQ
    faq_section_match = re.search(
        r"^## .*(FAQ|Frequently Asked).*$",
        body,
        re.MULTILINE | re.IGNORECASE,
    )
    if not faq_section_match:
        return faqs

    faq_block = body[faq_section_match.start():]
    # Stop at next H2 that isn't a sub-section
    next_h2 = re.search(r"\n## (?!.*FAQ)", faq_block[5:])
    if next_h2:
        faq_block = faq_block[: next_h2.start() + 5]

    # Extract ### Question / answer pairs
    questions = list(re.finditer(r"^### (.+)$", faq_block, re.MULTILINE))
    for i, q_match in enumerate(questions):
        q_text = q_match.group(1).strip()
        start = q_match.end()
        end = questions[i + 1].start() if i + 1 < len(questions) else len(faq_block)
        answer_raw = faq_block[start:end].strip()
        # Truncate at --- separator (before metadata tail)
        answer_raw = re.split(r"\n---\n", answer_raw)[0]
        # Clean up answer: remove trailing headings, strip leading/trailing blank lines
        answer_raw = re.sub(r"\n+##.+$", "", answer_raw, flags=re.DOTALL).strip()
        if q_text and answer_raw:
            faqs.append({"question": q_text, "answer": answer_raw})
    return faqs


def extract_indications(body: str) -> list[str]:
    """Extract condition slugs from **indications:** section."""
    m = re.search(r"\*\*indications:\*\*\s*((?:\n- /conditions/[^\n]+)+)", body)
    if not m:
        # Try YAML-style inside comment
        m = re.search(r"indications:\s*((?:\n\s+-\s+/conditions/[^\n]+)+)", body)
    if not m:
        return []
    slugs = re.findall(r"/conditions/([^/\s]+)/", m.group(0))
    return list(dict.fromkeys(slugs))  # deduplicate, preserve order


def extract_treatment_services(body: str) -> list[str]:
    """Extract service slugs from SCHEMA_CONTENT_MATCH.treatments."""
    # Find the treatments: block and grab everything until the next top-level key
    m = re.search(r"treatments:\s*\n((?:(?!\n\S).+\n?)+)", body, re.MULTILINE)
    if not m:
        return []
    # Extract all url: values in the treatments block
    urls = re.findall(r'url:\s*["\']?(/[^"\'>\s\n]+)["\']?', m.group(0))
    slugs = []
    for url in urls:
        parts = [p for p in url.strip("/").split("/") if p]
        if parts:
            slugs.append(parts[-1])
    return list(dict.fromkeys(slugs))


def extract_schema_match_lists(body: str, key: str) -> list[str]:
    """Extract causes/symptoms list from SCHEMA_CONTENT_MATCH block."""
    # Try YAML block inside HTML comment
    m = re.search(rf"{key}:\s*((?:\n\s+-\s+.+)+)", body)
    if not m:
        return []
    items = re.findall(r'-\s+"?(.+?)"?\s*$', m.group(0), re.MULTILINE)
    return [i.strip('"').strip("'") for i in items if i.strip()]


def extract_testimonials(body: str, schema_binding: str) -> list[dict]:
    """Extract testimonials from metadata block."""
    # Try YAML block
    m = re.search(r"testimonials:\s*((?:\n\s+-\s.+|\n\s+\w+:.+)+)", body, re.MULTILINE)
    if not m:
        return []
    block = m.group(0)
    # Use yaml-ish mini parser
    reviews = []
    current = {}
    for line in block.splitlines():
        line = line.strip()
        if line.startswith("- reviewer:") or line.startswith("- reviewer :"):
            if current:
                reviews.append(current)
            current = {"author": line.split(":", 1)[1].strip().strip('"')}
        elif line.startswith("reviewer:"):
            current = {"author": line.split(":", 1)[1].strip().strip('"')}
        elif line.startswith("date:"):
            current["date"] = parse_date(line.split(":", 1)[1].strip().strip('"'))
        elif line.startswith("rating:"):
            try:
                current["rating"] = int(line.split(":", 1)[1].strip())
            except ValueError:
                current["rating"] = 5
        elif line.startswith("text:"):
            current["text"] = line.split(":", 1)[1].strip().strip('"')
    if current:
        reviews.append(current)
    # Add required fields
    result = []
    for r in reviews:
        if "author" in r and "text" in r:
            result.append({
                "author": r.get("author", ""),
                "date": r.get("date", "2024-05-01"),
                "rating": r.get("rating", 5),
                "text": r.get("text", ""),
                "mentions_target": r.get("author", ""),
                "schema_binding": schema_binding,
            })
    return result


def extract_institutional_anchors(body: str) -> list[dict]:
    """Extract institutional anchor entries."""
    if "Washington University School of Medicine" in body:
        return [{
            "name": "Washington University School of Medicine",
            "visible_phrasing": "Serving the same south St. Louis community as Washington University School of Medicine-affiliated practices",
            "section_placement": "location_paragraph",
        }]
    return []


def yaml_str(value) -> str:
    """Serialize a value to YAML-safe string."""
    if isinstance(value, list):
        if not value:
            return "[]"
        lines = []
        for item in value:
            if isinstance(item, dict):
                first = True
                for k, v in item.items():
                    v_safe = str(v).replace('"', '\\"')
                    if first:
                        lines.append(f'  - {k}: "{v_safe}"')
                        first = False
                    else:
                        lines.append(f'    {k}: "{v_safe}"')
            else:
                lines.append(f'  - {item}')
        return "\n" + "\n".join(lines)
    elif isinstance(value, str):
        if "\n" in value or ":" in value or '"' in value:
            escaped = value.replace('"', '\\"')
            return f'"{escaped}"'
        return f'"{value}"'
    return str(value)


def build_frontmatter(**kwargs) -> str:
    lines = ["---"]
    for k, v in kwargs.items():
        if v is None:
            continue
        if isinstance(v, list):
            if not v:
                lines.append(f"{k}: []")
            else:
                lines.append(f"{k}:")
                for item in v:
                    if isinstance(item, dict):
                        first_key = True
                        for dk, dv in item.items():
                            # Sanitize: replace newlines with space, escape quotes
                            dv_safe = str(dv).replace("\n", " ").replace("\r", "").replace('"', '\\"').strip()
                            # For rating field, write as integer (no quotes)
                            if dk == "rating":
                                try:
                                    if first_key:
                                        lines.append(f'  - {dk}: {int(dv)}')
                                    else:
                                        lines.append(f'    {dk}: {int(dv)}')
                                except (ValueError, TypeError):
                                    if first_key:
                                        lines.append(f'  - {dk}: 5')
                                    else:
                                        lines.append(f'    {dk}: 5')
                                first_key = False
                                continue
                            if first_key:
                                lines.append(f'  - {dk}: "{dv_safe}"')
                                first_key = False
                            else:
                                lines.append(f'    {dk}: "{dv_safe}"')
                    else:
                        lines.append(f'  - {item}')
        elif isinstance(v, bool):
            lines.append(f"{k}: {'true' if v else 'false'}")
        elif isinstance(v, (int, float)):
            lines.append(f"{k}: {v}")
        elif isinstance(v, str):
            # Use block scalar for descriptions to handle special chars safely
            if k == "description" or k == "title" or k == "h1" or k == "categoryName":
                escaped = v.replace('"', '\\"')
                lines.append(f'{k}: "{escaped}"')
            else:
                lines.append(f"{k}: {v}")
        else:
            lines.append(f"{k}: {v}")
    lines.append("---")
    return "\n".join(lines)


# ── per-collection writers ──────────────────────────────────────────────────────

SERVICE_CATEGORY_MAP = {
    "nerve-blocks": ("pain-control", "Pain Control Clinic"),
    "injection-therapy": ("pain-control", "Pain Control Clinic"),
    "kyphoplasty": ("pain-control", "Pain Control Clinic"),
    "medication-management": ("pain-control", "Pain Control Clinic"),
    "neuropathy-treatment": ("pain-control", "Pain Control Clinic"),
    "neuromodulation-technique": ("pain-control", "Pain Control Clinic"),
    "hyaluronic-acid-injections": ("orthopedic", "Orthopedic Care"),
    "prp-therapy": ("orthopedic", "Orthopedic Care"),
    "regenerative-therapy": ("orthopedic", "Orthopedic Care"),
    "weight-loss": ("standalone", "Weight Loss"),
    "sports-medicine": ("standalone", "Sports Medicine"),
}

KYPHOPLASTY_SCHEMA = "MedicalProcedure"  # only exception


def integrate_service(deliverable_path: Path):
    raw = deliverable_path.read_text()
    fm, body = parse_frontmatter(raw)

    # Derive slug from filename
    slug = deliverable_path.stem
    category_slug, category_name = SERVICE_CATEGORY_MAP.get(slug, ("pain-control", "Pain Control Clinic"))

    title = fm.get("meta_title") or fm.get("title") or f"{fm.get('h1', '')} | St. Louis Pain Center"
    description = fm.get("meta_description") or fm.get("metaDescription") or ""
    h1 = fm.get("h1", "")
    publish_date = parse_date(str(fm.get("publishDate", "2026-05-19")))
    last_edited = parse_date(str(fm.get("lastEdited", "2026-05-19")))
    schema_type = KYPHOPLASTY_SCHEMA if slug == "kyphoplasty" else "TherapeuticProcedure"

    indications = extract_indications(body)
    testimonials = extract_testimonials(body, "service-page")
    faqs = extract_faqs(body)
    anchors = extract_institutional_anchors(body)

    clean_body = strip_metadata_tail(body)

    dest_dir = CONTENT_ROOT / "services" / category_slug
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest = dest_dir / f"{slug}.md"

    fm_dict = {
        "title": title,
        "description": description,
        "h1": h1,
        "categorySlug": category_slug,
        "categoryName": category_name,
        "publishDate": publish_date,
        "lastEdited": last_edited,
        "heroImage": f"/images/{slug}-st-louis-mo.webp",
        "heroImageAlt": f"{h1} at St. Louis Pain Center",
        "schemaType": schema_type,
        "indications": indications,
        "testimonials": testimonials,
        "faqs": faqs,
        "institutional_anchors": anchors,
    }
    dest.write_text(build_frontmatter(**fm_dict) + "\n\n" + clean_body + "\n")
    print(f"  ✓ {dest.relative_to(CONTENT_ROOT.parent.parent)}")


def integrate_condition(deliverable_path: Path):
    raw = deliverable_path.read_text()
    fm, body = parse_frontmatter(raw)

    slug = deliverable_path.stem
    title = fm.get("metaTitle") or fm.get("meta_title") or fm.get("title") or f"{fm.get('h1', '')} Treatment in St. Louis"
    description = fm.get("metaDescription") or fm.get("meta_description") or ""
    h1 = fm.get("h1", "")
    publish_date = parse_date(str(fm.get("publishDate", "2026-05-19")))
    last_edited = parse_date(str(fm.get("lastEdited", "2026-05-19")))

    treatment_services = extract_treatment_services(body)
    causes = extract_schema_match_lists(body, "causes")
    symptoms = extract_schema_match_lists(body, "symptoms")
    testimonials = extract_testimonials(body, "service-page")
    faqs = extract_faqs(body)
    anchors = extract_institutional_anchors(body)

    clean_body = strip_metadata_tail(body)

    dest = CONTENT_ROOT / "conditions" / f"{slug}.md"
    fm_dict = {
        "title": title,
        "description": description,
        "h1": h1,
        "conditionSlug": slug,
        "publishDate": publish_date,
        "lastEdited": last_edited,
        "heroImage": f"/images/{slug}-st-louis-mo.webp",
        "heroImageAlt": f"{h1} at St. Louis Pain Center",
        "treatment_services": treatment_services,
        "causes": causes,
        "symptoms": symptoms,
        "testimonials": testimonials,
        "faqs": faqs,
        "institutional_anchors": anchors,
    }
    dest.write_text(build_frontmatter(**fm_dict) + "\n\n" + clean_body + "\n")
    print(f"  ✓ {dest.relative_to(CONTENT_ROOT.parent.parent)}")


CATEGORY_SERVICES_MAP = {
    "pain-control": ["nerve-blocks", "injection-therapy", "kyphoplasty", "medication-management", "neuropathy-treatment", "neuromodulation-technique"],
    "orthopedic": ["hyaluronic-acid-injections", "prp-therapy", "regenerative-therapy"],
}


def integrate_category(deliverable_path: Path):
    raw = deliverable_path.read_text()
    fm, body = parse_frontmatter(raw)

    slug = deliverable_path.stem
    title = fm.get("meta_title") or fm.get("metaTitle") or fm.get("title") or ""
    description = fm.get("meta_description") or fm.get("metaDescription") or ""
    h1 = fm.get("h1", "")
    publish_date = parse_date(str(fm.get("publishDate", "2026-05-19")))
    last_edited = parse_date(str(fm.get("lastEdited", "2026-05-19")))
    faqs = extract_faqs(body)
    services_list = CATEGORY_SERVICES_MAP.get(slug, [])

    clean_body = strip_metadata_tail(body)
    dest = CONTENT_ROOT / "categories" / f"{slug}.md"
    fm_dict = {
        "title": title,
        "description": description,
        "h1": h1,
        "categorySlug": slug,
        "publishDate": publish_date,
        "lastEdited": last_edited,
        "services": services_list,
        "faqs": faqs,
    }
    dest.write_text(build_frontmatter(**fm_dict) + "\n\n" + clean_body + "\n")
    print(f"  ✓ {dest.relative_to(CONTENT_ROOT.parent.parent)}")


COMPARISON_SLUG_MAP = {
    "compare-nerve-blocks-vs-medication": "nerve-blocks-vs-medication-management",
    "compare-neuromodulation-vs-traditional": "neuromodulation-vs-traditional-neuropathy-treatment",
    "compare-prp-vs-ha": "prp-therapy-vs-hyaluronic-acid-injections",
    "compare-pt-vs-surgery": "physical-therapy-vs-surgery-back-pain",
    "compare-regenerative-vs-cortisone": "regenerative-therapy-vs-cortisone-injections",
}

COMPARISON_OPTIONS = {
    "nerve-blocks-vs-medication-management": (
        ("Nerve Blocks", "nerve-blocks"),
        ("Medication Management", "medication-management"),
    ),
    "neuromodulation-vs-traditional-neuropathy-treatment": (
        ("Neuromodulation Technique", "neuromodulation-technique"),
        ("Traditional Neuropathy Treatment", "neuropathy-treatment"),
    ),
    "prp-therapy-vs-hyaluronic-acid-injections": (
        ("PRP Therapy", "prp-therapy"),
        ("Hyaluronic Acid Injections", "hyaluronic-acid-injections"),
    ),
    "physical-therapy-vs-surgery-back-pain": (
        ("Physical Therapy", "sports-medicine"),
        ("Surgery", None),
    ),
    "regenerative-therapy-vs-cortisone-injections": (
        ("Regenerative Therapy", "regenerative-therapy"),
        ("Cortisone Injections", None),
    ),
}


def integrate_comparison(deliverable_path: Path):
    raw = deliverable_path.read_text()
    fm, body = parse_frontmatter(raw)

    src_slug = deliverable_path.stem
    dest_slug = COMPARISON_SLUG_MAP.get(src_slug, src_slug)
    title = fm.get("meta_title") or fm.get("title") or ""
    description = fm.get("meta_description") or fm.get("metaDescription") or ""
    h1 = fm.get("h1", "")
    publish_date = parse_date(str(fm.get("publishDate", "2026-05-19")))
    last_edited = parse_date(str(fm.get("lastEdited", "2026-05-19")))
    faqs = extract_faqs(body)

    options = COMPARISON_OPTIONS.get(dest_slug)
    option_a_name, option_a_slug = options[0] if options else ("Option A", None)
    option_b_name, option_b_slug = options[1] if options else ("Option B", None)

    clean_body = strip_metadata_tail(body)
    dest = CONTENT_ROOT / "comparisons" / f"{dest_slug}.md"

    # Build manually to handle nullable option slugs
    lines = ["---"]
    lines.append(f'title: "{title}"')
    lines.append(f'description: "{description}"')
    lines.append(f'h1: "{h1}"')
    lines.append(f'comparisonSlug: "{dest_slug}"')
    lines.append(f'publishDate: {publish_date}')
    lines.append(f'lastEdited: {last_edited}')
    lines.append(f'option_a:')
    lines.append(f'  name: "{option_a_name}"')
    if option_a_slug:
        lines.append(f'  serviceSlug: "{option_a_slug}"')
    else:
        lines.append(f'  serviceSlug: null')
    lines.append(f'option_b:')
    lines.append(f'  name: "{option_b_name}"')
    if option_b_slug:
        lines.append(f'  serviceSlug: "{option_b_slug}"')
    else:
        lines.append(f'  serviceSlug: null')
    lines.append("related_conditions: []")
    if faqs:
        lines.append("faqs:")
        for faq in faqs:
            q = faq["question"].replace('"', '\\"')
            a = faq["answer"].replace('"', '\\"').replace("\n", " ")
            lines.append(f'  - question: "{q}"')
            lines.append(f'    answer: "{a}"')
    else:
        lines.append("faqs: []")
    lines.append("---")
    dest.write_text("\n".join(lines) + "\n\n" + clean_body + "\n")
    print(f"  ✓ {dest.relative_to(CONTENT_ROOT.parent.parent)}")


PAGES_SLUG_MAP = {
    "homepage": "homepage",
    "about": "about",
    "contact": "contact",
    "new-patients": "new-patients",
    "insurance": "insurance",
    "hipaa-privacy": "hipaa-privacy",
    "conditions-hub": "conditions-hub",
}


def integrate_page(deliverable_path: Path):
    raw = deliverable_path.read_text()
    fm, body = parse_frontmatter(raw)

    src_slug = deliverable_path.stem
    dest_slug = PAGES_SLUG_MAP.get(src_slug, src_slug)
    title = fm.get("meta_title") or fm.get("metaTitle") or fm.get("title") or ""
    description = fm.get("meta_description") or fm.get("metaDescription") or ""
    h1 = fm.get("h1", "")
    publish_date = parse_date(str(fm.get("publishDate", "2026-05-19")))
    last_edited = parse_date(str(fm.get("lastEdited", "2026-05-19")))
    faqs = extract_faqs(body)
    testimonials = extract_testimonials(body, "localbusiness-homepage") if src_slug == "homepage" else []
    anchors = extract_institutional_anchors(body)

    clean_body = strip_metadata_tail(body)
    dest = CONTENT_ROOT / "pages" / f"{dest_slug}.md"

    lines = ["---"]
    lines.append(f'title: "{title}"')
    lines.append(f'description: "{description}"')
    lines.append(f'h1: "{h1}"')
    lines.append(f'pageSlug: "{dest_slug}"')
    lines.append(f'publishDate: {publish_date}')
    lines.append(f'lastEdited: {last_edited}')

    if testimonials:
        lines.append("testimonials:")
        for t in testimonials:
            lines.append(f'  - author: "{t["author"]}"')
            lines.append(f'    date: {t["date"]}')
            lines.append(f'    rating: {t["rating"]}')
            lines.append(f'    text: "{t["text"].replace(chr(34), chr(92)+chr(34))}"')
            lines.append(f'    mentions_target: "{t["mentions_target"]}"')
            lines.append(f'    schema_binding: "{t["schema_binding"]}"')
    else:
        lines.append("testimonials: []")

    if faqs:
        lines.append("faqs:")
        for faq in faqs:
            q = faq["question"].replace('"', '\\"')
            a = faq["answer"].replace('"', '\\"').replace("\n", " ")
            lines.append(f'  - question: "{q}"')
            lines.append(f'    answer: "{a}"')
    else:
        lines.append("faqs: []")

    if anchors:
        lines.append("institutional_anchors:")
        for a in anchors:
            lines.append(f'  - name: "{a["name"]}"')
            lines.append(f'    visible_phrasing: "{a["visible_phrasing"]}"')
            lines.append(f'    section_placement: "{a["section_placement"]}"')
    else:
        lines.append("institutional_anchors: []")

    lines.append("---")
    dest.write_text("\n".join(lines) + "\n\n" + clean_body + "\n")
    print(f"  ✓ {dest.relative_to(CONTENT_ROOT.parent.parent)}")


# ── routing table ──────────────────────────────────────────────────────────────

SERVICE_FILES = {
    "nerve-blocks", "injection-therapy", "kyphoplasty", "medication-management",
    "neuropathy-treatment", "neuromodulation-technique", "hyaluronic-acid-injections",
    "prp-therapy", "regenerative-therapy", "weight-loss", "sports-medicine",
}
CONDITION_FILES = {
    "neuropathy", "diabetic-neuropathy", "knee-pain", "joint-pain", "back-pain",
    "neck-pain", "sciatica", "chronic-pain", "shoulder-pain", "arthritis-osteoarthritis",
    "fibromyalgia", "vertigo-vestibular-disorders", "neuropathy-in-feet",
}
CATEGORY_FILES = {"pain-control", "orthopedic"}
COMPARISON_FILES = {
    "compare-nerve-blocks-vs-medication", "compare-neuromodulation-vs-traditional",
    "compare-prp-vs-ha", "compare-pt-vs-surgery", "compare-regenerative-vs-cortisone",
}
PAGE_FILES = {
    "homepage", "about", "contact", "new-patients", "insurance",
    "hipaa-privacy", "conditions-hub",
}

# ── main ───────────────────────────────────────────────────────────────────────

def main():
    print("Phase 3 — Content Integration")
    print("=" * 50)

    counts = {"service": 0, "condition": 0, "category": 0, "comparison": 0, "page": 0, "skip": 0}

    for f in sorted(DELIVERABLES.glob("*.md")):
        slug = f.stem
        if slug in SERVICE_FILES:
            print(f"\n[service] {slug}")
            integrate_service(f)
            counts["service"] += 1
        elif slug in CONDITION_FILES:
            print(f"\n[condition] {slug}")
            integrate_condition(f)
            counts["condition"] += 1
        elif slug in CATEGORY_FILES:
            print(f"\n[category] {slug}")
            integrate_category(f)
            counts["category"] += 1
        elif slug in COMPARISON_FILES:
            print(f"\n[comparison] {slug}")
            integrate_comparison(f)
            counts["comparison"] += 1
        elif slug in PAGE_FILES:
            print(f"\n[page] {slug}")
            integrate_page(f)
            counts["page"] += 1
        else:
            print(f"  SKIP {slug}")
            counts["skip"] += 1

    print("\n" + "=" * 50)
    print(f"Done: {counts['service']} services, {counts['condition']} conditions, "
          f"{counts['category']} categories, {counts['comparison']} comparisons, "
          f"{counts['page']} pages, {counts['skip']} skipped")


if __name__ == "__main__":
    main()
