# Core 30 Architecture Plan — St. Louis Pain Center

## Build Type
- build_type: migration
- gbp_count: 1
- Flags: none (no Spanish, no telehealth, no attorney referral)

## GBP Entity Summary
- GBP 1: St. Louis Pain Center — St. Louis, MO
  - Primary Category: Pain management physician
  - Secondary Categories: Neuropathy treatment center, Physical therapist
  - Total GBP Services: 11
  - Phone: (314) 846-2100

## Site Hierarchy

### Homepage Hub (= GBP Landing Page 1)
- URL: /
- H1: Pain Management Physician in St. Louis
- H2s:
  - Neuropathy Treatment Center in St. Louis, MO
  - Physical Therapist in St. Louis, MO
  - Pain Management Services in St. Louis, MO
- Links to: ALL category pages + ALL service pages (flat-linked in server-rendered HTML)

### Category Pages

#### Category 1: Pain Management (primary category hub — 8 services → hub page required)
- URL: /pain-management/
- H1: Pain Management in St. Louis, MO
- Links DOWN to:
  - /pain-management/nerve-blocks/
  - /pain-management/injection-therapy/
  - /pain-management/kyphoplasty/
  - /pain-management/medication-management/
  - /pain-management/medical-weight-loss/
  - /pain-management/hyaluronic-acid-injections/
  - /pain-management/prp-therapy/
  - /pain-management/regenerative-therapy/
- Links UP to: Homepage (contextual anchor text)

#### Category 2: Neuropathy Treatment Center (secondary — 2 services, <3 → no hub page, logical grouping only)
- URL nesting only: /neuropathy-treatment/
- No dedicated hub page — services linked directly from homepage and footer
- Child services:
  - /neuropathy-treatment/peripheral-neuropathy/
  - /neuropathy-treatment/neuromodulation-technique/

#### Category 3: Physical Therapist (secondary — 1 service → no hub page, direct service page)
- URL: /physical-therapy/ (service page IS the category landing)
- No separate hub — single service at category root

### Service Pages

#### Pain Management Services (8 pages)

1. **Nerve Blocks**
   - URL: /pain-management/nerve-blocks/
   - H1: Nerve Blocks in St. Louis, MO
   - Parent Category: pain-management
   - Conditions linking up: Back Pain, Neck Pain, Sciatica, Chronic Pain
   - Providers: Dr. Ron Arconati
   - Schema: TherapeuticProcedure with indication → MedicalCondition @id refs

2. **Injection Therapy**
   - URL: /pain-management/injection-therapy/
   - H1: Injection Therapy in St. Louis, MO
   - Parent Category: pain-management
   - Conditions linking up: Back Pain, Shoulder Pain, Neck Pain
   - Providers: Dr. Ron Arconati
   - Schema: TherapeuticProcedure

3. **Kyphoplasty**
   - URL: /pain-management/kyphoplasty/
   - H1: Kyphoplasty in St. Louis, MO
   - Parent Category: pain-management
   - Conditions linking up: Back Pain, Sciatica, Chronic Pain
   - Providers: Dr. Ron Arconati
   - Schema: MedicalProcedure (minimally invasive surgical)

4. **Medication Management**
   - URL: /pain-management/medication-management/
   - H1: Medication Management in St. Louis, MO
   - Parent Category: pain-management
   - Conditions linking up: Chronic Pain, Fibromyalgia, Diabetic Neuropathy
   - Providers: Dr. Ron Arconati
   - Schema: TherapeuticProcedure

5. **Medical Weight Loss**
   - URL: /pain-management/medical-weight-loss/
   - H1: Medical Weight Loss in St. Louis, MO
   - Parent Category: pain-management
   - Conditions linking up: Arthritis/Osteoarthritis, Joint Pain, Chronic Pain
   - Providers: Dr. Ron Arconati
   - Schema: TherapeuticProcedure

6. **Hyaluronic Acid Injections**
   - URL: /pain-management/hyaluronic-acid-injections/
   - H1: Hyaluronic Acid Injections in St. Louis, MO
   - Parent Category: pain-management
   - Conditions linking up: Knee Pain, Joint Pain, Arthritis/Osteoarthritis
   - Providers: Dr. Ron Arconati
   - Schema: TherapeuticProcedure

7. **PRP Therapy**
   - URL: /pain-management/prp-therapy/
   - H1: PRP Therapy in St. Louis, MO
   - Parent Category: pain-management
   - Conditions linking up: Knee Pain, Joint Pain, Shoulder Pain
   - Providers: Dr. Ron Arconati
   - Schema: TherapeuticProcedure

