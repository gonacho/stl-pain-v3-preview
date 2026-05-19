# Schema Plan — St. Louis Pain Center

## Build Classification (per §2)
- Type: Local Clinic
- LocalBusiness schema on homepage: ON
- Institutional Anchor Piggybacking: ON
- GBP CID/PlaceID hardcoding: Required — CID 8132065016093573560 APPROVED ✅
- GeoCircle service area: Required (25-mile radius = 40,234 meters)
- MedicalWebPage wrapper for YMYL pages: ON (always for healthcare)
- TherapeuticProcedure for healthcare services: ON
- Semantic review filtering: Required for all review arrays
- dateModified governance: lastEdited frontmatter (NOT auto-bump)
- Reasoning: St. Louis Pain Center is a single-location pain management practice where patients visit a physical location at 4455 Telegraph Rd #250, St. Louis, MO 63129. All schema signals point to Local Clinic classification: one verified GBP listing, one address, walk-in patients, local service area. Full LocalBusiness/MedicalClinic schema, CID/PlaceID hardcoding, institutional anchor piggybacking, and GeoCircle service area are all required.

## Block Inventory (per page type)

### Homepage
- Block A: MedicalOrganization (practice-level entity)
- Block B: MedicalClinic (LocalBusiness with geo-enrichment + institutional anchor + homepage reviews when approved)
- Block E: MedicalWebPage
- Block F: WebSite (with SearchAction)
- Block G: BreadcrumbList (position 1 only)
- Block H: FAQPage (if FAQs present)

> Block C (Person — Dr. Ron Arconati) removed per Gate 1 decision (2026-05-19). No providers listed at this stage.

### Category Pages (/pain-control/, /orthopedic/)
- Block D-category: OfferCatalog (lists child services per hub: 6 for pain-control, 3 for orthopedic)
- Block E: MedicalWebPage
- Block G: BreadcrumbList (2 levels: Home > Pain Management)
- Block H: FAQPage

### Service Pages (11 pages)
- Block D-service: TherapeuticProcedure (or MedicalProcedure for Kyphoplasty) with:
  - semantic-filtered reviews (administrator-approved, per-service binding)
  - indication → MedicalCondition @id refs (bidirectional graph closure)
- Block E: MedicalWebPage (aspect=Treatment)
- Block G: BreadcrumbList (3 levels: Home > Category > Service)
- Block H: FAQPage
- Block J: VideoObject (if video exists on page)

### Condition Pages (13 pages)
- Block I: MedicalCondition with:
  - possibleTreatment → TherapeuticProcedure @id refs (bidirectional graph closure)
  - cause, symptom, signOrSymptom arrays matching visible H3 sections
- Block E: MedicalWebPage (aspect=Cause/Symptom)
- Block G: BreadcrumbList (2 levels: Home > Conditions > [Condition])
- Block H: FAQPage

> **Gate 1 Decision (2026-05-19):** Provider pages (Block K) removed. No provider pages in this build phase.

### Comparison Pages (5 pages)
- Block D-service: References to both compared TherapeuticProcedure @ids
- Block E: MedicalWebPage
- Block G: BreadcrumbList (2 levels: Home > Compare > [Title])
- Block H: FAQPage

### Blog Posts (Phase 2)
- Block L: MedicalScholarlyArticle (or Article for non-clinical posts)
- Block E: MedicalWebPage
- Block G: BreadcrumbList

### Standard Pages
- Contact: Block B-reference (LocalBusiness contact info) + Block E (plain WebPage) + Block G
- About: Block E (MedicalWebPage) + Block G
- New Patients: Block E (MedicalWebPage) + Block G
- Insurance: Block E (MedicalWebPage) + Block G
- HIPAA Privacy: Block E (plain WebPage) + Block G
- Conditions Hub: Block E (MedicalWebPage) + Block G
> Providers Hub removed per Gate 1 decision (2026-05-19).

## Strategic Type Choices
- Organization @type: MedicalOrganization
- LocalBusiness @type: ["MedicalClinic", "LocalBusiness"]
- medicalSpecialty: [PainMedicine] — with sameAs: https://en.wikipedia.org/wiki/Pain_management
- Service @type: TherapeuticProcedure (non-surgical — default for 10 of 11 services) / MedicalProcedure (Kyphoplasty only — minimally invasive surgical)
- WebPage wrapper: MedicalWebPage for all YMYL pages; WebPage for Contact, HIPAA Privacy, Terms only

## Cross-References to ENTITY-VARIABLES.md
- GBP Locks: see §GBP Locks (Checkpoint A — ✅ APPROVED 2026-05-19)
- Institutional Anchors: see §Institutional Anchor Entities (Checkpoint B — ✅ APPROVED: Washington University School of Medicine)
- Semantic Reviews: see §Review Data (Checkpoint C — ⏳ PENDING: Q5 awaiting Bobbee approval)
- NAICS: see §Business Entity > NAICS Code (621111 — from §6 lookup table, no administrator approval needed)

