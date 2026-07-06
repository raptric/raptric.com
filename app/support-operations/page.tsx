import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink } from "@/components/ui/button";
import MethodologyScroll from "@/components/sections/methodology-scroll";
import EscalationPath from "@/components/illustrations/escalation-path";
import { CustomerOperationsIcon } from "@/components/illustrations/service-icons";
import {
  HeadsetIcon,
  TicketIcon,
  BuildingIcon,
  AppIcon,
  BagIcon,
  FlowIcon,
  AccountableIcon,
  PhoneIcon,
  CheckIcon,
} from "@/components/illustrations/concept-icons";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Technical Support Outsourcing, AI Customer Support & HITL Operations | Raptric",
  description:
    "Technical support outsourcing, AI customer support, human-in-the-loop operations, specialist escalation, and human support systems designed for businesses that need speed without losing trust.",
  path: "/support-operations",
});

const COVERAGE = [
  {
    Icon: TicketIcon,
    title: "Technical support",
    body: "Tiered troubleshooting, issue triage, and escalation paths that can work alongside product and engineering instead of outside them.",
  },
  {
    Icon: HeadsetIcon,
    title: "Customer care",
    body: "Email, chat, and service handling designed to feel consistent under volume instead of reactive when queues start climbing.",
  },
  {
    Icon: AccountableIcon,
    title: "HITL operations",
    body: "Human-in-the-loop review layers for requests where confidence is not enough and judgment still defines the outcome.",
  },
  {
    Icon: PhoneIcon,
    title: "Voice and specialist coverage",
    body: "Inbound call handling, triage, and specialist routing for businesses that need a human layer as part of the experience.",
  },
  {
    Icon: FlowIcon,
    title: "AI-assisted support",
    body: "Automation and AI can absorb repeatable first-line volume while the team stays focused on nuance, trust, and exception handling.",
  },
];

const SUPPORT_MODES = [
  {
    n: "01",
    label: "AI-assisted",
    title: "Use automation where the work is repetitive and the answer path is clear",
    body: "Best when the business needs faster first response, cleaner routing, and relief from repetitive support volume without turning the customer experience into bot theatre.",
    image: "/photos/support-ai-assisted-generated.png",
  },
  {
    n: "02",
    label: "HITL review",
    title: "Keep humans at the judgment checkpoints where confidence alone is not enough",
    body: "Best when AI can classify, draft, or route, but a specialist still needs to validate, decide, or communicate before the outcome reaches the customer.",
    image: "/photos/support-hitl-generated.png",
  },
  {
    n: "03",
    label: "Human-led",
    title: "Run specialist or fully human support where trust, complexity, or risk carry the decision",
    body: "Best for industries, escalations, and workflows where empathy, compliance, or technical depth matter more than speed alone.",
    image: "/photos/support-specialist-generated.png",
  },
];

const INDUSTRIES = [
  {
    Icon: BuildingIcon,
    title: "Hospitality and service businesses",
    body: "Guest support, scheduling, communication, and issue handling where responsiveness and tone shape the customer experience.",
  },
  {
    Icon: AppIcon,
    title: "SaaS and digital products",
    body: "Tier 1 and Tier 2 support, onboarding help, and escalation into technical teams when the product itself becomes the support issue.",
  },
  {
    Icon: BagIcon,
    title: "Commerce and operations-heavy teams",
    body: "Post-purchase questions, logistics follow-up, exception handling, and recurring operational volume that needs cleaner support flow.",
  },
];

const PROBLEMS = [
  {
    n: "01",
    title: "Support volume rises faster than the team can absorb it",
    body: "Response quality drops because every queue gets treated the same, even when some work should have been routed or automated long before it reached a person.",
  },
  {
    n: "02",
    title: "AI responds quickly but breaks trust when the request becomes nuanced",
    body: "The issue is rarely the model alone. It is the missing design around escalation, validation, and where human review should take over.",
  },
  {
    n: "03",
    title: "Technical issues and customer issues travel through the same channel",
    body: "Without a real support architecture, everything lands in one queue and the team ends up improvising routing on the fly.",
  },
  {
    n: "04",
    title: "Human effort gets wasted on repeatable work instead of judgment-heavy moments",
    body: "Specialists become traffic managers instead of problem solvers because the system around them never separated the easy volume from the real complexity.",
  },
];

