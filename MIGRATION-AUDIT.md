# Migration Audit — St. Louis Pain Center
**Date:** 2026-05-19
**Source:** https://stlpaincenter.com
**Issue:** COR-53
**Auditor:** Project Director (Phase 1c)

---

## §1 — Page Inventory (PAGE_INVENTORY)

Grading rubric:
- **A** — Substantial, accurate, unique content. Reuse with light editing.
- **B** — Good bones, solid structure. Edit and expand for Core 30 depth.
- **C** — Thin, generic, duplicated, or structurally wrong. Replace.
- **F** — Wrong, misleading, copyright problem, or do-not-use.

| # | URL | Title | Words (unique) | Grade | Notes |
|---|-----|-------|----------------|-------|-------|
| 1 | / | Homepage — Pain Relief That Lasts | ~450 | B | Contains 8 real GBP reviews (gold). H1 is "Pain Management Clinic, St. Louis" — generic multi-word. Services + conditions grids present. Rewrite for Core 30 AIDA structure and single-city H1. |
| 2 | /about-us | About Us | ~130 | C | Critically thin — no team bios, no provider credentials, no history, no photos. Must rebuild with Dr. Arconati + Anissa Wheeler bios. |
| 3 | /neuropathy | Neuropathy Treatment | ~450 | B | Solid structure: 7 causes, 9 symptoms, 4 treatments, 4 FAQs. Neuropathy is the #1 target service. Expand depth, add AIDA, upgrade H2 structure. Preserve cause/symptom framework. |
| 4 | /back-pain | Back Pain | ~430 | B | 6 causes, 4 symptoms, 3 treatments, 4 FAQs. Good bones. Expand to Core 30 depth. |
| 5 | /chronic-pain | Chronic Pain | ~390 | B | 6 causes, 5 symptoms, 4 treatments, 4 FAQs. Good bones. Expand. |
| 6 | /joint-pain | Joint Pain | ~560 | B | Strongest condition page — 10 causes, 8 symptoms. Best existing depth. Edit + expand. |
| 7 | /knee-pain | Knee Pain | ~400 | B | 5 causes, 6 symptoms, 4 treatments, 4 FAQs. Good bones. |
| 8 | /neck-pain | Neck Pain | ~400 | B | 7 causes, 10 symptoms, 2 treatments, 4 FAQs. Only 2 treatments mentioned — expand. |
| 9 | /sciatica | Sciatica | ~510 | B | 9 causes — most thorough condition page on the site. Preserve and expand. |
| 10 | /regenerative-therapy | Regenerative Therapy | ~480 | C | FAQ heading says "Exosome Therapy" but body never explains exosomes — confusing/potentially inaccurate. Rewrite from scratch. |
| 11 | /hyaluronic-acid-injections | Hyaluronic Acid Injections | ~310 | C | Only 310 words. Only 1 condition listed. No dosage, procedure, recovery, or brands. Rewrite. |
| 12 | /prp-therapy | PRP Therapy | ~480 | B | Mentions "A2M" (alpha-2-macroglobulin) multiple times without explanation. Good structure otherwise. Edit to clarify A2M or remove references; add AIDA. |
| 13 | /medical-weight-loss | Medical Weight Loss | ~490 | B | Best data page — SURMOUNT-5 clinical trial stats (tirzepatide 20.2% vs. semaglutide 13.7%). Preserve data. Expand with AIDA. |
| 14 | /neuromodulation-technique | Neuromodulation Technique | ~520 | B | Most detailed service page. Good structure, mentions TMS distinction. Preserve + expand. |
| 15 | /testimonials | Testimonials | ~300 | C | Just repeats the same 8 reviews from the homepage. No additional content, no video, no case studies. Replace with Core 30 testimonials page structure. |
| 16 | /contact | Contact | ~500 | B | Functions as secondary homepage with 4 FAQs and a full services grid. Good neuropathy FAQs to preserve. Remap to Core 30 contact/location page. |
| 17 | /schedule-appointment | Schedule Appointment | ~100 | B | Minimal but functional conversion page. Appropriate for its purpose. Port to Core 30 booking page with Resend Worker form. |
| 18 | /privacy-policy | Privacy Policy | — | A | Standard legal — keep as-is with updated date. |
| 19 | /terms-and-conditions | Terms and Conditions | — | A | Standard legal — keep as-is with updated date. |

### Content Grade Summary
| Grade | Count | Pages |
|-------|-------|-------|
| A | 2 | Privacy Policy, Terms |
| B | 12 | Homepage, Neuropathy, Back Pain, Chronic Pain, Joint Pain, Knee Pain, Neck Pain, Sciatica, PRP Therapy, Medical Weight Loss, Neuromodulation Technique, Contact, Schedule Appt |
| C | 3 | About Us, Regenerative Therapy, HA Injections, Testimonials |
| F | 0 | — |

