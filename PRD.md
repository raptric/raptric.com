# Raptric Website — Product Requirements Document (v2)

Source of truth for rules/spec: [BRIEF.md](./BRIEF.md) (v2 — supersedes the original operating-system-builder brief, discarded 2026-07-02). See [TASKS.md](./TASKS.md) for the execution breakdown.

## 1. Product Overview

A modern, lean, high-trust marketing site presenting Raptric as an AI automation and systems specialist. Five service areas — AI Automation, SaaS Development, Customer Operations, Business Operations, Technology Advisory — form both the navigation and the site architecture. Homepage stays lean (6–7 sections); depth lives on five dedicated service pages.

## 2. Site Map

```
/                       Homepage
/ai-automation          Service page
/saas-development       Service page
/customer-operations    Service page
/business-operations    Service page
/technology-advisory    Service page
/contact                "Let's Talk" destination (linked from header CTA)
/insights               Field notes index (footer link, not top nav)
/insights/[slug]        Insight entry
```

Privacy Policy / Terms are referenced as footer link targets but not built yet — no legal copy has been supplied, and it isn't safe to invent it. Flagged as a follow-up, not a blocker.

## 3. Technical Requirements

- Next.js (App Router) + TypeScript, Tailwind v4 (CSS-first tokens), unchanged from v1 scaffold
- New design tokens: near-black + near-white base, single indigo/violet accent used sparingly, kept out of `tailwind.config` (Tailwind v4 default palette already stripped via `@theme { --color-*: initial }`)
- Space Grotesk (headline/UI) + IBM Plex Mono (tags/technical labels) — kept from v1, still fits an "AI SaaS" register
- Custom SVG illustration system: workflow/orchestration diagrams, dashboard-card mockups, automation signal graphics — new visual language, not the discarded ladder/blueprint motif
- No stock photography, no generic icon packs, no carousels, no heavy scroll gimmicks
- Responsive: desktop/tablet/mobile, hero must read as intentional at every breakpoint (lesson carried over from v1 QA)

## 4. Content Rules

- Never mention DentOS or TransData, in any form
- No invented stats, client names, testimonials, or logos
- No pricing/tiers
- Banned phrases: "best in class," "cutting-edge solutions," "one-stop shop," "innovative digital agency," and similar hype/filler
- Tone: technical operator / systems thinker / founder — short paragraphs, confident simplicity, no exaggeration

## 5. Acceptance Criteria

- [ ] Nav is exactly: AI Automation, SaaS Development, Customer Operations, Business Operations, Technology Advisory — logo left, "Let's Talk" CTA right
- [ ] Homepage has exactly 7 sections per brief, no service-encyclopedia sprawl
- [ ] Each of the 5 service pages has: H1, intro, what this covers, problems solved, example workflows/use cases, why Raptric is credible, CTA
- [ ] Illustration system reads as one coherent visual language across every page — no page relies on plain repeated text blocks alone (this was the explicit failure mode of the previous design)
- [ ] No page reuses the same section composition more than twice in a row — layouts vary (alternating alignment, card grids, full-width breaks)
- [ ] Zero banned words/phrases, zero DentOS/TransData references (grep-verified)
- [ ] No stock photography, generic icon packs, or carousels anywhere
- [ ] Responsive at mobile/tablet/desktop, verified visually per page
- [ ] Production build + lint pass clean

## 6. Timeline

Single continuous build session — docs, tokens, nav/footer, illustration system, homepage, 5 service pages, QA. No phased rollout requested.

## 7. Risks

| Risk | Mitigation |
|---|---|
| Repeating the v1 mistake (monotonous repeated block pattern) | Explicit acceptance criterion above; vary composition per section; illustration on nearly every major section |
| Inventing content not in the brief (metrics, case studies, legal pages) | Stick to brief's bullet fragments per service area; flag legal pages as not-built rather than fabricating them |
| Founder background / prior-employer references | Standing rule carried over — never DentOS/TransData, no invented case studies |
