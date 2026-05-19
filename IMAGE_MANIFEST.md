# Image Manifest — St. Louis Pain Center

## Build Type: migration

References MIGRATION-AUDIT.md image grades (§2 IMAGE_INVENTORY).

## Brand Variables (substituted into all prompts)
- {city}: St. Louis
- {state}: Missouri
- {primary_gbp_category}: Pain control clinic
- {specialty_descriptor}: pain control
- {hex_primary}: PENDING — extract from existing stlpaincenter.com
- {hex_accent}: PENDING — extract from existing stlpaincenter.com
- {design_personality}: Bold
- {tone}: Authoritative + Educational
- {regional_setting}: Midwest urban — brick buildings, leafy suburbs, four-season climate
- {time_of_day}: soft mid-morning
- {patient_demographics}: adults 40-75, mix of active seniors and working professionals with chronic pain conditions

## REUSE Section (Grade A/B video + images — no generation API call)

### V1 — Hero Background Video (Grade B — confirmed reuse)
- source: https://clinicboom.co/wp-content/uploads/St.-Louis-Pain-Center_video_header.mp4
- target: /public/video/hero-bg.mp4
- usage: Homepage hero section — autoplay, muted, loop
- operations: [download, self-host, optimize_if_needed]
- notes: Branded video from existing site. Do NOT replace with stock/generated video. Confirmed by Bobbee 2026-05-19.

**REUSE count: 1 (video)**

## EDIT Section (Grade B images — POST /v1/images/edits)

### E1 — Dr. Ron Arconati Headshot
- source: extract from existing stlpaincenter.com /about-us page
- target: /public/images/providers/ron-arconati-st-louis-mo-headshot.webp
- api: gpt-image-2-edits
- size: 800x800
- quality: high
- edit_instruction: |
    Clean up this professional medical headshot: remove cluttered background and replace with a clean, 
    softly graduated backdrop in muted {hex_primary} tones. Maintain exact facial features and likeness. 
    Improve lighting to be even, soft, and professional. Ensure the subject appears approachable and 
    authoritative. Output as square crop, head and shoulders framing.
- alt_text: "Dr. Ron Arconati, DC — Pain Management Physician in St. Louis, MO"
- source_grade_notes: Grade B — existing headshot, needs background cleanup

### E2 — Anissa Wheeler Headshot
- source: extract from existing stlpaincenter.com /about-us page
- target: /public/images/providers/anissa-wheeler-st-louis-mo-headshot.webp
- api: gpt-image-2-edits
- size: 800x800
- quality: high
- edit_instruction: |
    Clean up this professional medical headshot: remove cluttered background and replace with a clean, 
    softly graduated backdrop in muted {hex_primary} tones. Maintain exact facial features and likeness. 
    Improve lighting to be even, soft, and professional. Ensure the subject appears approachable and 
    caring. Output as square crop, head and shoulders framing.
- alt_text: "Anissa Wheeler — Physical Therapist at St. Louis Pain Center"
- source_grade_notes: Grade B — existing headshot, needs background cleanup

### E3 — Logo
- source: extract SVG/PNG from existing stlpaincenter.com
- target: /public/images/brand/stl-pain-center-logo.svg (or .webp if raster)
- operations: [extract, optimize, convert_to_svg_if_possible]
- alt_text: "St. Louis Pain Center logo"
- source_grade_notes: Grade B — logo reuse, optimize format

### E4 — Favicon
- source: extract from existing stlpaincenter.com
- target: /public/favicon.ico + /public/images/brand/favicon-192.webp
- operations: [extract, generate_sizes: {16, 32, 192}]
- alt_text: "St. Louis Pain Center favicon"
- source_grade_notes: Grade B — reuse/optimize

**EDIT count: 4**

## GENERATE Section (new images — POST /v1/images/generations)

