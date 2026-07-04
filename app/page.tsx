import Link from "next/link";
import WorkflowGraph from "@/components/illustrations/workflow-graph";
import HeroComposition from "@/components/illustrations/hero-composition";
import MethodologyScroll from "@/components/sections/methodology-scroll";
import {
  AiAutomationIcon,
  SaasDevelopmentIcon,
  CustomerOperationsIcon,
  TechnologyAdvisoryIcon,
} from "@/components/illustrations/service-icons";
import {
  BuildIcon,
  SystemsIcon,
  AccountableIcon,
  StopIcon,
  TangleIcon,
  MismatchIcon,
  ClockIcon,
} from "@/components/illustrations/concept-icons";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Automation, Support Operations & Engineering Teams | Raptric",
  description:
    "Raptric helps companies scale support, automate operations, and ship products faster with AI workflows, human teams, and embedded engineering capacity.",
  path: "/",
});

const CORE_AREAS = [
  {
    Icon: AiAutomationIcon,
    name: "AI Automation",
    href: "/ai-automation",
    body: "Workflow orchestration, agent systems, human checkpoints, and operational AI built into the stack you already run.",
  },
  {
    Icon: SaasDevelopmentIcon,
    name: "Engineering Team",
    href: "/engineering-team",
    body: "Embedded product, platform, and internal-systems capacity that ships inside your roadmap instead of around it.",
  },
  {
    Icon: CustomerOperationsIcon,
    name: "Support Operations",
    href: "/support-operations",
    body: "Tech support, customer care, and HITL operations designed to scale without turning into a staffing mess.",
  },
  {
    Icon: TechnologyAdvisoryIcon,
    name: "Solutions",
    href: "/solutions",
    body: "Packaged systems like DentOS, LinkOS, EOS, and Voice AI built from the pillars above.",
  },
];

const WHY_RAPTRIC = [
  {
    Icon: BuildIcon,
    title: "We build the system",
    body: "Automation, software, and operating design are delivered together, not split across disconnected vendors.",
  },
  {
    Icon: SystemsIcon,
    title: "We think in layers",
    body: "Every engagement is framed around intake, routing, execution, review, and the data trail behind it.",
  },
  {
    Icon: AccountableIcon,
    title: "We stay attached",
    body: "Launch is not the handoff. We stay close to how the system performs once real work starts moving through it.",
  },
];

const PROBLEMS = [
  { Icon: StopIcon, text: "Automation that stops at one task and dies on the first exception." },
  { Icon: TangleIcon, text: "Operations held together by spreadsheets, inboxes, and tribal memory." },
  { Icon: MismatchIcon, text: "Software that looks clean in demos but never matches how the business actually runs." },
  { Icon: ClockIcon, text: "Support and delivery layers that cannot absorb growth without adding chaos." },
];

const METHODOLOGY_STEPS = [
  {
    n: "01",
    label: "Discover",
    title: "Understand the operation as it runs today",
    body: "Before anything gets built, we map the real workflow: the tools, the exceptions, the manual patches, and the parts everyone already knows are fragile.",
    image: "/photos/step-discover.jpg",
  },
  {
    n: "02",
    label: "Design",
    title: "Architect the operating system around the work",
    body: "We define what should be automated, what should stay human, what needs engineering depth, and how handoffs are supposed to work.",
    image: "/photos/step-design.jpg",
  },
  {
    n: "03",
    label: "Build",
    title: "Ship the workflows, software, and support model",
    body: "AI workflows, internal systems, escalation logic, and operational tooling get built against the real environment, not a sandbox fantasy.",
    image: "/photos/step-build.jpg",
  },
  {
    n: "04",
    label: "Run",
    title: "Put it into production and improve from signal",
    body: "Once live, the system is monitored, refined, and tuned around what is actually happening in the operation.",
    image: "/photos/step-launch.jpg",
  },
];

