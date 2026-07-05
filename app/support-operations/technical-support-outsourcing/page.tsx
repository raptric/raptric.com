import ChildServicePage from "@/components/service/child-service-page";
import { TicketIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Technical Support Outsourcing",
  description:
    "Technical support outsourcing with structured Tier 1 and Tier 2 troubleshooting, clear escalation to engineering, and knowledge base upkeep.",
  path: "/support-operations/technical-support-outsourcing",
  noIndex: true,
});

export default function TechnicalSupportOutsourcing() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Support Operations",
        title: "Technical Support Outsourcing",
        intro:
          "Tier 1 and Tier 2 technical troubleshooting, staffed by specialists who know when to resolve and when to escalate — so your engineers aren't fielding routine tickets.",
        Icon: TicketIcon,
        parentLabel: "Support Operations",
        parentHref: "/support-operations",
        path: "/support-operations/technical-support-outsourcing",
        serviceDescription:
          "Outsourced Tier 1 and Tier 2 technical support with structured escalation paths to engineering.",
        covers: [
          "Tier 1 and Tier 2 troubleshooting workflows",
          "Structured escalation paths to your engineering team",
          "Ticketing and tooling setup or integration with what you have",
          "Knowledge base creation and upkeep",
        ],
        problems: [
          "Engineers pulled into routine tickets that don't need them.",
          "Inconsistent troubleshooting with no documented process.",
          "Technical debt in support knowledge — tribal, undocumented.",
          "Escalations that reach engineering with no context.",
        ],
        howItWorks: [
          { title: "Map the technical surface", body: "We document the systems, common issues, and current escalation gaps." },
          { title: "Build the triage process", body: "We define what Tier 1 resolves, what escalates, and how." },
          { title: "Staff & maintain", body: "Specialists handle tickets; the knowledge base stays current as issues evolve." },
        ],
        useCases: [
          "Tier 1 support absorbing routine technical tickets before they reach engineering",
          "A structured escalation path that gives engineers full context, not a raw ticket",
          "A knowledge base built and maintained alongside the support queue",
        ],
        faq: [
          { q: "Will this reduce interruptions to our engineering team?", a: "That's the specific goal — Tier 1 and Tier 2 absorb the routine technical tickets, so engineering only sees what genuinely needs them." },
          { q: "Do you use our existing ticketing system?", a: "Yes, we work inside what you already use, or help set one up if you don't have one." },
          { q: "How do you handle issues you haven't seen before?", a: "They escalate with full context and get documented, so the same issue doesn't reach engineering twice." },
        ],
        related: [
          { label: "Customer Support Outsourcing", href: "/support-operations/customer-support-outsourcing" },
          { label: "Software Development Partner", href: "/engineering-team/software-development-partner" },
          { label: "Support Operations overview", href: "/support-operations" },
        ],
      }}
    />
  );
}
