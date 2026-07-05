import ChildServicePage from "@/components/service/child-service-page";
import { QaIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Support Engineering Team",
  description:
    "A support engineering team for technical escalations support can't resolve — bug triage, reproduction, and root-cause documentation, without pulling product engineers off the roadmap.",
  path: "/engineering-team/support-engineering-team",
  noIndex: true,
});

export default function SupportEngineeringTeam() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Engineering Team",
        title: "Support Engineering Team",
        intro:
          "Engineering-level troubleshooting for the technical escalations your support team can't resolve — without pulling product engineers off the roadmap.",
        Icon: QaIcon,
        parentLabel: "Engineering Team",
        parentHref: "/engineering-team",
        path: "/engineering-team/support-engineering-team",
        serviceDescription:
          "A dedicated support engineering team handling technical escalations, bug triage, and root-cause investigation separate from the core product roadmap.",
        covers: [
          "Engineering-level troubleshooting for escalated tickets",
          "Bug triage and reproduction",
          "Direct collaboration with your product engineering team",
          "Technical root-cause documentation",
        ],
        problems: [
          "Engineers pulled off roadmap work for one-off escalations.",
          "Support tickets that need code-level investigation to resolve.",
          "No dedicated capacity for the genuinely hard tickets.",
          "Escalations that reach engineering with no reproduction steps.",
        ],
        howItWorks: [
          { title: "Define the escalation line", body: "We set what qualifies as a support engineering case versus a product bug." },
          { title: "Triage & reproduce", body: "Specialists investigate, reproduce, and document before it reaches your core team." },
          { title: "Route with context", body: "What does reach product engineering arrives with root-cause context, not a raw ticket." },
        ],
        useCases: [
          "A dedicated queue for escalations that need engineering-level investigation",
          "Bug reproduction and documentation before a ticket reaches the product team",
          "Root-cause analysis for recurring technical issues in support",
        ],
        faq: [
          { q: "How is this different from Technical Support Outsourcing?", a: "Technical Support Outsourcing handles Tier 1/2 troubleshooting. Support engineering sits above that — the cases that need actual engineering investigation, not just triage." },
          { q: "Will this reduce interruptions to our product team?", a: "That's the specific goal — routine and even complex technical escalations get absorbed before they reach your core engineers." },
          { q: "Do you work inside our existing engineering tools?", a: "Yes — we work inside your existing bug tracker and codebase access rather than a separate system." },
        ],
        related: [
          { label: "Technical Support Outsourcing", href: "/support-operations/technical-support-outsourcing" },
          { label: "Software Development Partner", href: "/engineering-team/software-development-partner" },
          { label: "Engineering Team overview", href: "/engineering-team" },
        ],
      }}
    />
  );
}