### Homepage Hero
- target: /public/images/homepage/pain-management-st-louis-mo-hero.webp
- api: gpt-image-2-generations
- size: 1920x1080
- quality: high
- prompt: |
    Photorealistic editorial photograph of a modern pain management clinic interior in St. Louis, Missouri. 
    A warm, welcoming reception area with clean contemporary design — bold typography signage, dark wood 
    accents, and crisp white walls. Soft mid-morning light streams through large windows. A diverse group 
    of patients (adults 40-75) sit comfortably in the waiting area. A medical professional in a white coat 
    greets a patient with a warm handshake. The atmosphere conveys trust, expertise, and hope. 
    Midwest setting — subtle architectural details suggesting St. Louis. Color palette emphasizes bold 
    contrasts with warm neutrals. No text overlays. Professional medical photography style with shallow 
    depth of field on the greeting interaction.
- alt_text: "Pain control clinic in St. Louis, MO — welcoming patient environment"

### Category Page Hero — Pain Control
- target: /public/images/pain-control/pain-control-st-louis-mo-hero.webp
- api: gpt-image-2-generations
- size: 1920x1080
- quality: high
- prompt: |
    Photorealistic editorial photograph of a pain management treatment room in a modern medical clinic. 
    A physician in a white coat consults with a patient, reviewing imaging results on a large monitor. 
    The room is clean, well-lit with soft clinical lighting, featuring modern medical equipment. 
    Bold, modern interior design with dark accent walls and professional medical furniture. 
    The patient appears comfortable and engaged. Mid-morning light. No text overlays. 
    Professional medical photography style.
- alt_text: "Pain control consultation at St. Louis Pain Center"

### Category Page Hero — Orthopedic
- target: /public/images/orthopedic/orthopedic-clinic-st-louis-mo-hero.webp
- api: gpt-image-2-generations
- size: 1920x1080
- quality: high
- prompt: |
    Photorealistic editorial photograph of an orthopedic treatment room in a modern medical clinic. 
    A physician examines a patient's knee joint, with an anatomical model and ultrasound equipment 
    visible in the background. Clean, well-lit clinical environment with bold modern design — 
    dark accent walls, professional medical furniture. The patient is seated comfortably on an 
    exam table. Mid-morning light. No text overlays. Professional medical photography style.
- alt_text: "Orthopedic consultation at St. Louis Pain Center"

### Service Page Heroes (11 images)

#### Nerve Blocks
- target: /public/images/pain-control/nerve-blocks-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Photorealistic close-up of a physician performing a nerve block injection procedure. The doctor's 
    gloved hands are precisely positioning a needle near the patient's spine, guided by fluoroscopic 
    imaging visible on a monitor in the background. Clean, modern treatment room. Professional medical 
    lighting. The image conveys precision, expertise, and advanced medical care. No text overlays. 
    Editorial medical photography style.
- alt_text: "Nerve block injection procedure at St. Louis Pain Center"

#### Injection Therapy
- target: /public/images/pain-control/injection-therapy-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Photorealistic photograph of a medical professional preparing a therapeutic injection in a modern 
    treatment room. Sterile syringe and vials on a medical tray in the foreground, with the physician 
    carefully preparing the injection in the background. Clean clinical environment with bold modern 
    design accents. Warm but professional lighting. No text overlays.
- alt_text: "Therapeutic injection therapy for pain relief in St. Louis, MO"

#### Kyphoplasty
- target: /public/images/pain-control/kyphoplasty-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Photorealistic medical illustration showing a cross-section view of kyphoplasty procedure on a 
    vertebral compression fracture. Show the balloon catheter inflating within the vertebral body, 
    with cement being injected. Clean, clinical illustration style with anatomical accuracy. 
    Bold color palette — dark background with high-contrast anatomical detail. 
    Medical education illustration quality. No text overlays.
- alt_text: "Kyphoplasty procedure for spinal compression fracture treatment"

#### Medication Management
- target: /public/images/pain-control/medication-management-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Photorealistic photograph of a physician reviewing a patient's medication plan at a desk in a 
    modern medical office. Prescription pad, medication bottles, and a computer screen showing a 
    treatment plan are visible. The doctor and patient are engaged in a caring conversation. 
    Warm, professional lighting. Bold modern office design. No text overlays.
- alt_text: "Medication management for chronic pain at St. Louis Pain Center"

#### Medical Weight Loss
- target: /public/images/weight-loss/medical-weight-loss-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Photorealistic photograph of a physician-supervised weight loss consultation. A doctor and patient 
    review body composition data on a modern digital scale/monitor. The setting is a clean, modern 
    medical office with bold design. The patient appears motivated and hopeful. Soft natural light 
    supplements clinical lighting. Professional medical photography. No text overlays.
