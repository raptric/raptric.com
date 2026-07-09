import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import { CtaLink, TextLink } from "@/components/ui/button";
import {
  BreadcrumbSchema,
  CollectionPageSchema,
  FAQSchema,
  ItemListSchema,
  ServiceSchema,
} from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import {
  AccountableIcon,
  AppIcon,
  CheckIcon,
  FlowIcon,
  HeadsetIcon,
  SystemsIcon,
} from "@/components/illustrations/concept-icons";
import IconBadge from "@/components/ui/icon-badge";

export const metadata = buildMetadata({
  title: "AI Support Operations for Production AI Systems | Raptric",
  description:
    "AI Support Operations is Raptric's framework for operating production AI systems through technical support, AI quality monitoring, human-in-the-loop review, agent oversight, knowledge operations, and continuous improvement.",
  path: "/ai-support-operations",
  image: "/og/ai-support-operations-1200x630.png",
  imageAlt:
    "Raptric AI Support Operations social share image for production AI support and HITL operations",
});

const FRAMEWORK = [
  {
    Icon: HeadsetIcon,
    title: "AI Product Support",
    definition:
      "Supporting customers who use AI-powered products in production.",
    bullets: [
      "Customer tickets",
      "Technical troubleshooting",
      "Onboarding",
      "Escalations",
    ],
  },
  {
    Icon: CheckIcon,
    title: "AI Quality Operations",
    definition:
      "Ensuring the AI performs as expected under real production conditions.",
    bullets: [
      "Prompt testing",
      "Regression testing",
      "Hallucination tracking",
      "Accuracy evaluation",
      "Safety checks",
      "Output scoring",
    ],
  },
  {
    Icon: FlowIcon,
    title: "AI Agent Operations",
    definition:
      "Operating autonomous AI agents and the workflows they depend on.",
    bullets: [
      "Agent health monitoring",
      "Workflow failures",
      "Tool integration failures",
      "Queue monitoring",
      "Retry management",
      "Human approvals",
    ],
  },
  {
    Icon: AccountableIcon,
    title: "Human-in-the-Loop Operations",
    definition:
      "Adding human oversight where trust, risk, or ambiguity still define the outcome.",
    bullets: [
      "Review AI outputs",
      "Approve sensitive actions",
      "Correct mistakes",
      "Label edge cases",
      "Feed improvements back into the system",
    ],
  },
  {
    Icon: SystemsIcon,
    title: "Knowledge Operations",
    definition:
      "Keeping the AI's knowledge current so responses stay relevant and safe.",
    bullets: [
      "Documentation",
      "Knowledge base updates",
      "Retrieval tuning",
      "Version control",
      "Policy updates",
    ],
  },
  {
    Icon: AppIcon,
    title: "AI Performance Operations",
    definition:
      "Tracking the business outcomes behind support and automation performance.",
    bullets: [
      "Resolution rate",
      "First response time",
      "Automation rate",
      "Cost per interaction",
      "Customer satisfaction",
      "AI success rate",
    ],
  },
];

const WHY_THIS_CATEGORY = [
  "Most buyers understand technical support, AI customer support, and SaaS support today.",
  "Very few companies define the full discipline of operating AI-powered products in production.",
  "Raptric uses AI Support Operations to connect technical support, AI quality, HITL review, agent monitoring, and continuous improvement into one practical model.",
];

const DIFFERENTIATORS = [
  {
    title: "Not just a helpdesk",
    body:
      "Traditional support language usually stops at tickets, response time, and queue coverage. AI Support Operations includes prompt quality, agent oversight, and human approvals as part of the support system.",
  },
  {
    title: "Not just LLMOps",
    body:
      "LLMOps often focuses on model deployment and infrastructure. AI Support Operations focuses on what happens after launch when users, requests, escalations, and trust all collide in production.",
  },
  {
    title: "Not generic BPO",
    body:
      "Raptric is not positioning this as shared-agent outsourcing. The model is technical, AI-native, and designed for modern SaaS and AI products that need real operational depth.",
  },
];

