import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink } from "@/components/ui/button";
import { AiAutomationIcon } from "@/components/illustrations/service-icons";
import OrbitalCore from "@/components/illustrations/orbital-core";
import WorkflowGraph from "@/components/illustrations/workflow-graph";
import { CheckIcon, FlowIcon } from "@/components/illustrations/concept-icons";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Automation Services — Workflows, Agents & Business Process Automation",
  description:
    "AI automation services built into how the business runs: AI workflows, n8n automation, business process automation, AI customer support, AI call center solutions, and CRM automation.",
  path: "/ai-automation",
});

const COVERAGE = [
  {
    name: "AI Automation Services",
    body: "End-to-end AI workflow design and implementation across your existing tools.",
  },
  {
    name: "n8n Automation Agency",
    body: "n8n workflow builds and maintenance for teams that want an open, self-hostable automation layer.",
  },
  {
    name: "Business Process Automation",
    body: "Automating the repeatable steps inside a real process, not an isolated task.",
  },
  {
    name: "AI Customer Support Services",
    body: "AI-handled first response and triage, with a clear handoff to a specialist when it matters.",
  },
  {
    name: "AI Call Center Solutions",
    body: "Voice and call-handling automation layered onto existing support operations.",
  },
  {
    name: "CRM Automation Services",
    body: "Automated data hygiene, lead routing, and follow-up sequences inside the CRM you already use.",
  },
];

const PROBLEMS = [
  "AI pilots that never make it into production.",
  "Automation that handles the easy 80% and breaks on exceptions.",
  "No clear owner for automation once it's built.",
  "Manual, repetitive work consuming specialist time.",
];

const USE_CASES = [
  "An agent that triages inbound requests and routes exceptions to a specialist",
  "n8n workflows connecting a CRM, a billing system, and support tooling that don't talk to each other",
  "Automated data entry, reconciliation, and lead routing running on a schedule, not a person",
];

export default function AiAutomation() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "AI Automation", path: "/ai-automation" }]} />
      <ServiceSchema
        name="AI Automation Services"
        description="AI workflows, AI agents, internal assistants, and process automation built into how the business runs."
        path="/ai-automation"
      />

      {/* Header — tech-native treatment */}
      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <OrbitalCore className="pointer-events-none absolute -right-32 top-1/2 h-[560px] w-[560px] -translate-y-1/2 opacity-70 md:-right-16" />
        <Container className="relative py-20 md:py-28">
          <div className="max-w-2xl">
            <AiAutomationIcon className="h-12 w-12 text-signal-400" />
            <Eyebrow className="mb-4 mt-6 text-signal-400">AI Automation</Eyebrow>
            <h1 className="text-display font-semibold">
              AI automation built into the operation, not bolted onto it.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/65">
              AI workflows, agents, internal assistants, and process
              automation — engineered against your real tools and real
              exceptions, with a specialist checkpoint wherever judgment is
              required.
            </p>
            <div className="mt-9">
              <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Coverage grid — SEO surface for Phase 2 children */}
      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-8">What this covers</Eyebrow>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COVERAGE.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6"
              >
                <IconBadge Icon={CheckIcon} className="h-9 w-9" />
                <h3 className="text-h3 font-medium text-ink-900">{item.name}</h3>
                <p className="text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it runs — dark tech panel */}
      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <Eyebrow className="mb-5">How it runs</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                Every automation has a specialist checkpoint.
              </h2>
              <p className="mt-5 max-w-md text-body-lg text-ink-600">
                Input flows through the automated steps that can handle it.
                Anything that can&apos;t — the exception, the edge case, the
                judgment call — routes to a person before it becomes an
                outcome.
              </p>
            </div>
            <div className="rounded-[var(--radius-lg)] bg-ink-950 p-6 shadow-xl">
              <WorkflowGraph className="h-auto w-full" />
            </div>
          </div>
        </Container>
      </section>

      {/* Problems solved */}
      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <Eyebrow className="mb-4">Problems this solves</Eyebrow>
              <h2 className="text-h2 font-semibold text-ink-900">
                What we&apos;re usually brought in to fix.
              </h2>
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
      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-8">Example use cases</Eyebrow>
          <div className="grid gap-5 md:grid-cols-3">
            {USE_CASES.map((u, i) => (
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

      {/* Related */}
      <section className="border-b border-ink-200 bg-mist-200/60">
        <Container className="py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mb-5">Why Raptric</Eyebrow>
            <p className="text-h3 font-medium text-ink-900">
              We build automation as a working part of the operation, with a
              specialist checkpoint wherever judgment is required — not a
              script that only works in the demo.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="/support-operations" className="text-signal-600 hover:underline">
                Support Operations →
              </Link>
              <Link href="/engineering-team" className="text-signal-600 hover:underline">
                Engineering Team →
              </Link>
              <Link href="/solutions" className="text-signal-600 hover:underline">
                Solutions →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 text-mist-50">
        <Container className="py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-lg text-h2 font-semibold">
            Ready to talk about AI automation?
          </h2>
          <div className="mt-8">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