8. **Regenerative Therapy**
   - URL: /pain-management/regenerative-therapy/
   - H1: Regenerative Therapy in St. Louis, MO
   - Parent Category: pain-management
   - Conditions linking up: Joint Pain, Arthritis/Osteoarthritis, Knee Pain
   - Providers: Dr. Ron Arconati
   - Schema: TherapeuticProcedure

#### Neuropathy Treatment Services (2 pages)

9. **Neuropathy Treatment (Peripheral Neuropathy)**
   - URL: /neuropathy-treatment/peripheral-neuropathy/
   - H1: Neuropathy Treatment in St. Louis, MO
   - Parent Category: neuropathy-treatment (logical grouping, no hub page)
   - Conditions linking up: Neuropathy, Diabetic Neuropathy, Chronic Pain
   - Providers: Dr. Ron Arconati
   - Schema: TherapeuticProcedure

10. **Neuromodulation Technique**
    - URL: /neuropathy-treatment/neuromodulation-technique/
    - H1: Neuromodulation Technique in St. Louis, MO
    - Parent Category: neuropathy-treatment (logical grouping)
    - Conditions linking up: Neuropathy, Chronic Pain, Fibromyalgia, Vertigo/Vestibular Disorders
    - Providers: Dr. Ron Arconati
    - Schema: TherapeuticProcedure

#### Physical Therapy (1 page)

11. **Physical Therapy**
    - URL: /physical-therapy/
    - H1: Physical Therapy in St. Louis, MO
    - Parent Category: physical-therapy (single service = category landing)
    - Conditions linking up: Back Pain, Neck Pain, Knee Pain, Shoulder Pain, Sciatica, Fibromyalgia, Vertigo/Vestibular Disorders
    - Providers: Anissa Wheeler
    - Schema: TherapeuticProcedure

### Condition Pages (12 pages)

1. **Neuropathy (Peripheral Neuropathy)**
   - URL: /conditions/neuropathy/
   - Treatments (link up to services): Neuropathy Treatment, Neuromodulation Technique
   - Schema: MedicalCondition with possibleTreatment → TherapeuticProcedure @id refs

2. **Diabetic Neuropathy**
   - URL: /conditions/diabetic-neuropathy/
   - Treatments: Neuropathy Treatment, Medication Management, Neuromodulation Technique

3. **Knee Pain**
   - URL: /conditions/knee-pain/
   - Treatments: Hyaluronic Acid Injections, PRP Therapy, Regenerative Therapy, Physical Therapy

4. **Joint Pain**
   - URL: /conditions/joint-pain/
   - Treatments: Hyaluronic Acid Injections, PRP Therapy, Regenerative Therapy, Medical Weight Loss

5. **Back Pain**
   - URL: /conditions/back-pain/
   - Treatments: Nerve Blocks, Injection Therapy, Kyphoplasty, Physical Therapy

6. **Neck Pain**
   - URL: /conditions/neck-pain/
   - Treatments: Nerve Blocks, Injection Therapy, Physical Therapy

7. **Sciatica**
   - URL: /conditions/sciatica/
   - Treatments: Nerve Blocks, Kyphoplasty, Physical Therapy

8. **Chronic Pain**
   - URL: /conditions/chronic-pain/
   - Treatments: Neuropathy Treatment, Neuromodulation Technique, Kyphoplasty, Medication Management, Medical Weight Loss

9. **Shoulder Pain**
   - URL: /conditions/shoulder-pain/
   - Treatments: PRP Therapy, Injection Therapy, Physical Therapy

10. **Arthritis / Osteoarthritis**
    - URL: /conditions/arthritis-osteoarthritis/
    - Treatments: Hyaluronic Acid Injections, Regenerative Therapy, Medical Weight Loss

11. **Fibromyalgia**
    - URL: /conditions/fibromyalgia/
    - Treatments: Neuromodulation Technique, Medication Management, Physical Therapy

12. **Vertigo / Vestibular Disorders**
    - URL: /conditions/vertigo-vestibular-disorders/
    - Treatments: Neuromodulation Technique, Physical Therapy

### Provider Pages (2 pages)

1. **Dr. Ron Arconati, DC**
   - URL: /providers/ron-arconati/
   - Specialties: Pain Management, Neuropathy Treatment, Regenerative Medicine
   - Conditions treated: Neuropathy, Chronic Pain, Knee Pain, Back Pain, Neck Pain, Sciatica, Joint Pain, Arthritis
   - Services performed: All 10 non-PT services
   - Reviews mentioning provider: none by name in current pool
   - Schema: ProviderPerson (Block K) wrapped in MedicalWebPage

