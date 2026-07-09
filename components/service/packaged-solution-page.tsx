import type { ComponentType } from "react";
import Link from "next/link";
import Container from "@/components/ui/container";
import { CtaLink } from "@/components/ui/button";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/json-ld";

type IconType = ComponentType<{ className?: string }>;

export type PackagedSolutionData = {
  name: string;
  status: "Live" | "In Development" | "Beta";
  category: string;
  title: string;
  intro: string;
  Icon: IconType;
  diagram: React.ReactNode;
  whatItIs: string;
  steps: { title: string; body: string }[];
  whoItsFor: string[];
  path: string;
  serviceDescription: string;
  related: { label: string; href: string }[];
};

const STATUS_STYLES: Record<PackagedSolutionData["status"], string> = {
  Live: "text-signal-300",
  Beta: "text-signal-300",
  "In Development": "text-mist-50/50",
};

export default function PackagedSolutionPage({ data }: { data: PackagedSolutionData }) {
  const {
    name,
    status,
    category,
    title,
    intro,
    Icon,
    diagram,
    whatItIs,
    steps,
    whoItsFor,
    path,
    serviceDescription,
    related,
  } = data;

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }, { name, path }]} />
      <ServiceSchema name={name} description={serviceDescription} path={path} />

      {/* Header */}
      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-signal-500/20 blur-[110px]" />
        <Container className="relative py-20 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-mist-50/50">
            <Link href="/" className="hover:text-mist-50">Home</Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-mist-50">Solutions</Link>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <Icon className="h-10 w-10 text-signal-400" />
            <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${STATUS_STYLES[status]}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {status}
            </span>
            <span className="text-sm text-mist-50/50">·</span>
            <span className="text-sm font-medium text-mist-50/70">{category}</span>
          </div>
          <h1 className="mt-6 max-w-2xl text-display font-semibold">{name}</h1>
          <p className="mt-6 max-w-xl text-body-lg text-mist-50/65">{intro}</p>
          <div className="mt-8">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
          </div>
        </Container>
      </section>

      {/* Diagram */}
      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <h2 className="text-h1 font-semibold text-ink-900">{title}</h2>
              <p className="mt-5 max-w-md text-body-lg text-ink-600">{whatItIs}</p>
            </div>
            <div className="rounded-[var(--radius-lg)] bg-ink-950 p-6 shadow-xl">{diagram}</div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <h2 className="mb-8 text-h2 font-semibold text-ink-900">How it works.</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="border-t border-ink-200 pt-5">
                <span className="label text-signal-600">{`0${i + 1}`}</span>
                <h3 className="mt-2 text-h3 font-medium text-ink-900">{step.title}</h3>
                <p className="mt-2 text-body text-ink-600">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <h2 className="mb-6 text-h2 font-semibold text-ink-900">Who it&apos;s for.</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {whoItsFor.map((w) => (
              <li key={w} className="flex gap-3 rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 p-4">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-500" />
                <p className="text-body text-ink-700">{w}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Related + CTA */}
      <section className="bg-ink-950 text-mist-50">
        <Container className="py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-lg text-h2 font-semibold">
            Ready to talk about {name}?
          </h2>
          <div className="mt-7">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="text-mist-50/60 hover:text-signal-400">
                {r.label} →
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