- alt_text: "Medical weight loss program at St. Louis Pain Center"

#### Hyaluronic Acid Injections
- target: /public/images/orthopedic/hyaluronic-acid-injections-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Photorealistic photograph of a physician performing a hyaluronic acid injection into a patient's 
    knee joint. Close-up of the doctor's gloved hands with the injection site, the patient's knee 
    visible and properly positioned. Clean treatment room with modern medical equipment. 
    Professional clinical lighting. The image conveys gentle precision and expertise. No text overlays.
- alt_text: "Hyaluronic acid knee injection at St. Louis Pain Center"

#### PRP Therapy
- target: /public/images/orthopedic/prp-therapy-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Photorealistic photograph of PRP (platelet-rich plasma) therapy preparation. A medical 
    professional holds a centrifuge tube containing separated blood components — the golden 
    platelet-rich plasma layer clearly visible. Modern medical lab equipment in the background. 
    Clean, bold clinical environment. Professional medical photography with macro-style detail 
    on the PRP tube. No text overlays.
- alt_text: "PRP therapy preparation at St. Louis Pain Center"

#### Regenerative Therapy
- target: /public/images/orthopedic/regenerative-therapy-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Photorealistic photograph showing a physician performing a regenerative medicine injection 
    guided by ultrasound. The ultrasound screen shows joint anatomy in the background while the 
    doctor precisely administers the injection. Clean, modern treatment room. Bold design accents. 
    The image conveys cutting-edge medical technology and precision. Professional clinical 
    photography. No text overlays.
- alt_text: "Regenerative therapy treatment at St. Louis Pain Center"

#### Neuropathy Treatment
- target: /public/images/pain-control/neuropathy-treatment-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Photorealistic photograph of a neuropathy examination. A physician examines a patient's foot 
    with a monofilament test for nerve sensitivity. The patient sits comfortably on an exam table. 
    Modern examination room with clean design. Warm, reassuring lighting. The image conveys 
    thorough diagnostic care and expertise. Professional medical photography. No text overlays.
- alt_text: "Neuropathy examination and treatment in St. Louis, MO"

#### Neuromodulation Technique
- target: /public/images/pain-control/neuromodulation-technique-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Photorealistic photograph of a neuromodulation therapy session. A medical professional applies 
    a small handheld device to specific points on a patient's body. The patient appears relaxed and 
    comfortable in a modern treatment room. Clean, bold clinical design. Soft, calming lighting. 
    The image conveys advanced, drug-free pain relief technology. No text overlays.
- alt_text: "Neuromodulation technique for neuropathy treatment in St. Louis"

#### Physical Therapy
- target: /public/images/sports-medicine/physical-therapy-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Photorealistic photograph of a physical therapy session. A physical therapist assists a patient 
    with guided exercises using resistance bands in a well-equipped modern rehabilitation gym. 
    The patient is an adult (50-65) working on lower back/knee mobility. Natural light from large 
    windows supplements overhead lighting. Bold, modern gym design with medical equipment. 
    Both therapist and patient appear engaged and positive. No text overlays.
- alt_text: "Physical therapy session at St. Louis Pain Center"

### Condition Page Heroes (12 anatomical illustrations)

#### Neuropathy
- target: /public/images/conditions/neuropathy-st-louis-mo-illustration.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Clean medical illustration showing peripheral neuropathy in the lower extremities. Cross-section 
    of a nerve fiber showing damaged myelin sheath alongside a healthy nerve for comparison. The 
    affected foot/leg area highlighted with a warm red gradient indicating nerve damage zones. 
    Dark background with high-contrast anatomical detail. Bold, modern medical illustration style. 
    Anatomically accurate. No text overlays.
- alt_text: "Peripheral neuropathy nerve damage illustration"

#### Diabetic Neuropathy
- target: /public/images/conditions/diabetic-neuropathy-st-louis-mo-illustration.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Medical illustration showing diabetic peripheral neuropathy affecting the feet and hands. 
    Transparent body outline with highlighted nerve pathways showing damage pattern — 
    "stocking-glove" distribution. Glucose molecules near the nerve fibers indicating the diabetic 
    mechanism. Dark background, bold color contrasts, anatomically accurate. No text overlays.
