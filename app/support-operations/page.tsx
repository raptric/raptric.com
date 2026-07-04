import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink } from "@/components/ui/button";
import { CustomerOperationsIcon } from "@/components/illustrations/service-icons";
import {
  HeadsetIcon,
  TicketIcon,
  OnboardIcon,
  BuildingIcon,
  AppIcon,
  BagIcon,
  FlowIcon,
  AccountableIcon,
  PhoneIcon,
  CheckIcon,
} from "@/components/illustrations/concept-icons";
import EscalationPath from "@/components/illustrations/escalation-path";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Support Operations | Tech Support, HITL Operations & Customer Care Systems | Raptric",
  description:
    "Support operations for growing businesses: tech support, customer care, AI-assisted support, human-in-the-loop review, escalation systems, and specialist coverage across industries.",
  path: "/support-operations",
});

const COVERAGE = [
  {
    Icon: TicketIcon,
    name: "Technical support",
    body: "Tiered troubleshooting, escalation handling, and issue resolution that can sit beside the product or platform team.",
  },
  {
    Icon: HeadsetIcon,
    name: "Customer care",
    body: "Email, chat, and service coverage designed to feel consistent instead of overloaded and reactive.",
  },
  {
    Icon: AccountableIcon,
    name: "HITL operations",
    body: "Human-in-the-loop review layers for support, back-office flows, and exception handling where confidence alone is not enough.",
  },
  {
    Icon: PhoneIcon,
    name: "Voice coverage",
    body: "Inbound call handling, triage, and specialist routing for teams that need a human layer as part of the experience.",
  },
  {
    Icon: FlowIcon,
    name: "AI-assisted support",
    body: "Automation and AI handling repeatable first-line volume while the team stays focused on judgment-heavy work.",
  },
  {
    Icon: OnboardIcon,
    name: "Operational support capacity",
    body: "Coverage that can flex around onboarding, recurring workflow assistance, and high-volume operational queues.",
  },
];

const OPERATING_MODES = [
  {
    title: "AI-assisted support",
    body: "Best when volume is high, repeatability is decent, and the team needs faster first response without losing structure.",
  },
  {
    title: "HITL support",
    body: "Best when AI can help route, classify, or draft, but a person still needs to validate, decide, or communicate.",
  },
  {
    title: "Specialist-led support",
    body: "Best when the business needs fully human handling because context, empathy, compliance, or complexity carry the decision.",
  },
];

const INDUSTRIES = [
  {
    Icon: BuildingIcon,
    name: "Hospitality and service businesses",
    body: "Guest support, scheduling, communication, and issue handling with a human layer that reflects the brand.",
  },
  {
    Icon: AppIcon,
    name: "SaaS and digital products",
    body: "Tier 1 and Tier 2 support, onboarding flow support, and escalation into product or engineering when needed.",
  },
  {
    Icon: BagIcon,
    name: "Commerce and operations-heavy teams",
    body: "Post-purchase support, logistics touchpoints, operational follow-up, and exception handling at scale.",
  },
];

const PROBLEMS = [
  "Support volume rising faster than the team can absorb it.",
  "AI tools that answer fast but break trust when the request becomes nuanced.",
  "No clear split between what should be automated, what should be reviewed, and what should stay fully human.",
  "Technical issues and customer issues routed through the same channel without a real escalation design.",
];

