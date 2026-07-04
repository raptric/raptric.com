import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink } from "@/components/ui/button";
import { AiAutomationIcon } from "@/components/illustrations/service-icons";
import WorkflowGraph from "@/components/illustrations/workflow-graph";
import {
  FlowIcon,
  SystemsIcon,
  AccountableIcon,
  CrmIcon,
  BuildIcon,
  CheckIcon,
} from "@/components/illustrations/concept-icons";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Automation Services | n8n, Workflow Automation & AI Systems | Raptric",
  description:
    "AI automation services for growing companies: workflow automation, n8n systems, process automation, CRM automation, AI customer support flows, and human-in-the-loop operations design.",
  path: "/ai-automation",
});

const TOOL_STACK = [
  "n8n",
  "Make.com",
  "Cursor",
  "OpenAI APIs",
  "CRM workflows",
  "Helpdesk systems",
  "Internal tooling",
  "Human review layers",
];

const SERVICE_LINES = [
  {
    Icon: FlowIcon,
    title: "Workflow automation",
    body: "We map repetitive business processes end to end, then automate routing, enrichment, approvals, notifications, and handoffs across the tools already in use.",
  },
  {
    Icon: SystemsIcon,
    title: "Agent and AI system design",
    body: "We build bounded AI systems for triage, intake, drafting, data movement, and support orchestration with rules around when confidence is enough and when it is not.",
  },
  {
    Icon: AccountableIcon,
    title: "Human-in-the-loop architecture",
    body: "We define where automation should stop, where specialists should step in, and how context should be preserved so judgment does not start from zero.",
  },
];

const EXPERTISE = [
  {
    title: "Operational automation architecture",
    body: "We break the workflow down into intake, routing, transformation, review, exception handling, and reporting so the system survives more than a happy path demo.",
  },
  {
    title: "Tooling fluency across the stack",
    body: "We work hands-on with n8n, Make.com, APIs, CRM systems, helpdesk tooling, and custom glue logic to choose the right level of build for the workflow.",
  },
  {
    title: "AI plus human review design",
    body: "We define confidence boundaries, specialist checkpoints, and escalation paths so AI helps throughput without quietly degrading trust or quality.",
  },
  {
    title: "Build speed with engineering discipline",
    body: "Modern tools like Cursor can accelerate delivery, but the real advantage comes from engineers who understand production logic, edge cases, and operational consequences.",
  },
];

const BUYER_PROBLEMS = [
  "AI pilots that never make it past the demo.",
  "Automations that save clicks but do not actually reduce operational drag.",
  "Workflows that break the moment a request becomes ambiguous or cross-functional.",
  "Teams relying on people to route, reconcile, and clean up work that should already be structured.",
];

const USE_CASES = [
  {
    title: "Lead management automation",
    body: "Inbound forms, enrichment, qualification, CRM updates, routing, and follow-up triggers connected into one measurable system.",
  },
  {
    title: "Support and intake orchestration",
    body: "AI-first handling for email, chat, and request triage with defined handoff into specialists, tech support, or customer operations.",
  },
  {
    title: "Back-office process automation",
    body: "Reconciliation, status updates, notifications, approvals, and exception queues that stop depending on people to remember the next step.",
  },
];

const PROOF_POINTS = [
  "Hands-on with the tooling, not just strategy language.",
  "Built around live workflows and exception paths, not happy-path diagrams.",
  "Structured for traffic, conversion, and actual operational adoption.",
];

const SALES_SIGNALS = [
  {
    title: "Where buyers usually start",
    body: "Lead routing, support triage, workflow automation, CRM follow-up, and back-office process cleanup are the most common starting points because the business pain is already visible there.",
  },
  {
    title: "What makes these systems stick",
    body: "Clear ownership, operator visibility, escalation design, and process fit. The automation only lasts when the people around it can trust it.",
  },
  {
    title: "How this turns into revenue impact",
    body: "Faster response, fewer dropped requests, better use of specialist time, cleaner routing, and less manual drag across the sales and support cycle.",
  },
];

const FAQS = [
  {
    q: "What kind of AI automation projects does Raptric take on?",
    a: "We focus on operational AI systems: workflow automation, CRM orchestration, support triage, intake systems, back-office automation, and AI plus human review models where decisions cannot be left fully unattended.",
  },
  {
    q: "Do you work with n8n and Make.com?",
    a: "Yes. We can build with n8n, Make.com, AI APIs, existing CRM/helpdesk tooling, and custom glue code where the workflow needs something beyond a standard connector.",
  },
  {
    q: "Can Raptric build AI automation for customer support and sales workflows?",
    a: "Yes. That is one of the strongest use cases. We can design AI-assisted support flows, lead routing, first-response systems, internal review layers, and escalation logic that feeds the right team with the right context.",
  },
  {
    q: "How do you handle risk with AI systems?",
    a: "By deciding where AI should stop. We design human checkpoints, escalation rules, audit trails, and confidence boundaries so sensitive or ambiguous cases route to a person before they become a bad outcome.",
  },
];

