import type { ComponentType } from "react";
import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink } from "@/components/ui/button";
import { CheckIcon, FlowIcon } from "@/components/illustrations/concept-icons";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/json-ld";

type IconType = ComponentType<{ className?: string }>;

export type ChildServicePageData = {
  eyebrow: string;
  title: string;
  intro: string;
  Icon: IconType;
  parentLabel: string;
  parentHref: string;
  covers: string[];
  problems: string[];
  howItWorks: { title: string; body: string }[];
  useCases: string[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
  serviceDescription: string;
  path: string;
};

export default function ChildServicePage({ data }: { data: ChildServicePageData }) {
  const {
    eyebrow,
    title,
    intro,
    Icon,
    parentLabel,
    parentHref,
    covers,
    problems,
    howItWorks,
    useCases,
    faq,
    related,
    serviceDescription,
    path,
  } = data;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: parentLabel, path: parentHref },
          { name: title, path },
        ]}
      />
      <ServiceSchema name={title} description={serviceDescription} path={path} />

      {/* Header */}
      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-signal-500/20 blur-[110px]" />
        <Container className="relative py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-mist-50/50">
            <Link href="/" className="hover:text-mist-50">Home</Link>
            <span>/</span>
            <Link href={parentHref} className="hover:text-mist-50">{parentLabel}</Link>
          </nav>
          <Icon className="h-11 w-11 text-signal-400" />
          <Eyebrow className="mb-4 mt-6 text-signal-400">{eyebrow}</Eyebrow>
          <h1 className="max-w-2xl text-h1 font-semibold">{title}</h1>
          <p className="mt-6 max-w-xl text-body-lg text-mist-50/65">{intro}</p>
          <div className="mt-8">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
          </div>
        </Container>
      </section>

      {/* Covers */}
      <section className="border-b border-ink-200">
        <Container className="py-14 md:py-16">
          <Eyebrow className="mb-6">What this covers</Eyebrow>
          <div className="grid gap-4 sm:grid-cols-2">
            {covers.map((item) => (
              <div key={item} className="flex gap-3 rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 p-4">
                <IconBadge Icon={CheckIcon} className="h-8 w-8 shrink-0" />
                <p className="self-center text-body text-ink-700">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Problems */}
      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-14 md:py-16">
          <Eyebrow className="mb-4">Problems this solves</Eyebrow>
          <dl className="grid gap-6 sm:grid-cols-2">
            {problems.map((p, i) => (
              <div key={p} className="border-t border-ink-200 pt-4">
                <dt className="label text-signal-600">{`0${i + 1}`}</dt>
                <dd className="mt-1.5 text-body-lg text-ink-700">{p}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-b border-ink-200">
        <Container className="py-14 md:py-16">
          <Eyebrow className="mb-8">How it works</Eyebrow>
          <div className="grid gap-8 md:grid-cols-3">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="border-t border-ink-200 pt-5">
                <span className="label text-signal-600">{`0${i + 1}`}</span>
                <h3 className="mt-2 text-h3 font-medium text-ink-900">{step.title}</h3>
                <p className="mt-2 text-body text-ink-600">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use cases */}
      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-14 md:py-16">
          <Eyebrow className="mb-6">Example use cases</Eyebrow>
          <div className="grid gap-5 md:grid-cols-3">
            {useCases.map((u, i) => (
              <div key={u} className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-5">
                <IconBadge Icon={FlowIcon} variant="muted" className="h-9 w-9" />
                <span className="font-mono text-xs text-ink-400">{`Use case 0${i + 1}`}</span>
                <p className="text-body text-ink-900">{u}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-ink-200">
        <Container className="py-14 md:py-16">
          <Eyebrow className="mb-6">FAQ</Eyebrow>
          <div className="mx-auto flex max-w-2xl flex-col divide-y divide-ink-200 border-y border-ink-200">
            {faq.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-body-lg font-medium text-ink-900">
                  {item.q}
                  <span className="ml-4 shrink-0 text-ink-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-body text-ink-600">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Related + CTA */}
      <section className="bg-ink-950 text-mist-50">
        <Container className="py-14 text-center md:py-16">
          <h2 className="mx-auto max-w-lg text-h2 font-semibold">
            Ready to talk about {title.toLowerCase()}?
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