2. **Anissa Wheeler**
   - URL: /providers/anissa-wheeler/
   - Specialties: Physical Therapy, Pain Rehabilitation
   - Conditions treated: Back Pain, Neck Pain, Knee Pain, Shoulder Pain, Sciatica, Fibromyalgia, Vertigo
   - Services performed: Physical Therapy
   - Reviews mentioning provider: Review #6 (Lester Brannam) mentions Anissa Wheeler by name
   - Schema: ProviderPerson (Block K) wrapped in MedicalWebPage

> **⚠️ Provider Credential Discrepancy:** Client brief lists Anissa Wheeler as "Physical Therapist (PT)" but web research shows stlpaincenter.com lists her as "N.P." (Nurse Practitioner). Client brief lists Dr. Ron Arconati as "Founder/MD" — NPI registry confirms him as DC (Doctor of Chiropractic). Project Director must confirm credentials before content is written.

### Comparison Pages (5 pages)

1. **PRP Therapy vs. Hyaluronic Acid Injections**
   - URL: /compare/prp-therapy-vs-hyaluronic-acid-injections/
   - Primary Keyword: prp vs hyaluronic acid injections
   - Linking up to: /pain-management/prp-therapy/, /pain-management/hyaluronic-acid-injections/
   - Conclusion framing: Both effective — PRP for tissue regeneration, HA for cushioning/lubrication; practice offers both tailored to patient needs

2. **Regenerative Therapy vs. Cortisone Injections**
   - URL: /compare/regenerative-therapy-vs-cortisone-injections/
   - Primary Keyword: regenerative therapy vs cortisone shots
   - Linking up to: /pain-management/regenerative-therapy/, /pain-management/injection-therapy/
   - Conclusion framing: Regenerative approaches address root cause vs. symptom masking; practice favors regenerative-first

3. **Nerve Blocks vs. Medication Management**
   - URL: /compare/nerve-blocks-vs-medication-management/
   - Primary Keyword: nerve block vs pain medication
   - Linking up to: /pain-management/nerve-blocks/, /pain-management/medication-management/
   - Conclusion framing: Targeted intervention vs. systemic medication; practice uses multimodal approach

4. **Physical Therapy vs. Surgery for Back Pain**
   - URL: /compare/physical-therapy-vs-surgery-back-pain/
   - Primary Keyword: physical therapy vs surgery back pain
   - Linking up to: /physical-therapy/, /pain-management/kyphoplasty/
   - Conclusion framing: Conservative-first approach; surgery only when necessary

5. **Neuromodulation vs. Traditional Neuropathy Treatment**
   - URL: /compare/neuromodulation-vs-traditional-neuropathy-treatment/
   - Primary Keyword: neuromodulation technique vs neuropathy medication
   - Linking up to: /neuropathy-treatment/neuromodulation-technique/, /neuropathy-treatment/peripheral-neuropathy/
   - Conclusion framing: Neuromodulation as advanced drug-free option; practice specializes in both

### Standard Pages

- New Patient Page: /new-patients/
- Insurance Page: /insurance/
- HIPAA Privacy: /hipaa-privacy/
- Providers Hub: /providers/
- Conditions Hub: /conditions/
- About: /about/
- Contact: /contact/

### Location Pages (Phase 2 — Geo-Expansion Only)
Build AFTER rank map shows 30-40% green coverage.
- URL pattern: /locations/[city-slug]/
- Service area cities: Oakville, Mehlville, Lemay, Affton, Concord, Arnold, Fenton, Crestwood, Sunset Hills, Webster Groves, Kirkwood, South City St. Louis

### Navigation Design

```
Main Nav:
Logo | [Services ▾] | [Conditions ▾] | About | Providers | Contact | [Book Appointment]
```

**Services Mega Menu:**

| Pain management physician | Neuropathy treatment center | Physical therapist |
|---|---|---|
| Nerve Blocks | Neuropathy Treatment | Physical Therapy |
| Injection Therapy | Neuromodulation Technique | |
| Kyphoplasty | | |
| Medication Management | | |
| Medical Weight Loss | | |
| Hyaluronic Acid Injections | | |
| PRP Therapy | | |
| Regenerative Therapy | | |
| [View All Services →] | | |

**Conditions Dropdown (separate primary nav peer):**

