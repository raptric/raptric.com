# Project Metadata

TRACKING_MODE: LOCAL (no Asana — user opted out of Asana workflow for this project)
COMPANY: Elandz
PROJECT_NAME: Raptric Website
PROJECT_STATUS: IN DEVELOPMENT — v3 master brief, Phase 1 in progress (2026-07-04)

GITHUB_REPO_NAME: raptric/raptric.com (GitHub) — Vercel project `raptric-com`, deployed via `main` (production → raptric.com) and `staging` (→ staging.raptric.com)

# v3 — Master Build Brief (current, supersedes v2 nav/IA)

[BRIEF-v3-master.md](./BRIEF-v3-master.md) is now the authority for navigation, information architecture, SEO strategy, and page-by-page content direction. v2's positioning language ("operating systems for business workflows") is KEPT — v3 explicitly praises it as strong — but the service-line structure changes:

**New nav (6 items):** AI Automation · Support Operations · Engineering Team · Solutions · About · Contact — replaces the v2 5-item nav (AI Automation/SaaS Development/Customer Operations/Business Operations/Technology Advisory).

**Content remapping (confirmed 2026-07-04):**
- v2 Customer Operations content (Customer Support, Tech Support, Onboarding, Communication) → folds into new `/support-operations/`
- v2 Business Operations technical content (QA, Dev Staff Augmentation, Application Support) + v2 SaaS Development → folds into new `/engineering-team/`
- CRM Support & Administration → moves to new `/solutions/` (back-office solution)
- Technology Advisory as a standalone nav item is dropped per brief (folds into Engineering Team framing / Solutions where relevant)

**Build sequence — phased, committed and pushed to `staging` separately per phase, user reviews between phases:**
- Phase 1 (current): Homepage, `/ai-automation/`, `/support-operations/`, `/engineering-team/`, `/solutions/` (parents only, no children yet), `/about/` (new), `/contact/` (fix — add missing H1), `robots.txt`, `sitemap.xml`, canonical/OG/JSON-LD infra
- Phase 2 (not started): 8 named child pages (AI Automation Services, n8n Automation Agency, Customer Support Outsourcing, Technical Support Outsourcing, Software Development Partner, Staff Augmentation Services, SaaS Development Services, AI Customer Support Services)
- Phase 3 (not started): remaining child pages, solution pages, case studies, insights program expansion

Do not build Phase 2/3 pages until explicitly asked — user wants to review each phase on staging before the next starts.

**Visual direction for v3 pages (creative brief from user — "use images, AI process visuals, tech presentation to connect with audience"):**
- AI Automation: lean tech/AI-native — workflow/orchestration diagrams, glowing node visuals (reuse `OrbitalCore`/`WorkflowGraph`), dashboard/status-card aesthetic. Least photography-dependent section.
- Support Operations: lean photography — real people, collaborative/human warmth, reuse the established Unsplash photo series where it fits tonally.
- Engineering Team: mix — dev-team photography (`step-build.jpg`-style) + technical/code-adjacent graphics.
- Solutions: card-grid hub, small representative icon or graphic per use case.
- About: photography + the established `IconBadge` "Why Raptric"-style treatment for operating philosophy.

**About page:** no real founder/company bio supplied yet. Per user instruction, drafted with safe, non-invented content (operating philosophy, generic background framing already established — no company names, no fabricated specifics) and clearly flagged for the user to fill in real details.

**Old v2 pages removed in Phase 1:** `/saas-development`, `/customer-operations`, `/business-operations`, `/technology-advisory` deleted; 301 redirects added from those paths to their v3 equivalents.

# Tech Stack

Next.js (App Router) + TypeScript, Tailwind CSS (fully custom tokens, no default palette), MDX for Insights, shadcn/ui restyled primitives only, deployed to Vercel. No CMS.

Scaffolded via `create-next-app` (App Router, TS, Tailwind, ESLint, `@/*` alias, no `src/` dir). See [AGENTS.md](./AGENTS.md) for Next.js-version-specific agent notes from the scaffold — this Next.js version may differ from training data; check `node_modules/next/dist/docs/` before using unfamiliar APIs.

# Task Tracking