const OUTCOMES = [
  {
    label: "Automation layer",
    value: "Agents, workflows, routing",
  },
  {
    label: "Human layer",
    value: "Support, HITL, escalation",
  },
  {
    label: "Engineering layer",
    value: "Product, platform, tooling",
  },
  {
    label: "Outcome",
    value: "A system that actually runs",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-400/40 to-transparent" />
        <Container className="grid min-h-[88vh] items-center gap-14 py-16 md:grid-cols-[1.02fr_0.98fr] md:py-20">
          <div>
            <Eyebrow className="mb-6 text-signal-400">Operating Systems for Business Workflows</Eyebrow>
            <h1 className="text-display font-semibold">
              We build operating systems for business workflows.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/68">
              AI automation, software, and operations engineered as one system
              so the business can route work, ship faster, and stay reliable
              under real pressure.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-mist-50/72">
              {["AI workflows and n8n", "Embedded engineering capacity", "HITL support models"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-mist-50/12 bg-mist-50/[0.04] px-3.5 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
              <Link
                href="/ai-automation"
                className="group inline-flex items-center gap-2 text-sm font-medium text-mist-50/80 hover:text-mist-50"
              >
                Explore the system
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-signal-500/18 blur-[110px]" />
            <div className="grid gap-4 md:grid-cols-[1fr_0.44fr]">
              <div className="overflow-hidden rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] shadow-2xl backdrop-blur">
                <HeroComposition className="min-h-[440px]" />
              </div>
              <div className="grid gap-4">
                {[
                  ["Layer 01", "Automate the repeatable work"],
                  ["Layer 02", "Escalate what needs judgment"],
                  ["Layer 03", "Ship tooling around the process"],
                ].map(([label, text]) => (
                  <div
                    key={label}
                    className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-4 shadow-xl backdrop-blur"
                  >
                    <span className="label text-signal-300">{label}</span>
                    <p className="mt-3 text-sm leading-6 text-mist-50/78">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-50">
        <Container className="py-8">
          <div className="grid gap-4 md:grid-cols-4">
            {OUTCOMES.map((item) => (
              <div key={item.label} className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-100 px-4 py-4">
                <p className="label text-ink-400">{item.label}</p>
                <p className="mt-2 text-sm font-medium text-ink-900">{item.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[0.88fr_1.12fr] md:items-center md:gap-16">
            <div>
              <Eyebrow className="mb-5">System design</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                One system. Not a stack of vendors.
              </h2>
              <p className="mt-5 max-w-md text-body-lg text-ink-600">
                The automation layer routes work. The human layer handles
                exception and judgment. The engineering layer keeps the whole
                thing stable, visible, and adaptable.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  "AI is useful when it sits inside the workflow, not outside it.",
                  "Human review belongs where risk, empathy, or judgment actually show up.",
                  "Engineering exists to make the operation durable, not just impressive.",
                ].map((point) => (
                  <div key={point} className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 px-4 py-3 text-sm text-ink-700">
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[var(--radius-lg)] bg-ink-950 p-6 shadow-xl">
              <WorkflowGraph className="h-auto w-full" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-20 md:py-24">
          <Eyebrow className="mb-5">Core areas</Eyebrow>
          <h2 className="max-w-2xl text-h1 font-semibold text-ink-900">
            Three operating pillars and one packaged solutions layer.
          </h2>

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            {CORE_AREAS.map((area, index) => (
              <Link
                key={area.href}
                href={area.href}
                className={`group rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-signal-300 hover:shadow-xl ${
                  index === 3 ? "lg:col-span-12" : "lg:col-span-4"
                }`}
              >
                <div className={`grid gap-6 ${index === 3 ? "lg:grid-cols-[0.48fr_0.52fr] lg:items-center" : ""}`}>
                  <div>
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-signal-400 to-signal-600 shadow-md shadow-signal-500/25">
                      <area.Icon className="h-7 w-7 text-white" />
                    </span>
                    <h3 className="mt-5 text-h3 font-medium text-ink-900">{area.name}</h3>
                    <p className="mt-3 max-w-sm text-body text-ink-600">{area.body}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-signal-600">
                      Learn more
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </div>

                  {index === 3 ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {["DentOS", "LinkOS", "EOS", "Voice AI"].map((solution) => (
                        <div key={solution} className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-100 px-4 py-4">
                          <p className="label text-ink-400">Solution</p>
                          <p className="mt-2 text-sm font-medium text-ink-900">{solution}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-20 md:py-24">
          <Eyebrow className="mb-10">Why Raptric</Eyebrow>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {WHY_RAPTRIC.map((item) => (
              <div key={item.title} className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-7">
                <IconBadge Icon={item.Icon} className="h-12 w-12" />
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[0.84fr_1.16fr] md:gap-16">
            <div>
              <Eyebrow className="mb-5">Problems we solve</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                The gap between a tool and a working operation.
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {PROBLEMS.map((problem) => (
                <li
                  key={problem.text}
                  className="flex gap-4 rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 p-5"
                >
                  <IconBadge Icon={problem.Icon} variant="muted" className="h-9 w-9 shrink-0" />
                  <p className="text-body text-ink-700">{problem.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-20 md:py-24">
          <Eyebrow className="mb-3">How we work</Eyebrow>
          <h2 className="max-w-xl text-h1 font-semibold text-ink-900">
            Turning complexity into a system that runs.
          </h2>
          <div className="mt-14">
            <MethodologyScroll steps={METHODOLOGY_STEPS} />
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 text-mist-50">
        <Container className="py-20 text-center md:py-24">
          <h2 className="mx-auto max-w-2xl text-h1 font-semibold">
            If the operation is straining, the system underneath it probably is too.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-mist-50/65">
            We can help you redesign the flow, the tooling, and the support
            model so the business stops relying on patches and starts running as
            a system.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-mist-50/20 px-6 py-3.5 text-sm font-medium text-mist-50 transition-colors hover:border-mist-50/40 hover:bg-mist-50/5"
            >
              Read our field notes
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
