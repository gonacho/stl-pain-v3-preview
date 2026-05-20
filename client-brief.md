# Client Brief — St. Louis Pain Center
**Created:** 2026-05-19
**Issue:** COR-53

---

## Build Metadata

```yaml
build_type: migration
build_classification: local-clinic
gbp_count: 1
language_flags: [en]
feature_flags: []
build_directive: migrate_repurpose_expand
```

> **Build Directive (confirmed 2026-05-19 by Bobbee):** This is a migration AND repurpose AND expansion.
> - **Migrate** — carry forward all ranking URLs with 301 redirects; preserve Grade A content verbatim.
> - **Repurpose** — actively rewrite/improve Grade B and C pages; reposition the practice around Dr. Arconati's authority and the Midwest chronic pain angle. Do not copy existing thin content wholesale.
> - **Expand** — build out a full Core 30 architecture beyond the current 17-page site. Add 2–3 condition pages per core service, comparison pages, and category hub pages that do not currently exist.

---

## Business Information

| Field | Value |
|---|---|
| Practice Name | St. Louis Pain Center |
| Legal Entity | St. Louis Pain Center LLC |
| NPI (Entity) | 1992587968 |
| Address | 4455 Telegraph Rd #250, St. Louis, MO 63129 |
| Phone | (314) 846-2100 |
| Website | https://stlpaincenter.com |
| Domain Status | Same domain (stlpaincenter.com) |
| Hours | Mon–Thu: 8:00 AM – 5:00 PM; Fri–Sun: Closed |

---

## Google Business Profile

| Field | Value |
|---|---|
| GBP Primary Category | Pain control clinic |
| GBP Secondary Categories | Medical clinic, Orthopedic clinic, Weight loss clinic, Sports medicine clinic, Wellness center |

> **Note:** GBP categories updated by Bobbee 2026-05-19. Character-for-character exact values above.

---

## Providers

| Name | Role | Headshots |
|---|---|---|
| Dr. Ron Arconati | Founder / Medical Director | Existing site (reuse) |
| Anissa Wheeler | Physical Therapist | Existing site (reuse) |

> NPI numbers for individual providers: TBD — to be resolved by SEO Architect during Phase 1.

---

## Insurance & Payment

- Medicare accepted
- Major commercial insurance (Blue Cross, Aetna, Cigna, etc.)
- Workers comp: No
- Auto accident / PI: No

---

## Voice & Tone

**Authoritative + Educational** — Position Dr. Arconati as the expert. Educate patients on neuropathy and pain mechanisms. Clinical depth earns trust.

---

## Local Health Signal

**Midwest sedentary lifestyle — neuropathy & chronic pain risk.** Desk-job culture, high obesity rates, and cold winters create elevated chronic pain and peripheral neuropathy prevalence in the St. Louis metro area.

---

## Design Personality

**Bold and modern** — Strong typography, high-contrast visuals, dynamic grid. Commands immediate authority.

---

## Design Concept Selection

**Selected:** Concept 2 — Recovery Momentum *(approved by Bobbee 2026-05-19)*

| Field | Value |
|---|---|
| Approved folder | `/design-concepts/APPROVED/` |
| Primary palette | Warm navy #1B3A5C + warm gold #C8A04A + teal secondary #0E7C9E |
| Display font | Satoshi (Fontshare) |
| Body font | Plus Jakarta Sans (Google Fonts) |
| Hero H1 size | 72px, font-bold, leading-tight |
| Motion signature | Staggered GSAP reveal, magnetic gold CTA, bento cards with gold shadow lift, 1→2→3 journey steps |
| Section transitions | Smooth warm gradient fades (no hard SVG dividers) |
| Card style | Warm white #FBF7EF + warm gold shadow + amber-100 border |
| Button primary | Warm gold gradient + magnetic hover via gsap.quickTo |
| GSAP motion | All via GSAP — no framer-motion, no CSS @keyframes |

