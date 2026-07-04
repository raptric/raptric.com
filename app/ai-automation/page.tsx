import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink } from "@/components/ui/button";
import { AiAutomationIcon } from "@/components/illustrations/service-icons";
import OrbitalCore from "@/components/illustrations/orbital-core";
import WorkflowGraph from "@/components/illustrations/workflow-graph";
import {
  FlowIcon,
  SystemsIcon,
  AccountableIcon,
  HeadsetIcon,
  PhoneIcon,
  CrmIcon,
  BuildIcon,
  ClockIcon,
  CheckIcon,
} from "@/components/illustrations/concept-icons";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Automation | Workflows, Agents, n8n & Process Design | Raptric",
  description:
    "AI automation built into the operation: workflows, agents, n8n systems, CRM routing, human checkpoints, and production-grade orchestration around real business processes.",
  path: "/ai-automation",
});

const CAPABILITIES = [
  {
    Icon: FlowIcon,
    name: "AI workflows",
    body: "Multi-step automations that move work across intake, routing, enrichment, review, and resolution.",
  },
  {
    Icon: SystemsIcon,
    name: "Agent systems",
    body: "AI agents scoped to bounded operational tasks, with guardrails and escalation when confidence drops.",
  },
  {
    Icon: AccountableIcon,
    name: "Human checkpoints",
    body: "Structured specialist review wherever risk, quality, or judgment should not be left to automation alone.",
  },
  {
    Icon: HeadsetIcon,
    name: "Support automation",
    body: "AI-first handling for inbound service volume, with clean handoff into tech support and customer operations.",
  },
  {
    Icon: PhoneIcon,
    name: "Voice and intake flows",
    body: "AI-powered voice, triage, and request capture tied to the systems downstream, not isolated call logic.",
  },
  {
    Icon: CrmIcon,
    name: "CRM and ops orchestration",
    body: "Lead routing, data hygiene, lifecycle automation, and internal operating triggers around the core record system.",
  },
];

const STACK = [
  "n8n workflow orchestration",
  "LLM-assisted routing and classification",
  "CRM and helpdesk integrations",
  "Human-in-the-loop review layers",
  "Escalation logic and audit trails",
  "Internal assistants and ops copilots",
];

const PROOFS = [
  "Built around the existing stack, not a rip-and-replace fantasy.",
  "Designed around exception paths as much as happy paths.",
  "Structured so a specialist can step in with context already attached.",
];

const USE_CASES = [
  {
    title: "Revenue and lead operations",
    body: "Automated intake, enrichment, scoring, routing, follow-up triggers, and CRM hygiene for teams that cannot afford lead leakage.",
  },
  {
    title: "Support triage and first response",
    body: "Classification, initial response, and escalation into specialists based on urgency, complexity, and channel.",
  },
  {
    title: "Internal workflow systems",
    body: "Approval flows, reconciliation, data movement, and exception handling across back-office tools and human review queues.",
  },
];

const WHY = [
  "Most teams do not need more AI experiments. They need a system that survives real volume.",
  "The useful question is not whether AI can do it. The useful question is where AI should stop and a person should take over.",
  "Good automation reduces manual drag without hiding the operational truth of what still needs human judgment.",
];

