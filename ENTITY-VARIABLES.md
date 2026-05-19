# Entity Variables — St. Louis Pain Center

## Business Entity
- Legal Name: St. Louis Pain Center LLC
- Entity NPI: 1992587968
- NAICS Code: 621111 (Pain Management / Sports Medicine — per §6 lookup table)
- LocalBusiness Subtype: MedicalClinic (most specific for multi-specialty pain clinic)
- Service Subtype: TherapeuticProcedure (non-surgical default); MedicalProcedure for Kyphoplasty only
- medicalSpecialty: [PainMedicine] — with sameAs: https://en.wikipedia.org/wiki/Pain_management
- Primary Geo Coordinates: 38.510, -90.293 (approximate — verify via Google Maps)
- Service Radius: 25 miles → 40,234 meters (for ServiceArea GeoCircle schema)
- Telephone: +13148462100
- Hours: Mon–Thu 08:00–17:00, Fri–Sun Closed

## GBP Locks (Local Clinic — ADMINISTRATOR APPROVAL REQUIRED)

### Location 1 — St. Louis (Checkpoint A)
- CID: **PENDING** — web search could not extract; must be resolved from Google Maps URL `?cid=` parameter or third-party CID extractor tool
- CID URL (verified): PENDING — https://www.google.com/maps?cid=[PENDING]
- PlaceID: **PENDING** — must be extracted from Google Place ID Finder or Maps `data=` parameter
- hasMap URL (verified): PENDING — https://www.google.com/maps/search/?api=1&query=St.+Louis+Pain+Center&query_place_id=[PENDING]
- Administrator approved: PENDING

> **⚠️ Checkpoint A — CID + PlaceID:** These values could not be extracted via web search. The administrator must use Google's Place ID Finder tool or extract from the Maps URL for "St. Louis Pain Center, 4455 Telegraph Rd #250, St. Louis, MO 63129". Both values require explicit approval before schema injection.

## GBP Locations

### Location 1 — St. Louis
- Address: 4455 Telegraph Rd #250, St. Louis, MO 63129
- Phone: +13148462100
- Geo: 38.510, -90.293 (approximate — verify)
- GBP URL (share): PENDING — extract from Google Maps share link
- Landmarks (3, tier-2):
  - Jefferson Barracks Military Post — @type: TouristAttraction — Wikipedia: https://en.wikipedia.org/wiki/Jefferson_Barracks_Military_Post
  - Laumeier Sculpture Park — @type: Museum — Wikipedia: https://en.wikipedia.org/wiki/Laumeier_Sculpture_Park
  - Ulysses S. Grant National Historic Site — @type: TouristAttraction — Wikipedia: https://en.wikipedia.org/wiki/Ulysses_S._Grant_National_Historic_Site
- Local Event: Fair Saint Louis — Wikipedia: https://en.wikipedia.org/wiki/Fair_Saint_Louis — Annual timing: July 4th weekend
- City Wikipedia: https://en.wikipedia.org/wiki/St._Louis

## Institutional Anchor Entities (Checkpoint B — ADMINISTRATOR APPROVAL REQUIRED)

### Location 1 — St. Louis

**Candidates (3–5 for administrator selection of 1–3):**

1. **Barnes-Jewish Hospital** — @type: Hospital — Wikipedia: https://en.wikipedia.org/wiki/Barnes-Jewish_Hospital
   - Rationale: Largest hospital in Missouri. Teaching hospital for Washington University School of Medicine. 1,400 beds. Massive KG entity weight. Located ~12 mi from practice. NOT a competitor (hospital vs. outpatient pain clinic).
   - Administrator approved: PENDING

2. **SSM Health** — @type: MedicalOrganization — Wikipedia: https://en.wikipedia.org/wiki/SSM_Health
   - Rationale: Major Catholic health system with regional presence across Missouri/Illinois. 11,000+ providers. Strong institutional entity. NOT a competitor (health system vs. specialty pain clinic).
   - Administrator approved: PENDING

3. **Mercy Hospital St. Louis** — @type: Hospital — Wikipedia: https://en.wikipedia.org/wiki/Mercy_Hospital_St._Louis
   - Rationale: 979-bed teaching hospital in Creve Coeur. Major regional healthcare institution with deep KG footprint. NOT a competitor.
   - Administrator approved: PENDING

