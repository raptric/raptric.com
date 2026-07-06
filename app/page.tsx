import Image from "next/image";
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
import { FAQSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Automation Services, Technical Support & Software Development Partner | Raptric",
  description:
    "Raptric builds AI automation services, technical support systems, and software development capacity for companies that need cleaner workflows, stronger delivery, and better operating systems.",
  path: "/",
  image: "/og/home-1200x630.png",
  imageAlt: "Raptric homepage social share image for AI automation, technical support, and software development partner services",
});

const CORE_AREAS = [
  {
    Icon: AiAutomationIcon,
    name: "AI Automation",
    href: "/ai-automation",
    body: "Workflow orchestration, agent systems, human checkpoints, and operational AI built into the stack you already run.",
    highlights: ["n8n orchestration", "agent routing", "HITL control"],
  },
  {
    Icon: SaasDevelopmentIcon,
    name: "Engineering Team",
    href: "/engineering-team",
    body: "Embedded product, platform, and internal-systems capacity that ships inside your roadmap instead of around it.",
    highlights: ["product delivery", "embedded team", "platform tooling"],
  },
  {
    Icon: CustomerOperationsIcon,
    name: "Support Operations",
    href: "/support-operations",
    body: "Tech support, customer care, and HITL operations designed to scale without turning into a staffing mess.",
    highlights: ["tech support", "human review", "AI-assisted coverage"],
  },
  {
    Icon: TechnologyAdvisoryIcon,
    name: "Solutions",
    href: "/solutions",
    body: "AI voice, healthcare operations, outreach automation, sales engagement, and lead intelligence platforms built from the pillars above.",
    highlights: ["voice AI", "healthcare ops", "SEO outreach", "sales automation"],
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

const ANSWER_FIRST_BLOCKS = [
  {
    title: "AI automation services",
    body: "We design workflow automation, agent systems, CRM orchestration, and human-in-the-loop AI that fits the operation you already run.",
    href: "/ai-automation",
  },
  {
    title: "Technical support systems",
    body: "We help companies structure tech support, customer operations, and AI-assisted intake so complexity routes cleanly instead of piling into one queue.",
    href: "/support-operations",
  },
  {
    title: "Software development partner",
    body: "We provide engineering capacity for SaaS, internal tooling, platform delivery, and support engineering that stays aligned with the roadmap.",
    href: "/engineering-team",
  },
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

const FAQS = [
  {
    q: "What does Raptric actually do?",
    a: "Raptric builds AI automation systems, technical support operations, and engineering delivery capacity for companies that need software, workflows, and human operations to run as one system.",
  },
  {
    q: "Who is Raptric the best fit for?",
    a: "Raptric is a strong fit for SaaS companies, healthcare operations, service businesses, sales teams, and operations-heavy businesses that need cleaner workflows, stronger support systems, or more delivery capacity.",
  },
  {
    q: "Does Raptric only offer AI automation?",
    a: "No. AI automation is one pillar. Raptric also designs support operations and provides engineering capacity so automation, product delivery, and human operations do not get split across disconnected vendors.",
  },
  {
    q: "What kind of projects usually start the conversation?",
    a: "Common starting points include workflow automation, technical support redesign, AI-assisted support intake, embedded engineering capacity, CRM automation, and internal tooling that is slowing the business down.",
  },
];

const [AI_AREA, ENGINEERING_AREA, SUPPORT_AREA, SOLUTIONS_AREA] = CORE_AREAS;
const AiAreaIcon = AI_AREA.Icon;
const EngineeringAreaIcon = ENGINEERING_AREA.Icon;
const SupportAreaIcon = SUPPORT_AREA.Icon;
const SolutionsAreaIcon = SOLUTIONS_AREA.Icon;

export default function Home() {
  return (
    <>
      <FAQSchema items={FAQS} />
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

      <section className="border-b border-ink-200 bg-mist-50">
        <Container className="py-16 md:py-18">
          <Eyebrow className="mb-5">Answer first</Eyebrow>
          <h2 className="max-w-3xl text-h1 font-semibold text-ink-900">
            Raptric helps companies automate workflows, structure technical support, and add engineering capacity without splitting the work across three separate vendors.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ANSWER_FIRST_BLOCKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-100 p-6 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <h3 className="text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-signal-600">
                  Explore
                  <span>&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-[radial-gradient(circle_at_top_left,_rgba(108,92,231,0.08),_transparent_38%),linear-gradient(to_bottom,_var(--color-mist-50),_var(--color-mist-100))]">
        <Container className="py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[0.88fr_1.12fr] md:items-center md:gap-16">
            <div>
              <Eyebrow className="mb-5">System design</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                A control room for workflows, not another stack of vendors.
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
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[var(--radius-lg)] bg-ink-950 p-6 shadow-xl">
                <WorkflowGraph className="h-auto w-full" />
              </div>
              <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-ink-950 shadow-xl">
                  <Image
                    src="/photos/step-design.jpg"
                    alt="Raptric team sketching workflow architecture"
                    fill
                    sizes="(min-width: 768px) 24vw, 90vw"
                    className="object-cover opacity-82"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-[var(--radius-md)] border border-mist-50/10 bg-ink-950/75 p-4 backdrop-blur">
                    <p className="label text-signal-300">Architecture review</p>
                    <p className="mt-2 text-sm leading-6 text-mist-50/78">
                      Real exceptions, routing logic, and operator visibility get designed before a workflow ever goes live.
                    </p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-5 shadow-lg">
                    <p className="label text-slate-500">Checkpoint rule</p>
                    <p className="mt-3 text-body text-ink-700">
                      AI handles repeatability. Humans handle trust, judgment, and the edge cases that define the customer experience.
                    </p>
                  </div>
                  <div className="rounded-[var(--radius-lg)] border border-ink-200 bg-gradient-to-br from-signal-500 to-signal-700 p-5 text-white shadow-lg">
                    <p className="label text-white/70">Live signal</p>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                      {["Input", "Route", "Resolve"].map((item) => (
                        <div key={item} className="rounded-md border border-white/12 bg-white/8 px-3 py-2 text-center">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
            <Link
              href={AI_AREA.href}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-ink-950 p-7 text-mist-50 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:col-span-7"
            >
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-signal-500/25 blur-[90px]" />
              <div className="relative grid gap-8 lg:grid-cols-[0.56fr_0.44fr] lg:items-center">
                <div>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/8 shadow-md backdrop-blur">
                    <AiAreaIcon className="h-7 w-7 text-signal-300" />
                  </span>
                  <h3 className="mt-5 text-h2 font-medium">{AI_AREA.name}</h3>
                  <p className="mt-3 max-w-md text-body text-mist-50/70">{AI_AREA.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {AI_AREA.highlights.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-mist-50/72">
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-signal-300">
                    Learn more
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
                <div className="rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <WorkflowGraph className="h-auto w-full" />
                </div>
              </div>
            </Link>

            <Link
              href={ENGINEERING_AREA.href}
              className="group overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:col-span-5"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/photos/step-build.jpg"
                  alt="Engineering delivery workspace"
                  fill
                  sizes="(min-width: 1024px) 28vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/14 shadow-md backdrop-blur">
                  <EngineeringAreaIcon className="h-7 w-7 text-white" />
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-h2 font-medium text-ink-900">{ENGINEERING_AREA.name}</h3>
                <p className="mt-3 text-body text-ink-600">{ENGINEERING_AREA.body}</p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {ENGINEERING_AREA.highlights.map((item) => (
                    <div key={item} className="rounded-md border border-ink-200 bg-mist-100 px-3 py-2 text-center text-xs text-ink-600">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href={SUPPORT_AREA.href}
              className="group overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:col-span-5"
            >
              <div className="grid lg:grid-cols-[0.48fr_0.52fr]">
                <div className="relative min-h-[300px]">
                  <Image
                    src="/photos/support-team.jpg"
                    alt="Human support team coordinating live operations"
                    fill
                    sizes="(min-width: 1024px) 20vw, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
                </div>
                <div className="p-7">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-signal-400 to-signal-600 shadow-md shadow-signal-500/25">
                    <SupportAreaIcon className="h-7 w-7 text-white" />
                  </span>
                  <h3 className="mt-5 text-h2 font-medium text-ink-900">{SUPPORT_AREA.name}</h3>
                  <p className="mt-3 text-body text-ink-600">{SUPPORT_AREA.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {SUPPORT_AREA.highlights.map((item) => (
                      <span key={item} className="rounded-full border border-ink-200 bg-mist-100 px-3 py-1.5 text-xs text-ink-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href={SOLUTIONS_AREA.href}
              className="group overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-gradient-to-br from-mist-50 to-mist-100 p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:col-span-7"
            >
              <div className="grid gap-6 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
                <div>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-signal-400 to-signal-600 shadow-md shadow-signal-500/25">
                    <SolutionsAreaIcon className="h-7 w-7 text-white" />
                  </span>
                  <h3 className="mt-5 text-h2 font-medium text-ink-900">{SOLUTIONS_AREA.name}</h3>
                  <p className="mt-3 max-w-sm text-body text-ink-600">{SOLUTIONS_AREA.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-signal-600">
                    Learn more
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {SOLUTIONS_AREA.highlights.map((solution, index) => (
                    <div
                      key={solution}
                      className={`rounded-[var(--radius-md)] border px-4 py-4 ${
                        index % 2 === 0
                          ? "border-signal-200 bg-white"
                          : "border-ink-200 bg-mist-50"
                      }`}
                    >
                      <p className="label text-ink-400">Solution</p>
                      <p className="mt-2 text-sm font-medium text-ink-900">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
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

      <section className="border-t border-ink-200 bg-mist-50">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-6">FAQ</Eyebrow>
          <div className="mx-auto flex max-w-3xl flex-col divide-y divide-ink-200 border-y border-ink-200">
            {FAQS.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-body-lg font-medium text-ink-900">
                  {item.q}
                  <span className="ml-4 shrink-0 text-ink-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-body text-ink-600">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
