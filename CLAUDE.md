# Project Metadata

TRACKING_MODE: LOCAL (no Asana — user opted out of Asana workflow for this project)
COMPANY: Elandz
PROJECT_NAME: Raptric Website
PROJECT_STATUS: IN DEVELOPMENT — v2 rebuild (v1 discarded 2026-07-02)

GITHUB_REPO_NAME: TBD

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
- Nav is fixed, 5 items, no dropdowns: AI Automation · SaaS Development · Customer Operations · Business Operations · Technology Advisory, plus logo (left) and Let's Talk CTA (right)
- Privacy Policy / Terms are footer link targets only — pages not built, no legal copy supplied, do not invent it

# Workflow References

Standard dev-phase.md/git-standards.md conventions (commit style, branch naming) still apply even without Asana. See ~/.claude/workflows/dev-phase.md and ~/.claude/workflows/git-standards.md for the parts that still apply (commits, branches, PRs).

# Notes

Brand assets (logo mark, favicon) were pulled from the live raptric.com site during v1 setup and are still valid/reused in v2 — the brand mark itself was never part of what was rejected:
- `public/raptric-mark.png` (ink, light-bg use), `public/raptric-mark-gold.png` (recolored gold, dark-bg use — may need a v2-palette recolor, e.g. to the new indigo accent)
- `public/raptric-lockup-dark.png` — original red+white lockup, unused, kept for reference

# Photography policy — reversed 2026-07-04

The original "no stock photography" rule is superseded. Client asked for real imagery (referencing transdata.biz/eu as a structural example — hero photo, dimmed statement band, sticky-scroll methodology section with swapping images). Sourced free-license Unsplash photos into `public/photos/` (hero-team, dark-city, step-discover/design/build/launch). Same treatment (dark gradient overlays, consistent photo series) should extend to service pages if requested next — reuse this photo set or source matching ones rather than introducing a different visual tone.
