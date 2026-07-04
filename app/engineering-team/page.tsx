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
  OnboardIcon,
  BuildIcon,
  CheckIcon,
} from "@/components/illustrations/concept-icons";
import DeliveryPipeline from "@/components/illustrations/delivery-pipeline";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Engineering Team | Embedded Product, SaaS & Delivery Capacity | Raptric",
  description:
    "Embedded engineering capacity for product delivery: software development partnership, SaaS delivery, staff augmentation, dedicated teams, support engineering, and internal tools.",
  path: "/engineering-team",
});

const CAPABILITIES = [
  {
    Icon: SystemsIcon,
    name: "Software development partner",
    body: "A technical partner who can shape scope, architecture, tradeoffs, and delivery decisions around the actual roadmap.",
  },
  {
    Icon: AppIcon,
    name: "SaaS and platform builds",
    body: "Dashboards, portals, internal systems, APIs, and product surfaces that need to be dependable under live use.",
  },
  {
    Icon: OnboardIcon,
    name: "Embedded staff augmentation",
    body: "Developers and technical operators who can join the team rhythm without turning into a detached vendor lane.",
  },
  {
    Icon: DevIcon,
    name: "Dedicated product pods",
    body: "A consistent team structure for companies that need continuity, ownership, and predictable execution.",
  },
  {
    Icon: QaIcon,
    name: "Support engineering",
    body: "Engineering-level troubleshooting and resolution paths for technical issues support cannot close on its own.",
  },
  {
    Icon: CrmIcon,
    name: "Internal operations tooling",
    body: "Custom systems for the work behind the scenes: routing, reporting, task flow, approvals, and operator visibility.",
  },
];

const ENGAGEMENTS = [
  {
    title: "Embedded inside your roadmap",
    body: "Best when you already have product direction and need capacity that can plug into sprint cycles, standards, and shipping discipline.",
  },
  {
    title: "Dedicated pod around a build",
    body: "Best when a product, platform, or operating system needs to move from concept to delivery with one accountable team around it.",
  },
  {
    title: "Hybrid with support and operations",
    body: "Best when engineering has to work alongside AI automation and support layers instead of pretending product delivery exists in isolation.",
  },
];

const PROBLEMS = [
  "A roadmap that outruns the available engineering capacity.",
  "Outsourced development that disappears behind status updates instead of surfacing delivery truth.",
  "Internal tools that keep accumulating because nothing was designed around the real process.",
  "Support teams escalating technical issues into a product team that never built a real operating bridge for them.",
];

const PROOF_POINTS = [
  "Visible delivery stages instead of black-box execution.",
  "QA and support engineering treated as part of the system, not cleanup after the build.",
  "Product, platform, and operations tooling considered together when the workflow actually depends on all three.",
];

export default function EngineeringTeam() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Engineering Team", path: "/engineering-team" }]} />
      <ServiceSchema
        name="Engineering Team"
        description="Software development partnership, SaaS delivery, staff augmentation, support engineering, and internal systems."
        path="/engineering-team"
      />

      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <Container className="grid items-center gap-12 py-20 md:grid-cols-[0.94fr_1.06fr] md:gap-16 md:py-28">
          <div>
            <SaasDevelopmentIcon className="h-12 w-12 text-signal-400" />
            <Eyebrow className="mb-4 mt-6 text-signal-400">Engineering Team</Eyebrow>
            <h1 className="text-display font-semibold">
              Engineering capacity, embedded into the system instead of outsourced into a black box.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/68">
              We provide product, platform, and internal-systems capacity for
              teams that need more than developers for hire. The goal is not
              just output, it is visible delivery that fits the business.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-mist-50/72">
              {["Product engineering", "SaaS delivery", "Embedded teams", "Support engineering"].map((item) => (
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
                See packaged systems
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.92fr_0.48fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-mist-50/12 shadow-2xl">
              <Image
                src="/photos/step-build.jpg"
                alt="Engineer working across multiple delivery surfaces"
                fill
                sizes="(min-width: 1024px) 34vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/72 via-ink-950/18 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[var(--radius-md)] border border-mist-50/12 bg-ink-950/78 p-4 backdrop-blur">
                <p className="label text-signal-300">Delivery posture</p>
                <p className="mt-2 text-sm leading-6 text-mist-50/78">
                  Visible build stages, QA loops, and engineering ownership that
                  stays connected to the actual operating model.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {["Roadmap fit", "QA feedback loop", "Operational context"].map((item) => (
                <div
                  key={item}
                  className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-4 shadow-xl backdrop-blur"
                >
                  <p className="label text-signal-300">Signal</p>
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
            {CAPABILITIES.map((item) => (
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
              <Eyebrow className="mb-5">Delivery model</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                Visible stages, not a black box.
              </h2>
              <p className="mt-5 max-w-md text-body-lg text-ink-600">
                Work should move through roadmap, build, QA, and release with
                transparency. That is what makes external capacity feel like a
                real engineering partner instead of a detached execution queue.
              </p>
            </div>
            <div className="rounded-[var(--radius-lg)] bg-ink-950 p-6 shadow-xl">
              <DeliveryPipeline className="h-auto w-full" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-8">Engagement models</Eyebrow>
          <div className="grid gap-5 md:grid-cols-3">
            {ENGAGEMENTS.map((item) => (
              <div key={item.title} className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6">
                <IconBadge Icon={BuildIcon} variant="muted" className="h-10 w-10" />
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.84fr_1.16fr] md:gap-16">
            <div>
              <Eyebrow className="mb-4">What teams bring us in to fix</Eyebrow>
              <h2 className="text-h2 font-semibold text-ink-900">
                Engineering gaps become operational problems faster than most teams expect.
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

      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-6">What strong delivery looks like</Eyebrow>
          <div className="grid gap-3">
            {PROOF_POINTS.map((item) => (
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
            Need engineering capacity that can actually live inside the system you are building?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-mist-50/65">
            We can plug into the roadmap, build the missing systems, and stay
            aligned with the operational reality those systems have to support.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
            <Link
              href="/support-operations"
              className="group inline-flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-mist-50/20 px-6 py-3.5 text-sm font-medium text-mist-50 transition-colors hover:border-mist-50/40 hover:bg-mist-50/5"
            >
              Explore support operations
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
