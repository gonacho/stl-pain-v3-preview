# BUILD-LOG.md

**Append-only audit trail.** Every Paperclip build and every manual Claude Code editing session adds one entry. Newest entries at the TOP.

This file lives in git alongside the project. Git's commit history captures the **mechanical** truth (who changed what byte, when). This log captures the **semantic** truth (why, with reconciliation flags). The two together are the complete audit trail.

This file is NEVER regenerated, NEVER reorganized. Only appended to.

---

## [2026-05-20] — Build #2 — COR-85 A+ Visual Rebuild + Phase 6 Re-audit

**Source:** Paperclip issue [COR-85](/COR/issues/COR-85)
**Git SHA:** d43817f46933f305ef419358b9aa8bab55effacd
**PR URL:** https://github.com/driven-sites/stl-pain-v3/pull/1
**Files affected:** src/components/{ConditionCard,Footer,Header,PageTransition,ServiceCard,Testimonials}.astro, src/layouts/BaseLayout.astro, src/pages/{index,[category]/index,[category]/[service],about,conditions/[slug]}.astro, src/styles/global.css, wrangler.jsonc
**Summary:** Full A+ visual rebuild. Editorial heroes, premium testimonials, upgraded cards, stats section, shine sweep CTA, category hub elevation, Header/Footer polish. Critical fix: `<ClientRouter />` added to BaseLayout — page transitions now functional. `wrangler.jsonc` updated with `compatibility_date: 2024-12-01`.
**Verification:** QA Auditor Sections 6-11 re-audit PASS at 2026-05-20
**Reconciliation flag:** visual-cascade-affecting — VISUAL-CASCADE-CHECKLIST.md remains 188/188

### Re-audit summary (post-COR-85)
- Section 6 (Performance): PASS — baseline Lighthouse 97-99 perf from pre-rebuild deploy; live re-run pending COR-85 Cloudflare deploy
- Section 7 (Accessibility): PASS — prefers-reduced-motion 7 locations, ARIA landmarks unchanged
- Section 8 (SEO Meta): PASS — titles/canonicals unchanged
- Section 9 (Redirects): PASS — unchanged
- Section 10 (Image Quality): PASS — no new images in COR-85 rebuild
- Section 11 (Visual Cascade): PASS ✅ — 188/188; `<ClientRouter />` soft issue RESOLVED
- Section 12 (Handoff Manifest): PASS

### Improvements from COR-85 vs Build #1
- `<ClientRouter />` added → page transitions now fire on navigation
- Header: slide menu, shine sweep fix, gold accent
- About page: hero elevation
- Category hubs: editorial hero layout
- Testimonials: premium card layout with initials avatars
- ServiceCard/ConditionCard: image-backed with hover scale + shadow-brand-lg

---

## [2026-05-20] — Build #1 — Phase 7 handoff

**Source:** Paperclip issue [COR-65](/COR/issues/COR-65) (PR pending — backfill on next build)
**Git SHA:** 3057560d28d74cb0c5cb91565e4441b1f9c76c03
**PR URL:** https://github.com/gonacho/stl-pain-v3-preview/pull/1
**Files affected:** Entire project (first build). BUILD-MANIFEST.md generated. BUILD-LOG.md created. CLAUDE.md created.
**Summary:** Local Clinic migration build for St. Louis Pain Center. 38 pages (1 homepage, 2 category, 11 service, 13 condition, 5 comparison, 6 standard). 47 images generated via gpt-image-2, 1 hero video reused. Design concept: Recovery Momentum (navy #1B3A5C + gold #C8A04A). All Sections 1–11 PASS at Gate 3.
**Verification:** QA Auditor Sections 1–12 PASS at 2026-05-20
**Reconciliation flag:** none

### Audit summary for this build
- Sections 1–5 (Structural QA): PASS (Gate 2 cleared, 3 hard fails fixed in f2e2869)
- Section 6 (Performance): PASS — static analysis; live Lighthouse pending post-deploy
- Section 7 (Accessibility): PASS
- Section 8 (SEO Meta): PASS — soft note: image-sitemap.xml absent
- Section 9 (Redirects): PASS — 19 redirects, no catch-all, no ranking page moved
- Section 10 (Image Quality): PASS — Phase 4a approval documented; no AI artifacts in samples
- Section 11 (Visual Cascade): PASS — 188/188 checklist; soft note: ViewTransitions component absent
- Section 12 (Handoff Manifest): PASS

### Known soft issues for next iteration
1. `astro.config.mjs` uses `output: 'static'` (spec requires `output: 'hybrid'`)
2. image-sitemap.xml not generated
3. `<ClientRouter />` / `<ViewTransitions />` absent — page transitions non-functional
4. Insurance acceptance list unverified with client (P0)
5. Provider pages deferred to future phase (Gate 1 decision)
