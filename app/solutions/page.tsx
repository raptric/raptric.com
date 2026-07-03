import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import IconBadge from "@/components/ui/icon-badge";
import { CtaLink } from "@/components/ui/button";
import {
  HeadsetIcon,
  TicketIcon,
  CrmIcon,
  AppIcon,
  ReportIcon,
  AccountableIcon,
} from "@/components/illustrations/concept-icons";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solutions — Business Outcomes, Not Just Services",
  description:
    "Raptric solutions by outcome: AI customer support, technical support systems, back office operations, SaaS product delivery, lead management automation, and AI + human operations.",
  path: "/solutions",
});

const SOLUTIONS = [
  {
    Icon: HeadsetIcon,
    name: "AI Customer Support",
    body: "AI-handled first response with a specialist checkpoint for anything that needs judgment.",
    pillar: "AI Automation + Support Operations",
  },
  {
    Icon: TicketIcon,
    name: "Technical Support Systems",
    body: "Structured Tier 1/2 troubleshooting workflows that route by complexity, not queue position.",
    pillar: "Support Operations",
  },
  {
    Icon: CrmIcon,
    name: "Back Office Operations",
    body: "CRM administration, reporting, and process automation for the recurring work that piles up.",
    pillar: "Engineering Team + AI Automation",
  },
  {
    Icon: AppIcon,
    name: "SaaS Product Delivery",
    body: "A dedicated or augmented engineering team taking a product from roadmap to shipped release.",
    pillar: "Engineering Team",
  },
  {
    Icon: ReportIcon,
    name: "Lead Management Automation",
    body: "Automated lead routing, scoring, and follow-up sequences inside the CRM you already run.",
    pillar: "AI Automation",
  },
  {
    Icon: AccountableIcon,
    name: "AI + Human Operations",
    body: "The defined split between what's automated and what's staffed, designed as one system.",
    pillar: "All three pillars",
  },
];

export default function Solutions() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }]} />

      <section className="bg-ink-950 text-mist-50">
        <Container className="py-20 md:py-24">
          <Eyebrow className="mb-4 text-signal-400">Solutions</Eyebrow>
          <h1 className="max-w-2xl text-display font-semibold">
            Business outcomes, not just services.
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-mist-50/65">
            AI Automation, Support Operations, and Engineering Team aren&apos;t
            separate vendors — they combine into the outcomes below.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-20">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s) => (
              <div
                key={s.name}
                className="flex flex-col justify-between rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-7"
              >
                <div>
                  <IconBadge Icon={s.Icon} className="h-11 w-11" />
                  <h3 className="mt-5 text-h3 font-medium text-ink-900">{s.name}</h3>
                  <p className="mt-2 text-body text-ink-600">{s.body}</p>
                </div>
                <p className="label mt-6 text-signal-600">{s.pillar}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 text-mist-50">
        <Container className="py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-lg text-h2 font-semibold">
            Tell us the outcome you need, not the tool.
          </h2>
          <div className="mt-8">
            <CtaLink href="/contact">Let&apos;s Talk</CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