> Tech Builder must reference `design-concepts/APPROVED/DESIGN-SPEC.md` for the full component library, motion vocabulary, and anti-pattern rules before writing any Astro/Tailwind code.

---

## Brand Colors

- Extract from existing stlpaincenter.com (migration audit will capture palette)
- No hex codes provided by client — carry forward existing brand colors

---

## Hero Video Asset

| Field | Value |
|---|---|
| Video URL | `https://clinicboom.co/wp-content/uploads/St.-Louis-Pain-Center_video_header.mp4` |
| Usage | Hero section background video (autoplay, muted, loop) |
| Grade | B — reuse as-is |
| Source | Extracted from live site homepage (discovered 2026-05-19) |

> **Directive (confirmed 2026-05-19 by Bobbee):** Repurpose this existing background video as the hero background in the rebuilt site. Do not replace with stock/generated video unless quality is substandard after review. Download and self-host in `/public/video/` as `hero-bg.mp4`.

---

## Special Flags

- Spanish pages: No
- Telehealth: No
- Attorney referral page: No

---

## Existing Site URLs (19 pages mapped — 2026-05-19)

| URL | Title / Description |
|---|---|
| https://stlpaincenter.com/ | Homepage — Pain Management Clinic in St. Louis |
| https://stlpaincenter.com/about-us | About Us |
| https://stlpaincenter.com/contact | Contact / Neuropathy & Pain Treatment in Missouri |
| https://stlpaincenter.com/schedule-appointment | Schedule Appointment |
| https://stlpaincenter.com/testimonials | Testimonials |
| https://stlpaincenter.com/neuropathy | Neuropathy Treatment |
| https://stlpaincenter.com/back-pain | Back Pain |
| https://stlpaincenter.com/chronic-pain | Chronic Pain |
| https://stlpaincenter.com/joint-pain | Joint Pain |
| https://stlpaincenter.com/knee-pain | Knee Pain |
| https://stlpaincenter.com/neck-pain | Neck Pain |
| https://stlpaincenter.com/sciatica | Sciatica |
| https://stlpaincenter.com/regenerative-therapy | Regenerative Therapy |
| https://stlpaincenter.com/hyaluronic-acid-injections | Hyaluronic Acid Injections |
| https://stlpaincenter.com/prp-therapy | PRP Therapy |
| https://stlpaincenter.com/medical-weight-loss | Medical Weight Loss |
| https://stlpaincenter.com/neuromodulation-technique | Neuromodulation Technique |
| https://stlpaincenter.com/privacy-policy | Privacy Policy |
| https://stlpaincenter.com/terms-and-conditions | Terms & Conditions |

---

## Migration Pre-Work Status

- [x] Site map: complete (19 URLs)
- [ ] Page-by-page content grading (A/B/C/F)
- [ ] Image inventory and grading (A/B/C/F)
- [ ] MIGRATION-AUDIT.md aggregation
- [ ] Hand-off to SEO Architect

---

## Intake Q&A Log

| Q | A |
|---|---|
| New build or migration? | Migration |
| Business name + location | St. Louis Pain Center, St. Louis, MO |
| Build classification | Local Clinic |
| GBP Primary Category | Pain control clinic |
| GBP Secondary Categories | Medical clinic, Orthopedic clinic, Weight loss clinic, Sports medicine clinic, Wellness center |
| Local health signal | Midwest sedentary lifestyle — neuropathy & chronic pain risk |
| Voice/tone | Authoritative + Educational |
| Provider list | Dr. Ron Arconati (Founder/MD), Anissa Wheeler (PT) — existing headshots |
| Domain status | Same domain (stlpaincenter.com) |
| Insurance | Medicare + major commercial |
| Special flags | None |
| Design personality | Bold and modern |
| Design concept selection | Concept 2 — Recovery Momentum (approved 2026-05-19) |
| Brand colors | Carry forward from existing site |
