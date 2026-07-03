import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import { CtaLink } from "@/components/ui/button";
import WorkflowGraph from "@/components/illustrations/workflow-graph";
import EmailFlow from "@/components/illustrations/email-flow";
import VoiceFlow from "@/components/illustrations/voice-flow";
import ClaimFlow from "@/components/illustrations/claim-flow";
import { SystemsIcon, MailIcon, PhoneIcon, HealthIcon } from "@/components/illustrations/concept-icons";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solutions — Packaged Systems We've Built",
  description:
    "LinkOS, eOS, Voice AI, and Healthcare & RCM Operations — packaged systems Raptric has built end-to-end, each combining automation with specialist judgment.",
  path: "/solutions",
});

const SOLUTIONS = [
  {
    Icon: SystemsIcon,
    name: "LinkOS",
    status: "Live",
    category: "Packaged Operating System",
    body: "The first operating system we've built end-to-end — automation carrying the volume, specialist operators carrying the judgment calls.",
    href: "/solutions/linkos",
    diagram: <WorkflowGraph className="h-auto w-full" />,
  },
  {
    Icon: MailIcon,
    name: "eOS",
    status: "In Development",
    category: "Packaged Email Marketing OS",
    body: "A hyper-personalized email marketing operating system, sequencing outreach by a contact's profile, designation, and role to get the meeting.",
    href: "/solutions/eos",
    diagram: <EmailFlow className="h-auto w-full" />,
  },
  {
    Icon: PhoneIcon,
    name: "Voice AI",
    status: "Live",
    category: "Packaged Voice Operations System",
    body: "A voice system that answers, resolves, and routes inbound calls — handing off to a specialist with full context when it should.",
    href: "/solutions/voice-ai",
    diagram: <VoiceFlow className="h-auto w-full" />,
  },
  {
    Icon: HealthIcon,
    name: "Healthcare & RCM Operations",
    status: "Live",
    category: "Packaged Voice & Agentic AI System",
    body: "Voice and agentic AI applied to healthcare revenue cycle work — claim intake and adjudication automated, specialist review where it matters.",
    href: "/solutions/healthcare-rcm-operations",
    diagram: <ClaimFlow className="h-auto w-full" />,
  },
];

const STATUS_STYLES: Record<string, string> = {
  Live: "text-signal-600",
  "In Development": "text-ink-500",
};

export default function Solutions() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }]} />

      <section className="bg-ink-950 text-mist-50">
        <Container className="py-20 md:py-24">
          <Eyebrow className="mb-4 text-signal-400">Solutions</Eyebrow>
          <h1 className="max-w-2xl text-display font-semibold">
            Packaged systems, not service tiers.
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-mist-50/65">
            AI Automation, Support Operations, and Engineering Team are how we
            work. The systems below are what we&apos;ve built with it — live
            products, run end-to-end, not a menu of generic offerings.
          </p>
        </Container>
      </section>

      <section>
        {SOLUTIONS.map((s, i) => {
          const reversed = i % 2 === 1;
          return (
            <div key={s.name} className="border-b border-ink-200">
              <Container className="py-16 md:py-20">
                <div
                  className={`grid gap-10 md:grid-cols-2 md:items-center md:gap-16 ${
                    reversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <s.Icon className="h-8 w-8 text-signal-500" />
                      <span className={`label inline-flex items-center gap-1.5 ${STATUS_STYLES[s.status]}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {s.status}
                      </span>
                    </div>
                    <Eyebrow className="mb-3 mt-6">{s.category}</Eyebrow>
                    <h2 className="text-h1 font-semibold text-ink-900">{s.name}</h2>
                    <p className="mt-4 max-w-md text-body-lg text-ink-600">{s.body}</p>
                    <Link
                      href={s.href}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-signal-600 hover:text-signal-700"
                    >
                      See how it works
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                  <Link
                    href={s.href}
                    className="block rounded-[var(--radius-lg)] bg-ink-950 p-6 shadow-xl transition-transform hover:scale-[1.01]"
                  >
                    {s.diagram}
                  </Link>
                </div>
              </Container>
            </div>
          );
        })}
      </section>

      <section className="bg-ink-950 text-mist-50">
        <Container className="py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-lg text-h2 font-semibold">
            Want a system built around your operation?
          </h2>
          <div className="mt-8">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