const PRACTICAL_APPLICATIONS = [
  "AI chat and voice support systems",
  "Prompt QA and regression monitoring",
  "Technical support for AI products",
  "HITL review workflows for trust-sensitive actions",
  "Knowledge-base and retrieval updates",
  "Production AI incident handling",
];

const FAQS = [
  {
    q: "What is AI Support Operations?",
    a: "AI Support Operations is the discipline of operating, monitoring, improving, and supporting AI-powered products in production through technical support, AI quality operations, human review, knowledge maintenance, and performance tracking.",
  },
  {
    q: "How is AI Support Operations different from technical support outsourcing?",
    a: "Technical support outsourcing is one part of the picture. AI Support Operations is broader. It includes support coverage, prompt testing, conversation quality, AI incident handling, HITL review, and operational analytics for AI-powered products.",
  },
  {
    q: "How is AI Support Operations different from LLMOps?",
    a: "LLMOps usually focuses on model deployment, infrastructure, and lifecycle management. AI Support Operations focuses on the live operational layer: customer issues, escalations, agent failures, knowledge updates, quality drift, and the human review needed to keep AI trustworthy in production.",
  },
  {
    q: "Who is this framework for?",
    a: "It is designed for AI startups, SaaS companies, developer tools, healthcare software, and enterprise software teams that run AI-powered workflows or products and need support, monitoring, escalation, and quality control around them.",
  },
  {
    q: "Does Raptric offer this as a service today?",
    a: "Yes. Raptric delivers the commercial side through technical support outsourcing, application support, AI customer support, and HITL operations, while using the AI Support Operations framework to guide how those systems are structured and improved.",
  },
];