---

## §2 — Image Inventory (IMAGE_INVENTORY)

> **Note:** Image grading performed via URL pattern analysis and page content inspection. A dedicated image scrape pass is recommended by the Tech Builder during Phase 2 setup.

Grading rubric:
- **A** — High quality, original, web-ready. Reuse.
- **B** — Good subject but needs background removal, color correction, or format optimization. Edit with gpt-image-2.
- **C** — Low quality, stock/generic, or wrong for Core 30. Generate replacement.
- **F** — Watermarked, copyright issue, or do-not-use.

| # | Image / Location | Subject | Grade | Notes |
|---|-----------------|---------|-------|-------|
| H1 | Homepage hero | Neuropathy/pain patient | C | Stock-style image, likely generic. Replace with gpt-image-2 TEMPLATE 1. |
| H2 | Provider headshots | Dr. Ron Arconati | B | Existing headshot — EDIT-1 (background removal/cleanup). Critical for E-E-A-T. |
| H3 | Provider headshots | Anissa Wheeler (PT) | B | Existing headshot — EDIT-1. |
| S1 | /neuropathy | Foot/nerve illustration | C | Likely stock illustration. Generate specialized neuropathy illustration. |
| S2 | /back-pain | Back pain patient | C | Likely generic stock. Generate with TEMPLATE 3 (service hero). |
| S3 | /chronic-pain | Chronic pain | C | Likely stock. Generate. |
| S4 | /joint-pain | Joint/knee | C | Likely stock. Generate. |
| S5 | /knee-pain | Knee treatment | C | Likely stock. Generate. |
| S6 | /neck-pain | Neck pain | C | Likely stock. Generate. |
| S7 | /sciatica | Sciatic nerve | C | Likely stock. Generate with anatomical overlay. |
| S8 | /regenerative-therapy | Cellular/regenerative | C | Likely stock. Generate with TEMPLATE 6. |
| S9 | /hyaluronic-acid-injections | Injection procedure | C | Likely stock. Generate with TEMPLATE 5 (treatment room). |
| S10 | /prp-therapy | PRP blood tube | C | Likely stock. Generate. |
| S11 | /medical-weight-loss | Weight loss | C | Likely stock. Generate with TEMPLATE 3. |
| S12 | /neuromodulation-technique | Neuromodulation device | C | Specialized equipment — generate with TEMPLATE 5. |
| L1 | Logo | Brand logo | B | Extract from existing site — reuse. Optimize to SVG if possible. |
| F1 | Favicon | — | B | Extract from existing site — reuse or regenerate. |

### Image Grade Summary
| Grade | Count |
|-------|-------|
| A | 0 |
| B | 4 (2 provider headshots, logo, favicon) |
| C | 13 (all hero/service/condition images) |
| F | 0 |

---

## §3 — Reviews Extracted (for Semantic Review Checkpoint C)

All 8 reviews are identical on Homepage, Testimonials, and Contact pages. These are confirmed GBP reviews.

| # | Reviewer | Date | Stars | Content Summary | Target Services Mentioned |
|---|----------|------|-------|-----------------|--------------------------|
| 1 | Heidi Goodsite | Mar 2025 | 5★ | "Phenomenal staff! Clean facility with people who really care." | General/experience |
| 2 | Ms. Fowler | Jan 2025 | 5★ | "This treatment works for me and my knee pain is a level 3, a little fluid is on my knee." | **Knee pain** |
| 3 | Ernestine Griffin | Nov 2024 | 5★ | "They are great people it's worth coming out here because it helps a lot." | General |
| 4 | Stephanie Baker | Jul 2024 | 5★ | "Had a wonderful experience with this team! Everyone there is so caring and helped me through my knee treatments. Recommend them highly!" | **Knee treatments** |
| 5 | Pat Shore | Jun 2024 | 5★ | "Everyone is very professional and caring. Treatments are done with utmost care. My doctors gave up on my issues. This treatment has been a Godsend for my **neuropathy** and **vertigo**." | **Neuropathy** |
| 6 | Lester Brannam | May 2024 | 5★ | "Anissa Wheeler was my therapist... I was having left knee pain and my doctor said that I needed knee surgery. I am 71 years old and I didn't want to go through surgery so I went to STL Pain Center... I took a **gel shot** once a week for 5 weeks and they helped tremendously." | **Knee pain + HA injections** |
| 7 | Barbara marler | May 2024 | 5★ | "Every one is So nice. They know you by name and make you feel like you are their only patient." | General/experience |
| 8 | Patricia Diess | May 2024 | 5★ | "The **gel injections** are fabulous. The staff is very pleasant and are very knowledgeable. It has been a real pleasure working with all of them and getting the relief my knees were needing." | **HA injections + knee pain** |

