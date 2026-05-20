# CLAUDE.md — Operating instructions for Claude Code in this Core 30 project

This file is auto-loaded on every Claude Code session opened in this project directory. **Read it first.** These are instructions to you (Claude Code), not documentation about the project.

The project was built by the Paperclip Core 30 factory (5 agents, 10 skills). This file plus `BUILD-MANIFEST.md` and `BUILD-LOG.md` together let you operate safely without reverse-engineering what the factory did.

---

## 1. Read order on session start

Every session, before touching any file:

1. Read this `CLAUDE.md` completely
2. Read `BUILD-MANIFEST.md` completely — it is the authoritative state snapshot
3. Read the last 3–5 entries of `BUILD-LOG.md` — they show what changed since the last full Paperclip rebuild
4. Spot-check `/design-concepts/APPROVED/DESIGN-SPEC.md` if the task touches visual / typography / motion

Do NOT skip this read order. The factory produces ~15 artifact files; without the manifest you cannot tell which are authoritative vs intermediate-stage.

---

## 2. What this project is

- A healthcare practice website built with the **Core 30 entity-matched reverse-silo framework**
- Stack: **Astro + Tailwind + Cloudflare Pages** (static output on `COR-65-phase-2` branch)
- Animation: **GSAP only** — never `motion`, `motion/react`, or `framer-motion`
- Schema: **Individual `.astro` components in `src/components/schemas/`** — never centralized in `src/utils/schema.ts`
- Build classification: **Local Clinic** (single GBP location, St. Louis MO)
- Build type: **migration** (from existing stlpaincenter.com)

The build went through 6 phases with 3 gates. Phase 7 = client handoff after PR merge.

---

## 3. Locked-in decisions (do not reverse without Paperclip rebuild)

| Decision | What it is | Why locked |
|---|---|---|
| Design concept | Concept 2 — Recovery Momentum | Bobbee approved 2026-05-19 at Gate 1.5 |
| Brand colors | Navy #1B3A5C + Gold #C8A04A | Design spec + all generated images built around these |
| GBP CID | 8132065016093573560 | Administrator-approved 2026-05-19; in schema sameAs |
| GBP PlaceID | ChIJq0jNS0XHjocRGKPjbu4A2nA | Administrator-approved; in hasMap URL |
| NAICS code | 621111 | Pain Management §6 lookup |
| Institutional anchor | Washington University School of Medicine | Agent-selected, Bobbee approved 2026-05-19 |
| Semantic reviews | 6 reviews from real GBP (see BUILD-MANIFEST §2.3) | FTC / Google policy — verbatim only |
| No provider pages | Gate 1 decision 2026-05-19 | Client not ready to list providers yet |
| Image model snapshot | gpt-image-2-2026-04-21 | All 47 images generated with this snapshot |

---

## 4. Architecture overview

- **38 pages total** across: 1 homepage, 2 category pages, 11 service pages, 13 condition pages, 5 comparison pages, 6 standard pages
- **URL structure:** `/[category-slug]/[service-slug]/` for services; `/conditions/[slug]/` for conditions; `/compare/[a]-vs-[b]/` for comparisons
- **Category slugs:** `pain-control/`, `orthopedic/`, `weight-loss/`, `sports-medicine/`
- **No provider pages** in this build phase (Gate 1 decision)
- **Nav structure:** Logo | Services▾ | Conditions▾ | About | Providers | Contact | CTA
- Full page list: see `ARCHITECTURE.md`

---

## 5. What you can edit locally vs what requires rebuild

### Safe to edit locally (Claude Code direct edit OK):
- Page content in `src/content/` — body text, FAQ answers, meta descriptions, H1s
- Component styling that matches DESIGN-SPEC (tweak padding, spacing, responsive breakpoints)
- GSAP animation parameters (duration, ease, stagger values)
- `public/_redirects` — to add or fix redirects (flag for QA re-audit after)
- Blog posts (if Phase 2 blog is added)

### Always check BUILD-MANIFEST §6 before touching:
- Any testimonial / review text → verbatim-locked from real GBP
- Any institutional anchor phrasing → neutral-proximity rule enforced
- CID + PlaceID URLs in schema components → locked from ENTITY-VARIABLES
- GBP category exact names in H1/H2/breadcrumb/schema → character-for-character

### Requires Paperclip rebuild (escalate — do not DIY):
- Architecture changes (new pages, moved URLs)
- Adding or replacing GBP locations
- Swapping the institutional anchor
- Adding provider pages
- New semantic reviews (new approval required)
- Changing the design concept

---

## 6. Schema safety rules

1. **Never create `src/utils/schema.ts`** — schema logic belongs in individual `.astro` files under `src/components/schemas/`
2. **Never use `new Date()`** in schema components — `dateModified` must come from page frontmatter `lastEdited`
3. **Never use relative `@id`** — all `@id` values must be absolute URLs
4. **Bidirectional pairs** — if you change a TherapeuticProcedure `indication`, update the MedicalCondition `possibleTreatment` too (see BUILD-MANIFEST §5)
5. **Reviews on the right schema type** — LocalBusiness reviews for homepage only; TherapeuticProcedure reviews for service pages

---

## 7. Animation / GSAP rules

1. **GSAP only** — `gsap` + `gsap/ScrollTrigger` via `import { gsap } from 'gsap'` in client `<script>` tags
2. **Wrap in `astro:page-load`** — all GSAP init must be inside `document.addEventListener('astro:page-load', () => { ... })`
3. **Clean up on `astro:after-swap`** — `ScrollTrigger.getAll().forEach(t => t.kill())`
4. **Honor `prefers-reduced-motion`** — `if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;`
5. **No CSS @keyframes** for motion — use GSAP timelines

---

## 8. Images

All images are in `public/images/`. Subdirectories: `homepage/`, `pain-control/`, `orthopedic/`, `conditions/`, `compare/`, `about/`, `new-patients/`, `weight-loss/`, `sports-medicine/`, `gbp-posts/`, `brand/`.

- **Format:** WebP at quality 85
- **Naming:** `[descriptor]-[city-slug]-[state-abbrev].webp` (e.g., `nerve-blocks-st-louis-mo.webp`)
- **Hero images:** must have `fetchpriority="high"` and `loading="eager"` — never `loading="lazy"`
- **Alt text:** always include — descriptive, includes service/condition + city

### 8.5 Provider headshots (future phase)
When client supplies real provider headshots: run through EDIT-1 (gpt-image-2 edit — background cleanup, brand color grade). Verify identity preserved before shipping.

---

## 9. Deployment

- **Remote:** `preview` → https://github.com/gonacho/stl-pain-v3-preview.git
- **Branch:** `COR-65-phase-2` (build branch — open PR to `main` to deploy)
- **Platform:** Cloudflare Pages
- **Build command:** `pnpm build`
- **Output dir:** `./dist`

---

## 10. Known issues to fix in next iteration

1. **`astro.config.mjs` `output: 'static'`** — should be `output: 'hybrid'` per Core 30 spec. No functional impact for current static build but should be updated before adding any SSR endpoints.
2. **`<ClientRouter />` FIXED in COR-85** — `import { ClientRouter } from 'astro:transitions'` is now in `BaseLayout.astro` `<head>`. Page transitions are functional.
3. **image-sitemap.xml absent** — add to `astro.config.mjs` integrations for Google image indexing.
4. **Insurance acceptance list (P0)** — client must verify full list of accepted insurance plans before next Paperclip rebuild.

---

<!-- USER-MAINTAINED -->

*No user-maintained notes at this time. This section is preserved across all Paperclip rebuilds.*

<!-- END USER-MAINTAINED -->
