# Raptric Website — Task Breakdown (v2)

Local tracking, no Asana. This replaces the v1 task list — the operating-system-builder build (ladder, LinkOS, GuestSquad, Capabilities/Platforms nav) was discarded 2026-07-02 and its pages/components deleted. See [BRIEF.md](./BRIEF.md) v2 for the authoritative spec.

## 1. Docs — ✅ Done
BRIEF.md replaced, PRD.md and this file rewritten for the 5-service architecture.

## 2. Design tokens — modern AI SaaS system
- Near-black + near-white base, single indigo/violet accent, used sparingly
- Keep Space Grotesk (headline) + IBM Plex Mono (tags/labels) from v1 — still fits, not part of what was criticized
- Dark hero section, light body sections (premium-whitespace pattern common to Linear/Vercel-tier product sites)

## 3. Nav + footer
- Nav: logo left, `AI Automation / SaaS Development / Customer Operations / Business Operations / Technology Advisory`, **Let's Talk** CTA right
- Footer: About, Insights, Privacy Policy, Terms (Privacy/Terms link out but pages not built — no legal copy supplied)

## 4. Illustration system
- Workflow/orchestration diagrams, dashboard-card mockups, automation "signal" graphics
- New visual language — explicitly not the old ladder/blueprint style
- Reused across homepage + all 5 service pages so it reads as one system, not decoration bolted on once

## 5. Homepage — 7 sections, no more
1. Hero — headline, support copy, primary + secondary CTA, right-side visual composition
2. What Raptric Does
3. Core Areas — 5 cards linking to service pages
4. Why Raptric
5. Problems We Solve
6. How We Work
7. Let's Talk

## 6. Five service pages (shared template)
`/ai-automation` `/saas-development` `/customer-operations` `/business-operations` `/technology-advisory`

Each: H1, intro, what this covers, problems solved, example workflows/use cases, why Raptric is credible, CTA. Copy expands the bullet fragments given in BRIEF.md §Core Areas — no invented metrics or client names.

## 7. Contact + Insights
- `/contact` is the "Let's Talk" destination (kept from v1, restyled to match new system)
- `/insights` stays, moved out of top nav into footer only; MDX pipeline from v1 is reused as-is

## 8. QA
- [ ] Grep sweep: banned phrases, DentOS/TransData
- [ ] Composition check: no section pattern repeated more than twice in a row anywhere on the site
- [ ] Build + lint clean
- [ ] Responsive check: mobile / tablet / desktop
- [ ] Visual review of every page before calling it done
