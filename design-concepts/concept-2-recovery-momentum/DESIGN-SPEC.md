# DESIGN-SPEC — Concept 2: Recovery Momentum

## Aesthetic Direction
- Axis variation: mood — warm energy, forward motion, hopeful recovery
- Concept brief: Recovery Momentum meets patients where they are emotionally — in pain and seeking hope — and shows them a clear path forward. The visual language uses warm navy as a trustworthy foundation, gold accents that suggest value and resolution, and imagery that centers the patient-provider relationship rather than sterile equipment. Split-screen composition shows the doctor actively working beside the patient. Journey-step indicators (1→2→3) make the recovery process feel navigable and achievable. This concept converts well for patients who have been suffering and just want a practice they can trust.
- Reference influence: taste-skill split-screen anti-center-bias rule, emilkowalski "beauty is leverage" principle for human connection, taste-skill warm gray neutral scale (not cool gray — matches warmth of gold accent)

## Typography (taste-skill rules)
- Display font: Satoshi — https://www.fontshare.com/fonts/satoshi (free)
- Body font: Plus Jakarta Sans — https://fonts.google.com/specimen/Plus+Jakarta+Sans
- Type scale (rem): 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64 / 96 / 128
- Hero H1 size class: text-7xl (72px), font-bold, leading-tight
- Section H2 size class: text-4xl (36px), font-bold
- Letter-spacing: -0.02em hero / 0 body / 0.05em uppercase eyebrows
- Line-height: 1.1 hero / 1.6 body

## Color System
- Primary hex: #1B3A5C — role: hero panel background / nav / primary sections
- Accent hex: #C8A04A — role: CTA buttons / eyebrow text / stat highlights / gold badge borders
- Secondary hex: #0E7C9E — role: links / icon fills / secondary tags / teal trust indicators
- Neutral light: #FBF7EF — role: warm white section backgrounds / card fills
- Neutral dark: #0F1F30 — role: deepest backgrounds / footer / darkest text
- Body text: #2C3E50 — role: paragraph text on light backgrounds
- Brand-colored shadow: rgba(200, 160, 74, 0.15) for `shadow-brand`, rgba(200, 160, 74, 0.25) for `shadow-brand-lg`

## Motion Vocabulary (emilkowalski-inspired, GSAP-implemented)
- **Hero entrance:** Staggered GSAP reveal — eyebrow fades in `autoAlpha: 0→1`, then H1 slides up `y: 20→0, autoAlpha: 0→1` with `duration: 0.6, ease: 'power3.out'`. CTA button follows with `delay: 0.3`. Journey steps (1, 2, 3) stagger in last with `stagger: 0.12, y: 10→0`.
- **Scroll reveals:** Section `autoAlpha: 0→1` + `y: 24→0` on ScrollTrigger `start: 'top 82%'`, `ease: 'power3.out'`, `duration: 0.65`. Card grids use `stagger: 0.08` per card child.
- **Hover micro-interactions:**
  - Primary gold CTA: `gsap.quickTo` magnetic offset on hover — `gsap.quickTo(btn, 'x', {duration: 0.3, ease: 'power3'})` + slight `y` lift. Shine sweep on `mouseenter` from left pseudo-element.
  - Service cards (bento): `scale: 1→1.02` + warm gold `shadow-brand-lg` grow, `duration: 0.25, ease: 'power2.out'`
  - Provider cards: `y: 0→-6` lift + shadow expand, `duration: 0.2, ease: 'power2.out'`
- **Section transitions:** Gentle gradient fade between warm white and warm navy sections. No hard dividers — `bg-gradient-to-b from-[#FBF7EF] to-[#1B3A5C]` transition band.
- **Journey steps counter:** Numbers (1, 2, 3) and connecting arrows animate in sequence — each number scale `0.8→1` + arrow `scaleX: 0→1` from left, stagger 0.2s, on ScrollTrigger enter.
- **Page transitions:** Gold-tinted warm overlay — `autoAlpha: 0→1` on `astro:before-swap`, dissolve on `astro:after-swap`. More subtle than hard wipe — `duration: 0.35, ease: 'power2.inOut'`.
- **Toast / Notification:** Form submit success — sonner-inspired `y: 100→0, autoAlpha: 0→1`, warm gold border, `ease: 'back.out(1.7)', duration: 0.4`. Stack-of-cards positioning for multiple toasts.

## Section Spacing Rules (taste-skill)
- Section padding: `py-24` desktop (`96px`) / `py-16` mobile (`64px`)
- Container max-width: `max-w-prose` for body text / `max-w-7xl` for grids
- Bento gap: `gap-6` for bento service grid (breathable)

## Component Pattern Library (emilkowalski)
- Card style: Warm white `#FBF7EF` background + subtle warm shadow `shadow-[0_2px_20px_rgba(200,160,74,0.12)]` + `border border-amber-100`. Featured cards get background photo overlay with warm dark gradient.
- Button style: Primary — warm gold gradient `bg-gradient-to-r from-[#C8A04A] to-[#B08A3A]` with white text + magnetic hover effect via `gsap.quickTo`. Secondary — warm navy `bg-[#1B3A5C]` with white text + teal border accent.
- Form fields: Clean white + warm gray border `border-gray-200` + gold focus ring `focus:ring-2 focus:ring-[#C8A04A]/30` + gold focus border `focus:border-[#C8A04A]`
- FAQ accordion: Gold plus → minus transition. `gsap.timeline()` — icon `rotation: 0→45` + content `height: 0→auto` simultaneously, `duration: 0.3, ease: 'power2.out'`. Text fades in at 0.1s delay.
- Section dividers: Smooth gradient-fade bands between light and dark sections. No hard SVG dividers.
- Provider cards: Warm white card, headshot in rounded-lg frame with gold border `border-2 border-[#C8A04A]`, credential chips in teal+navy.

## Anti-patterns for this concept
- No cold electric teal as primary accent — teal (#0E7C9E) is secondary only; gold (#C8A04A) leads
- No sharp angular clip-paths — this concept uses soft gradient transitions, rounded corners (`rounded-2xl`), and warm tone throughout
- No dark-dominant sections except footer — the primary surface is warm white or warm navy; avoid near-black backgrounds
- No CSS @keyframes — GSAP only for all animations