- alt_text: "Diabetic neuropathy illustration showing nerve damage patterns"

#### Knee Pain
- target: /public/images/conditions/knee-pain-st-louis-mo-illustration.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Clean medical illustration of the knee joint showing common pain sources. Cross-section view 
    showing cartilage, meniscus, ligaments, and areas of inflammation highlighted in warm red/orange. 
    Healthy tissue in cool blue/white for contrast. Dark background, bold modern medical illustration 
    style. Anatomically accurate. No text overlays.
- alt_text: "Knee joint anatomy and common pain sources illustration"

#### Joint Pain
- target: /public/images/conditions/joint-pain-st-louis-mo-illustration.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Medical illustration showing multiple joints affected by pain — shoulder, hip, knee, and hand. 
    Transparent body outline with affected joints highlighted in warm red gradient. Healthy joints 
    shown in cool blue for comparison. Bold, modern medical illustration on dark background. 
    Anatomically accurate. No text overlays.
- alt_text: "Joint pain illustration showing commonly affected joints"

#### Back Pain
- target: /public/images/conditions/back-pain-st-louis-mo-illustration.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Clean medical illustration of the lumbar spine showing common back pain sources. Cross-section 
    of vertebrae with herniated disc pressing on a spinal nerve. Inflamed areas highlighted in warm 
    red, healthy tissue in cool blue/white. Facet joints and spinal canal clearly labeled by color. 
    Dark background, bold modern medical illustration. Anatomically accurate. No text overlays.
- alt_text: "Lumbar spine anatomy and back pain causes illustration"

#### Neck Pain
- target: /public/images/conditions/neck-pain-st-louis-mo-illustration.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Medical illustration of the cervical spine showing neck pain pathology. Side view of cervical 
    vertebrae C1-C7 with areas of disc degeneration and nerve compression highlighted. Pain 
    radiation pattern shown extending to shoulder and arm. Dark background, bold high-contrast 
    medical illustration. Anatomically accurate. No text overlays.
- alt_text: "Cervical spine anatomy and neck pain causes illustration"

#### Sciatica
- target: /public/images/conditions/sciatica-st-louis-mo-illustration.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Medical illustration showing the sciatic nerve pathway from lumbar spine through the buttock and 
    down the leg. The nerve is highlighted in bold yellow/gold against a transparent body outline. 
    A herniated disc compressing the nerve root is shown at the L4-L5/L5-S1 level. Pain radiation 
    pattern shown in warm red gradient along the nerve path. Dark background, bold modern style. 
    Anatomically accurate. No text overlays.
- alt_text: "Sciatic nerve pathway and sciatica pain pattern illustration"

#### Chronic Pain
- target: /public/images/conditions/chronic-pain-st-louis-mo-illustration.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Conceptual medical illustration showing the chronic pain cycle. A human silhouette with the 
    nervous system highlighted — brain, spinal cord, and peripheral nerves visible. Pain signal 
    pathways shown as illuminated lines in warm red/orange. The brain area shows heightened 
    activation (central sensitization concept). Dark background, bold modern medical illustration. 
    No text overlays.
- alt_text: "Chronic pain nervous system illustration showing pain pathways"

#### Shoulder Pain
- target: /public/images/conditions/shoulder-pain-st-louis-mo-illustration.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Medical illustration of the shoulder joint showing common pain sources. Detailed view of 
    rotator cuff, labrum, bursa, and AC joint. Areas of inflammation/tear highlighted in warm red. 
    Healthy tissue in cool blue/white. Dark background, bold modern medical illustration style. 
    Anatomically accurate. No text overlays.
- alt_text: "Shoulder joint anatomy and common pain sources illustration"

#### Arthritis / Osteoarthritis
- target: /public/images/conditions/arthritis-osteoarthritis-st-louis-mo-illustration.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Medical illustration comparing a healthy joint vs. an osteoarthritic joint side by side. The 
    healthy joint shows smooth cartilage and normal joint space. The arthritic joint shows cartilage 
    erosion, bone spurs, narrowed joint space, and inflamed synovium. Bold color contrast — 
    healthy in cool blue, damaged in warm red/orange. Dark background. Anatomically accurate. 
    No text overlays.
