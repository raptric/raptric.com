// NOTE: founder/company bio content below is a safe, non-invented first
// draft (operating philosophy + generic background framing already
// established in project docs - no company names, no fabricated
// specifics). Flagged for the client to replace with real details.
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink } from "@/components/ui/button";
import {
  BuildIcon,
  SystemsIcon,
  AccountableIcon,
  CheckIcon,
} from "@/components/illustrations/concept-icons";
import { AboutPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import { buildMetadata, COMPANY_LINKEDIN, CONTACT_EMAIL, OPERATING_FOOTPRINT } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Raptric",
  description:
    "About Raptric LLC: the operator-led team behind AI automation, support operations, and engineering systems built for real business workflows.",
  path: "/about",
  image: "/og/about-1200x630.png",
  imageAlt: "Raptric about page social share image highlighting the operator-led team behind the company",
});

const PRINCIPLES = [
  {
    Icon: BuildIcon,
    title: "We build, not just advise",
    body: "The automation and the software, shipped by us - not scoped out and handed off.",
  },
  {
    Icon: SystemsIcon,
    title: "Systems, not isolated tasks",
    body: "Every engagement starts with how the operation actually runs, not which tool to add next.",
  },
  {
    Icon: AccountableIcon,
    title: "Operationally accountable",
    body: "We stay attached to how it performs after launch - automation, support, and engineering alike.",
  },
];

const LEADERSHIP_SIGNALS = [
  {
    title: "Operator-led leadership",
    body: "Raptric is shaped by people who have worked inside support queues, revenue-cycle workflows, operational escalations, and delivery pressure - not only in strategy decks.",
  },
  {
    title: "Why Raptric exists",
    body: "Most companies end up buying automation, support, and engineering separately. Raptric exists to bring those three layers back together as one operating system.",
  },
  {
    title: "What that changes",
    body: "Instead of shipping isolated tasks, we focus on routing, escalation, delivery visibility, and the real workflows the business depends on every day.",
  },
];

const TRUST_CUES = [
  { label: "Company", value: "Raptric LLC" },
  { label: "Email", value: CONTACT_EMAIL },
  { label: "Operating footprint", value: OPERATING_FOOTPRINT },
  { label: "Industries served", value: "Healthcare, SaaS, marketing, sales, service businesses, and operations-heavy teams" },
];

export default function About() {
  return (
    <>
      <AboutPageSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <section className="bg-ink-950 text-mist-50">
        <Container className="grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-24">
          <div>
            <Eyebrow className="mb-4 text-signal-400">About Raptric</Eyebrow>
            <h1 className="text-display font-semibold">
              Built by people who&apos;ve run the operation, not just advised on it.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/65">
              Raptric exists because most automation, support, and engineering
              work gets sold as three separate things. We build them as one
              system instead.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink href="/contact">Book a Discovery Call</CtaLink>
              <Link
                href={COMPANY_LINKEDIN}
                className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-mist-50/18 px-6 py-3.5 text-sm font-medium text-mist-50 transition-colors hover:border-mist-50/28 hover:bg-mist-50/[0.05]"
              >
                Follow Raptric on LinkedIn
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] shadow-2xl">
            <Image
              src="/photos/about-hero-generated-optimized.jpg"
              alt="A Raptric operator reviewing systems and performance in a real working environment"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-10">How we operate</Eyebrow>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {PRINCIPLES.map((item) => (
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

      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <div className="mx-auto max-w-2xl">
            <Eyebrow className="mb-5">Where this comes from</Eyebrow>
            <p className="text-body-lg text-ink-700">
              The team behind Raptric has spent years running real operations
              at scale - including healthcare revenue-cycle and support
              operations - before building automation and software for a living.
              That&apos;s the lens we bring: we&apos;ve staffed the escalation
              queue, closed the books at month-end, and lived with a bad
              automation rollout. Raptric is built the way we wish those
              systems had been built the first time.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {LEADERSHIP_SIGNALS.map((item) => (
                <div key={item.title} className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 p-5">
                  <p className="label text-signal-600">{item.title}</p>
                  <p className="mt-3 text-body text-ink-700">{item.body}</p>
                </div>
              ))}
              <div className="rounded-[var(--radius-md)] border border-ink-200 bg-ink-950 p-5 text-mist-50">
                <p className="label text-signal-300">Trust cues</p>
                <div className="mt-4 grid gap-3">
                  {TRUST_CUES.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <IconBadge Icon={CheckIcon} className="h-8 w-8 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-mist-50">{item.label}</p>
                        <p className="mt-1 text-sm text-mist-50/70">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-50">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-5">Where That Shows Up</Eyebrow>
          <h2 className="max-w-2xl text-h2 font-semibold text-ink-900">
            The company story only matters if it changes how the work gets built.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "AI automation services",
                body: "We design workflows around routing, confidence, escalation, and the operator view instead of treating AI like a disconnected feature.",
                href: "/ai-automation",
              },
              {
                title: "Support operations",
                body: "We structure technical support, HITL review, and customer handling so trust and specialist judgment survive under volume.",
                href: "/support-operations",
              },
              {
                title: "Engineering team",
                body: "We keep product delivery, QA, support, and internal tooling close enough to ship as one system instead of separate lanes.",
                href: "/engineering-team",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[var(--radius-lg)] border border-ink-200 bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <h3 className="text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-signal-600">
                  View {item.title}
                  <span>&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 text-mist-50">
        <Container className="py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-lg text-h2 font-semibold">
            Let&apos;s talk about the operation you&apos;re running.
          </h2>
          <div className="mt-8">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