4. **Saint Louis University Hospital** — @type: Hospital — Wikipedia: https://en.wikipedia.org/wiki/Saint_Louis_University_Hospital
   - Rationale: 356-bed academic medical center and Level 1 Trauma Center. Affiliated with SLU School of Medicine. Strong institutional entity. NOT a competitor.
   - Administrator approved: PENDING

5. **Washington University School of Medicine** — @type: CollegeOrUniversity — Wikipedia: https://en.wikipedia.org/wiki/Washington_University_School_of_Medicine
   - Rationale: Top-10 US medical school. Highest entity weight of any medical institution in St. Louis. NOT a competitor (academic institution vs. outpatient clinic).
   - Administrator approved: PENDING

> **⚠️ Checkpoint B — Institutional Anchors:** Administrator must select 1–3 approved anchors from the 5 candidates above. All have Wikipedia entries (Green Entity test passed). None are direct competitors. All are geographically within the service area.

## Provider Entities

### Provider: Dr. Ron Arconati, DC
- @id: https://stlpaincenter.com/#person-ron-arconati
- Title/Credentials: Doctor of Chiropractic (DC), Founder / Medical Director
- NPI: 1295821783 (confirmed via NPI registry — type: Chiropractor)
- LinkedIn URL: PENDING — to be confirmed
- Provider Page URL: /providers/ron-arconati/
- medicalSpecialty: PainMedicine (with sameAs to Wikipedia)
- knowsAbout Topics:
  - Pain management — Wikipedia: https://en.wikipedia.org/wiki/Pain_management
  - Peripheral neuropathy — Wikipedia: https://en.wikipedia.org/wiki/Peripheral_neuropathy
  - Regenerative medicine — Wikipedia: https://en.wikipedia.org/wiki/Regenerative_medicine
- Professional Memberships: PENDING — to be confirmed by client
- Services performed: /pain-control/nerve-blocks/, /pain-control/injection-therapy/, /pain-control/kyphoplasty/, /pain-control/medication-management/, /weight-loss/, /orthopedic/hyaluronic-acid-injections/, /orthopedic/prp-therapy/, /orthopedic/regenerative-therapy/, /pain-control/neuropathy-treatment/, /pain-control/neuromodulation-technique/
- Has client-supplied headshot: yes (existing site — Grade B, needs EDIT-1)

> **⚠️ Credential Note:** Client brief states "Founder/MD" but NPI registry confirms DC (Doctor of Chiropractic). Website also references chiropractic background (drronchiro.com domain found). Project Director must confirm correct credentials for content and schema.

### Provider: Anissa Wheeler
- @id: https://stlpaincenter.com/#person-anissa-wheeler
- Title/Credentials: PENDING CONFIRMATION — client brief says "Physical Therapist (PT)" but stlpaincenter.com may list as "N.P." (Nurse Practitioner)
- NPI: PENDING — not confirmed via search
- LinkedIn URL: PENDING — to be confirmed (a LinkedIn result showed "Anissa Wheeler, MSN, APRN, FNP-BC" at Mercy — may be different person)
- Provider Page URL: /providers/anissa-wheeler/
- medicalSpecialty: PhysicalTherapy (pending credential confirmation)
- knowsAbout Topics:
  - Physical therapy — Wikipedia: https://en.wikipedia.org/wiki/Physical_therapy
  - Pain management — Wikipedia: https://en.wikipedia.org/wiki/Pain_management
  - Physical medicine and rehabilitation — Wikipedia: https://en.wikipedia.org/wiki/Physical_medicine_and_rehabilitation
- Professional Memberships: PENDING
- Services performed: /sports-medicine/
- Has client-supplied headshot: yes (existing site — Grade B, needs EDIT-1)

> **⚠️ Credential Note:** Web research found conflicting information about Anissa Wheeler's credentials. Client brief says PT; website may say NP. Project Director must confirm before content/schema is written.

## Industry Topic Entities
- Primary Industry: Pain management — Wikipedia: https://en.wikipedia.org/wiki/Pain_management
- Service Topic 1: Peripheral neuropathy — Wikipedia: https://en.wikipedia.org/wiki/Peripheral_neuropathy
- Service Topic 2: Regenerative medicine — Wikipedia: https://en.wikipedia.org/wiki/Regenerative_medicine
- Service Topic 3: Physical therapy — Wikipedia: https://en.wikipedia.org/wiki/Physical_therapy

