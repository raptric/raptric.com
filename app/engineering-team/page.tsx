import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink } from "@/components/ui/button";
import MethodologyScroll from "@/components/sections/methodology-scroll";
import WorkflowGraph from "@/components/illustrations/workflow-graph";
import { SaasDevelopmentIcon } from "@/components/illustrations/service-icons";
import {
  AppIcon,
  QaIcon,
  SystemsIcon,
  CrmIcon,
  OnboardIcon,
  CheckIcon,
  ReportIcon,
  AccountableIcon,
} from "@/components/illustrations/concept-icons";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Engineering Teams | SaaS Development, Staff Augmentation & Product Delivery | Raptric",
  description:
    "Embedded engineering teams for SaaS development, staff augmentation, support engineering, internal tools, and product delivery that stays visible from roadmap through release.",
  path: "/engineering-team",
});

const CAPABILITY_LAYERS = [
  {
    Icon: SystemsIcon,
    title: "Software development partner",
    body: "Architecture, scoping, tradeoffs, and execution decisions that stay tied to the roadmap instead of drifting into a detached dev lane.",
  },
  {
    Icon: AppIcon,
    title: "SaaS and platform builds",
    body: "Portals, dashboards, APIs, and product surfaces that need reliability under live usage, not just a polished first release.",
  },
  {
    Icon: OnboardIcon,
    title: "Embedded staff augmentation",
    body: "Engineers who can step into sprint rhythm, standards, QA discipline, and release coordination without becoming parallel overhead.",
  },
  {
    Icon: QaIcon,
    title: "Support engineering",
    body: "A technical bridge for incidents, escalations, bug investigation, and the issues support cannot close without engineering depth.",
  },
  {
    Icon: CrmIcon,
    title: "Internal operations tooling",
    body: "Systems behind the scenes for routing, approvals, reporting, reconciliation, and operational visibility.",
  },
];

const ENGAGEMENT_STEPS = [
  {
    n: "01",
    label: "Embedded team",
    title: "Join the roadmap and ship inside the existing product motion",
    body: "Best when the company already has product direction and needs engineering capacity that can plug into planning, build cadence, QA, and release discipline quickly.",
    image: "/photos/step-build.jpg",
  },
  {
    n: "02",
    label: "Dedicated pod",
    title: "Own a build stream with one accountable engineering pod",
    body: "Best when a SaaS product, internal platform, or systems rebuild needs a focused team with a clear scope, delivery owner, and a visible path from backlog to release.",
    image: "/photos/step-design.jpg",
  },
  {
    n: "03",
    label: "Hybrid model",
    title: "Pair engineering with automation and operations where the workflow depends on all three",
    body: "Best when technical delivery is deeply tied to support, automation, internal tooling, or operator workflows and cannot be treated like isolated product development.",
    image: "/photos/hero-team.jpg",
  },
];

const PROBLEMS = [
  {
    n: "01",
    title: "Roadmaps that move faster than the delivery capacity behind them",
    body: "Plans keep expanding while product, platform, and internal tooling needs compete for the same few engineers.",
  },
  {
    n: "02",
    title: "Build work that sounds healthy in status updates but never exposes the real delivery truth",
    body: "Leaders get progress language instead of real visibility into blockers, QA friction, or scope drift.",
  },
  {
    n: "03",
    title: "Internal tools piling up because no one designed around the actual operating model",
    body: "Systems multiply, manual work stays hidden, and product teams end up supporting brittle workflows they never meant to own.",
  },
  {
    n: "04",
    title: "Technical support and product delivery living in different worlds",
    body: "Escalations reach engineering late, feedback loops stay weak, and issues repeat because no bridge was built between teams.",
  },
];

const PROOF_PILLARS = [
  {
    Icon: ReportIcon,
    title: "Visible delivery signals",
    body: "Roadmap, build, QA, release, and issue flow stay visible enough for leaders to make decisions before risk turns into delay.",
  },
  {
    Icon: CheckIcon,
    title: "QA and support engineered in",
    body: "Testing, escalation handling, and post-release realities are part of the build model, not cleanup after launch.",
  },
  {
    Icon: AccountableIcon,
    title: "Authentic ownership",
    body: "We do not hide behind velocity theater. The work is structured to show what is shipping, what is blocked, and what needs a decision.",
  },
];