## Tech Builder Notes

### Schema Component Architecture
- Render every JSON-LD block via individual `.astro` components in `src/components/schemas/`:
  - `OrganizationSchema.astro` (Block A)
  - `LocalBusinessSchema.astro` (Block B)
  - `TherapeuticProcedureSchema.astro` (Block D-service, non-surgical)
  > PersonSchema.astro (Block C / Block K) omitted — no providers listed at this stage.
  - `MedicalProcedureSchema.astro` (Block D-service, Kyphoplasty)
  - `OfferCatalogSchema.astro` (Block D-category)
  - `MedicalWebPageSchema.astro` (Block E)
  - `WebSiteSchema.astro` (Block F)
  - `BreadcrumbSchema.astro` (Block G)
  - `FAQPageSchema.astro` (Block H)
  - `MedicalConditionSchema.astro` (Block I)
  - `VideoObjectSchema.astro` (Block J)
  - `ArticleSchema.astro` (Block L)
- NEVER centralize in `src/utils/schema.ts`

### Security & Encoding
- Use `set:html={JSON.stringify(schema)}` for every JSON-LD `<script>` block (XSS prevention)

### @id Convention
- All `@id` values MUST be absolute URLs: `https://stlpaincenter.com/#fragment`
- NEVER bare `#fragment`
- Examples:
  - Organization: `https://stlpaincenter.com/#organization`
  - LocalBusiness: `https://stlpaincenter.com/#localbusiness`
  - Provider: `https://stlpaincenter.com/#person-ron-arconati`
  - Service: `https://stlpaincenter.com/#service-nerve-blocks`
  - Condition: `https://stlpaincenter.com/#condition-neuropathy`
  - WebSite: `https://stlpaincenter.com/#website`

### dateModified Governance
- `dateModified` sourced from per-page `lastEdited` frontmatter
- NEVER `new Date()` at build time
- Set `lastEdited` = `publishDate` on first publish
- Bump `lastEdited` ONLY on real content edits

### GBP Lock Injection (after administrator approval)
- CID URL → inject into Organization.sameAs AND LocalBusiness.sameAs arrays
- PlaceID URL → inject into LocalBusiness.hasMap

### Institutional Anchor Injection (after administrator approval)
- Approved anchors → inject into LocalBusiness.areaServed.containsPlace (as Place entities with sameAs to Wikipedia)
- Approved anchors → inject into MedicalWebPage.mentions (on service pages near the anchor's specialty)

### Review Injection
- Per-service reviews → on TherapeuticProcedure @type (NOT LocalBusiness) — star snippets only render on Service pages
- Homepage reviews → on LocalBusiness @type
- Every review: author, datePublished, reviewRating, reviewBody — all verbatim from GBP

### Bidirectional Graph Closure
- TherapeuticProcedure.indication → MedicalCondition @ids (e.g., Nerve Blocks indicates Back Pain, Neck Pain, Sciatica, Chronic Pain)
- MedicalCondition.possibleTreatment → TherapeuticProcedure @ids (e.g., Back Pain possibleTreatment Nerve Blocks, Injection Therapy, Kyphoplasty, Physical Therapy)
- Every link must be reciprocal — no orphan references

## SEO Writer Notes

### Institutional Anchor Copy Rules
- Every administrator-approved Institutional Anchor must appear in visible body content on relevant pages
- Use neutral proximity language ONLY:
  - "Located near [Anchor Name]"
  - "Minutes from [Anchor Name]"
  - "Serving the same community as [Anchor Name]"
  - "Conveniently located in the [Anchor Name] medical corridor"
- NEVER imply affiliation, partnership, credential, or endorsement
- NEVER say "affiliated with", "partnered with", "recommended by", "in collaboration with"

### Semantic Review Copy Rules
- Every administrator-approved Semantic Review must appear verbatim in the testimonials section of the page bound to its service/condition
- ZERO paraphrasing — text must be character-for-character identical to the GBP review
- Include reviewer name (as displayed on GBP) and star rating

### FAQ Schema Match
- FAQ Q&A pairs on the page MUST verbatim-match the FAQPage schema
- If visible copy says the question one way, the schema must say it identically

### MedicalCondition Page Structure
- Causes/Symptoms/Treatments visible H3 sections MUST match the schema arrays
- e.g., if schema has `cause: ["Herniated disc", "Spinal stenosis"]`, the page must have an H3 "Causes" section listing those exact items

### dateModified Frontmatter
- `lastEdited` frontmatter set to actual edit date
- Equals `publishDate` at first publish
- Bumped ONLY on real content edits — not cosmetic/formatting changes
