# DESIGN-SPEC — Concept 1: Clinical Command

## Aesthetic Direction
- Axis variation: mood — cold precision authority
- Concept brief: Clinical Command positions St. Louis Pain Center as an elite, no-nonsense pain management authority. The visual language borrows from high-end neuroscience institutes and aerospace engineering: deep navy backgrounds command instant gravitas, electric teal accents cut through the dark with precision, and angular geometry (diagonal clip-paths, sharp dividers) signals decisive expertise. Typography is large, bold, and uncompromising. Stats are oversized. Every element says: we know exactly what we're doing and we will fix your pain.
- Reference influence: taste-skill DESIGN_VARIANCE:8 (asymmetric layouts, massive contrast), taste-skill anti-center-bias rule enforced (all hero text left-aligned), emilkowalski "unseen details compound" — teal glow shadows on cards, 1px inner border on glass nav elements

## Typography (taste-skill rules)
- Display font: Cabinet Grotesk — https://www.fontshare.com/fonts/cabinet-grotesk (free)
- Body font: Outfit — https://fonts.google.com/specimen/Outfit
- Type scale (rem): 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64 / 96 / 128
- Hero H1 size class: text-8xl (96px), font-black, leading-none, tracking-tight
- Section H2 size class: text-5xl (48px), font-bold
- Letter-spacing: -0.03em hero / 0 body / 0.08em uppercase eyebrows
- Line-height: 1.0 hero / 1.5 body

## Color System
- Primary hex: #0A1E3C — role: primary hero background / nav / 60%+ surfaces
- Accent hex: #00B8D4 — role: CTA buttons / stat numbers / card borders / hover states
- Secondary dark: #152436 — role: card backgrounds / alternating sections
- Neutral light: #EDF2F7 — role: light section backgrounds / input fields
- Neutral dark: #071429 — role: deepest backgrounds / footer
- White: #FFFFFF — role: primary text on dark backgrounds
- Brand-colored shadow: rgba(0, 184, 212, 0.15) for `shadow-brand`, rgba(0, 184, 212, 0.25) for `shadow-brand-lg`

## Motion Vocabulary (emilkowalski-inspired, GSAP-implemented)
- **Hero entrance:** Word-by-word clip-up reveal on H1. Each word wrapped in `overflow-hidden` span; `clipPath: 'inset(0 0 100% 0)' → 'inset(0 0 0% 0)'` with `stagger: 0.06`, `duration: 0.7`, `ease: 'power4.out'`. Eyebrow fades in 200ms before H1 starts.
- **Scroll reveals:** Section opacity 0→1 + `y: 30→0` on ScrollTrigger `start: 'top 80%'`, `ease: 'power3.out'`, `duration: 0.7`. Every `.section-reveal` class gets this treatment.
- **Hover micro-interactions:**
  - Primary teal buttons: shine sweep timeline — `gsap.timeline({paused:true})` with pseudo-element translating x from -100%→100% on mouseenter, `duration: 0.5, ease: 'power2.inOut'`
  - Service cards: `y: 0 → -4` + teal `shadow-brand-lg` grow via `boxShadow` tween, `duration: 0.2, ease: 'power2.out'`
  - Nav links: underline-reveal via `scaleX: 0→1` pseudo-element from left, `duration: 0.2, ease: 'power2.out'`
- **Section transitions:** Angular SVG diagonal divider — dark navy angled into next section at 3deg. Clip-path on hero-bottom: `polygon(0 0, 100% 0, 100% 90%, 0 100%)`
- **Stats counter:** Count-up from 0 to target value on ScrollTrigger enter. `gsap.to({val: 0}, {val: 500, duration: 2, ease: 'power2.out', onUpdate: () => el.textContent = Math.round(obj.val) + '+'})`. Progress fill bar animates width simultaneously.
- **Page transitions:** `PageTransition.astro` — navy overlay slides in from bottom (`y: 100%→0`) on `astro:before-swap`, then `y: 0→-100%` on `astro:after-swap`. Duration 0.4s `power4.inOut`.
- **Modal / Drawer:** Mobile nav — full-screen overlay slides in from right `x: 100%→0`, `ease: 'power4.out'`, `duration: 0.4`. Scrim fades in parallel `autoAlpha: 0→0.6`.

## Section Spacing Rules (taste-skill)
- Section padding: `py-28` desktop (`112px`) / `py-16` mobile (`64px`)
- Container max-width: `max-w-prose` for body text / `max-w-7xl` for grids
- Bento gap: `gap-4` for service cards

## Component Pattern Library (emilkowalski)
- Card style: Dark steel `#152436` + electric teal left-border `border-l-4 border-teal-400` + teal glow shadow `shadow-[0_4px_24px_rgba(0,184,212,0.15)]`
- Button style: Primary — teal gradient `bg-gradient-to-r from-[#00B8D4] to-[#0099B5]` + shine sweep on hover. Secondary — transparent with teal border, border-fill animation on hover (background fills teal, text goes white)
- Form fields: Dark background `#152436` + teal focus border `focus:border-teal-400` + teal focus glow `focus:ring-1 focus:ring-teal-400/30`
- FAQ accordion: Plus icon rotates 45° to × on open via `gsap.to(icon, {rotation: 45, duration: 0.2})`. Content height animates via GSAP `{height: 'auto', duration: 0.35, ease: 'power2.out'}`. Text fades in with 100ms delay after height opens.
- Section dividers: Angular dark navy diagonal clip-path between sections
- Grain overlay: Fixed `pointer-events-none` pseudo-element, SVG noise, `opacity: 0.04`, `mix-blend-mode: overlay`

## Anti-patterns for this concept
- No centered hero text — H1 and all hero content MUST remain left-aligned in the 45% left column
- No default gray shadows — all shadows MUST use teal-tinted rgba values (`rgba(0, 184, 212, x)`)
- No CSS @keyframes — GSAP only for all animations; no `animation:` property in CSS
- No warm color temperatures — this concept is cool and clinical throughout; no golds, ambers, or warm tones