- Neuropathy
- Diabetic Neuropathy
- Knee Pain
- Joint Pain
- Back Pain
- Neck Pain
- Sciatica
- Chronic Pain
- Shoulder Pain
- Arthritis / Osteoarthritis
- Fibromyalgia
- Vertigo / Vestibular Disorders
- [View All Conditions →]

**Providers:** Simple link to /providers/ hub

**CTA Button:** "Book Appointment" — right-aligned, always visible

### Homepage Flat-Link Inventory

Every service page URL below MUST appear as `<a href>` in homepage server-rendered HTML:

1. /pain-management/nerve-blocks/
2. /pain-management/injection-therapy/
3. /pain-management/kyphoplasty/
4. /pain-management/medication-management/
5. /pain-management/medical-weight-loss/
6. /pain-management/hyaluronic-acid-injections/
7. /pain-management/prp-therapy/
8. /pain-management/regenerative-therapy/
9. /neuropathy-treatment/peripheral-neuropathy/
10. /neuropathy-treatment/neuromodulation-technique/
11. /physical-therapy/

Plus category hub:
12. /pain-management/

Plus standard pages:
13. /conditions/
14. /providers/
15. /about/
16. /contact/
17. /new-patients/
18. /insurance/

## Condition-to-Service Coverage Matrix

| Service Page | Condition Pages Linking To It | Count | Coverage |
|---|---|---|---|
| Neuropathy Treatment | Neuropathy, Diabetic Neuropathy, Chronic Pain | 3 | ✅ |
| Neuromodulation Technique | Neuropathy, Chronic Pain, Fibromyalgia, Vertigo/Vestibular | 4 | ✅ |
| Physical Therapy | Back Pain, Neck Pain, Knee Pain, Shoulder Pain, Sciatica, Fibromyalgia, Vertigo/Vestibular | 7 | ✅ |
| Hyaluronic Acid Injections | Knee Pain, Joint Pain, Arthritis/Osteoarthritis | 3 | ✅ |
| PRP Therapy | Knee Pain, Joint Pain, Shoulder Pain | 3 | ✅ |
| Regenerative Therapy | Joint Pain, Arthritis/Osteoarthritis, Knee Pain | 3 | ✅ |
| Nerve Blocks | Back Pain, Neck Pain, Sciatica, Chronic Pain | 4 | ✅ |
| Injection Therapy | Back Pain, Shoulder Pain, Neck Pain | 3 | ✅ |
| Kyphoplasty | Back Pain, Sciatica, Chronic Pain | 3 | ✅ |
| Medication Management | Chronic Pain, Fibromyalgia, Diabetic Neuropathy | 3 | ✅ |
| Medical Weight Loss | Arthritis/Osteoarthritis, Joint Pain, Chronic Pain | 3 | ✅ |

All 11 services have ≥3 condition pages. Coverage complete.

## Provider-to-Service Coverage Matrix

| Provider | Services They Perform | Conditions They Treat |
|---|---|---|
| Dr. Ron Arconati, DC | Neuropathy Treatment, Neuromodulation Technique, Nerve Blocks, Injection Therapy, Kyphoplasty, Medication Management, Medical Weight Loss, HA Injections, PRP Therapy, Regenerative Therapy | Neuropathy, Diabetic Neuropathy, Chronic Pain, Back Pain, Neck Pain, Sciatica, Knee Pain, Joint Pain, Shoulder Pain, Arthritis, Fibromyalgia |
| Anissa Wheeler | Physical Therapy | Back Pain, Neck Pain, Knee Pain, Shoulder Pain, Sciatica, Fibromyalgia, Vertigo/Vestibular |

## Comparison Page Opportunity Matrix

| Keyword | Est. Volume | Option A | Option B | Service Page Target |
|---|---|---|---|---|
| prp vs hyaluronic acid injections | TBD | PRP Therapy | HA Injections | /pain-management/prp-therapy/, /pain-management/hyaluronic-acid-injections/ |
| regenerative therapy vs cortisone | TBD | Regenerative Therapy | Cortisone (external) | /pain-management/regenerative-therapy/ |
| nerve block vs pain medication | TBD | Nerve Blocks | Medication Management | /pain-management/nerve-blocks/, /pain-management/medication-management/ |
| physical therapy vs surgery back pain | TBD | Physical Therapy | Surgery (external) | /physical-therapy/, /pain-management/kyphoplasty/ |
| neuromodulation vs neuropathy medication | TBD | Neuromodulation | Traditional Treatment | /neuropathy-treatment/neuromodulation-technique/ |

