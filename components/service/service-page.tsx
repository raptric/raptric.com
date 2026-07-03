import type { ComponentType } from "react";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink } from "@/components/ui/button";
import { CheckIcon, FlowIcon } from "@/components/illustrations/concept-icons";

type IconType = ComponentType<{ className?: string }>;

export type ServicePageData = {
  eyebrow: string;
  title: string;
  intro: string;
  Icon: IconType;
  covers?: string[];
  specializations?: { name: string; body: string; Icon: IconType }[];
  industries?: { name: string; body: string; Icon: IconType }[];
  problems: string[];
  useCases: string[];
  credibility: string;
};

export default function ServicePage({ data }: { data: ServicePageData }) {
  const {
    eyebrow,
    title,
    intro,
    Icon,
    covers,
    specializations,
    industries,
    problems,
    useCases,
    credibility,
  } = data;

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-signal-500/20 blur-[110px]" />
        <Container className="relative py-20 md:py-24">
          <Icon className="h-12 w-12 text-signal-400" />
          <Eyebrow className="mb-4 mt-6 text-signal-400">{eyebrow}</Eyebrow>
          <h1 className="max-w-2xl text-display font-semibold">{title}</h1>
          <p className="mt-6 max-w-xl text-body-lg text-mist-50/65">{intro}</p>
          <div className="mt-9">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
          </div>
        </Container>
      </section>

      {/* Specializations — named breakdown, used when a page needs to be very explicit about scope */}
      {specializations && (
        <section className="border-b border-ink-200">
          <Container className="py-16 md:py-20">
            <Eyebrow className="mb-4">Specializations</Eyebrow>
            <h2 className="max-w-xl text-h2 font-semibold text-ink-900">
              What falls under {title.split(" ").slice(0, 2).join(" ")}.
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {specializations.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6"
                >
                  <IconBadge Icon={s.Icon} className="h-11 w-11" />
                  <div>
                    <h3 className="text-h3 font-medium text-ink-900">{s.name}</h3>
                    <p className="mt-1.5 text-body text-ink-600">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* What this covers — simple fallback for pages without a specializations breakdown */}
      {!specializations && covers && (
        <section className="border-b border-ink-200">
          <Container className="py-16 md:py-20">
            <Eyebrow className="mb-8">What this covers</Eyebrow>
            <div className="grid gap-5 sm:grid-cols-2">
              {covers.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 p-5"
                >
                  <IconBadge Icon={CheckIcon} className="h-9 w-9 shrink-0" />
                  <p className="text-body text-ink-700 self-center">{item}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Industries */}
      {industries && (
        <section className="border-b border-ink-200 bg-mist-200/60">
          <Container className="py-16 md:py-20">
            <Eyebrow className="mb-4">Industries</Eyebrow>
            <h2 className="max-w-xl text-h2 font-semibold text-ink-900">
              Where this is already proven.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6"
                >
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
      )}

      {/* Problems solved */}
      <section className={`border-b border-ink-200 ${industries ? "" : "bg-mist-200/60"}`}>
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <Eyebrow className="mb-4">Problems this solves</Eyebrow>
              <h2 className="text-h2 font-semibold text-ink-900">
                What we&apos;re usually brought in to fix.
              </h2>
            </div>
            <dl className="flex flex-col gap-6">
              {problems.map((p, i) => (
                <div key={p} className="border-t border-ink-200 pt-4 first:border-t-0 first:pt-0">
                  <dt className="label text-signal-600">{`0${i + 1}`}</dt>
                  <dd className="mt-1.5 text-body-lg text-ink-700">{p}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Example workflows / use cases */}
      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-8">Example use cases</Eyebrow>
          <div className="grid gap-5 md:grid-cols-3">
            {useCases.map((u, i) => (
              <div
                key={u}
                className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 transition-shadow hover:shadow-lg"
              >
                <IconBadge Icon={FlowIcon} variant="muted" className="h-10 w-10" />
                <span className="font-mono text-xs text-ink-400">{`Use case 0${i + 1}`}</span>
                <p className="text-body-lg text-ink-900">{u}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Raptric */}
      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Icon className="mx-auto h-12 w-12 text-signal-600" />
            <Eyebrow className="mb-5 mt-6">Why Raptric</Eyebrow>
            <p className="text-h3 font-medium text-ink-900">{credibility}</p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 text-mist-50">
        <Container className="py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-lg text-h2 font-semibold">
            Ready to talk about {title.toLowerCase()}?
          </h2>
          <div className="mt-8">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