## Condition Topic Entities
- Condition 1: Peripheral neuropathy — Wikipedia: https://en.wikipedia.org/wiki/Peripheral_neuropathy
- Condition 2: Chronic pain — Wikipedia: https://en.wikipedia.org/wiki/Chronic_pain
- Condition 3: Knee pain — Wikipedia: https://en.wikipedia.org/wiki/Knee_pain

## Business Profile URLs (sameAs Stacking)
- Google Business Profile (share URL): PENDING
- Google Maps CID URL: PENDING (https://www.google.com/maps?cid=[CID]) — inject into Organization.sameAs AND LocalBusiness.sameAs
- Facebook: PENDING — check for business page
- Instagram: PENDING
- LinkedIn: PENDING
- YouTube: PENDING
- Healthgrades: https://www.healthgrades.com/providers/ronald-arconati-2y6fg (Dr. Arconati profile)
- NPI Registry: https://npiprofile.com/npi/1295821783 (Dr. Arconati)
- Entity NPI: https://npiregistry.cms.hhs.gov/ (NPI 1992587968)
- CareCredit: https://www.carecredit.com/doctor-locator/st-louis-mo/st-louis-pain-center-llc-765kmq/
- PainClinics.com: https://painclinics.com/pain-management/st-louis-pain-center-mo-63129/
- BBB: PENDING
- Wikidata entry: none found

## Review Data (Semantic-Filtered, Administrator-Approved) — Checkpoint C

### Filtering Criteria
- Star rating ≥4: All 8 reviews are 5-star ✅
- Mentions top-3 services (Neuropathy Treatment, HA Injections, Physical Therapy) OR top-3 conditions (Knee Pain, Neuropathy, Chronic Pain): 5 of 8 pass

### Candidates for Administrator Approval

**Review #2 — Ms. Fowler (Jan 2025, 5★)**
- Text: "This treatment works for me and my knee pain is a level 3 a little fluid is on my knee."
- Mentions: **Knee pain** (condition)
- Proposed binding: /conditions/knee-pain/

**Review #4 — Stephanie Baker (Jul 2024, 5★)**
- Text: "Had a wonderful experience with this team! Everyone there is so caring and helped me through my knee treatments. Recommend them highly!"
- Mentions: **Knee treatments** (service/condition)
- Proposed binding: /conditions/knee-pain/ OR /orthopedic/hyaluronic-acid-injections/

**Review #5 — Pat Shore (Jun 2024, 5★)**
- Text: "Everyone is very professional and caring. Treatments are done with utmost care. My doctors gave up on my issues. This treatment has been a Godsend for my neuropathy and vertigo."
- Mentions: **Neuropathy**, **vertigo** (conditions)
- Proposed binding: /pain-control/neuropathy-treatment/ AND /conditions/vertigo-vestibular-disorders/

**Review #6 — Lester Brannam (May 2024, 5★)**
- Text: "Anissa Wheeler was my therapist... I was having left knee pain and my doctor said that I needed knee surgery. I am 71 years old and I didn't want to go through surgery so I went to STL Pain Center... I took a gel shot once a week for 5 weeks and they helped tremendously."
- Mentions: **Knee pain** (condition), **gel shot / HA injections** (service), **Anissa Wheeler** by name (E-E-A-T)
- Proposed binding: /orthopedic/hyaluronic-acid-injections/ AND /providers/anissa-wheeler/

**Review #8 — Patricia Diess (May 2024, 5★)**
- Text: "The gel injections are fabulous. The staff is very pleasant and are very knowledgeable. It has been a real pleasure working with all of them and getting the relief my knees were needing."
- Mentions: **Gel injections / HA injections** (service), **knees** (condition)
- Proposed binding: /orthopedic/hyaluronic-acid-injections/

### Proposed Homepage Reviews (LocalBusiness schema)
- Review #1 — Heidi Goodsite: "Phenomenal staff! Clean facility with people who really care." (broadest-impact, general quality signal)
- Review #5 — Pat Shore: neuropathy + vertigo mention (covers #1 target service)
- Review #6 — Lester Brannam: knee pain + gel shots + provider name mention (strongest E-E-A-T signal)

> **⚠️ Checkpoint C — Semantic Reviews:** Administrator must approve the 5 semantic-filtered candidates above for per-page injection, and the 3 homepage candidates. All text is verbatim from the real GBP listing. Zero paraphrasing, zero fabrication.

## Insurance / Payment Data
- Accepted insurance plans: Medicare, Blue Cross Blue Shield, Aetna, Cigna (+ other major commercial — confirm full list with client)
- Workers comp accepted: No
- Auto accident billing: No
- Payment methods: PENDING — confirm with client

## Local Health Signal
- Signal: Midwest sedentary lifestyle — neuropathy & chronic pain risk
- Relevance: Desk-job culture, high obesity rates, and cold winters create elevated chronic pain and peripheral neuropathy prevalence in the St. Louis metro area
- Usage: Homepage hero copy, neuropathy service page, chronic pain condition page, medical weight loss page, blog posts

## llms.txt Content (Tech Builder uses these verbatim)

- positioning_statement: "St. Louis Pain Center is a pain control clinic in St. Louis, MO, providing neuropathy treatment, orthopedic care, regenerative medicine, physical therapy, and comprehensive pain management for patients in south St. Louis County."

- about_paragraph: "St. Louis Pain Center LLC, located at 4455 Telegraph Rd #250 in St. Louis, MO, specializes in pain management and neuropathy treatment. Led by Dr. Ron Arconati, DC, the practice offers nerve blocks, injection therapy, PRP therapy, hyaluronic acid injections, regenerative therapy, kyphoplasty, medication management, medical weight loss, neuromodulation technique, and physical therapy services."

- service_area_description: "St. Louis, Missouri. Service radius: 25 miles. Serving Oakville, Mehlville, Lemay, Affton, Concord, Arnold, Fenton, Crestwood, Sunset Hills, Webster Groves, Kirkwood, and the greater south St. Louis County area."

- service_one_liners:
  - service: "Nerve Blocks"
    one_line: "Targeted nerve block injections for acute and chronic pain relief in St. Louis"
    url: /pain-control/nerve-blocks/
  - service: "Injection Therapy"
    one_line: "Therapeutic injection therapy for back pain, neck pain, and joint conditions"
    url: /pain-control/injection-therapy/
  - service: "Kyphoplasty"
    one_line: "Minimally invasive kyphoplasty for spinal compression fracture pain relief"
    url: /pain-control/kyphoplasty/
  - service: "Medication Management"
    one_line: "Personalized pain medication management for chronic pain and neuropathy"
    url: /pain-control/medication-management/
  - service: "Neuropathy Treatment"
    one_line: "Comprehensive peripheral neuropathy diagnosis and treatment in St. Louis"
    url: /pain-control/neuropathy-treatment/
  - service: "Neuromodulation Technique"
    one_line: "Drug-free neuromodulation for neuropathy, chronic pain, and fibromyalgia"
    url: /pain-control/neuromodulation-technique/
  - service: "Hyaluronic Acid Injections"
    one_line: "Hyaluronic acid gel injections for knee and joint pain without surgery"
    url: /orthopedic/hyaluronic-acid-injections/
  - service: "PRP Therapy"
    one_line: "Platelet-rich plasma therapy for tissue regeneration and joint healing"
    url: /orthopedic/prp-therapy/
  - service: "Regenerative Therapy"
    one_line: "Advanced regenerative medicine for joint, tendon, and soft tissue repair"
    url: /orthopedic/regenerative-therapy/
  - service: "Medical Weight Loss"
    one_line: "Physician-supervised medical weight loss including tirzepatide and semaglutide"
    url: /weight-loss/
  - service: "Physical Therapy"
    one_line: "Physical therapy and rehabilitation for pain recovery and mobility"
    url: /sports-medicine/

- provider_one_liners:
  - provider: "Dr. Ron Arconati, DC"
    one_line: "Founder and Medical Director specializing in pain management and neuropathy treatment"
    url: /providers/ron-arconati/
  - provider: "Anissa Wheeler"
    one_line: "Physical therapy and pain rehabilitation specialist"
    url: /providers/anissa-wheeler/

- booking_url: https://stlpaincenter.com/contact/
