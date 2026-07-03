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
  ChatIcon,
  BuildingIcon,
  AppIcon,
  BagIcon,
  CheckIcon,
  FlowIcon,
  AccountableIcon,
} from "@/components/illustrations/concept-icons";
import { CoverageCard } from "@/components/ui/coverage-card";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Support Operations — Customer Support, Technical Support & Call Center Outsourcing",
  description:
    "Support operations built to scale: customer support outsourcing, technical support outsourcing, call center outsourcing, phone answering, chat support, virtual assistants, and human-in-the-loop support.",
  path: "/support-operations",
});

const COVERAGE = [
  { Icon: HeadsetIcon, name: "Customer Support Outsourcing", body: "Multi-channel support for the people who use what you sell.", href: "/support-operations/customer-support-outsourcing" },
  { Icon: TicketIcon, name: "Technical Support Outsourcing", body: "Tier 1 and Tier 2 troubleshooting, with clear escalation paths.", href: "/support-operations/technical-support-outsourcing" },
  { Icon: ChatIcon, name: "Call Center Outsourcing", body: "Voice support structured around complexity, not just queue order.", href: "/support-operations/call-center-outsourcing-services" },
  { Icon: CheckIcon, name: "Phone Answering Services", body: "Professional call coverage so nothing goes to voicemail.", href: "/support-operations/phone-answering-services" },
  { Icon: FlowIcon, name: "Chat Support Outsourcing", body: "Live chat handled by specialists, backed by automation for volume.", href: "/support-operations/chat-support-outsourcing" },
  { Icon: OnboardIcon, name: "Virtual Assistant Services", body: "Ongoing operational support for the recurring work that piles up.", href: "/support-operations/virtual-assistant-services" },
  { Icon: AccountableIcon, name: "Human-in-the-Loop Support", body: "A designed handoff between automation and specialists, with audit trails.", href: "/support-operations/human-in-the-loop-support" },
];

const INDUSTRIES = [
  { Icon: BuildingIcon, name: "Hospitality", body: "Guest services for hotels — reservations, communications, and on-property coordination." },
  { Icon: AppIcon, name: "SaaS & Digital Products", body: "Support and onboarding for software users, routed by ticket complexity." },
  { Icon: BagIcon, name: "E-commerce & Consumer Brands", body: "Order support and post-purchase communication that scales with demand." },
];

const PROBLEMS = [
  "Support quality that degrades as volume grows.",
  "Response times that scale linearly with headcount.",
  "Automation and human support that aren't structured together.",
  "Coverage gaps — nights, weekends, spikes — nobody wants to staff for.",
];

const USE_CASES = [
  "An onboarding flow that combines automated steps with a specialist check-in",
  "A support triage system that routes by complexity, not just by queue",
  "Human-in-the-loop escalation for the calls and chats that need real judgment",
];

export default function SupportOperations() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Support Operations", path: "/support-operations" }]} />
      <ServiceSchema
        name="Support Operations"
        description="Customer support, technical support, call center, phone answering, chat support, virtual assistant, and human-in-the-loop support services."
        path="/support-operations"
      />

      {/* Header — photography treatment */}
      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <Container className="grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div>
            <CustomerOperationsIcon className="h-12 w-12 text-signal-400" />
            <Eyebrow className="mb-4 mt-6 text-signal-400">Support Operations</Eyebrow>
            <h1 className="text-display font-semibold">
              Support your customers actually feel good about.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/65">
              Customer support, technical support, call center coverage, and
              virtual assistance — staffed by specialists and backed by
              automation, so quality doesn&apos;t erode as volume grows.
            </p>
            <div className="mt-9">
              <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] shadow-2xl">
            <Image
              src="/photos/support-team.jpg"
              alt="Support specialist helping a customer over a video call"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
          </div>
        </Container>
      </section>

      {/* Coverage */}
      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-8">What this covers</Eyebrow>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COVERAGE.map((item) => (
              <CoverageCard key={item.name} Icon={item.Icon} name={item.name} body={item.body} href={item.href} />
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-4">Industries</Eyebrow>
          <h2 className="max-w-xl text-h2 font-semibold text-ink-900">Where this is already proven.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6">
                <IconBadge Icon={ind.Icon} variant="muted" className="h-11 w-11" />
                <div>
                  <h3 className="text-h3 font-medium text-ink-900">{ind.name}</h3>
                  <p className="mt-1.5 text-body text-ink-600">{ind.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Problems */}
      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <Eyebrow className="mb-4">Problems this solves</Eyebrow>
              <h2 className="text-h2 font-semibold text-ink-900">What we&apos;re usually brought in to fix.</h2>
            </div>
            <dl className="flex flex-col gap-6">
              {PROBLEMS.map((p, i) => (
                <div key={p} className="border-t border-ink-200 pt-4 first:border-t-0 first:pt-0">
                  <dt className="label text-signal-600">{`0${i + 1}`}</dt>
                  <dd className="mt-1.5 text-body-lg text-ink-700">{p}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Use cases */}
      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-8">Example use cases</Eyebrow>
          <div className="grid gap-5 md:grid-cols-3">
            {USE_CASES.map((u, i) => (
              <div key={u} className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 transition-shadow hover:shadow-lg">
                <IconBadge Icon={FlowIcon} variant="muted" className="h-10 w-10" />
                <span className="font-mono text-xs text-ink-400">{`Use case 0${i + 1}`}</span>
                <p className="text-body-lg text-ink-900">{u}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why + related */}
      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mb-5">Why Raptric</Eyebrow>
            <p className="text-h3 font-medium text-ink-900">
              We design support operations as a system with a defined split
              between automation and specialist judgment — not headcount
              thrown at growth.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="/ai-automation" className="text-signal-600 hover:underline">AI Automation →</Link>
              <Link href="/engineering-team" className="text-signal-600 hover:underline">Engineering Team →</Link>
              <Link href="/solutions" className="text-signal-600 hover:underline">Solutions →</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 text-mist-50">
        <Container className="py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-lg text-h2 font-semibold">Ready to talk about support operations?</h2>
          <div className="mt-8">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
