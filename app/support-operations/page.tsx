import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink, TextLink } from "@/components/ui/button";
import {
  BreadcrumbSchema,
  FAQSchema,
  ServiceSchema,
} from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { CustomerOperationsIcon } from "@/components/illustrations/service-icons";
import {
  AppIcon,
  CheckIcon,
  FlowIcon,
  HeadsetIcon,
  TicketIcon,
} from "@/components/illustrations/concept-icons";

export const metadata = buildMetadata({
  title:
    "AI Support Operations for AI & SaaS Companies | Technical Support Outsourcing | Raptric",
  description:
    "24/7 technical support outsourcing, AI customer support, application support services, and human-in-the-loop operations for AI and SaaS companies that need cleaner routing, stronger escalation, and lower engineering interruption.",
  path: "/support-operations",
  image: "/og/support-operations-1200x630.png",
  imageAlt:
    "Raptric support operations social share image for AI and SaaS technical support outsourcing",
});

const PAGE_PROOF = [
  {
    title: "What gets built",
    body:
      "Technical support workflows, ticket triage models, application support playbooks, human-in-the-loop review paths, escalation rules, and AI-assisted intake systems.",
  },
  {
    title: "What improves",
    body:
      "Faster first response, cleaner routing, lower engineering interruptions, fewer escalation mistakes, and better use of specialist time.",
  },
  {
    title: "Where it applies",
    body:
      "SaaS technical support, AI product support, onboarding, application support, bug reproduction, queue monitoring, and customer operations under live production conditions.",
  },
];

const DEFINITIONS = [
  {
    title: "What is technical support outsourcing?",
    body:
      "Technical support outsourcing means adding a dedicated support layer that can handle troubleshooting, ticket triage, bug reproduction, escalation, and customer communication without forcing every issue back onto the product team.",
  },
  {
    title: "What is AI support operations?",
    body:
      "AI support operations combines customer support, technical support, human review, AI quality monitoring, and escalation design so AI-powered products can run reliably in production.",
  },
];

const COMPANY_TYPES = [
  "AI Startups",
  "SaaS Companies",
  "Developer Tools",
  "B2B Software",
  "Healthcare Software",
  "FinTech",
  "HR Tech",
  "PropTech",
  "Enterprise Software",
];

const SERVICE_BLOCKS = [
  {
    Icon: HeadsetIcon,
    title: "Customer support",
    body:
      "Email, chat, phone, billing questions, account support, and customer communication that stays consistent as ticket volume grows.",
    bullets: ["Email and chat support", "Phone coverage", "Billing and account help"],
  },
  {
    Icon: TicketIcon,
    title: "Technical support",
    body:
      "API troubleshooting, authentication issues, login problems, product troubleshooting, bug reproduction, log collection, and escalation into engineering.",
    bullets: ["Ticket triage", "Bug reproduction", "Escalation management"],
  },
  {
    Icon: AppIcon,
    title: "Application support",
    body:
      "Incident management, user onboarding, release support, documentation, and knowledge-base upkeep for teams running live software.",
    bullets: ["Incident handling", "User onboarding", "Release support"],
  },
  {
    Icon: FlowIcon,
    title: "AI support operations",
    body:
      "Prompt testing, conversation audits, AI response monitoring, human review, failure analysis, and workflow monitoring for AI-powered support experiences.",
    bullets: ["Prompt QA", "HITL review", "Agent monitoring"],
  },
];

const AI_FRAMEWORK_PREVIEW = [
  "AI product support",
  "AI quality operations",
  "AI agent operations",
  "Human-in-the-loop operations",
  "Knowledge operations",
  "AI performance operations",
];

