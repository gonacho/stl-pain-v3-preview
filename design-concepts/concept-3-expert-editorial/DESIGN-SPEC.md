# DESIGN-SPEC — Concept 3: Expert Editorial

## Aesthetic Direction
- Axis variation: mood — cerebral authority, sophisticated editorial expertise
- Concept brief: Expert Editorial positions St. Louis Pain Center as a publication of record for pain management knowledge in St. Louis — not just a clinic, but a thought leader. The visual language is borrowed from premium medical journals and longform editorial sites like STAT News or JAMA.org: near-black backgrounds with cream typography on feature sections, editorial serif-sans font pairing, photographic journalism aesthetic (high-contrast, not stock-photo), and generous whitespace that signals intellectual confidence. This concept positions Dr. Arconati's expertise as the primary brand asset and appeals to patients who research extensively before choosing a provider.
- Reference influence: taste-skill DESIGN_VARIANCE:8 (editorial asymmetry), taste-skill anti-AI-typography rules (Playfair Display + Satoshi for mixed serif/sans hierarchy), emilkowalski "unseen details compound" — the mix of editorial typographic scale and dark/light section rhythm creates a distinctive identity that patients won't find at a typical clinic website

## Typography (taste-skill rules)
- Display font: Playfair Display (serif for H1 italic emphasis) + Satoshi (sans for bold display) — mixed pairing. Google Fonts: https://fonts.google.com/specimen/Playfair+Display, https://www.fontshare.com/fonts/satoshi
- Body font: Satoshi Regular / DM Sans — https://fonts.google.com/specimen/DM+Sans
- Type scale (rem): 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64 / 96 / 128
- Hero H1 size class: text-7xl (72px). Typographic mix: "Pain Control" in Satoshi bold (near-black), "Clinic." in Playfair Display italic (same size). Creates editorial tension.
- Section H2 size class: text-5xl (48px), Satoshi bold
- Letter-spacing: -0.02em hero / 0 body / 0.06em uppercase eyebrows (spaced-out small-caps feel)
- Line-height: 1.05 hero / 1.6 body (generous editorial leading)

## Color System
- Primary hex: #F0EEE9 — role: hero surface / light section backgrounds / primary text areas (inverted — light is primary)
- Dark hex: #0D0D0D — role: near-black text / alternating dark sections / footer
- Accent hex: #2B4EAF — role: editorial blue for links / highlights / section titles / CTA buttons
- Secondary hex: #0A8C7E — role: teal for specialty tags / credential badges / secondary links
- Mid-gray: #7A7A7A — role: body text paragraphs / bylines / meta text
- Off-white card: #FFFFFF — role: card fills on dark sections
- Brand-colored shadow: rgba(43, 78, 175, 0.12) for `shadow-brand`, rgba(43, 78, 175, 0.22) for `shadow-brand-lg`

## Motion Vocabulary (emilkowalski-inspired, GSAP-implemented)
- **Hero entrance:** Editorial reveal — full-bleed photo fades in `autoAlpha: 0→1, duration: 0.8`. Overlapping content card slides up `y: 40→0, autoAlpha: 0→1, delay: 0.3, duration: 0.7, ease: 'power3.out'`. H1 text (split-line by line) reveals with `stagger: 0.1` per line.
- **Scroll reveals:** `clipPath: 'inset(0 0 100% 0)' → 'inset(0 0 0% 0)'` for editorial headings — reveals from top down like a page printing. Body text fades `autoAlpha: 0→1, y: 16→0`. ScrollTrigger `start: 'top 80%'`.
- **Hover micro-interactions:**
  - Primary blue buttons: Border-fill animation — on hover, background fills from left `scaleX: 0→1` behind text (editorial blue), text color inverts white. `duration: 0.25, ease: 'power2.inOut'`.
  - Editorial service rows: Left border `scaleY: 0→1` from top animation + row background lightens slightly. `duration: 0.2`.
  - Provider photo: Subtle `scale: 1→1.03` zoom + editorial blue border appears, `duration: 0.3, ease: 'power2.out'`
- **Section transitions:** Hard cut between dark #0D0D0D and light #F0EEE9 sections — no gradient, no SVG divider. The bold alternation IS the design statement. A thin 1px editorial blue line (`border-t border-[#2B4EAF]`) marks section boundaries on dark→light transitions.
- **Quote pullout:** Editorial doctor quote in dark section — quotation mark character scales in from `scale: 2→1, opacity: 0→1` as scroll reveal. Quote text fades line by line.
- **Page transitions:** Clean white flash `autoAlpha: 0→1` on `astro:before-swap` (newspaper page turn metaphor), then `autoAlpha: 1→0` on `astro:after-swap`. Duration 0.25s — fast and editorial.
- **FAQ accordion:** Hairline plus `+` → `−` swap (no rotation — editorial text swap). Content height expands with `ease: 'power2.out', duration: 0.35`. Text reveals with 80ms delay.

## Section Spacing Rules (taste-skill)
- Section padding: `py-32` desktop (`128px`) / `py-20` mobile (`80px`) — editorial breathing room
- Container max-width: `max-w-prose` (65ch) for body text passages / `max-w-6xl` for editorial layouts
- Bento gap: `gap-0` for service rows (hairline dividers only, no gaps)

## Component Pattern Library (emilkowalski)
- Card style: On dark sections — bright white card `bg-white` with blue left-border accent `border-l-2 border-[#2B4EAF]` and editorial shadow. On light sections — subtle off-white `bg-gray-50` with hairline border.
- Button style: Primary — editorial blue `bg-[#2B4EAF]` solid fill, white text, `rounded-none` (no border-radius — editorial square corners). Hover: brightness increase. Secondary — outlined, blue border with border-fill animation.
- Form fields: Minimal underline-style inputs (`border-b border-gray-300`, no box), blue focus border, clean and editorial
- FAQ accordion: Pure text-based `+`→`−` symbol swap. No icons — editorial discipline.
- Section dividers: Hard section cuts (no SVG waves). Thin 1px blue rule on dark→light transitions only.
- Provider feature: High-contrast editorial headshot treatment (near B&W with blue accent highlight), name in editorial serif, credentials in blue small-caps.

## Anti-patterns for this concept
- No rounded corners on primary buttons or large containers — `rounded-none` is the editorial standard here; only images and provider headshots may use `rounded-lg`
- No warm tones (no gold, no amber, no warm gray) — this concept is cool: cream + near-black + editorial blue
- No card-heavy grid layouts — editorial rows and editorial asymmetry; grids only for provider cards
- No CSS @keyframes — GSAP only for all animations
- No gradient backgrounds — hard color block alternation only

## Replacement Section (Gate 1 Update)
- File: `section-conditions.webp` (replaces `section-providers.webp` — Gate 1 decision: no providers listed at this stage)
- Conditions We Treat — editorial list-row layout of all 13 condition pages. Each row: condition name + category tag (NEUROLOGICAL / MUSCULOSKELETAL / SPINE / PAIN MANAGEMENT) + one-line description + blue arrow. Hairline dividers only, no cards.