This project does NOT use Asana. Task breakdown lives in [TASKS.md](./TASKS.md). Mark checklist items complete there directly as work finishes.

# Source Documents

- [BRIEF.md](./BRIEF.md) — **v2**, the sole authority for content/positioning. v1 (operating-system-builder concept) is fully discarded — do not reference or resurrect it.
- [PRD.md](./PRD.md) — v2 product overview, site map, acceptance criteria.
- [TASKS.md](./TASKS.md) — v2 execution breakdown.

# History — why there's a v1/v2 split

The site was first built around an "operating system builder" concept: a Task→Workflow→Operation→OS differentiation ladder, a LinkOS platform page, GuestSquad/Managed Support Layer as nested industries, Capabilities/Platforms/Insights/Contact nav. That was fully built (including a custom blueprint-style ladder diagram and, after a first round of feedback, a full illustration-system redesign of the same concept). The client rejected the concept itself, not just the execution — twice: first calling it "one thing repeated forever" with no images, then after a redesign pass, discarding the entire idea outright ("not liking this concept at all... roll back this").

**2026-07-02:** client supplied a complete v2 brief repositioning Raptric as an AI-automation-and-systems specialist with five service-line pages instead of the OS/platform framework. All v1 pages/components were deleted (`app/capabilities`, `app/platforms`, `components/ladder`, `components/illustrations`). This is now a from-scratch rebuild on the new brief.

# Design Direction (v2)

Modern AI SaaS / product-company register — not the old "blueprint/operating-manual" motif. Concretely:

- Dark, high-contrast hero; light, whitespace-heavy body sections (Linear/Vercel/Ramp-tier pattern)
- Single indigo/violet accent color, used sparingly — not a multi-hue palette
- Typography kept from v1 (Space Grotesk headline + IBM Plex Mono tags) since it wasn't part of what was criticized and still fits an AI-native register
- New illustration system: workflow/orchestration diagrams, dashboard-card mockups, automation "signal" graphics — interface-inspired, not blueprint/technical-drawing style
- **Explicit lesson from v1 feedback:** do not repeat the same section composition (eyebrow label + heading + paragraph) down the whole page. Vary layout per section, put a real graphic on nearly every major section, alternate alignment/backgrounds.
- No stock photography, generic icon packs, carousels, or over-animated gimmicks

# Hard Content Rules (standing — apply regardless of positioning)

- Never mention DentOS or TransData anywhere, in any form
- No invented stats, client names, testimonials, or logos
- No pricing/tiers
- Banned phrases: best-in-class, cutting-edge solutions, one-stop shop, innovative digital agency, and similar hype/filler
- Nav is fixed, 6 items, no dropdowns (per v3): AI Automation · Support Operations · Engineering Team · Solutions · About · Contact, plus logo (left) and Let's Talk CTA (right) — see v3 section above, this supersedes the old 5-item v2 nav
- Privacy Policy / Terms are footer link targets only — pages not built, no legal copy supplied, do not invent it

# Workflow References

Standard dev-phase.md/git-standards.md conventions (commit style, branch naming) still apply even without Asana. See ~/.claude/workflows/dev-phase.md and ~/.claude/workflows/git-standards.md for the parts that still apply (commits, branches, PRs).

# Notes

Brand assets (logo mark, favicon) were pulled from the live raptric.com site during v1 setup and are still valid/reused in v2 — the brand mark itself was never part of what was rejected:
- `public/raptric-mark.png` (ink, light-bg use), `public/raptric-mark-gold.png` (recolored gold, dark-bg use — may need a v2-palette recolor, e.g. to the new indigo accent)
- `public/raptric-lockup-dark.png` — original red+white lockup, unused, kept for reference

# Photography policy — reversed 2026-07-04

The original "no stock photography" rule is superseded. Client asked for real imagery (referencing transdata.biz/eu as a structural example — hero photo, dimmed statement band, sticky-scroll methodology section with swapping images). Sourced free-license Unsplash photos into `public/photos/` (hero-team, dark-city, step-discover/design/build/launch). Same treatment (dark gradient overlays, consistent photo series) should extend to service pages if requested next — reuse this photo set or source matching ones rather than introducing a different visual tone.