export default function SupportOperations() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Support Operations", path: "/support-operations" }]} />
      <ServiceSchema
        name="Support Operations"
        description="Tech support, customer care, AI-assisted support, voice coverage, and human-in-the-loop operations for growing teams."
        path="/support-operations"
      />

      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <Container className="grid items-center gap-12 py-20 md:grid-cols-[0.94fr_1.06fr] md:gap-16 md:py-28">
          <div>
            <CustomerOperationsIcon className="h-12 w-12 text-signal-400" />
            <Eyebrow className="mb-4 mt-6 text-signal-400">Support Operations</Eyebrow>
            <h1 className="text-display font-semibold">
              Technical support and human operations that scale with the business.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/68">
              We design support systems that can blend AI, specialist review,
              and fully human handling depending on the workflow, the customer,
              and the level of judgment required.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-mist-50/72">
              {["Tech support", "HITL operations", "AI-assisted coverage", "Pure human handling"].map((item) => (
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
                See the automation layer
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.92fr_0.48fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-mist-50/12 shadow-2xl">
              <Image
                src="/photos/support-team.jpg"
                alt="Support specialist helping a customer while monitoring multiple systems"
                fill
                sizes="(min-width: 1024px) 34vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/72 via-ink-950/18 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[var(--radius-md)] border border-mist-50/12 bg-ink-950/78 p-4 backdrop-blur">
                <p className="label text-signal-300">Support model</p>
                <p className="mt-2 text-sm leading-6 text-mist-50/78">
                  Route the repeatable volume fast. Escalate the technical work
                  cleanly. Keep human judgment where trust depends on it.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {["AI-first intake", "Specialist review", "Escalation with context"].map((item) => (
                <div
                  key={item}
                  className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-4 shadow-xl backdrop-blur"
                >
                  <p className="label text-signal-300">Layer</p>
                  <p className="mt-3 text-sm leading-6 text-mist-50/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-8">Capability map</Eyebrow>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {COVERAGE.map((item) => (
              <div key={item.name} className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-7">
                <IconBadge Icon={item.Icon} className="h-12 w-12" />
                <h2 className="mt-5 text-h3 font-medium text-ink-900">{item.name}</h2>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-16">
            <div>
              <Eyebrow className="mb-5">Escalation design</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                Most volume should resolve before it reaches the deepest layer.
              </h2>
              <p className="mt-5 max-w-md text-body-lg text-ink-600">
                The point is not to remove people. The point is to design a
                system where people spend their time on the moments that
                actually require human judgment, technical skill, or customer
                sensitivity.
              </p>
            </div>
            <div className="rounded-[var(--radius-lg)] bg-ink-950 p-6 shadow-xl">
              <EscalationPath className="h-auto w-full" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-8">Operating modes</Eyebrow>
          <div className="grid gap-5 md:grid-cols-3">
            {OPERATING_MODES.map((item) => (
              <div key={item.title} className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6">
                <IconBadge Icon={FlowIcon} variant="muted" className="h-10 w-10" />
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-4">Industry fit</Eyebrow>
          <h2 className="max-w-2xl text-h2 font-semibold text-ink-900">
            The support model can be AI-assisted, HITL, or fully human depending on the environment.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {INDUSTRIES.map((item) => (
              <div key={item.name} className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6">
                <IconBadge Icon={item.Icon} variant="muted" className="h-11 w-11" />
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.name}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.84fr_1.16fr] md:gap-16">
            <div>
              <Eyebrow className="mb-4">What teams bring us in to fix</Eyebrow>
              <h2 className="text-h2 font-semibold text-ink-900">
                The support operation looks fine until complexity shows up.
              </h2>
            </div>
            <div className="grid gap-4">
              {PROBLEMS.map((item, index) => (
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
          <Eyebrow className="mb-6">How the model should feel</Eyebrow>
          <div className="grid gap-3">
            {[
              "Customers should feel continuity, not handoff confusion.",
              "Technical issues should route differently from general service volume.",
              "AI should reduce drag, not become a trust problem that the human team has to repair later.",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 px-4 py-3">
                <IconBadge Icon={CheckIcon} variant="muted" className="h-8 w-8 shrink-0" />
                <p className="text-body text-ink-700">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 text-mist-50">
        <Container className="py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-h2 font-semibold">
            Need a support model that blends AI, tech support, and human judgment cleanly?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-mist-50/65">
            We can help define what should be automated, what should be
            specialist-led, and what should stay fully human for your industry
            and risk profile.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
            <Link
              href="/engineering-team"
              className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-mist-50/20 px-6 py-3.5 text-sm font-medium text-mist-50 transition-colors hover:border-mist-50/40 hover:bg-mist-50/5"
            >
              Explore engineering team
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