const PROOF_POINTS = [
  "Customers should feel continuity, not handoff confusion.",
  "Technical issues should route differently from general service volume.",
  "AI should reduce drag, not create a trust gap the human team has to repair later.",
];

const FAQS = [
  {
    q: "What kinds of support operations does Raptric design?",
    a: "We design support systems that combine technical support, customer care, AI-assisted intake, human-in-the-loop review, specialist escalation, and fully human handling where trust or complexity still matter most.",
  },
  {
    q: "Do you only provide outsourced support agents?",
    a: "No. The point is not just staffing. We help define the structure around intake, routing, escalation, AI assistance, specialist review, and support quality so the operation works as a system.",
  },
  {
    q: "Can Raptric support AI plus human customer operations?",
    a: "Yes. One of the strongest uses for this model is combining AI-assisted first response with human review and specialist handling where the workflow becomes nuanced, technical, or trust-sensitive.",
  },
  {
    q: "Is this only for customer support teams?",
    a: "No. The same model can be applied to technical support, service operations, appointment workflows, escalations, and operator-heavy environments where requests need better structure.",
  },
];

const BEST_FIT = [
  "SaaS, healthcare, service, and operations-heavy teams dealing with mixed support volume",
  "Businesses that need technical support outsourcing without turning the experience into generic BPO handling",
  "Teams exploring AI customer support but still needing human review, trust, and escalation depth",
];