export default function AiSupportOperationsPage() {
  return (
    <>
      <FAQSchema items={FAQS} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "AI Support Operations", path: "/ai-support-operations" },
        ]}
      />
      <CollectionPageSchema
        name="AI Support Operations"
        description="Raptric's framework for operating production AI systems through support, quality, HITL review, and continuous improvement."
        path="/ai-support-operations"
      />
      <ItemListSchema
        name="AI Support Operations Framework"
        path="/ai-support-operations"
        items={FRAMEWORK.map((item) => ({
          name: item.title,
          path: "/ai-support-operations",
        }))}
      />
      <ServiceSchema
        name="AI Support Operations"
        description="Raptric helps AI and SaaS companies operate production AI systems through technical support, human-in-the-loop operations, quality assurance, agent monitoring, and continuous improvement."
        path="/ai-support-operations"
      />

      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-400/40 to-transparent" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-signal-500/16 blur-[120px]" />
        <Container className="grid gap-12 py-18 md:grid-cols-[0.94fr_1.06fr] md:items-center md:py-24">
          <div>
            <Eyebrow className="mb-5 text-signal-400">AI Support Operations</Eyebrow>
            <h1 className="text-display font-semibold">
              AI Support Operations for production AI systems.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/68">
              AI Support Operations is the discipline of operating, monitoring,
              improving, and supporting AI-powered products in production.
            </p>
            <p className="mt-4 max-w-xl text-body text-mist-50/60">
              Raptric uses this framework to connect technical support, AI quality
              operations, human-in-the-loop review, agent oversight, knowledge
              updates, and continuous improvement into one practical operating model.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaLink href="/support-operations">
                View technical support service
              </CtaLink>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-mist-50/80 hover:text-mist-50"
              >
                Talk through your AI support model
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-6 shadow-2xl">
            <p className="label text-signal-300">Why this matters</p>
            <div className="mt-5 grid gap-4">
              {WHY_THIS_CATEGORY.map((item) => (
                <div
                  key={item}
                  className="rounded-[var(--radius-md)] border border-mist-50/12 bg-ink-900/40 px-4 py-4 text-sm text-mist-50/76"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-100">
        <Container className="py-12 md:py-14">
          <div className="mb-8 rounded-[var(--radius-lg)] border border-ink-200 bg-white p-6 shadow-sm">
            <Eyebrow className="mb-4">What AI Support Operations means</Eyebrow>
            <p className="max-w-4xl text-body-lg text-ink-700">
              This page explains the framework Raptric uses to operate production AI
              systems through technical support, AI quality
              checks, human review, escalation control, knowledge maintenance, and
              continuous improvement.
            </p>
            <p className="mt-3 max-w-4xl text-body text-ink-600">
              If you need a dedicated service team now, start with{" "}
              <TextLink href="/support-operations">
                24/7 technical support for AI and SaaS companies
              </TextLink>
              . If you want the operating model behind that service, this page explains it.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[var(--radius-lg)] border border-ink-200 bg-white p-5 shadow-sm">
              <p className="label text-signal-700">Who Raptric is</p>
              <p className="mt-3 text-body text-ink-700">
                Raptric is an operator-led company that builds AI automation systems,
                technical support models, and software delivery capacity for modern
                software businesses.
              </p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-ink-200 bg-white p-5 shadow-sm">
              <p className="label text-signal-700">How Raptric applies it</p>
              <p className="mt-3 text-body text-ink-700">
                We help AI and SaaS companies support live products through technical
                support, HITL review, escalation design, AI quality checks, and
                continuous improvement.
              </p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-ink-200 bg-white p-5 shadow-sm">
              <p className="label text-signal-700">Who it serves</p>
              <p className="mt-3 text-body text-ink-700">
                AI startups, SaaS companies, developer tools, healthcare software, and
                enterprise teams running production AI workflows or AI-powered products.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-50">
        <Container className="py-18 md:py-22">
          <Eyebrow className="mb-5">The framework</Eyebrow>
          <h2 className="max-w-3xl text-h1 font-semibold text-ink-900">
            Six layers that explain how production AI systems actually stay reliable
            after launch.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {FRAMEWORK.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-lg)] border border-ink-200 bg-white p-6 shadow-sm"
              >
                <IconBadge Icon={item.Icon} className="h-12 w-12" />
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.definition}</p>
                <div className="mt-5 grid gap-2">
                  {item.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 px-3 py-2 text-sm text-ink-700"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-white">
        <Container className="py-18 md:py-22">
          <Eyebrow className="mb-5">Why this category matters</Eyebrow>
          <h2 className="max-w-3xl text-h1 font-semibold text-ink-900">
            AI Support Operations sits between technical support outsourcing, AI quality,
            and production AI reliability.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 shadow-sm"
              >
                <h3 className="text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-body text-ink-600">
            If you need immediate implementation help, the clearest next step is{" "}
            <TextLink href="/support-operations">
              technical support outsourcing for AI and SaaS companies
            </TextLink>
            . For teams shaping a longer-term AI operating model, this framework explains how the system fits together.
          </p>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <Eyebrow className="mb-5">Where it shows up</Eyebrow>
              <h2 className="text-h2 font-semibold text-ink-900">
                Practical applications where AI Support Operations becomes visible.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {PRACTICAL_APPLICATIONS.map((item) => (
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
                <p className="label text-signal-300">Need implementation help?</p>
                <h3 className="mt-3 text-h2 font-semibold">
                  If you need this framework applied in the real world, start with the service page.
                </h3>
                <p className="mt-3 max-w-2xl text-body text-mist-50/68">
                  Raptric applies this framework through technical support outsourcing,
                  application support, AI customer support, and HITL operations for AI
                  and SaaS companies running live products.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:justify-end">
                <CtaLink href="/support-operations">
                  View technical support service
                </CtaLink>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-mist-50/20 px-6 py-3.5 text-sm font-medium text-mist-50 transition-colors hover:border-mist-50/40 hover:bg-mist-50/5"
                >
                  Talk through your AI support model
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