export default function AiAutomation() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "AI Automation", path: "/ai-automation" }]} />
      <ServiceSchema
        name="AI Automation Services"
        description="Workflow automation, n8n systems, business process automation, CRM automation, AI-assisted support flows, and human-in-the-loop architecture."
        path="/ai-automation"
      />

      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-400/40 to-transparent" />
        <Container className="grid gap-12 py-20 md:grid-cols-[0.94fr_1.06fr] md:items-center md:py-28">
          <div>
            <AiAutomationIcon className="h-12 w-12 text-signal-400" />
            <Eyebrow className="mb-4 mt-6 text-signal-400">AI Automation Services</Eyebrow>
            <h1 className="text-display font-semibold">
              AI automation systems built for real business workflows.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/68">
              We design, build, and operationalize AI automation for growing
              companies using tools like n8n, Make.com, Cursor, APIs, CRM
              systems, and human review layers where judgment is still part of
              the work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-mist-50/72">
              {["n8n automation", "workflow orchestration", "CRM automation", "HITL systems"].map((item) => (
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
                href="/solutions"
                className="group inline-flex items-center gap-2 text-sm font-medium text-mist-50/80 hover:text-mist-50"
              >
                See proof through solutions
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.56fr_0.44fr]">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-mist-50/12 shadow-2xl">
              <Image
                src="/photos/step-design.jpg"
                alt="Raptric team architecting workflow automation systems"
                fill
                sizes="(min-width: 1024px) 28vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/28 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[var(--radius-md)] border border-mist-50/12 bg-ink-950/78 p-4 backdrop-blur">
                <p className="label text-signal-300">System architecture</p>
                <p className="mt-2 text-sm leading-6 text-mist-50/78">
                  We design the workflow, the handoffs, the exception logic,
                  and the human review layer before the automation goes live.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-5 shadow-xl backdrop-blur">
                <p className="label text-signal-300">Working stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {TOOL_STACK.slice(0, 6).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-mist-50/10 bg-white/5 px-3 py-1.5 text-xs text-mist-50/76"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-5 shadow-xl backdrop-blur">
                <p className="label text-signal-300">Build posture</p>
                <p className="mt-3 text-sm leading-6 text-mist-50/78">
                  Hands-on builders with practical workflow experience, not just
                  AI strategy slides and prompt theatre.
                </p>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-5 shadow-xl backdrop-blur">
                <p className="label text-signal-300">Sales angle</p>
                <p className="mt-3 text-sm leading-6 text-mist-50/78">
                  Automation that improves response times, lead handling,
                  throughput, and specialist utilization.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-[radial-gradient(circle_at_top_left,_rgba(108,92,231,0.08),_transparent_38%),linear-gradient(to_bottom,_var(--color-mist-50),_var(--color-mist-100))]">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-8">What we actually build</Eyebrow>
          <div className="grid gap-5 md:grid-cols-3">
            {SERVICE_LINES.map((item) => (
              <div key={item.title} className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-7 shadow-lg">
                <IconBadge Icon={item.Icon} className="h-12 w-12" />
                <h2 className="mt-5 text-h3 font-medium text-ink-900">{item.title}</h2>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
            <div>
              <Eyebrow className="mb-5">How we architect it</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                AI is useful when the workflow around it is designed properly.
              </h2>
              <p className="mt-5 max-w-md text-body-lg text-ink-600">
                We do not start with “where can we add AI?” We start with the
                flow of work, the tools involved, the decisions being made, and
                the points where a wrong output becomes a real business problem.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  "Map the process and identify the real points of drag.",
                  "Decide what can be automated, what needs routing, and what needs human review.",
                  "Build the automation with the tools that match the workflow and the team.",
                ].map((item) => (
                  <div key={item} className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 px-4 py-3 text-sm text-ink-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[var(--radius-lg)] bg-ink-950 p-6 shadow-xl">
                <WorkflowGraph className="h-auto w-full" />
              </div>
              <div className="grid gap-4 md:grid-cols-[1.02fr_0.98fr]">
                <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-ink-950 shadow-xl">
                  <Image
                    src="/photos/step-build.jpg"
                    alt="AI automation systems being mapped across tools and operators"
                    fill
                    sizes="(min-width: 768px) 24vw, 90vw"
                    className="object-cover opacity-84"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/38 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-[var(--radius-md)] border border-mist-50/12 bg-ink-950/78 p-4 backdrop-blur">
                    <p className="label text-signal-300">Systems mapping</p>
                    <p className="mt-2 text-sm leading-6 text-mist-50/78">
                      The technical shape matters, but the handoffs, edge cases,
                      and operator view are what decide whether the system lasts.
                    </p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-5 shadow-lg">
                    <p className="label text-slate-500">Decision rule</p>
                    <p className="mt-3 text-body text-ink-700">
                      AI handles repeatability. Humans handle ambiguity, risk,
                      and communication moments that define trust.
                    </p>
                  </div>
                  <div className="rounded-[var(--radius-lg)] border border-ink-200 bg-gradient-to-br from-signal-500 to-signal-700 p-5 text-white shadow-lg">
                    <p className="label text-white/70">Production lens</p>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                      {["Route", "Review", "Resolve"].map((item) => (
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
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-8">Hands-on expertise</Eyebrow>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[var(--radius-lg)] border border-ink-200 bg-ink-950 p-7 text-mist-50 shadow-xl">
              <p className="label text-signal-300">What buyers need confidence in</p>
              <h2 className="mt-4 text-h2 font-medium">
                The team has to know the tools, the workflow logic, and the failure modes.
              </h2>
              <p className="mt-4 text-body text-mist-50/72">
                This is not generic AI consulting. Buyers need to know the team
                can work inside the stack, make practical tooling decisions, and
                build systems that stay useful once volume, ambiguity, and edge
                cases start showing up.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {TOOL_STACK.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-mist-50/76"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {EXPERTISE.map((item) => (
                <div key={item.title} className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 shadow-lg">
                  <IconBadge Icon={BuildIcon} variant="muted" className="h-10 w-10" />
                  <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                  <p className="mt-3 text-body text-ink-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.78fr_1.22fr] md:items-center md:gap-16">
            <div>
              <Eyebrow className="mb-4">Why buyers reach out</Eyebrow>
              <h2 className="text-h2 font-semibold text-ink-900">
                The gap is usually not tooling. It is structure.
              </h2>
              <div className="mt-8 rounded-[var(--radius-lg)] border border-ink-200 bg-ink-950 p-5 text-mist-50 shadow-xl">
                <p className="label text-signal-300">Typical pattern</p>
                <div className="mt-4 grid gap-3">
                  {["Tool bought", "Workflow patched", "Volume grows", "System breaks"].map((item) => (
                    <div key={item} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-mist-50/76">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              {BUYER_PROBLEMS.map((item, index) => (
                <div key={item} className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 p-5">
                  <span className="label text-signal-600">{`0${index + 1}`}</span>
                  <p className="mt-2 text-body-lg text-ink-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-8">Example sales-facing use cases</Eyebrow>
          <div className="grid gap-5 md:grid-cols-3">
            {USE_CASES.map((item) => (
              <div key={item.title} className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 shadow-lg">
                <IconBadge Icon={CrmIcon} variant="muted" className="h-10 w-10" />
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-6">Why Raptric</Eyebrow>
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 shadow-xl">
              <Image
                src="/photos/hero-team.jpg"
                alt="Raptric team working hands-on with automation systems"
                fill
                sizes="(min-width: 1024px) 26vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/74 via-ink-950/14 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[var(--radius-md)] border border-mist-50/12 bg-ink-950/78 p-4 backdrop-blur">
                <p className="label text-signal-300">Execution posture</p>
                <p className="mt-2 text-sm leading-6 text-mist-50/78">
                  Built by a team that works inside automation systems, not just around the messaging of them.
                </p>
              </div>
            </div>
            <div className="grid gap-3">
              {PROOF_POINTS.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 px-4 py-4">
                  <IconBadge Icon={CheckIcon} variant="muted" className="h-8 w-8 shrink-0" />
                  <p className="text-body text-ink-700">{item}</p>
                </div>
              ))}
              {SALES_SIGNALS.map((item) => (
                <div key={item.title} className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 p-5">
                  <p className="label text-signal-600">{item.title}</p>
                  <p className="mt-3 text-body text-ink-700">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-200/60">
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

      <section className="bg-ink-950 text-mist-50">
        <Container className="py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-h2 font-semibold">
            Need AI automation services that are actually tied to revenue, support, or operations?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-mist-50/65">
            We can help map the workflow, choose the right tooling, and build an
            automation layer that holds up under real operational use.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-mist-50/20 px-6 py-3.5 text-sm font-medium text-mist-50 transition-colors hover:border-mist-50/40 hover:bg-mist-50/5"
            >
              Explore solutions
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