export default function AiAutomation() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "AI Automation", path: "/ai-automation" }]} />
      <ServiceSchema
        name="AI Automation"
        description="AI workflows, agents, n8n automation, CRM orchestration, and human-in-the-loop checkpoints built into how the business runs."
        path="/ai-automation"
      />

      <section className="relative overflow-hidden bg-ink-950 text-mist-50">
        <OrbitalCore className="pointer-events-none absolute right-[-180px] top-1/2 h-[640px] w-[640px] -translate-y-1/2 opacity-80" />
        <Container className="relative grid gap-12 py-20 md:grid-cols-[0.94fr_1.06fr] md:items-center md:py-28">
          <div>
            <AiAutomationIcon className="h-12 w-12 text-signal-400" />
            <Eyebrow className="mb-4 mt-6 text-signal-400">AI Automation</Eyebrow>
            <h1 className="text-display font-semibold">
              AI automation built into the operation, not bolted onto it.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-mist-50/68">
              We design production-grade AI workflows, agent systems, and
              automation layers around the way your business already moves work,
              with clear human checkpoints wherever judgment matters.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-mist-50/72">
              {["n8n orchestration", "agent routing", "CRM automation", "HITL checkpoints"].map((item) => (
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
                href="/support-operations"
                className="group inline-flex items-center gap-2 text-sm font-medium text-mist-50/80 hover:text-mist-50"
              >
                See the support layer
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_0.52fr]">
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-6 shadow-2xl backdrop-blur">
              <WorkflowGraph className="h-auto w-full" />
            </div>
            <div className="grid gap-4">
              <div className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-5 shadow-xl backdrop-blur">
                <p className="label text-signal-300">Production logic</p>
                <div className="mt-4 grid gap-3">
                  {["Input", "Classify", "Route", "Review", "Resolve"].map((step) => (
                    <div key={step} className="flex items-center justify-between border-b border-mist-50/8 pb-2 last:border-b-0 last:pb-0">
                      <span className="text-sm text-mist-50/72">{step}</span>
                      <span className="font-mono text-xs text-mist-50/46">live</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-mist-50/12 bg-mist-50/[0.04] p-5 shadow-xl backdrop-blur">
                <p className="label text-signal-300">Design rule</p>
                <p className="mt-3 text-sm leading-6 text-mist-50/78">
                  Automate the repeatable layer. Escalate the uncertain layer.
                  Keep the audit trail intact.
                </p>
              </div>
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
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-16">
            <div>
              <Eyebrow className="mb-5">Technical surfaces</Eyebrow>
              <h2 className="text-h1 font-semibold text-ink-900">
                The stack matters less than the orchestration around it.
              </h2>
              <p className="mt-5 max-w-md text-body-lg text-ink-600">
                We can build around n8n, internal assistants, CRM workflows,
                helpdesk systems, and support routing, but the real value is in
                how the pieces coordinate under live conditions.
              </p>
            </div>
            <div className="grid gap-3">
              {STACK.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 px-4 py-3">
                  <IconBadge Icon={CheckIcon} variant="muted" className="h-8 w-8 shrink-0" />
                  <p className="text-body text-ink-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.82fr_1.18fr] md:gap-16">
            <div>
              <Eyebrow className="mb-4">Why teams bring us in</Eyebrow>
              <h2 className="text-h2 font-semibold text-ink-900">
                AI value usually breaks at the operational boundary.
              </h2>
            </div>
            <div className="grid gap-4">
              {WHY.map((item, index) => (
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
          <Eyebrow className="mb-8">Proof in practice</Eyebrow>
          <div className="grid gap-5 md:grid-cols-3">
            {USE_CASES.map((item) => (
              <div key={item.title} className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6">
                <IconBadge Icon={BuildIcon} variant="muted" className="h-10 w-10" />
                <h3 className="mt-4 text-h3 font-medium text-ink-900">{item.title}</h3>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200">
        <Container className="py-16 md:py-20">
          <Eyebrow className="mb-6">What good looks like</Eyebrow>
          <div className="grid gap-4 md:grid-cols-3">
            {PROOFS.map((item) => (
              <div key={item} className="rounded-[var(--radius-md)] border border-ink-200 bg-mist-50 p-5">
                <IconBadge Icon={ClockIcon} variant="muted" className="h-9 w-9" />
                <p className="mt-4 text-body text-ink-700">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 text-mist-50">
        <Container className="py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-h2 font-semibold">
            Ready to design the automation layer around the work you actually run?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-mist-50/65">
            We can map the workflow, identify where AI belongs, and define
            where specialist judgment should still stay in the loop.
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