const HOW_RAPTRIC_WORKS = [
  {
    n: "01",
    title: "Learn the product",
    body:
      "We start with the product, the customer issues, the support stack, and the points where routing or escalation already breaks down.",
  },
  {
    n: "02",
    title: "Build the knowledge base",
    body:
      "We structure product knowledge, troubleshooting paths, policy guidance, and escalation rules so support work is not trapped in tribal memory.",
  },
  {
    n: "03",
    title: "Train the dedicated team",
    body:
      "Support coverage is built around your product, your customers, and your escalation requirements instead of a generic shared-agent model.",
  },
  {
    n: "04",
    title: "Augment every engineer with AI",
    body:
      "AI helps with intake, ticket triage, summarization, CRM follow-up, and queue handling while human specialists stay focused on nuance and trust.",
  },
  {
    n: "05",
    title: "Improve through analytics",
    body:
      "We review response quality, routing logic, escalation flow, repeat issues, and AI behavior so the support model keeps getting better over time.",
  },
];

const WHY_RAPTRIC = [
  "AI-native support teams, not generic BPO staffing",
  "Dedicated teams instead of shared queue agents",
  "Faster response times and lower engineering interruption",
  "24/7 support coverage built around modern software environments",
  "Operational documentation that compounds over time",
  "Support architecture designed for AI and SaaS companies",
];

const TECHNOLOGIES = [
  "Zendesk",
  "Intercom",
  "Freshdesk",
  "Jira",
  "Linear",
  "Slack",
  "Microsoft Teams",
  "GitHub",
  "Notion",
];

const RELATED_SOLUTIONS = [
  {
    title: "AI Voice Agents",
    body:
      "A support-led solution where voice intake, scheduling, CRM updates, and human handoff need to work together cleanly.",
    href: "/solutions#ai-voice-agents",
  },
  {
    title: "Healthcare Workflow Platform",
    body:
      "A system example where support, scheduling, communication, and revenue-cycle workflows depend on strong routing and escalation.",
    href: "/solutions#end-to-end-healthcare-workflow-platform",
  },
  {
    title: "AI Sales Engagement Platform",
    body:
      "An outreach environment where queue monitoring, message quality, and human approvals matter before automation can be trusted at scale.",
    href: "/solutions#ai-sales-engagement-platform",
  },
];

const FAQS = [
  {
    q: "What is AI support operations?",
    a: "AI support operations is the end-to-end operation of AI-powered support systems, including technical support, customer support, AI quality monitoring, human-in-the-loop review, escalation design, and continuous improvement.",
  },
  {
    q: "Do you provide 24/7 technical support outsourcing?",
    a: "Yes. Raptric can design dedicated technical support coverage for AI and SaaS companies that need around-the-clock customer handling, issue triage, onboarding support, and escalation paths.",
  },
  {
    q: "Can Raptric support AI applications in production?",
    a: "Yes. We support AI products through prompt testing, conversation audits, quality monitoring, HITL review, knowledge updates, and technical troubleshooting when AI behavior becomes unreliable.",
  },
  {
    q: "Do you handle L1 and L2 support?",
    a: "Yes. We can structure first-line and second-line support coverage, including ticket triage, product troubleshooting, bug reproduction, log collection, and escalation into engineering when needed.",
  },
  {
    q: "Do you work inside our existing support stack?",
    a: "Yes. We can work inside tools like Zendesk, Intercom, Freshdesk, Jira, Linear, Slack, GitHub, Microsoft Teams, and Notion depending on how your support and product workflows are already set up.",
  },
  {
    q: "How is this different from a generic support vendor?",
    a: "Raptric focuses on technical support systems, AI support operations, and escalation design for modern software companies. The goal is not just answering tickets - it is reducing routing drag, protecting engineering time, and improving how support works as part of the product system.",
  },
];