> **Note:** Search volumes TBD — DataForSEO keyword research pending. Volumes to be added to RESEARCH.md.

## Internal Linking Map

- Service pages → link UP to parent category (contextual in-body anchor text)
- Category page (/pain-management/) → link UP to homepage (contextual in-body)
- Category page → link DOWN to all 8 child services
- Condition pages → link UP to all treating service pages (never down)
- Provider pages → link to services they perform (downward) + services link to providers (upward)
- Comparison pages → link UP to both compared service pages
- Blog posts (Phase 2) → link UP to target service page
- Homepage → flat-links to ALL 11 services + category hub + providers hub + conditions hub
- Footer mirrors full Core 30 hierarchy

## Anchor Text Ratios
- Branded/generic: 60% ("our pain management team", "learn more", "St. Louis Pain Center")
- Partial match: 30% ("neuropathy treatment options", "knee pain relief", "pain management services")
- Exact match: 10% (sparingly — "nerve blocks in St. Louis")

## Redirect Map (Migration — 301s)

| Old URL | New Core 30 URL | Notes |
|---|---|---|
| / | / | Keep — homepage |
| /neuropathy | /neuropathy-treatment/peripheral-neuropathy/ | 301 — #1 target keyword |
| /back-pain | /conditions/back-pain/ | 301 |
| /chronic-pain | /conditions/chronic-pain/ | 301 |
| /joint-pain | /conditions/joint-pain/ | 301 |
| /knee-pain | /conditions/knee-pain/ | 301 |
| /neck-pain | /conditions/neck-pain/ | 301 |
| /sciatica | /conditions/sciatica/ | 301 |
| /regenerative-therapy | /pain-management/regenerative-therapy/ | 301 |
| /hyaluronic-acid-injections | /pain-management/hyaluronic-acid-injections/ | 301 |
| /prp-therapy | /pain-management/prp-therapy/ | 301 |
| /medical-weight-loss | /pain-management/medical-weight-loss/ | 301 |
| /neuromodulation-technique | /neuropathy-treatment/neuromodulation-technique/ | 301 |
| /about-us | /about/ | 301 |
| /contact | /contact/ | 301 |
| /schedule-appointment | /new-patients/ | 301 (or /contact/ — confirm with PD) |
| /testimonials | / | 301 to homepage (reviews distributed per-page in Core 30) |
| /privacy-policy | /hipaa-privacy/ | 301 |
| /terms-and-conditions | /terms-and-conditions/ | Keep same |

> **⚠️ Ranking URL Warning:** If /neuropathy is currently ranking in the local pack or organic SERPs, the redirect to /neuropathy-treatment/peripheral-neuropathy/ must be handled with extreme care. Run Local Rank Map via DataForSEO before finalizing.

## GBP Post Cadence — 90-Day Topics

| Week | Topic | Target Service Page URL |
|---|---|---|
| 1 | Neuropathy awareness: symptoms you shouldn't ignore | /neuropathy-treatment/peripheral-neuropathy/ |
| 2 | Knee pain relief without surgery | /conditions/knee-pain/ |
| 3 | How PRP therapy accelerates healing | /pain-management/prp-therapy/ |
| 4 | Back pain tips for desk workers | /conditions/back-pain/ |
| 5 | Benefits of hyaluronic acid injections for joint pain | /pain-management/hyaluronic-acid-injections/ |
| 6 | Sciatica: causes and when to seek treatment | /conditions/sciatica/ |
| 7 | Physical therapy for lasting pain relief | /physical-therapy/ |
| 8 | Managing diabetic neuropathy effectively | /conditions/diabetic-neuropathy/ |
| 9 | Regenerative therapy: your body's own healing power | /pain-management/regenerative-therapy/ |
| 10 | Neck pain: when to see a pain specialist | /conditions/neck-pain/ |
| 11 | Medical weight loss and joint health connection | /pain-management/medical-weight-loss/ |
| 12 | Nerve blocks: targeted pain relief explained | /pain-management/nerve-blocks/ |

## Page Count Summary

| Page Type | Count |
|---|---|
| Homepage | 1 |
| Category Hub Pages | 1 |
| Service Pages | 11 |
| Condition Pages | 12 |
| Provider Pages | 2 |
| Comparison Pages | 5 |
| Standard Pages (About, Contact, New Patients, Insurance, HIPAA, Providers Hub, Conditions Hub) | 7 |
| **TOTAL** | **39** |
