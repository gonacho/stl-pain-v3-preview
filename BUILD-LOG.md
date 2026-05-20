# BUILD-LOG.md

**Append-only audit trail.** Every Paperclip build and every manual Claude Code editing session adds one entry. Newest entries at the TOP.

This file lives in git alongside the project. Git's commit history captures the **mechanical** truth (who changed what byte, when). This log captures the **semantic** truth (why, with reconciliation flags). The two together are the complete audit trail.

This file is NEVER regenerated, NEVER reorganized. Only appended to.

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