**Semantic Filter Results (≥4 stars + explicit service/condition mention):**
- Reviews #2, #4, #6, #8 → Knee pain / HA injections
- Review #5 → Neuropathy
- Review #6 → Also mentions Anissa Wheeler by name (E-E-A-T signal)

**Administrator Checkpoint C note:** These 8 GBP reviews will be surfaced to Bobbee for selection during Phase 1. All 8 are 5-star. Semantic-relevant subset is #2, #4, #5, #6, #8.

---

## §4 — Redirect Inventory

All existing URLs must be preserved with 301 redirects. No ranking GBP landing page should be moved.

| Old URL | New Core 30 URL (proposed) | Action |
|---------|---------------------------|--------|
| / | / | Keep — homepage |
| /neuropathy | /neuropathy-treatment/peripheral-neuropathy/ | 301 |
| /back-pain | /conditions/back-pain/ | 301 |
| /chronic-pain | /conditions/chronic-pain/ | 301 |
| /joint-pain | /conditions/joint-pain/ | 301 |
| /knee-pain | /conditions/knee-pain/ | 301 |
| /neck-pain | /conditions/neck-pain/ | 301 |
| /sciatica | /conditions/sciatica/ | 301 |
| /regenerative-therapy | /regenerative-medicine/regenerative-therapy/ | 301 |
| /hyaluronic-acid-injections | /regenerative-medicine/hyaluronic-acid-injections/ | 301 |
| /prp-therapy | /regenerative-medicine/prp-therapy/ | 301 |
| /medical-weight-loss | /pain-management/medical-weight-loss/ | 301 |
| /neuromodulation-technique | /neuropathy-treatment/neuromodulation-technique/ | 301 |
| /about-us | /about/ | 301 |
| /contact | /contact/ | 301 |
| /schedule-appointment | /schedule/ | 301 |
| /testimonials | /testimonials/ | 301 |
| /privacy-policy | /privacy-policy/ | 301 |
| /terms-and-conditions | /terms-and-conditions/ | 301 |

> **⚠️ Local Rank Map required before finalizing redirects.** Run DataForSEO or GSC data to confirm which URLs are ranking before moving any URL. If /neuropathy or /back-pain are GBP ranking landing pages, they MUST be preserved as-is or handled with extreme care.

---

## §5 — Services Identified (from Site Audit)

Current services on stlpaincenter.com:
1. Neuropathy Treatment (primary service — also a condition)
2. Hyaluronic Acid Injections (HA)
3. PRP Therapy
4. Regenerative Therapy
5. Neuromodulation Technique
6. Medical Weight Loss

Additional services mentioned in text but without dedicated pages:
- Injection Therapy (mentioned in nav/GBP context)
- Kyphoplasty (mentioned in external directory listing)
- Medication Management (mentioned in external listing)
- Nerve Blocks (mentioned in external listing)
- Physical Therapy (Anissa Wheeler, PT — currently no dedicated page)

> **SEO Architect note:** These additional services will need dedicated pages under the Core 30 structure per the 1:1 GBP service rule.

---

## §6 — Architecture Observations for SEO Architect

1. **No service categories exist** on current site — all pages are flat. Core 30 will add category hubs.
2. **Conditions and services are intermixed** — neuropathy is listed as both. Core 30 separates them into a Conditions dropdown (nav peer of Services).
3. **No provider pages** — Dr. Arconati and Anissa Wheeler need dedicated `/providers/` pages.
4. **No comparison pages** — add 3–5 vs. competitor pages.
5. **Contact page functions as a secondary homepage** — valuable local SEO signals to migrate.
6. **Testimonials page is redundant** — same 8 reviews as homepage. Core 30 will distribute reviews verbatim per-page via schema.
7. **About Us is critically thin** — must be rebuilt with full team bios and credentials.
8. **Medical Weight Loss is an outlier service** but has the best clinical data on the site — keep, expand.
9. **Neuropathy is the #1 keyword target** based on GBP primary category (Pain management physician) + site focus + most unique content depth.

---

## §7 — Migration Audit Status

| Step | Status |
|------|--------|
| Site map (19 URLs) | ✅ Complete |
| Content scraping (17 pages) | ✅ Complete |
| Content grading (A/B/C/F) | ✅ Complete |
| Image grading | ⚠️ Partial — full image audit TBD during Phase 2 |
| Reviews extraction | ✅ Complete (8 GBP reviews, verbatim) |
| Redirect inventory | ✅ Draft complete — pending Local Rank Map confirmation |
| Hand-off to SEO Architect | 🔜 Ready |