export default function SupportOperations() {
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
        name="Support Operations"
        description="Tech support, customer care, HITL operations, specialist escalation, and human support systems for growing teams."
        path="/support-operations"
      />

      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-400/40 to-transparent" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-signal-500/16 blur-[120px]" />
        <Container className="grid items-center gap-14 py-18 md:grid-cols-[0.92fr_1.08fr] md:py-24">
          <div>
            <CustomerOperationsIcon className="h-12 w-12 text-signal-400" />
            <Eyebrow className="mb-4 mt-6 text-signal-400">Support Operations</Eyebrow>
            <h1 className="text-display font-semibold">
              Technical support built for complexity.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/68">
              We design technical support outsourcing, AI customer support, HITL review, technical escalation, and human coverage as one support model so speed, trust, and specialist judgment do not fight each other.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-mist-50/72">
              {["Tech support", "HITL operations", "AI-assisted intake", "Specialist coverage"].map((item) => (
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
                href="/engineering-team"
                className="group inline-flex items-center gap-2 text-sm font-medium text-mist-50/80 hover:text-mist-50"
              >
                See the engineering layer
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
                    src="/photos/support-hitl-generated.png"
                    alt="Support operations team coordinating technical support and human review"
                    fill
                    sizes="(min-width: 768px) 48vw, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/62 via-ink-950/18 to-transparent" />
                  <div className="absolute left-6 top-6 rounded-full border border-mist-50/16 bg-ink-950/64 px-3 py-1.5 text-xs font-medium text-mist-50/80 backdrop-blur">
                    Tech support + HITL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-[radial-gradient(circle_at_top_left,_rgba(108,92,231,0.08),_transparent_38%),linear-gradient(to_bottom,_var(--color-mist-50),_var(--color-mist-100))]">
        <Container className="py-18 md:py-22">
          <div className="mb-10 rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 md:p-7">
            <Eyebrow className="mb-4">Answer first</Eyebrow>
            <p className="max-w-4xl text-body-lg text-ink-700">
              This page is for companies looking for technical support outsourcing, AI customer support, human-in-the-loop support operations, and specialist escalation systems that can scale without losing customer trust.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
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
          <Eyebrow className="mb-5">Coverage model</Eyebrow>
          <h2 className="max-w-2xl text-h1 font-semibold text-ink-900">
            One support layer with room for AI, human review, tech escalation, and specialist handling.
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-ink-950 p-7 text-mist-50 shadow-xl lg:col-span-7">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-signal-500/20 blur-[90px]" />
              <div className="relative grid gap-8 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
                <div>
                  <IconBadge Icon={FlowIcon} className="h-12 w-12" />
                  <h3 className="mt-5 text-h2 font-medium">
                    Support should feel like a system, not a staffing patch.
                  </h3>
                  <p className="mt-4 max-w-md text-body text-mist-50/70">
                    The strongest support operations separate repeatable work
                    from technical complexity, keep the human layer where trust
                    depends on it, and route the rest with clean context.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["AI intake", "human review", "tech escalation", "specialist handling"].map((item) => (
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
                  <EscalationPath className="h-auto w-full" />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 shadow-lg lg:col-span-5">
              <div className="relative h-52">
                <Image
                  src="/photos/support-specialist-generated.png"
                  alt="Support team coordinating human and technical support work"
                  fill
                  sizes="(min-width: 1024px) 28vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/72 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-[var(--radius-md)] border border-mist-50/12 bg-ink-950/76 p-4 backdrop-blur">
                  <p className="label text-signal-300">Support posture</p>
                  <p className="mt-2 text-sm leading-6 text-mist-50/78">
                    Faster first response, clearer escalation, and human judgment kept where the customer experience actually depends on it.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 p-5">
                <div className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-100 p-4">
                  <p className="label text-ink-400">Good fit</p>
                  <p className="mt-2 text-body text-ink-700">
                    Businesses that need support systems, not just extra heads in a queue.
                  </p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-signal-200 bg-white p-4">
                  <p className="label text-signal-600">Common asks</p>
                  <p className="mt-2 text-body text-ink-700">
                    Tech support, customer care, HITL review, AI-assisted intake, and voice coverage.
                  </p>
                </div>
              </div>
            </div>

            {COVERAGE.map((item) => (
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

      <section className="border-b border-ink-200">
        <Container className="py-18 md:py-22">
          <Eyebrow className="mb-3">Operating modes</Eyebrow>
          <h2 className="max-w-2xl text-h1 font-semibold text-ink-900">
            Different support structures depending on where automation helps and where human handling still matters most.
          </h2>
          <div className="mt-14">
            <MethodologyScroll steps={SUPPORT_MODES} />
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-50">
        <Container className="py-18 md:py-22">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
            <div>
              <Eyebrow className="mb-5">Escalation design</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                Most volume should resolve before it reaches the deepest human layer.
              </h2>
              <p className="mt-5 max-w-md text-body-lg text-ink-600">
                The goal is not to remove people. It is to protect their time
                for technical skill, judgment, and trust-heavy moments while
                repeatable work gets routed and resolved earlier.
              </p>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-ink-950 p-6 shadow-xl">
              <div className="grid gap-5 md:grid-cols-[0.62fr_0.38fr]">
                <div className="rounded-[var(--radius-lg)] border border-mist-50/10 bg-mist-50/[0.04] p-5">
                  <p className="label text-signal-300">Resolution path</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {["AI intake", "HITL review", "Tech support", "Specialist"].map((item) => (
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
                      "General service volume should not move like a technical escalation.",
                      "Requests should carry context as they move deeper into the support system.",
                      "Human specialists should spend time on nuance, not queue cleanup.",
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
                        src="/photos/support-hitl-generated.png"
                        alt="Support system operating under live conditions"
                        fill
                        sizes="(min-width: 768px) 18vw, 92vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/82 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="label text-signal-300">Live conditions</p>
                        <p className="mt-2 text-sm text-mist-50/78">
                          The model has to survive real complexity, not just simple tickets.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[var(--radius-lg)] border border-mist-50/10 bg-mist-50/[0.04] p-5">
                    <p className="label text-signal-300">What good looks like</p>
                    <div className="mt-4 grid gap-2 text-sm text-mist-50/72">
                      <div className="rounded-md border border-mist-50/10 bg-ink-900/40 px-3 py-2">
                        faster first response
                      </div>
                      <div className="rounded-md border border-mist-50/10 bg-ink-900/40 px-3 py-2">
                        cleaner escalation context
                      </div>
                      <div className="rounded-md border border-mist-50/10 bg-ink-900/40 px-3 py-2">
                        more trust at the human layer
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
        <Container className="py-18 md:py-22">
          <Eyebrow className="mb-4">Industry fit</Eyebrow>
          <h2 className="max-w-2xl text-h1 font-semibold text-ink-900">
            The right support mix can be AI-assisted, HITL, or fully human depending on the environment.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {INDUSTRIES.map((item) => (
              <div key={item.title} className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 shadow-sm">
                <IconBadge Icon={item.Icon} variant="muted" className="h-11 w-11" />
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-18 md:py-22">
          <div className="grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:gap-16">
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-ink-950 text-mist-50 shadow-xl">
              <div className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,92,231,0.34),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(108,92,231,0.16),transparent_28%),linear-gradient(180deg,#0b0b0f,#12121a)]" />
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-signal-500/14 blur-[110px]" />
                <div className="relative p-7">
                  <Eyebrow className="text-signal-300">What teams bring us in to fix</Eyebrow>
                  <h2 className="mt-4 text-h1 font-semibold">
                    Support complexity shows up long before most teams redesign the model.
                  </h2>
                  <p className="mt-4 max-w-lg text-body text-mist-50/72">
                    By the time most businesses ask for help, the problem is no
                    longer just queue volume. It is broken routing, blurred
                    escalation paths, trust issues with AI, and specialists
                    spending time where the system should have handled more for them.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["queue pressure", "routing blur", "trust issues", "specialist drag"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-mist-50/12 bg-mist-50/[0.05] px-3 py-1.5 text-xs text-mist-50/72"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 overflow-hidden rounded-[var(--radius-lg)] border border-mist-50/10 bg-mist-50/[0.04]">
                    <div className="relative h-48">
                      <Image
                        src="/photos/support-ai-assisted-generated.png"
                        alt="Support analyst reviewing AI-assisted support work"
                        fill
                        sizes="(min-width: 768px) 34vw, 92vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/82 via-ink-950/28 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 grid gap-3 md:grid-cols-2">
                        <div className="rounded-[var(--radius-md)] border border-mist-50/12 bg-ink-950/72 px-4 py-3 backdrop-blur">
                          <p className="label text-signal-300">Where it breaks</p>
                          <p className="mt-2 text-sm text-mist-50/76">
                            AI replies, technical queues, and human review all living in one messy lane.
                          </p>
                        </div>
                        <div className="rounded-[var(--radius-md)] border border-mist-50/12 bg-ink-950/72 px-4 py-3 backdrop-blur">
                          <p className="label text-signal-300">What we redesign</p>
                          <p className="mt-2 text-sm text-mist-50/76">
                            Intake, routing, escalation context, and specialist time allocation.
                          </p>
                        </div>
                      </div>
                    </div>
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
              <Eyebrow className="mb-5 text-signal-300">How the model should feel</Eyebrow>
              <h2 className="text-h1 font-semibold">
                Support should feel structured, calm, and trustworthy even when the volume is not.
              </h2>
              <p className="mt-5 max-w-md text-body-lg text-mist-50/68">
                That means faster resolution where automation helps, cleaner
                routing where technical support matters, and human handling
                where trust still decides the outcome.
              </p>
            </div>

            <div className="grid gap-4">
              {PROOF_POINTS.map((item) => (
                <div
                  key={item}
                  className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-6 backdrop-blur"
                >
                  <div className="flex items-start gap-4">
                    <IconBadge Icon={CheckIcon} className="h-11 w-11 shrink-0" />
                    <p className="text-body text-mist-50/72">{item}</p>
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
                  Need support operations that can handle AI, tech support, and human judgment without breaking trust?
                </h3>
                <p className="mt-3 max-w-2xl text-body text-mist-50/68">
                  We help teams map what should be automated, what should route
                  to specialists, how technical escalations should flow, and
                  where fully human handling still protects the customer experience.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:justify-end">
                <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
                <Link
                  href="/solutions"
                  className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-mist-50/20 px-6 py-3.5 text-sm font-medium text-mist-50 transition-colors hover:border-mist-50/40 hover:bg-mist-50/5"
                >
                  Explore support-led solutions
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