- alt_text: "Osteoarthritis joint comparison — healthy vs. arthritic joint"

#### Fibromyalgia
- target: /public/images/conditions/fibromyalgia-st-louis-mo-illustration.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Medical illustration showing fibromyalgia tender points on a human body outline. 18 tender 
    point locations marked with warm red/orange dots on both sides of the body. The nervous 
    system faintly visible beneath, suggesting central sensitization. Body outline in cool 
    blue/white against dark background. Bold, modern medical illustration style. No text overlays.
- alt_text: "Fibromyalgia tender points body map illustration"

#### Vertigo / Vestibular Disorders
- target: /public/images/conditions/vertigo-vestibular-st-louis-mo-illustration.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Medical illustration of the inner ear vestibular system. Detailed cross-section showing 
    semicircular canals, cochlea, and vestibular nerve. Loose otoconia (ear crystals) shown 
    displaced in a semicircular canal (BPPV mechanism). Bold, modern medical illustration on 
    dark background. Anatomically accurate with high contrast colors. No text overlays.
- alt_text: "Vestibular system and vertigo mechanism illustration"

#### Neuropathy in Feet
- target: /public/images/conditions/neuropathy-in-feet-st-louis-mo-illustration.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Detailed medical illustration focusing on peripheral neuropathy in the feet. Transparent 
    view of the foot and ankle showing nerve pathways from the ankle branching into the toes. 
    Damaged nerve endings in the toes and sole highlighted in warm red/orange, with healthy 
    proximal nerve segments in cool blue. Small inset showing cross-section of a damaged 
    nerve fiber with degraded myelin sheath. Dark background, bold modern medical illustration 
    style. Anatomically accurate. No text overlays.
- alt_text: "Neuropathy in feet — nerve damage illustration showing affected foot nerves"

### Comparison Page Graphics (5 images)

#### PRP Therapy vs. Hyaluronic Acid Injections
- target: /public/images/compare/prp-therapy-vs-hyaluronic-acid-injections-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x1200
- quality: high
- prompt: |
    Clean infographic-style comparison image. Left side: a PRP centrifuge tube with golden plasma 
    layer visible. Right side: a hyaluronic acid vial/syringe. Center divider line. Both sides 
    shown in photorealistic medical photography style. Bold modern design with dark background 
    and high contrast. Professional medical comparison visual. No text overlays.
- alt_text: "PRP therapy vs. hyaluronic acid injections comparison"

#### Regenerative Therapy vs. Cortisone
- target: /public/images/compare/regenerative-therapy-vs-cortisone-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x1200
- quality: high
- prompt: |
    Clean comparison image. Left side: regenerative medicine concept — cellular repair visualization 
    with growing tissue. Right side: cortisone injection — steroid vial and syringe. 
    Bold modern design, dark background, high contrast. Professional medical visual. No text overlays.
- alt_text: "Regenerative therapy vs. cortisone injections comparison"

#### Nerve Blocks vs. Medication
- target: /public/images/compare/nerve-blocks-vs-medication-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x1200
- quality: high
- prompt: |
    Clean comparison image. Left side: targeted nerve block injection near spine (precision concept). 
    Right side: prescription medication bottles and pills (systemic approach concept). Bold modern 
    design, dark background, high contrast. Professional medical visual. No text overlays.
- alt_text: "Nerve blocks vs. medication management comparison"

#### Physical Therapy vs. Surgery
- target: /public/images/compare/physical-therapy-vs-surgery-back-pain-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x1200
- quality: high
- prompt: |
    Clean comparison image. Left side: physical therapy — patient performing guided exercises with 
    therapist. Right side: surgical concept — operating room with surgical instruments. 
    Bold modern design, dark background, high contrast. Professional medical visual. No text overlays.
- alt_text: "Physical therapy vs. surgery for back pain comparison"

#### Neuromodulation vs. Traditional Treatment
- target: /public/images/compare/neuromodulation-vs-traditional-neuropathy-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x1200
- quality: high
- prompt: |
    Clean comparison image. Left side: neuromodulation device being applied to patient — advanced 
    technology concept. Right side: traditional medication pills and prescription pad — 
    pharmacological approach concept. Bold modern design, dark background, high contrast. 
    Professional medical visual. No text overlays.
