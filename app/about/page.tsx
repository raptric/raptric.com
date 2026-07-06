// NOTE: founder/company bio content below is a safe, non-invented first
// draft (operating philosophy + generic background framing already
// established in project docs - no company names, no fabricated
// specifics). Flagged for the client to replace with real details.
import Image from "next/image";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink } from "@/components/ui/button";
import {
  BuildIcon,
  SystemsIcon,
  AccountableIcon,
} from "@/components/illustrations/concept-icons";
import { AboutPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

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
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 p-4">
                <p className="label text-ink-400">Company</p>
                <p className="mt-2 text-body font-medium text-ink-900">Raptric LLC</p>
              </div>
              <div className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 p-4">
                <p className="label text-ink-400">Focus</p>
                <p className="mt-2 text-body font-medium text-ink-900">AI automation, support operations, and engineering systems</p>
              </div>
              <div className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 p-4">
                <p className="label text-ink-400">Approach</p>
                <p className="mt-2 text-body font-medium text-ink-900">Operator-led, workflow-first, accountable delivery</p>
              </div>
            </div>
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
