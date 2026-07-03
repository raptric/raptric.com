import Link from "next/link";
import Image from "next/image";
import WorkflowGraph from "@/components/illustrations/workflow-graph";
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
    body: "AI workflows, agents, and process automation built into how the business runs.",
  },
  {
    Icon: CustomerOperationsIcon,
    name: "Support Operations",
    href: "/support-operations",
    body: "Customer support, technical support, and call center coverage that scales.",
  },
  {
    Icon: SaasDevelopmentIcon,
    name: "Engineering Team",
    href: "/engineering-team",
    body: "SaaS development, staff augmentation, and dedicated teams, embedded in your roadmap.",
  },
  {
    Icon: TechnologyAdvisoryIcon,
    name: "Solutions",
    href: "/solutions",
    body: "The three pillars combined into concrete business outcomes.",
  },
];

const WHY_RAPTRIC = [
  { Icon: BuildIcon, title: "We build, not just advise", body: "The automation and the software, shipped by us." },
  { Icon: SystemsIcon, title: "Systems, not tasks", body: "Every build starts with how the operation actually runs." },
  { Icon: AccountableIcon, title: "Operationally accountable", body: "We stay attached to how it performs after launch." },
];

const PROBLEMS = [
  { Icon: StopIcon, text: "Automation that stops at one task." },
  { Icon: TangleIcon, text: "Operations held together by spreadsheets and memory." },
  { Icon: MismatchIcon, text: "Software that doesn't match how the business runs." },
  { Icon: ClockIcon, text: "Support that can't keep pace with growth." },
];

const METHODOLOGY_STEPS = [
  {
    n: "01",
    label: "Discover",
    title: "Understand the operation as it runs today",
    body: "Before anything gets built, we map the actual workflow — the tools, the exceptions, the parts held together by memory.",
    image: "/photos/step-discover.jpg",
  },
  {
    n: "02",
    label: "Design",
    title: "Architect the automation and the system around it",
    body: "We design the split between what's automated and what's staffed, before writing a line of code.",
    image: "/photos/step-design.jpg",
  },
  {
    n: "03",
    label: "Build",
    title: "Ship the software and the AI workflows",
    body: "Automation, integrations, and internal tools get built against the real operation, not a demo environment.",
    image: "/photos/step-build.jpg",
  },
  {
    n: "04",
    label: "Launch & Support",
    title: "Put it into the operation, then stay attached to it",
    body: "We stay operationally accountable after go-live — the system gets used, monitored, and improved.",
    image: "/photos/step-launch.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <Container className="grid min-h-[86vh] items-center gap-12 py-16 md:min-h-[80vh] md:grid-cols-[1.05fr_0.95fr] md:gap-8">
          <div>
            <Eyebrow className="mb-6 text-signal-400">Operating Systems for Business Workflows</Eyebrow>
            <h1 className="text-display font-semibold">
              We build operating systems for business workflows.
            </h1>
            <p className="mt-6 max-w-md text-body-lg text-mist-50/65">
              AI automation, software, and operations — engineered as one
              system, not three separate vendors.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
              <Link
                href="/ai-automation"
                className="group inline-flex items-center gap-2 text-sm font-medium text-mist-50/80 hover:text-mist-50"
              >
                Explore AI Automation
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="absolute -inset-6 -z-10 bg-signal-500/25 blur-[100px]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] shadow-2xl md:aspect-[5/6]">
              <Image
                src="/photos/hero-team.jpg"
                alt="Raptric team working through a system design session"
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/0 to-ink-950/10" />
            </div>
            <div className="absolute -bottom-5 left-4 flex items-center gap-2 rounded-full border border-mist-50/15 bg-ink-900/90 px-4 py-2 shadow-xl backdrop-blur sm:left-6">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
              <span className="text-xs font-medium text-mist-50/80">System active</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem statement */}
      <section className="relative overflow-hidden bg-ink-950 py-24 md:py-32">
        <Image
          src="/photos/dark-city.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/85 to-ink-950" />
        <Container className="relative">
          <p className="mx-auto max-w-2xl text-center text-h2 font-medium leading-snug text-mist-50/90">
            Most businesses don&apos;t need more tools. They need the
            automation, the software, and the people to actually{" "}
            <span className="text-signal-400">run the operation</span> —
            together, not as three separate vendors.
          </p>
        </Container>
      </section>

      {/* What Raptric Does */}
      <section className="border-b border-ink-200">
        <Container className="py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <Eyebrow className="mb-5">What Raptric does</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                One system. Not a stack of vendors.
              </h2>
              <p className="mt-5 max-w-md text-body-lg text-ink-600">
                We design the automation, build the software, and structure
                the operation around it — so it runs, not just demos.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-ink-950 p-6 shadow-xl">
              <WorkflowGraph className="h-auto w-full" />
            </div>
          </div>
        </Container>
      </section>

      {/* Core Areas */}
      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-20 md:py-24">
          <Eyebrow className="mb-5">Core areas</Eyebrow>
          <h2 className="max-w-xl text-h1 font-semibold text-ink-900">
            Three pillars, combined into outcomes.
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_AREAS.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group flex flex-col justify-between rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-7 transition-all hover:border-signal-400 hover:shadow-lg"
              >
                <div>
                  <area.Icon className="h-10 w-10 text-ink-800" />
                  <h3 className="mt-5 text-h3 font-medium text-ink-900">
                    {area.name}
                  </h3>
                  <p className="mt-2 text-body text-ink-600">{area.body}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-signal-600">
                  Learn more
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Raptric */}
      <section id="why-raptric" className="border-b border-ink-200">
        <Container className="py-20 md:py-24">
          <Eyebrow className="mb-10">Why Raptric</Eyebrow>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {WHY_RAPTRIC.map((item) => (
              <div key={item.title} className="border-t border-ink-200 pt-6">
                <IconBadge Icon={item.Icon} className="h-12 w-12" />
                <h3 className="mt-4 text-h3 font-medium text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Problems We Solve */}
      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <Eyebrow className="mb-5">Problems we solve</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                The gap between a tool and a working operation.
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {PROBLEMS.map((p) => (
                <li
                  key={p.text}
                  className="flex gap-4 rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 p-5"
                >
                  <IconBadge Icon={p.Icon} variant="muted" className="h-9 w-9 shrink-0" />
                  <p className="text-body text-ink-700">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* How We Work */}
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

      {/* Let's Talk */}
      <section className="bg-ink-950 text-mist-50">
        <Container className="py-20 text-center md:py-24">
          <h2 className="mx-auto max-w-xl text-h1 font-semibold">
            Let&apos;s talk about the operation you&apos;re running.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-body-lg text-mist-50/65">
            One conversation, no obligation, straight to the point.
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
