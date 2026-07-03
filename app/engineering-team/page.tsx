import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink } from "@/components/ui/button";
import { SaasDevelopmentIcon } from "@/components/illustrations/service-icons";
import {
  DevIcon,
  AppIcon,
  QaIcon,
  SystemsIcon,
  CrmIcon,
  ReportIcon,
  FlowIcon,
} from "@/components/illustrations/concept-icons";
import { CoverageCard } from "@/components/ui/coverage-card";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Engineering Team — SaaS Development, Staff Augmentation & Dedicated Teams",
  description:
    "Embedded engineering capacity: software development partnership, SaaS development services, staff augmentation, dedicated development teams, support engineering, and custom internal tools.",
  path: "/engineering-team",
});

const COVERAGE = [
  { Icon: SystemsIcon, name: "Software Development Partner", body: "A technical partner for the build, not just a scoped-out proposal.", href: "/engineering-team/software-development-partner" },
  { Icon: AppIcon, name: "SaaS Development Services", body: "Custom platforms, dashboards, portals, APIs, and integrations.", href: "/engineering-team/saas-development-services" },
  { Icon: DevIcon, name: "Staff Augmentation", body: "Developers embedded inside your existing team and roadmap.", href: "/engineering-team/staff-augmentation-services" },
  { Icon: DevIcon, name: "Dedicated Development Team", body: "A consistent team assigned to your product, not rotating contractors." },
  { Icon: QaIcon, name: "Support Engineering Team", body: "Engineering-level troubleshooting for technical escalations support can't resolve." },
  { Icon: CrmIcon, name: "Custom Internal Tools", body: "Internal software built for how your team actually operates." },
];

const PROBLEMS = [
  "Engineering capacity that can't flex with the roadmap.",
  "Off-the-shelf software that almost fits, at the cost of constant workarounds.",
  "Internal tools built once and never maintained.",
  "QA and support engineering treated as an afterthought.",
];

const USE_CASES = [
  "A dedicated team taking a product from roadmap to shipped release",
  "An embedded developer working inside an existing sprint cycle",
  "An internal portal replacing a dozen spreadsheets with one system of record",
];

export default function EngineeringTeam() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Engineering Team", path: "/engineering-team" }]} />
      <ServiceSchema
        name="Engineering Team"
        description="Software development partnership, SaaS development, staff augmentation, dedicated development teams, support engineering, and custom internal tools."
        path="/engineering-team"
      />

      {/* Header — mixed photo + tech */}
      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <Container className="grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div>
            <SaasDevelopmentIcon className="h-12 w-12 text-signal-400" />
            <Eyebrow className="mb-4 mt-6 text-signal-400">Engineering Team</Eyebrow>
            <h1 className="text-display font-semibold">
              Engineering capacity, embedded, not outsourced into a black box.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/65">
              Software development partnership, SaaS builds, staff
              augmentation, and dedicated teams — engineers who work inside
              your roadmap, not around it.
            </p>
            <div className="mt-9">
              <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] shadow-2xl">
            <Image
              src="/photos/step-build.jpg"
              alt="Engineer working across multiple screens"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
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

      {/* How we staff it */}
      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {[
              { Icon: DevIcon, title: "Embedded, not siloed", body: "Engineers join your existing team and process — standups, tooling, roadmap." },
              { Icon: ReportIcon, title: "Accountable delivery", body: "Reporting and visibility into what's shipping and when, not a black box." },
              { Icon: QaIcon, title: "QA built in", body: "Quality isn't a separate afterthought — it's part of how the team works." },
            ].map((item) => (
              <div key={item.title} className="border-t border-ink-200 pt-6">
                <IconBadge Icon={item.Icon} className="h-12 w-12" />
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-2 text-body text-ink-600">{item.body}</p>
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
              We treat engineering capacity as part of the same system as the
              automation and the operation — not a disconnected outsourced
              project.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="/ai-automation" className="text-signal-600 hover:underline">AI Automation →</Link>
              <Link href="/support-operations" className="text-signal-600 hover:underline">Support Operations →</Link>
              <Link href="/solutions" className="text-signal-600 hover:underline">Solutions →</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 text-mist-50">
        <Container className="py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-lg text-h2 font-semibold">Ready to talk about engineering capacity?</h2>
          <div className="mt-8">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