export default function SupportOperationsPage() {
  return (
    <>
      <FAQSchema items={FAQS} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Support Operations", path: "/support-operations" },
        ]}
      />
      <ServiceSchema
        name="AI Support Operations"
        description="24/7 technical support outsourcing, application support services, AI customer support, and HITL operations for AI and SaaS companies."
        path="/support-operations"
      />

      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-400/40 to-transparent" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-signal-500/16 blur-[120px]" />
        <Container className="grid items-center gap-14 py-18 md:grid-cols-[0.94fr_1.06fr] md:py-24">
          <div>
            <CustomerOperationsIcon className="h-12 w-12 text-signal-400" />
            <Eyebrow className="mb-4 mt-6 text-signal-400">Support Operations</Eyebrow>
            <h1 className="text-display font-semibold">
              24/7 Technical Support for AI &amp; SaaS Companies
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/68">
              Keep your engineers focused on building product while our dedicated support
              team handles customer issues, technical troubleshooting, onboarding,
              AI-assisted intake, and escalation around the clock.
            </p>
            <p className="mt-4 max-w-xl text-body text-mist-50/60">
              This page is about technical support outsourcing, application support,
              AI customer support, and human-in-the-loop support models for software
              companies that need cleaner routing, stronger escalation, and less
              workflow drag.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-mist-50/72">
              {[
                "Technical support outsourcing",
                "SaaS technical support",
                "AI customer support",
                "Application support services",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-mist-50/12 bg-mist-50/[0.04] px-3.5 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaLink href="/contact">Book a discovery call</CtaLink>
              <Link
                href="/ai-support-operations"
                className="group inline-flex items-center gap-2 text-sm font-medium text-mist-50/80 hover:text-mist-50"
              >
                See the AI Support Operations framework
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
            <p className="mt-4 max-w-lg text-sm text-mist-50/56">
              Best for founders, support leaders, product leaders, and operations teams who
              need support coverage without letting routing blur, ticket triage, or
              escalations keep pulling engineers back into the queue.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-signal-500/14 blur-[110px]" />
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] shadow-2xl">
              <div className="relative min-h-[440px]">
                <Image
                  src="/photos/support-team.jpg"
                  alt="Technical support team working on SaaS and AI customer issues"
                  fill
                  sizes="(min-width: 768px) 48vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/72 via-ink-950/18 to-transparent" />
                <div className="absolute left-6 top-6 rounded-full border border-mist-50/16 bg-ink-950/64 px-3 py-1.5 text-xs font-medium text-mist-50/80 backdrop-blur">
                  AI + human support coverage
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-[var(--radius-lg)] border border-mist-50/12 bg-ink-950/72 p-5 backdrop-blur">
                  <p className="label text-signal-300">Support posture</p>
                  <p className="mt-3 text-body text-mist-50/80">
                    Faster first response, cleaner escalation, stronger ticket triage, and
                    better protection for the engineering roadmap.
                  </p>
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

      <section className="border-b border-ink-200 bg-mist-50">
        <Container className="py-16 md:py-20">
          <h2 className="max-w-3xl text-h1 font-semibold text-ink-900">
            Raptric provides technical support outsourcing for AI and SaaS companies that
            need dedicated teams, better escalation, and human oversight around AI-powered
            customer workflows.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {DEFINITIONS.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-lg)] border border-ink-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-[radial-gradient(circle_at_top_left,_rgba(108,92,231,0.08),_transparent_38%),linear-gradient(to_bottom,_var(--color-mist-50),_var(--color-mist-100))]">
        <Container className="py-18 md:py-22">
          <Eyebrow className="mb-5">Who we help</Eyebrow>
          <h2 className="max-w-2xl text-h1 font-semibold text-ink-900">
            Built for software companies where customer issues, product behavior, and
            technical escalation all meet in the same support reality.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {COMPANY_TYPES.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-white">
        <Container className="py-18 md:py-22">
          <Eyebrow className="mb-5">What we do</Eyebrow>
          <h2 className="max-w-3xl text-h1 font-semibold text-ink-900">
            Customer support, technical support, application support, and AI support
            operations designed as one service system.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SERVICE_BLOCKS.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 shadow-sm"
              >
                <IconBadge Icon={item.Icon} className="h-12 w-12" />
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-full border border-ink-200 bg-white px-3 py-1.5 text-xs text-ink-700"
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-18 md:py-22">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <div>
              <Eyebrow className="mb-5">Where this is going</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                AI Support Operations is the broader category behind modern support for AI
                and SaaS products.
              </h2>
              <p className="mt-5 text-body-lg text-ink-600">
                Support is no longer just answering tickets. It now includes AI quality,
                human review, queue monitoring, knowledge updates, and agent oversight in
                production.
              </p>
              <p className="mt-4 text-body text-ink-600">
                We are defining that category on a separate authority page so the
                commercial service offer stays clear while the framework keeps expanding.
              </p>
              <div className="mt-8">
                <CtaLink href="/ai-support-operations">
                  Explore the AI Support Operations framework
                </CtaLink>
              </div>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-ink-200 bg-white p-6 shadow-sm">
              <p className="label text-signal-700">Framework preview</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {AI_FRAMEWORK_PREVIEW.map((item) => (
                  <div
                    key={item}
                    className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 px-4 py-3 text-sm font-medium text-ink-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-body text-ink-600">
                This is where Raptric shifts from generic support language into a more
                defensible category: operating production AI systems through technical
                support, HITL review, knowledge operations, quality monitoring, and
                continuous improvement.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-50">
        <Container className="py-18 md:py-22">
          <Eyebrow className="mb-5">How Raptric works</Eyebrow>
          <h2 className="max-w-3xl text-h1 font-semibold text-ink-900">
            A dedicated support model built around product knowledge, AI assistance, and
            continuous improvement.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {HOW_RAPTRIC_WORKS.map((item) => (
              <div
                key={item.n}
                className="rounded-[var(--radius-lg)] border border-ink-200 bg-white p-5 shadow-sm"
              >
                <p className="label text-signal-600">{item.n}</p>
                <h3 className="mt-3 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-white">
        <Container className="py-18 md:py-22">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <Eyebrow className="mb-5">Why companies choose Raptric</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                A modern support model for AI and SaaS companies, not a generic call-center
                staffing program.
              </h2>
              <p className="mt-4 text-body-lg text-ink-600">
                The goal is to reduce queue pressure, improve routing, protect engineering
                time, and keep customer trust intact while support volume scales.
              </p>
            </div>
            <div className="grid gap-4">
              {WHY_RAPTRIC.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-5 shadow-sm"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                  <p className="text-body text-ink-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <Eyebrow className="mb-5">Technologies we support</Eyebrow>
              <h2 className="text-h2 font-semibold text-ink-900">
                Support workflows usually sit inside a real stack, not a blank page.
              </h2>
              <p className="mt-4 text-body text-ink-600">
                We work within the platforms where ticket triage, CRM follow-up, release
                visibility, issue escalation, and team communication already happen.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {TECHNOLOGIES.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-50">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-5">Where this applies</Eyebrow>
          <h2 className="max-w-3xl text-h2 font-semibold text-ink-900">
            Solution examples where technical support, AI review, and escalation design
            become part of the product system.
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
          <p className="mt-6 max-w-3xl text-body text-ink-600">
            This page connects naturally with{" "}
            <TextLink href="/ai-automation">AI automation services</TextLink>,{" "}
            <TextLink href="/engineering-team">software development partner services</TextLink>, and the authority model on{" "}
            <TextLink href="/ai-support-operations">AI Support Operations</TextLink>.
          </p>
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
                  <span className="ml-4 shrink-0 text-mist-50/40 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-body text-mist-50/68">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-7 md:p-8">
            <div className="grid gap-6 md:grid-cols-[0.68fr_0.32fr] md:items-center">
              <div>
                <p className="label text-signal-300">Commercial close</p>
                <h3 className="mt-3 text-h2 font-semibold">
                  Need technical support that can handle AI, product complexity, and human
                  judgment without breaking trust?
                </h3>
                <p className="mt-3 max-w-2xl text-body text-mist-50/68">
                  We help AI and SaaS companies define what should be automated, what
                  should route to technical support, where human review belongs, and how
                  escalation should move before customer trust takes the hit.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:justify-end">
                <CtaLink href="/contact">Discuss support operations</CtaLink>
                <Link
                  href="/ai-support-operations"
                  className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-mist-50/20 px-6 py-3.5 text-sm font-medium text-mist-50 transition-colors hover:border-mist-50/40 hover:bg-mist-50/5"
                >
                  See the AI Support Operations framework
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