- alt_text: "Neuromodulation vs. traditional neuropathy treatment comparison"

### Standard Page Images

#### New Patients
- target: /public/images/new-patients/new-patients-st-louis-mo.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Photorealistic photograph of a new patient being welcomed at a modern medical clinic reception. 
    A warm, smiling receptionist hands a tablet with intake forms to a patient (adult 50-65). The 
    reception area is clean, modern, with bold design — dark accent wall, comfortable seating, 
    natural light. The atmosphere conveys friendliness and professionalism. Midwest setting. 
    No text overlays.
- alt_text: "New patient welcome at St. Louis Pain Center"

#### About Page
- target: /public/images/about/about-st-louis-pain-center.webp
- api: gpt-image-2-generations
- size: 1600x900
- quality: high
- prompt: |
    Photorealistic photograph of a medical team in a modern clinic lobby. Two healthcare professionals 
    (a male doctor in a white coat and a female therapist) stand together smiling confidently. Bold 
    modern clinic interior with the practice's brand feel — clean lines, dark accents, professional 
    atmosphere. Warm mid-morning light. The image conveys expertise, teamwork, and approachability. 
    No text overlays.
- alt_text: "St. Louis Pain Center medical team"

### GBP Post Imagery (12 posts for 90-day calendar)

| Week | Topic Slug | Target |
|---|---|---|
| 1 | neuropathy-awareness | /public/images/gbp-posts/week-01-neuropathy-awareness.webp |
| 2 | knee-pain-relief | /public/images/gbp-posts/week-02-knee-pain-relief.webp |
| 3 | prp-therapy-healing | /public/images/gbp-posts/week-03-prp-therapy-healing.webp |
| 4 | back-pain-desk-workers | /public/images/gbp-posts/week-04-back-pain-desk-workers.webp |
| 5 | ha-injections-joint-pain | /public/images/gbp-posts/week-05-ha-injections-joint-pain.webp |
| 6 | sciatica-treatment | /public/images/gbp-posts/week-06-sciatica-treatment.webp |
| 7 | physical-therapy-recovery | /public/images/gbp-posts/week-07-physical-therapy-recovery.webp |
| 8 | diabetic-neuropathy | /public/images/gbp-posts/week-08-diabetic-neuropathy.webp |
| 9 | regenerative-therapy | /public/images/gbp-posts/week-09-regenerative-therapy.webp |
| 10 | neck-pain-specialist | /public/images/gbp-posts/week-10-neck-pain-specialist.webp |
| 11 | weight-loss-joint-health | /public/images/gbp-posts/week-11-weight-loss-joint-health.webp |
| 12 | nerve-blocks-explained | /public/images/gbp-posts/week-12-nerve-blocks-explained.webp |

All GBP posts:
- api: gpt-image-2-generations
- size: 1080x1080
- quality: medium
- prompt pattern: |
    Square social media post image for a pain management clinic in St. Louis, MO. Topic: {topic}. 
    Bold, modern design with {hex_primary} color accents. Photorealistic medical imagery related to 
    the topic. Clean composition optimized for mobile viewing. Professional healthcare social media 
    aesthetic. No text overlays.

## Total Image Count

| Category | Count |
|---|---|
| Reuse (no API call) | 1 (hero background video) |
| Edit (GPT-image-2 edits API) | 4 (2 headshots, logo, favicon) |
| Generate (GPT-image-2 generations API) | 34 (1 homepage hero + 2 category heroes + 11 service heroes + 13 condition illustrations + 5 comparison graphics + 2 standard page images) |
| GBP Post Images (generate) | 12 |
| **TOTAL** | **51** (1 video reuse + 4 edits + 34 generations + 12 GBP posts) |

### Estimated Cost
- Edits (4 × ~$0.04 each at 800×800): ~$0.16
- Generations HD (34 × ~$0.08 each at 1600×900/1920×1080): ~$2.72
- Generations standard (12 × ~$0.04 each at 1080×1080 medium): ~$0.48
- **Total estimated: ~$3.36**

> Note: Costs are estimates based on gpt-image-2 pricing as of 2026-05. Actual costs depend on final dimensions and quality settings.
