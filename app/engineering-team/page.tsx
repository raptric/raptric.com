import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink, TextLink } from "@/components/ui/button";
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
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Software Development Partner | SaaS Development, Staff Augmentation & Product Delivery | Raptric",
  description:
    "Software development partner for SaaS teams, internal platforms, support engineering, staff augmentation, and product delivery that stays visible from roadmap through release.",
  path: "/engineering-team",
  image: "/og/engineering-team-1200x630.png",
  imageAlt: "Raptric engineering team social share image for software development partner and SaaS delivery services",
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

const IMPLEMENTATION_EXAMPLES = [
  {
    title: "SaaS roadmap plus internal tooling delivery",
    build: "Ship customer-facing product work and the internal systems around approvals, reporting, or operations inside one engineering model.",
    outcome: "Better release visibility and less internal workaround debt building up around the roadmap.",
  },
  {
    title: "Support engineering bridge for escalations",
    build: "Add engineering depth to incident triage, bug investigation, and support handoff so technical issues do not die between teams.",
    outcome: "Cleaner feedback loops, faster escalation handling, and fewer repeat issues.",
  },
  {
    title: "Embedded engineering capacity with QA discipline",
    build: "Plug engineers into sprint rhythm, QA expectations, and release coordination instead of bolting on isolated contractor output.",
    outcome: "More predictable execution and stronger confidence around what is actually ready to ship.",
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
    title: "Build work that sounds healthy in status updates but never exposes the real delivery picture",
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

const FAQS = [
  {
    q: "What is the difference between Raptric and a normal staff augmentation vendor?",
    a: "Raptric is positioned as an engineering partner, not just a source of extra hands. We focus on roadmap visibility, QA discipline, support alignment, and internal systems context so the added capacity fits the real operation.",
  },
  {
    q: "Do you only work on new SaaS builds?",
    a: "No. We can work on new SaaS platforms, existing products, internal systems, support-engineering needs, and technical delivery work that sits between product, operations, and support.",
  },
  {
    q: "Can Raptric handle product plus internal tooling together?",
    a: "Yes. That is one of the stronger use cases. Many teams need customer-facing product work and internal operational tooling to move together instead of being split between different vendors.",
  },
  {
    q: "What kind of companies are the best fit for this page?",
    a: "Companies with a real product roadmap, platform needs, release pressure, internal tooling work, or support escalations that require engineering depth are the best fit.",
  },
  {
    q: "What is a software development partner in practical terms?",
    a: "A software development partner is a team that helps shape scope, ship roadmap work, improve QA and release visibility, and stay accountable to the business outcome. It is more operationally involved than basic staff augmentation.",
  },
  {
    q: "How is this different from a generic dev shop?",
    a: "A generic dev shop usually focuses on tickets or features. Raptric focuses on real delivery visibility, QA drag, release confidence, internal tooling, and the operational consequences of what gets shipped.",
  },
];

const BEST_FIT = [
  "Product teams that need a software development partner instead of isolated contractors",
  "SaaS companies balancing roadmap work, internal tooling, QA, and support escalations",
  "Businesses that need engineering capacity to plug into product, platform, and operations at the same time",
];

const NOT_FOR = [
  "Teams looking for anonymous contractors without product or release accountability",
  "Projects that treat QA, support, and delivery as someone else's problem",
  "Founders who only want a cheap dev shop and no operational visibility",
];

const OUTCOMES = [
  "Better release visibility across roadmap, QA, and delivery risk",
  "Cleaner bridge between product work, internal tooling, and support escalations",
  "Reduced workaround debt and more predictable technical execution",
];

const DIFFERENTIATORS = [
  "We position as a software development partner, not a generic outsourcing vendor.",
  "We care about release visibility, QA discipline, and support engineering - not just story points.",
  "We build around the operating model the software has to serve, not only the backlog it came from.",
];

const RELATED_SOLUTIONS = [
  {
    title: "End-to-End Healthcare Workflow Platform",
    body: "A platform build where product, internal tooling, permissions, reporting, and revenue operations have to ship together.",
    href: "/solutions#end-to-end-healthcare-workflow-platform",
  },
  {
    title: "AI Sales Engagement Platform",
    body: "A productized sales system where engineering delivery, APIs, lead management, and campaign logic need one accountable build lane.",
    href: "/solutions#ai-sales-engagement-platform",
  },
  {
    title: "AI Lead Intelligence Platform",
    body: "A systems example where enrichment, workflow orchestration, exports, and sales operations depend on clean platform execution.",
    href: "/solutions#ai-lead-intelligence-platform",
  },
];

const PAGE_PROOF = [
  {
    title: "What gets built",
    body: "Customer-facing product work, internal tooling, support engineering bridges, QA processes, APIs, dashboards, and the operational systems around the roadmap.",
  },
  {
    title: "What improves",
    body: "Release visibility, QA discipline, escalation handling, roadmap fit, and the amount of rework caused by weak handoffs between product, support, and engineering.",
  },
  {
    title: "Where it applies",
    body: "SaaS teams, internal platforms, product roadmaps under pressure, support-heavy software businesses, and companies that need a software development partner instead of a detached dev lane.",
  },
];

export default function EngineeringTeam() {
  return (
    <>
      <FAQSchema items={FAQS} />
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
              Software development partner for teams that need to ship.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/68">
              Product, platform, and internal-systems engineering for companies
              that need visible delivery, strong QA discipline, and technical
              work that stays aligned with how the business actually runs, not just another dev shop.
            </p>
            <p className="mt-4 max-w-xl text-body text-mist-50/60">
              In practice, Raptric helps teams ship roadmap work, reduce QA
              drag, improve release visibility, and close the gap between
              engineering delivery and the operational pressure around it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaLink href="/contact">Talk to an engineering partner</CtaLink>
              <Link
                href="/support-operations"
                className="group inline-flex items-center gap-2 text-sm font-medium text-mist-50/80 hover:text-mist-50"
              >
                See how engineering connects to support operations
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
            <p className="mt-4 max-w-lg text-sm text-mist-50/56">
              This call is best for product leaders, founders, and operators who already feel the pressure between roadmap, QA, internal tooling, and release quality.
            </p>
            <p className="mt-3 max-w-lg text-sm text-mist-50/56">
              Most teams reach out when delivery still looks fine in status updates, but the real pressure is showing up in QA, escalations, and the work piling up behind the roadmap.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-signal-500/14 blur-[110px]" />
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] shadow-2xl">
              <div className="relative min-h-[440px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(108,92,231,0.18),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]" />
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-400/55 to-transparent" />
                <div className="relative min-h-[440px]">
                  <Image
                    src="/photos/engineering-hero-generated-optimized.jpg"
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

      <section className="border-b border-ink-200 bg-mist-100">
        <Container className="py-12 md:py-14">
          <div className="grid gap-4 md:grid-cols-3">
            {PAGE_PROOF.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-lg)] border border-ink-200 bg-white p-5 shadow-sm"
              >
                <p className="label text-signal-700">{item.title}</p>
                <p className="mt-3 text-body text-ink-700">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-[radial-gradient(circle_at_top_left,_rgba(108,92,231,0.08),_transparent_38%),linear-gradient(to_bottom,_var(--color-mist-50),_var(--color-mist-100))]">
        <Container className="py-18 md:py-22">
          <div className="mb-10 rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 md:p-7">
            <Eyebrow className="mb-4">What this service covers</Eyebrow>
            <p className="max-w-4xl text-body-lg text-ink-700">
              If you need a software development partner, SaaS delivery support, embedded engineering capacity, or stronger release visibility around real operations, this page should give you the clearest starting point.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-[var(--radius-md)] border border-ink-200 bg-white px-4 py-4">
                <p className="label text-signal-600">What is a software development partner?</p>
                <p className="mt-2 text-sm text-ink-700">
                  A software development partner adds engineering capacity with delivery visibility, QA discipline, and technical ownership instead of only supplying extra developers.
                </p>
              </div>
              <div className="rounded-[var(--radius-md)] border border-ink-200 bg-white px-4 py-4">
                <p className="label text-signal-600">What is staff augmentation?</p>
                <p className="mt-2 text-sm text-ink-700">
                  Staff augmentation adds people to the team. A software development partner adds delivery structure, release visibility, and stronger alignment with product and operations.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <p className="label text-signal-600">Best fit</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {BEST_FIT.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink-200 bg-mist-100 px-3.5 py-1.5 text-sm text-ink-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="label text-signal-600">Not for</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {NOT_FOR.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm text-ink-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
                  <p className="label text-signal-300">Delivery stages</p>
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

      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <Eyebrow className="mb-5">Engineering outcomes</Eyebrow>
              <h2 className="text-h2 font-semibold text-ink-900">
                What a strong software development partner changes beyond code delivery.
              </h2>
              <p className="mt-4 max-w-md text-body-lg text-ink-600">
                Buyers usually want clearer release visibility, fewer hidden blockers, better QA discipline, and less operational noise caused by disconnected engineering work.
              </p>
              <p className="mt-3 max-w-md text-body text-ink-600">
                That is why this page overlaps with{" "}
                <TextLink href="/support-operations">support operations</TextLink>{" "}
                and{" "}
                <TextLink href="/ai-automation">AI automation services</TextLink>{" "}
                whenever the software has to serve more than one internal workflow.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {OUTCOMES.map((item) => (
                <div key={item} className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-5">
                  <p className="text-body font-medium text-ink-800">{item}</p>
                </div>
              ))}
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
          <div className="mt-8 rounded-[var(--radius-lg)] border border-signal-200 bg-signal-50 p-6">
            <div className="grid gap-4 md:grid-cols-[0.72fr_0.28fr] md:items-center">
              <div>
                <p className="label text-signal-700">Common engagement model</p>
                <p className="mt-3 text-body text-ink-700">
                  If the roadmap is moving faster than delivery confidence, the fastest next step is a focused engineering-partner conversation about scope, release pressure, and where the team is getting stuck.
                </p>
              </div>
              <div className="md:justify-self-end">
                <CtaLink href="/contact">Talk to an engineering partner</CtaLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-50">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-5">Where this applies</Eyebrow>
          <h2 className="max-w-2xl text-h2 font-semibold text-ink-900">
            Platform examples where engineering capacity has to support the operating model, not just the backlog.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {RELATED_SOLUTIONS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[var(--radius-lg)] border border-ink-200 bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <h3 className="text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-signal-600">
                  See {item.title}
                  <span>&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-white">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-5">Example delivery models</Eyebrow>
          <h2 className="max-w-3xl text-h2 font-semibold text-ink-900">
            Engineering delivery models for teams balancing roadmap pressure, QA discipline, and operational support.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {IMPLEMENTATION_EXAMPLES.map((item) => (
              <div key={item.title} className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 shadow-sm">
                <p className="label text-signal-600">Example build</p>
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.build}</p>
                <div className="mt-5 rounded-[var(--radius-md)] border border-signal-200 bg-signal-50 px-4 py-3">
                  <p className="label text-signal-700">Likely outcome</p>
                  <p className="mt-2 text-sm text-ink-700">{item.outcome}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-body text-ink-600">
            These engineering models often connect with{" "}
            <TextLink href="/support-operations">technical support systems</TextLink>,{" "}
            <TextLink href="/solutions">platform solutions</TextLink>, and the comparison in{" "}
            <TextLink href="/insights/software-development-partner-vs-staff-augmentation">software development partner vs staff augmentation</TextLink>.
          </p>
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
                  <Eyebrow className="text-signal-300">Where delivery starts slipping</Eyebrow>
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
          <Eyebrow className="mb-6 text-signal-300">FAQ</Eyebrow>
          <div className="mx-auto mb-12 flex max-w-3xl flex-col divide-y divide-mist-50/12 border-y border-mist-50/12">
            {FAQS.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-body-lg font-medium text-mist-50">
                  {item.q}
                  <span className="ml-4 shrink-0 text-mist-50/40 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-body text-mist-50/68">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="grid gap-10 md:grid-cols-[0.88fr_1.12fr] md:gap-16">
            <div>
              <Eyebrow className="mb-5 text-signal-300">What strong engineering delivery looks like</Eyebrow>
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
              <div className="rounded-[var(--radius-lg)] border border-signal-500/20 bg-signal-500/10 p-6 backdrop-blur">
                <p className="label text-signal-300">Why this is not generic staff augmentation</p>
                <div className="mt-3 grid gap-2 text-body text-mist-50/76">
                  {DIFFERENTIATORS.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-7 md:p-8">
            <div className="grid gap-6 md:grid-cols-[0.68fr_0.32fr] md:items-center">
              <div>
                <p className="label text-signal-300">Next step</p>
                <h3 className="mt-3 text-h2 font-semibold">
                  Need engineering capacity that can live inside the system you are building?
                </h3>
                <p className="mt-3 max-w-2xl text-body text-mist-50/68">
                  We can plug into the roadmap, build the missing systems, and
                  stay aligned with the support, automation, and internal workflows that the software has to serve.
                </p>
                <p className="mt-3 max-w-2xl text-sm text-mist-50/56">
                  The call is best for teams that need clearer release visibility, more accountable delivery, or a technical partner that can work across product, platform, and support.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:justify-end">
                <CtaLink href="/contact">Talk to an engineering partner</CtaLink>
                <Link
                  href="/support-operations"
                  className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-mist-50/20 px-6 py-3.5 text-sm font-medium text-mist-50 transition-colors hover:border-mist-50/40 hover:bg-mist-50/5"
                >
                  Explore technical support systems
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
