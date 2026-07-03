import ChildServicePage from "@/components/service/child-service-page";
import { TicketIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Technical Support Systems Solution",
  description:
    "Technical support designed as a system: escalation workflow, tooling, and the Tier 1 to engineering structure — not support that just grew without a plan.",
  path: "/solutions/technical-support-systems",
});

export default function TechnicalSupportSystemsSolution() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Solutions",
        title: "Technical Support Systems",
        intro:
          "The escalation workflow, tooling, and tier structure behind technical support — designed as a system, not support that grew organically with no plan behind it.",
        Icon: TicketIcon,
        parentLabel: "Solutions",
        parentHref: "/solutions",
        path: "/solutions/technical-support-systems",
        serviceDescription:
          "A designed technical support system covering escalation workflows, tooling, and the structure from Tier 1 through engineering.",
        covers: [
          "Escalation workflow design from Tier 1 through engineering",
          "Ticketing and tooling setup or integration",
          "Knowledge base architecture",
          "Ownership defined at every tier",
        ],
        problems: [
          "Technical support that grew without a designed structure.",
          "Unclear ownership between support tiers.",
          "No system tying support tools together.",
          "Escalations that stall because nobody knows whose job it is next.",
        ],
        howItWorks: [
          { title: "Map the current structure", body: "We document how technical issues actually move through your support today." },
          { title: "Design the system", body: "We define tiers, tooling, and ownership from first contact to resolution." },
          { title: "Implement & staff", body: "The system gets built and, where needed, staffed with specialists at each tier." },
        ],
        useCases: [
          "A documented escalation path from Tier 1 support through engineering",
          "A knowledge base architecture that scales as issues accumulate",
          "Tooling integration connecting the ticketing system to engineering's bug tracker",
        ],
        faq: [
          { q: "Does this include staffing, or just the system design?", a: "Both are available — some clients want the system designed and staff it themselves, others want us to staff it too." },
          { q: "How is this different from Technical Support Outsourcing?", a: "That page is about staffing Tier 1/2 support. This is the underlying system design — workflow, tooling, and structure — which may or may not include our staffing." },
          { q: "Can you work with our existing support tools?", a: "Yes — system design usually works with what you already have rather than requiring a platform switch." },
        ],
        related: [
          { label: "Technical Support Outsourcing", href: "/support-operations/technical-support-outsourcing" },
          { label: "Support Engineering Team", href: "/engineering-team/support-engineering-team" },
          { label: "Solutions overview", href: "/solutions" },
        ],
      }}
    />
  );
}