export default function EngineeringTeam() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Engineering Team", path: "/engineering-team" },
        ]}
      />
      <ServiceSchema
        name="Engineering Team"
        description="Embedded engineering teams for SaaS development, staff augmentation, support engineering, and internal systems."
        path="/engineering-team"
      />

      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-400/40 to-transparent" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-signal-500/16 blur-[120px]" />
        <Container className="grid items-center gap-14 py-18 md:grid-cols-[0.92fr_1.08fr] md:py-24">
          <div>
            <SaasDevelopmentIcon className="h-12 w-12 text-signal-400" />
            <Eyebrow className="mb-4 mt-6 text-signal-400">Engineering Team</Eyebrow>
            <h1 className="text-display font-semibold">
              Engineering teams that ship with the roadmap.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/68">
              Product, platform, and internal-systems engineering for companies
              that need visible delivery, strong QA discipline, and technical
              work that stays aligned with how the business actually runs.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
              <Link
                href="/solutions"
                className="group inline-flex items-center gap-2 text-sm font-medium text-mist-50/80 hover:text-mist-50"
              >
                See the systems we build around
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-signal-500/14 blur-[110px]" />
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] shadow-2xl">
              <div className="relative min-h-[440px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(108,92,231,0.18),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]" />
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-400/55 to-transparent" />
                <div className="relative min-h-[440px]">
                  <Image
                    src="/photos/engineering-hero-generated.png"
                    alt="Engineering team collaborating around product delivery dashboards and development work"
                    fill
                    sizes="(min-width: 768px) 48vw, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/62 via-ink-950/18 to-transparent" />
                  <div className="absolute left-6 top-6 rounded-full border border-mist-50/16 bg-ink-950/64 px-3 py-1.5 text-xs font-medium text-mist-50/80 backdrop-blur">
                    Product + platform delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-[radial-gradient(circle_at_top_left,_rgba(108,92,231,0.08),_transparent_38%),linear-gradient(to_bottom,_var(--color-mist-50),_var(--color-mist-100))]">
        <Container className="py-18 md:py-22">
          <Eyebrow className="mb-5">Capability map</Eyebrow>
          <h2 className="max-w-2xl text-h1 font-semibold text-ink-900">
            Engineering depth across product, platform, support, and the systems behind the scenes.
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-ink-950 p-7 text-mist-50 shadow-xl lg:col-span-7">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-signal-500/20 blur-[90px]" />
              <div className="relative grid gap-8 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
                <div>
                  <IconBadge Icon={SystemsIcon} className="h-12 w-12" />
                  <h3 className="mt-5 text-h2 font-medium">
                    One engineering layer serving more than one workflow.
                  </h3>
                  <p className="mt-4 max-w-md text-body text-mist-50/70">
                    The strongest teams can move between SaaS delivery, internal
                    systems, support escalation paths, and platform tooling
                    without acting like each problem belongs to a different vendor.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Product", "Platform", "QA", "Support bridge", "Tooling"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-mist-50/72"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <WorkflowGraph className="h-auto w-full" />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 shadow-lg lg:col-span-5">
              <div className="relative h-52">
                <Image
                  src="/photos/step-design.jpg"
                  alt="Product and platform design session"
                  fill
                  sizes="(min-width: 1024px) 28vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/72 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-[var(--radius-md)] border border-mist-50/12 bg-ink-950/76 p-4 backdrop-blur">
                  <p className="label text-signal-300">Architecture + delivery</p>
                  <p className="mt-2 text-sm leading-6 text-mist-50/78">
                    Scope, sequencing, and technical decisions shaped around
                    what the product team can really ship and support.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 p-5">
                <div className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-100 p-4">
                  <p className="label text-ink-400">Good fit</p>
                  <p className="mt-2 text-body text-ink-700">
                    Teams that need a software development partner, not random capacity.
                  </p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-signal-200 bg-white p-4">
                  <p className="label text-signal-600">Common asks</p>
                  <p className="mt-2 text-body text-ink-700">
                    SaaS development, staff augmentation, release help, and internal systems.
                  </p>
                </div>
              </div>
            </div>

            {CAPABILITY_LAYERS.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 shadow-sm lg:col-span-4"
              >
                <IconBadge Icon={item.Icon} className="h-11 w-11" />
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-50">
        <Container className="py-18 md:py-22">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
            <div>
              <Eyebrow className="mb-5">Delivery model</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                Delivery visibility designed into the work from day one.
              </h2>
              <p className="mt-5 max-w-md text-body-lg text-ink-600">
                Roadmap, build, QA, release, and post-launch support should not
                be a mystery. The operating model around engineering is part of
                the service, not something the client has to reverse-engineer later.
              </p>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-ink-950 p-6 shadow-xl">
              <div className="grid gap-5 md:grid-cols-[0.62fr_0.38fr]">
                <div className="rounded-[var(--radius-lg)] border border-mist-50/10 bg-mist-50/[0.04] p-5">
                  <p className="label text-signal-300">Build path</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {["Roadmap", "Build", "QA", "Release"].map((item) => (
                      <div
                        key={item}
                        className="rounded-[var(--radius-md)] border border-mist-50/10 bg-ink-900/55 px-4 py-3 text-center text-sm font-medium text-mist-50/80"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-3">
                    {[
                      "Scope and tradeoffs stay visible to product owners.",
                      "QA loops are scheduled, not treated as a surprise.",
                      "Release readiness is tracked before it becomes stress.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-[var(--radius-md)] border border-mist-50/10 bg-ink-900/50 px-4 py-3 text-sm text-mist-50/72"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[var(--radius-lg)] border border-mist-50/10">
                    <div className="relative h-40">
                      <Image
                        src="/photos/step-launch.jpg"
                        alt="Release and production-readiness view"
                        fill
                        sizes="(min-width: 768px) 18vw, 92vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/82 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="label text-signal-300">Production reality</p>
                        <p className="mt-2 text-sm text-mist-50/78">
                          Release quality matters because the software has to survive live operations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[var(--radius-lg)] border border-mist-50/10 bg-mist-50/[0.04] p-5">
                    <p className="label text-signal-300">Client view</p>
                    <div className="mt-4 grid gap-2 text-sm text-mist-50/72">
                      <div className="rounded-md border border-mist-50/10 bg-ink-900/40 px-3 py-2">
                        Build status with context
                      </div>
                      <div className="rounded-md border border-mist-50/10 bg-ink-900/40 px-3 py-2">
                        QA findings with decisions
                      </div>
                      <div className="rounded-md border border-mist-50/10 bg-ink-900/40 px-3 py-2">
                        Release plan without guesswork
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-18 md:py-22">
          <Eyebrow className="mb-3">Engagement models</Eyebrow>
          <h2 className="max-w-2xl text-h1 font-semibold text-ink-900">
            Different structures depending on whether you need capacity, ownership, or a systems pod.
          </h2>
          <div className="mt-14">
            <MethodologyScroll steps={ENGAGEMENT_STEPS} />
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-18 md:py-22">
          <div className="grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:gap-16">
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-ink-950 text-mist-50 shadow-xl">
              <div className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,92,231,0.34),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(108,92,231,0.16),transparent_28%),linear-gradient(180deg,#0b0b0f,#12121a)]" />
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-signal-500/14 blur-[110px]" />
                <div className="relative p-7">
                  <Eyebrow className="text-signal-300">What teams bring us in to fix</Eyebrow>
                  <h2 className="mt-4 text-h1 font-semibold">
                    Engineering gaps turn into operational problems fast.
                  </h2>
                  <p className="mt-4 max-w-lg text-body text-mist-50/72">
                    By the time most companies ask for help, the issue is no
                    longer just velocity. It is roadmap pressure, QA risk,
                    support pain, and internal workarounds piling up around the product.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Roadmap strain", "QA drag", "Tooling debt", "Escalation chaos"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-mist-50/12 bg-mist-50/[0.05] px-3 py-1.5 text-xs text-mist-50/72"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 grid gap-3 md:grid-cols-2">
                    <div className="rounded-[var(--radius-md)] border border-mist-50/10 bg-mist-50/[0.04] p-4">
                      <p className="label text-signal-300">Typical symptom</p>
                      <p className="mt-2 text-sm leading-6 text-mist-50/72">
                        Product goals look fine on paper, but release confidence keeps dropping as delivery pressure rises.
                      </p>
                    </div>
                    <div className="rounded-[var(--radius-md)] border border-mist-50/10 bg-mist-50/[0.04] p-4">
                      <p className="label text-signal-300">What it really means</p>
                      <p className="mt-2 text-sm leading-6 text-mist-50/72">
                        The team does not just need developers. It needs structure, accountability, and a cleaner bridge between engineering and operations.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-[var(--radius-md)] border border-mist-50/10 bg-[radial-gradient(circle_at_left,rgba(108,92,231,0.28),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4">
                    <p className="label text-signal-300">Pressure pattern</p>
                    <div className="mt-4 flex items-center gap-3">
                      {["Roadmap", "Delivery", "Operations"].map((item, index) => (
                        <div key={item} className="flex min-w-0 flex-1 items-center gap-3">
                          <div className="rounded-full border border-mist-50/15 bg-ink-900/60 px-3 py-2 text-xs text-mist-50/78">
                            {item}
                          </div>
                          {index < 2 ? (
                            <div className="h-px flex-1 bg-gradient-to-r from-signal-400/70 to-mist-50/10" />
                          ) : null}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-mist-50/70">
                      When those three layers drift apart, the business feels it as missed releases, messy escalations, and growing internal workaround debt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {PROBLEMS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 shadow-sm"
                >
                  <span className="label text-signal-600">{item.n}</span>
                  <h3 className="mt-3 text-h3 font-medium text-ink-900">{item.title}</h3>
                  <p className="mt-3 text-body text-ink-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 text-mist-50">
        <Container className="py-18 md:py-22">
          <div className="grid gap-10 md:grid-cols-[0.88fr_1.12fr] md:gap-16">
            <div>
              <Eyebrow className="mb-5 text-signal-300">What strong delivery looks like</Eyebrow>
              <h2 className="text-h1 font-semibold">
                Serious engineering support should feel accountable, visible, and steady under pressure.
              </h2>
              <p className="mt-5 max-w-md text-body-lg text-mist-50/68">
                This is the difference between rented development capacity and a
                team that can actually help a company ship product and support real usage.
              </p>
            </div>

            <div className="grid gap-4">
              {PROOF_PILLARS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-6 backdrop-blur"
                >
                  <div className="flex items-start gap-4">
                    <IconBadge Icon={item.Icon} className="h-11 w-11 shrink-0" />
                    <div>
                      <h3 className="text-h3 font-medium">{item.title}</h3>
                      <p className="mt-3 text-body text-mist-50/70">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-7 md:p-8">
            <div className="grid gap-6 md:grid-cols-[0.68fr_0.32fr] md:items-center">
              <div>
                <p className="label text-signal-300">Commercial close</p>
                <h3 className="mt-3 text-h2 font-semibold">
                  Need engineering capacity that can live inside the system you are building?
                </h3>
                <p className="mt-3 max-w-2xl text-body text-mist-50/68">
                  We can plug into the roadmap, build the missing systems, and
                  stay aligned with the support, automation, and internal workflows that the software has to serve.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:justify-end">
                <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
                <Link
                  href="/support-operations"
                  className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-mist-50/20 px-6 py-3.5 text-sm font-medium text-mist-50 transition-colors hover:border-mist-50/40 hover:bg-mist-50/5"
                >
                  Explore support operations
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
