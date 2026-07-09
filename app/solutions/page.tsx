import Link from "next/link";
import type { ReactNode } from "react";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink, SecondaryCtaLink, TextLink } from "@/components/ui/button";
import WorkflowGraph from "@/components/illustrations/workflow-graph";
import EmailFlow from "@/components/illustrations/email-flow";
import VoiceFlow from "@/components/illustrations/voice-flow";
import ClaimFlow from "@/components/illustrations/claim-flow";
import {
  SystemsIcon,
  MailIcon,
  PhoneIcon,
  HealthIcon,
  FlowIcon,
  BuildingIcon,
  BriefcaseIcon,
  BagIcon,
  CheckIcon,
} from "@/components/illustrations/concept-icons";
import { BreadcrumbSchema, CollectionPageSchema, FAQSchema, ItemListSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

type SolutionGroup = {
  title: string;
  items: string[];
};

type BaseSolution = {
  Icon: typeof SystemsIcon;
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  visual: ReactNode;
  bestFor?: string[];
  note?: string;
  technologies?: string[];
};

type CapabilitiesSolution = BaseSolution & {
  capabilities: string[];
  workflow?: string[];
  groups?: never;
};

type GroupedSolution = BaseSolution & {
  groups: SolutionGroup[];
  bestFor?: string[];
  note?: string;
  technologies?: string[];
  capabilities?: never;
  workflow?: never;
};

type HybridSolution = BaseSolution & {
  groups: SolutionGroup[];
  bestFor?: string[];
  note?: string;
  technologies?: string[];
  capabilities?: never;
  workflow?: never;
};

type Solution = CapabilitiesSolution | GroupedSolution | HybridSolution;

export const metadata = buildMetadata({
  title: "Solutions | AI Platforms, Workflow Systems & Automation Products | Raptric",
  description:
    "AI voice agents, healthcare workflow platforms, SEO outreach systems, AI sales engagement platforms, and lead intelligence systems built around real business operations.",
  path: "/solutions",
  image: "/og/solutions-1200x630.png",
  imageAlt: "Raptric solutions social share image for AI platforms, workflow systems, and automation products",
});

const WHAT_WE_BUILD = [
  "Large Language Models (LLMs)",
  "AI Agents",
  "Workflow Automation",
  "CRM & ERP Integrations",
  "Voice AI",
  "Data Pipelines",
  "Web Scraping & Research Automation",
  "API Integrations",
  "Analytics & Reporting",
  "Secure Cloud Infrastructure",
];

const PLATFORM_LAYERS = [
  {
    title: "AI + decision systems",
    body: "LLMs, AI agents, RAG, research automation, and reasoning layers built around real operating decisions.",
    items: ["LLMs", "AI Agents", "RAG", "Research Automation"],
  },
  {
    title: "Workflow + integrations",
    body: "Automation engines, voice flows, CRM/ERP connections, APIs, and event-driven orchestration across the stack.",
    items: ["Workflow Automation", "Voice AI", "CRM & ERP", "API Integrations"],
  },
  {
    title: "Data + infrastructure",
    body: "Pipelines, analytics, reporting, cloud architecture, and secure backend systems that make the product durable.",
    items: ["Data Pipelines", "Analytics", "Reporting", "Cloud Infrastructure"],
  },
];

const SOLUTIONS_PROOF = [
  {
    title: "What gets built",
    body: "AI voice agents, healthcare workflow systems, SEO outreach platforms, AI sales engagement systems, and lead intelligence products built around real business operations.",
  },
  {
    title: "What improves",
    body: "Routing speed, campaign execution, support handling, operational visibility, CRM follow-up, and the amount of manual coordination needed to keep the workflow moving.",
  },
  {
    title: "Where it applies",
    body: "Healthcare operations, SEO and growth teams, outbound sales, local business prospecting, support environments, and workflow-heavy teams that need more than one isolated feature.",
  },
];

const SOLUTIONS: Solution[] = [
  {
    Icon: PhoneIcon,
    eyebrow: "Solution 1",
    title: "AI Voice Agents",
    subtitle: "Intelligent Voice AI for sales, support, and operations.",
    body: "Deploy AI voice agents capable of handling inbound calls, outbound campaigns, appointment scheduling, lead qualification, customer support, and operational workflows.",
    capabilities: [
      "Natural conversations",
      "Appointment scheduling",
      "CRM updates",
      "Call summaries",
      "Lead qualification",
      "Multi-step workflows",
      "Human handoff",
      "Multilingual support",
    ],
    bestFor: [
      "Healthcare",
      "Real Estate",
      "Local Businesses",
      "Customer Support",
      "Sales Teams",
      "Professional Services",
    ],
    visual: <VoiceFlow className="h-auto w-full" />,
  },
  {
    Icon: HealthIcon,
    eyebrow: "Solution 2",
    title: "End-to-End Healthcare Workflow Platform",
    subtitle: "Comprehensive healthcare operations engineered from patient intake to revenue cycle workflows.",
    body: "We have extensive experience engineering healthcare workflow platforms that streamline clinical and administrative operations - from patient intake to revenue cycle management.",
    groups: [
      {
        title: "Front Desk",
        items: [
          "Appointment scheduling",
          "Calendar management",
          "Online bookings",
          "Patient check-in",
          "Patient communication",
        ],
      },
      {
        title: "Patient Management",
        items: [
          "Electronic patient records",
          "Treatment history",
          "Medical documentation",
          "Case management",
        ],
      },
      {
        title: "Practice Operations",
        items: [
          "Staff management",
          "Multi-location support",
          "Role-based permissions",
          "Workflow automation",
        ],
      },
      {
        title: "Revenue Cycle Management",
        items: [
          "Insurance verification",
          "Claims processing",
          "Billing workflows",
          "Payment tracking",
          "Financial reporting",
        ],
      },
      {
        title: "Communication",
        items: [
          "AI voice agents",
          "SMS reminders",
          "Email notifications",
          "Patient engagement",
        ],
      },
      {
        title: "Reporting",
        items: [
          "Operational dashboards",
          "Revenue analytics",
          "Performance tracking",
        ],
      },
    ],
    technologies: [
      "AI automation",
      "Workflow engines",
      "API integrations",
      "Secure cloud infrastructure",
      "HIPAA-aware architecture",
    ],
    visual: <ClaimFlow className="h-auto w-full" />,
  },
  {
    Icon: SystemsIcon,
    eyebrow: "Solution 3",
    title: "AI SEO Outreach Platform",
    subtitle: "AI-powered link building and outreach systems for prospecting, qualification, and campaign execution.",
    body: "An intelligent platform that automates backlink prospecting, qualification, content analysis, AI scoring, and personalized outreach - helping SEO teams scale link acquisition efficiently.",
    workflow: [
      "Campaign setup",
      "AI keyword strategy",
      "Search engine discovery",
      "Website crawling",
      "Content extraction",
      "AI relevance analysis",
      "Quality scoring",
      "Prospect management",
      "Outreach automation",
      "Campaign reporting",
    ],
    capabilities: [
      "AI keyword generation",
      "Prospect discovery",
      "Website analysis",
      "Content extraction",
      "Quality scoring",
      "AI qualification",
      "Campaign management",
      "Outreach automation",
      "Team collaboration",
      "Reporting dashboard",
    ],
    bestFor: [
      "SEO Agencies",
      "Digital Marketing Agencies",
      "SaaS Companies",
      "Growth Teams",
    ],
    visual: <WorkflowGraph className="h-auto w-full" />,
  },
  {
    Icon: MailIcon,
    eyebrow: "Solution 4",
    title: "AI Sales Engagement Platform",
    subtitle: "Hyper-personalized outbound systems that combine AI research, lead intelligence, and automated campaign execution.",
    body: "Build highly personalized outbound campaigns that combine AI research, lead intelligence, account management, and automated email sequences to increase response rates.",
    groups: [
      {
        title: "Campaign Builder",
        items: ["ICP", "Industry", "Persona", "Decision makers"],
      },
      {
        title: "Lead Management",
        items: ["Companies", "Accounts", "Contacts", "Pipeline"],
      },
      {
        title: "AI Research",
        items: [
          "Public website analysis",
          "Professional profile context",
          "Company enrichment",
          "Prospect intelligence",
        ],
      },
      {
        title: "Personalization Engine",
        items: [
          "Role-aware messaging",
          "Industry context",
          "Company signals",
          "Business priorities",
        ],
      },
      {
        title: "Automation",
        items: [
          "Email sequences",
          "Follow-ups",
          "A/B testing",
          "Campaign analytics",
        ],
      },
    ],
    bestFor: [
      "B2B SaaS",
      "Agencies",
      "Healthcare",
      "Consulting",
      "Enterprise Sales",
    ],
    note: "Instead of pitching the wrong contact, the platform can adapt messaging and request an introduction to the real decision-maker.",
    visual: <EmailFlow className="h-auto w-full" />,
  },
  {
    Icon: FlowIcon,
    eyebrow: "Solution 5",
    title: "AI Lead Intelligence Platform",
    subtitle: "Turn local business data into qualified sales opportunities.",
    body: "Automatically discover businesses, enrich company profiles, identify decision-makers, and build qualified prospect databases ready for outreach.",
    workflow: [
      "Business discovery",
      "Business research",
      "Company enrichment",
      "Decision maker identification",
      "Contact discovery",
      "Lead qualification",
      "CRM export",
      "Outreach",
    ],
    capabilities: [
      "Business discovery",
      "Data enrichment",
      "Contact identification",
      "Decision maker mapping",
      "AI qualification",
      "CRM export",
      "API integrations",
    ],
    bestFor: [
      "Agencies",
      "Local Services",
      "Healthcare",
      "Franchises",
      "B2B Sales",
      "Market Research",
    ],
    visual: (
      <div className="grid gap-4">
        <div className="rounded-[var(--radius-md)] border border-mist-50/10 bg-mist-50/[0.04] p-4">
          <p className="label text-signal-300">Workflow</p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-mist-50/74">
            {["Discovery", "Enrichment", "Contacts", "Qualification", "CRM", "Outreach"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-mist-50/10 bg-ink-900/50 px-3 py-1.5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-[var(--radius-md)] border border-mist-50/10 bg-mist-50/[0.04] p-4">
          <p className="label text-signal-300">Outcome</p>
          <p className="mt-3 text-sm leading-6 text-mist-50/74">
            Local business data becomes structured, qualified lead intelligence ready for sales teams and CRM workflows.
          </p>
        </div>
      </div>
    ),
  },
];

const INDUSTRIES = [
  {
    Icon: HealthIcon,
    title: "Healthcare",
    body: "AI-powered patient engagement, workflow automation, scheduling, and operational platforms.",
  },
  {
    Icon: SystemsIcon,
    title: "Marketing & SEO",
    body: "Campaign automation, backlink prospecting, outreach, and growth systems.",
  },
  {
    Icon: MailIcon,
    title: "Sales",
    body: "Lead generation, AI personalization, outbound automation, and CRM integration.",
  },
  {
    Icon: BriefcaseIcon,
    title: "Professional Services",
    body: "Workflow automation, client management, appointment systems, and operational workflows.",
  },
  {
    Icon: BuildingIcon,
    title: "Local Businesses",
    body: "Voice AI, customer engagement, booking automation, and lead management.",
  },
  {
    Icon: BagIcon,
    title: "Enterprise Operations",
    body: "Custom AI systems, internal automation, workflow orchestration, and analytics.",
  },
];

const DELIVERY_EXAMPLES = [
  {
    title: "Operational platforms that combine product, workflow, and reporting",
    body: "A platform build where the visible interface, internal workflow logic, and operator dashboards have to ship together instead of being handed to different vendors.",
    outcome: "Cleaner execution across customer-facing actions, internal decisions, and performance visibility.",
  },
  {
    title: "AI systems that need both automation and human checkpoints",
    body: "A solution where AI can classify, draft, score, or route, but trust-sensitive or technical steps still need human review designed into the platform.",
    outcome: "Faster handling on repeatable work without losing control over complex or sensitive moments.",
  },
  {
    title: "Revenue or outreach systems tied to live operational data",
    body: "A build where prospecting, qualification, campaign logic, CRM updates, and reporting all depend on integrations behaving like one operating system.",
    outcome: "Better workflow continuity, less manual data movement, and clearer campaign visibility.",
  },
];

const STACK_GROUPS = [
  {
    title: "Artificial Intelligence",
    items: [
      "Large Language Models",
      "AI Agents",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Intelligent Workflow Orchestration",
    ],
  },
  {
    title: "Automation",
    items: [
      "Business Process Automation",
      "Workflow Engines",
      "Event-Driven Systems",
      "API Integrations",
    ],
  },
  {
    title: "Backend Engineering",
    items: [
      "Scalable APIs",
      "Database Design",
      "Authentication",
      "Cloud Infrastructure",
      "Security",
    ],
  },
  {
    title: "Data",
    items: [
      "Search & Discovery",
      "Data Enrichment",
      "Knowledge Bases",
      "Analytics",
      "Reporting",
    ],
  },
  {
    title: "Integrations",
    items: [
      "CRM Platforms",
      "Calendar Systems",
      "Email Platforms",
      "Voice Providers",
      "Payment Systems",
      "Third-Party APIs",
    ],
  },
];

const WHY_US = [
  "AI-first product engineering",
  "Production-ready software - not prototypes",
  "Deep workflow automation expertise",
  "End-to-end platform development",
  "Enterprise-grade architecture",
  "Scalable cloud infrastructure",
  "Custom integrations",
  "Human-centered UX",
];

const FAQS = [
  {
    q: "What kind of AI platforms does Raptric build?",
    a: "Raptric builds AI platforms for voice operations, healthcare workflows, SEO outreach, sales engagement, lead intelligence, and internal workflow automation where AI, integrations, and software need to work together as one system.",
  },
  {
    q: "Are these off-the-shelf products or custom systems?",
    a: "They are solution patterns backed by custom engineering. We use proven platform structures, then adapt the workflows, integrations, reporting, and operating logic to the client environment.",
  },
  {
    q: "Can Raptric build platforms that mix AI, automation, and human workflows?",
    a: "Yes. That is the core positioning. We build systems where AI, automation, software, and human operations all contribute to the final workflow instead of living in separate tools or vendors.",
  },
  {
    q: "Which industries are the strongest fit for the solutions page?",
    a: "Healthcare, SaaS, SEO and marketing teams, sales organizations, professional services, and operations-heavy businesses are the strongest fit because they usually have repeated workflows, customer interaction, and integration needs that benefit from platform thinking.",
  },
  {
    q: "What is the difference between a solution page and a service page?",
    a: "A service page explains the capability, like AI automation services or support operations. A solution page shows how those capabilities come together inside a working platform built for a specific business outcome.",
  },
  {
    q: "Are these solutions just demos or can they become production systems?",
    a: "The goal is production-ready systems. Raptric uses AI, workflows, integrations, reporting, and cloud architecture to build platforms that can support real business execution instead of staying as isolated prototypes.",
  },
];

export default function Solutions() {
  return (
    <>
      <FAQSchema items={FAQS} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ]}
      />
      <CollectionPageSchema
        name="Raptric Solutions"
        path="/solutions"
        description="AI voice agents, healthcare workflow platforms, SEO outreach systems, AI sales engagement, and lead intelligence platforms."
      />
      <ItemListSchema
        name="Raptric Solutions"
        path="/solutions"
        items={SOLUTIONS.map((solution) => ({
          name: solution.title,
          path: `/solutions#${solution.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
        }))}
      />

      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-400/40 to-transparent" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-signal-500/16 blur-[120px]" />
        <Container className="grid items-center gap-16 py-20 md:grid-cols-[0.88fr_1.12fr] md:py-28">
          <div>
            <Eyebrow className="mb-4 text-signal-400">Solutions</Eyebrow>
            <h1 className="max-w-3xl text-display font-semibold">
              AI-powered operating systems built for real business workflows.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/68">
              We do not build isolated AI features. We engineer complete business
              systems that combine automation, AI, integrations, data, and
              software delivery into one operational layer.
            </p>
            <p className="mt-4 max-w-xl text-body text-mist-50/60">
              This page shows the kinds of systems Raptric builds, what they improve,
              and where they fit: voice AI, healthcare workflows, outreach automation,
              AI sales engagement, and lead intelligence tied back to real operating work.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CtaLink href="/contact">Discuss your platform build</CtaLink>
              <SecondaryCtaLink href="/ai-automation">
                Explore AI automation services
              </SecondaryCtaLink>
            </div>
            <p className="mt-4 max-w-lg text-sm text-mist-50/56">
              This is the right page if you already know the business outcome you want and need the right mix of AI automation, support operations, and engineering to build it.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-7 shadow-2xl backdrop-blur">
              <p className="label text-signal-300">What we build</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {WHAT_WE_BUILD.slice(0, 6).map((item) => (
                  <div
                    key={item}
                    className="rounded-[var(--radius-md)] border border-mist-50/10 bg-ink-900/50 px-4 py-3 text-sm text-mist-50/76"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {PLATFORM_LAYERS.map((layer) => (
                <div
                  key={layer.title}
                  className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.035] p-5 backdrop-blur"
                >
                  <p className="text-base font-medium text-mist-50">{layer.title}</p>
                  <p className="mt-3 text-sm leading-6 text-mist-50/64">{layer.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-mist-50/10 bg-ink-900/45 px-3 py-1.5 text-xs text-mist-50/72"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-100">
        <Container className="py-12 md:py-14">
          <div className="grid gap-4 md:grid-cols-3">
            {SOLUTIONS_PROOF.map((item) => (
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
        <Container className="py-20 md:py-24">
          <Eyebrow className="mb-5">Platform layers</Eyebrow>
          <h2 className="max-w-2xl text-h1 font-semibold text-ink-900">
            The stack underneath the solution is as important as the AI on top.
          </h2>
          <p className="mt-4 max-w-2xl text-body-lg text-ink-600">
            The best solutions are not one AI feature glued onto a process. They
            are layered systems where automation, integrations, data, and
            infrastructure all support the outcome.
          </p>
          <p className="mt-3 max-w-2xl text-body text-ink-600">
            In practice, those layers usually depend on{" "}
            <TextLink href="/ai-automation">AI automation services</TextLink>,{" "}
            <TextLink href="/support-operations">support operations</TextLink>,{" "}
            and{" "}
            <TextLink href="/engineering-team">software development partner services</TextLink>{" "}
            working together instead of staying in separate vendor lanes.
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {PLATFORM_LAYERS.map((layer, index) => (
              <div
                key={layer.title}
                className={`rounded-[var(--radius-lg)] border p-6 shadow-sm ${
                  index === 1
                    ? "border-signal-200 bg-signal-50"
                    : "border-ink-200 bg-mist-50"
                }`}
              >
                <p className="text-h3 font-medium text-ink-900">{layer.title}</p>
                <p className="mt-3 text-body text-ink-600">{layer.body}</p>
                <div className="mt-5 grid gap-2 text-sm text-ink-700">
                  {layer.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        {SOLUTIONS.map((solution, index) => {
          const reversed = index % 2 === 1;
          return (
            <div
              key={solution.title}
              id={solution.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
              className="border-b border-ink-200"
            >
              <Container className="py-20 md:py-24">
                <div
                  className={`grid gap-12 md:grid-cols-[0.92fr_1.08fr] md:items-start md:gap-18 ${
                    reversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <IconBadge Icon={solution.Icon} className="h-12 w-12" />
                      <div>
                        <Eyebrow>{solution.eyebrow}</Eyebrow>
                        <p className="mt-2 text-sm font-medium text-ink-500">
                          {solution.subtitle}
                        </p>
                      </div>
                    </div>
                    <h2 className="mt-6 max-w-3xl text-h1 font-semibold text-ink-900">
                      {solution.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-body-lg text-ink-600">
                      {solution.body}
                    </p>

                    {solution.capabilities ? (
                      <>
                        <p className="mt-8 label text-ink-500">Capabilities</p>
                        <div className="mt-4 flex flex-wrap gap-2.5">
                          {solution.capabilities.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-ink-200 bg-mist-50 px-3.5 py-1.5 text-sm text-ink-700 shadow-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : null}

                    {solution.groups ? (
                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {solution.groups.map((group) => (
                          <div
                            key={group.title}
                            className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                          >
                            <p className="label text-signal-600">{group.title}</p>
                            <div className="mt-3 grid gap-2 text-sm text-ink-700">
                              {group.items.map((item) => (
                                <div key={item} className="flex items-start gap-2">
                                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal-600" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {solution.workflow ? (
                      <>
                        <p className="mt-8 label text-ink-500">Workflow</p>
                        <div className="mt-4 flex flex-wrap items-center gap-2.5 text-sm text-ink-700">
                          {solution.workflow.map((item, i, arr) => (
                            <div key={item} className="flex items-center gap-2">
                              <span className="rounded-full border border-ink-200 bg-mist-50 px-3.5 py-1.5 shadow-sm">
                                {item}
                              </span>
                              {i < arr.length - 1 ? (
                                <span className="text-ink-300">&rarr;</span>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </>
                    ) : null}

                    {solution.bestFor ? (
                      <>
                        <p className="mt-8 label text-ink-500">Best For</p>
                        <div className="mt-4 flex flex-wrap gap-2.5">
                          {solution.bestFor.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-signal-200 bg-signal-50 px-3.5 py-1.5 text-sm text-signal-700 shadow-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : null}

                    {solution.technologies ? (
                      <>
                        <p className="mt-8 label text-ink-500">Technologies</p>
                        <div className="mt-4 flex flex-wrap gap-2.5">
                          {solution.technologies.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm text-ink-700 shadow-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : null}

                    {solution.note ? (
                      <div className="mt-8 rounded-[var(--radius-lg)] border border-signal-200 bg-signal-50 p-5 shadow-sm">
                        <p className="label text-signal-700">Differentiator</p>
                        <p className="mt-3 text-body text-ink-700">{solution.note}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="md:sticky md:top-24">
                    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-ink-950 p-7 text-mist-50 shadow-xl">
                      <p className="label text-signal-300">System view</p>
                      <div className="mt-6">{solution.visual}</div>
                    </div>
                    <div className="mt-4 rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 p-4">
                      <p className="label text-signal-600">What supports this build</p>
                      <p className="mt-2 text-sm text-ink-700">
                        Most of these solutions rely on a combination of AI automation services, technical support systems, and software development partner capacity to stay operational after launch.
                      </p>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          );
        })}
      </section>

      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-20 md:py-24">
          <Eyebrow className="mb-5">Industries We Serve</Eyebrow>
          <h2 className="max-w-2xl text-h1 font-semibold text-ink-900">
            The same AI systems model, applied to different operating environments.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {INDUSTRIES.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 shadow-sm"
              >
                <IconBadge Icon={item.Icon} variant="muted" className="h-11 w-11" />
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-20 md:py-24">
          <Eyebrow className="mb-5">Technology Stack</Eyebrow>
          <h2 className="max-w-2xl text-h1 font-semibold text-ink-900">
            Capabilities across AI, automation, backend systems, data, and integrations.
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {STACK_GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
              >
                <h3 className="text-h3 font-medium text-ink-900">{group.title}</h3>
                <div className="mt-4 grid gap-2 text-sm text-ink-700">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[var(--radius-lg)] border border-signal-200 bg-signal-50 p-6">
            <div className="grid gap-4 md:grid-cols-[0.72fr_0.28fr] md:items-center">
              <div>
                <p className="label text-signal-700">Next conversation</p>
                <p className="mt-3 text-body text-ink-700">
                  If you already know the platform outcome you want, the next conversation is usually about workflow scope, integrations, delivery ownership, and which layers need to ship first.
                </p>
              </div>
              <div className="md:justify-self-end">
                <CtaLink href="/contact">Discuss your platform build</CtaLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-50">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-5">Example platform builds</Eyebrow>
          <h2 className="max-w-3xl text-h2 font-semibold text-ink-900">
            How these solutions show up inside real operating systems and day-to-day workflows.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {DELIVERY_EXAMPLES.map((item) => (
              <div key={item.title} className="rounded-[var(--radius-lg)] border border-ink-200 bg-white p-6 shadow-sm">
                <p className="label text-signal-600">Example use case</p>
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
                <div className="mt-5 rounded-[var(--radius-md)] border border-signal-200 bg-signal-50 px-4 py-3">
                  <p className="label text-signal-700">Business impact</p>
                  <p className="mt-2 text-sm text-ink-700">{item.outcome}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-body text-ink-600">
            These solution builds are typically powered by{" "}
            <TextLink href="/ai-automation">AI automation services</TextLink>,{" "}
            <TextLink href="/support-operations">support operations</TextLink>,{" "}
            and{" "}
            <TextLink href="/engineering-team">software development partner delivery</TextLink>.
          </p>
        </Container>
      </section>

      <section className="bg-ink-950 text-mist-50">
        <Container className="py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.88fr_1.12fr] md:gap-16">
            <div>
              <Eyebrow className="mb-5 text-signal-300">Why Companies Choose Us</Eyebrow>
              <h2 className="text-h1 font-semibold">
                We do not just wire up tools. We build AI platforms that hold up in real business use.
              </h2>
              <p className="mt-5 max-w-md text-body-lg text-mist-50/68">
                The value is not one model, one workflow, or one integration.
                It is the full platform thinking behind revenue, operations,
                customer engagement, and workflow execution.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {WHY_US.map((item) => (
                <div
                  key={item}
                  className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-5 backdrop-blur transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <IconBadge Icon={CheckIcon} className="h-10 w-10 shrink-0" />
                    <p className="text-body text-mist-50/76">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[0.68fr_0.32fr] md:items-center">
              <div>
                <p className="label text-signal-300">Ready to Build Your AI Platform?</p>
                <h3 className="mt-3 text-h2 font-semibold">
                  Whether you are automating customer conversations, healthcare operations, sales, SEO, or internal workflows, we build AI systems that solve real business problems and scale with growth.
                </h3>
                <p className="mt-3 max-w-2xl text-sm text-mist-50/56">
                  The discovery call is best for teams that already know the platform outcome they need and want to discuss workflow scope, integrations, and the fastest build path.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:justify-end">
                <CtaLink href="/contact">Discuss your platform build</CtaLink>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-mist-50/20 px-6 py-3.5 text-sm font-medium text-mist-50 transition-colors hover:border-mist-50/40 hover:bg-mist-50/5"
                >
                  Book a discovery call
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 flex max-w-3xl flex-col divide-y divide-mist-50/12 border-y border-mist-50/12">
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
        </Container>
      </section>
    </>
  );
}
