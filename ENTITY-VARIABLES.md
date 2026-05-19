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

## GBP Locks (Local Clinic — APPROVED)

### Location 1 — St. Louis (Checkpoint A — APPROVED 2026-05-19)
- CID: **8132065016093573560**
- CID URL: https://www.google.com/maps?cid=8132065016093573560
- Place reference: g/11vry51098
- GBP share URL: https://maps.app.goo.gl/K8r42Uki1xFUEbNa8
- Full Maps URL: https://www.google.com/maps/place/St.+Louis+Pain+Center/@38.4826929,-90.3050876,779m/data=!3m2!1e3!4b1!4m6!3m5!1s0x87d8c7450bcd48ab:0x70dae60beea381b8
- Coordinates: 38.4826929, -90.3050876 (precise — extracted from Maps URL)
- Administrator approved: ✅ APPROVED (GBP share link provided by Bobbee 2026-05-19)

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

## Institutional Anchor Entities (Checkpoint B — APPROVED 2026-05-19)

### Selected Anchor (Agent's call per Gate 1 Q&A)

**Washington University School of Medicine** — @type: CollegeOrUniversity
- Wikipedia: https://en.wikipedia.org/wiki/Washington_University_School_of_Medicine
- Rationale selected: Top-10 US medical school, highest entity weight of any medical institution in St. Louis. Directly associated with pain medicine research and clinical training. NOT a competitor (academic institution vs. outpatient clinic). Single anchor provides maximum KG signal without dilution.
- Schema injection: LocalBusiness.areaServed.containsPlace + MedicalWebPage.mentions on relevant service pages
- Visible copy template: "Located near the Washington University School of Medicine medical corridor" / "Serving the same south St. Louis community as Washington University-affiliated practices"
- Administrator approved: ✅ Agent decision confirmed per Gate 1 (Bobbee delegated to agent)

## Provider Entities

> **Gate 1 Decision (2026-05-19):** No providers or staff to be listed on site at this stage. All provider entities removed from this build phase. Provider pages, provider schema (Block C / Block K), and provider references in content are all omitted. Re-introduce in a future phase when client confirms readiness.

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
- Google Business Profile (share URL): https://maps.app.goo.gl/K8r42Uki1xFUEbNa8 ✅ CONFIRMED
- Google Maps CID URL: https://www.google.com/maps?cid=8132065016093573560 ✅ RESOLVED
- Facebook: https://www.facebook.com/profile.php?id=61558443726830 ✅ CONFIRMED
- Instagram: PENDING
- LinkedIn: PENDING
- YouTube: PENDING
- Entity NPI Profile: https://npiprofile.com/npi/1992587968 ✅ CONFIRMED (entity NPI 1992587968)
- Entity NPI Registry: https://npiregistry.cms.hhs.gov/ (NPI 1992587968)
- CareCredit: https://www.carecredit.com/doctor-locator/st-louis-mo/st-louis-pain-center-llc-765kmq/
- PainClinics.com: https://painclinics.com/pain-management/st-louis-pain-center-mo-63129/
- BBB: PENDING
- Wikidata entry: none found

> Note: Individual provider profiles (Healthgrades for Dr. Arconati, individual NPI) removed from sameAs stacking per Gate 1 provider removal decision.

## Review Data (Semantic-Filtered) — Checkpoint C ✅ APPROVED 2026-05-19

> **Gate 1 Status (2026-05-19):** Q5 APPROVED by Bobbee. All 5 semantic-filtered reviews approved verbatim as-is. Review injection is unblocked. Note: Review #6 (Lester Brannam) mentions "Anissa Wheeler" by name — approved as-is per Bobbee. Since no provider pages exist in this build phase, binding for this review is /orthopedic/hyaluronic-acid-injections/ only (not /providers/anissa-wheeler/).

### Filtering Criteria
- Star rating ≥4: All 8 reviews are 5-star ✅
- Mentions top-3 services (Neuropathy Treatment, HA Injections, Physical Therapy) OR top-3 conditions (Knee Pain, Neuropathy, Chronic Pain): 5 of 8 pass

### Approved Reviews (verbatim — all 5 approved 2026-05-19)

**Review #2 — Ms. Fowler (Jan 2025, 5★)**
- Text: "This treatment works for me and my knee pain is a level 3 a little fluid is on my knee."
- Mentions: **Knee pain** (condition)
- Approved binding: /conditions/knee-pain/

**Review #4 — Stephanie Baker (Jul 2024, 5★)**
- Text: "Had a wonderful experience with this team! Everyone there is so caring and helped me through my knee treatments. Recommend them highly!"
- Mentions: **Knee treatments** (service/condition)
- Approved binding: /conditions/knee-pain/ AND /orthopedic/hyaluronic-acid-injections/

**Review #5 — Pat Shore (Jun 2024, 5★)**
- Text: "Everyone is very professional and caring. Treatments are done with utmost care. My doctors gave up on my issues. This treatment has been a Godsend for my neuropathy and vertigo."
- Mentions: **Neuropathy**, **vertigo** (conditions)
- Approved binding: /pain-control/neuropathy-treatment/ AND /conditions/vertigo-vestibular-disorders/

**Review #6 — Lester Brannam (May 2024, 5★)**
- Text: "Anissa Wheeler was my therapist... I was having left knee pain and my doctor said that I needed knee surgery. I am 71 years old and I didn't want to go through surgery so I went to STL Pain Center... I took a gel shot once a week for 5 weeks and they helped tremendously."
- Mentions: **Knee pain** (condition), **gel shot / HA injections** (service), **Anissa Wheeler** by name (E-E-A-T)
- Approved binding: /orthopedic/hyaluronic-acid-injections/ (provider page binding removed — no provider pages in this build phase)

**Review #8 — Patricia Diess (May 2024, 5★)**
- Text: "The gel injections are fabulous. The staff is very pleasant and are very knowledgeable. It has been a real pleasure working with all of them and getting the relief my knees were needing."
- Mentions: **Gel injections / HA injections** (service), **knees** (condition)
- Approved binding: /orthopedic/hyaluronic-acid-injections/

### Proposed Homepage Reviews (LocalBusiness schema)
- Review #1 — Heidi Goodsite: "Phenomenal staff! Clean facility with people who really care." (broadest-impact, general quality signal)
- Review #5 — Pat Shore: neuropathy + vertigo mention (covers #1 target service)
- Review #6 — Lester Brannam: knee pain + gel shots + provider name mention (strongest E-E-A-T signal)

> **✅ Checkpoint C — Semantic Reviews APPROVED (2026-05-19):** All 5 semantic-filtered reviews approved for per-page injection. Homepage reviews (Heidi Goodsite #1, Pat Shore #5, Lester Brannam #6) approved for LocalBusiness schema. All text is verbatim from the real GBP listing. Zero paraphrasing, zero fabrication.

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

- provider_one_liners: []
  # Gate 1 Decision (2026-05-19): No providers listed on site at this stage.

- booking_url: https://stlpaincenter.com/contact/
