import ChildServicePage from "@/components/service/child-service-page";
import { AccountableIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Human-in-the-Loop Support",
  description:
    "Human-in-the-loop customer support: a designed handoff between automation and specialists, with audit trails and clear ownership — not a checkbox.",
  path: "/support-operations/human-in-the-loop-support",
});

export default function HumanInTheLoopSupport() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Support Operations",
        title: "Human-in-the-Loop Support",
        intro:
          "A designed handoff between automation and specialists — not a checkbox. We define exactly which cases route to a person, why, and who owns the outcome.",
        Icon: AccountableIcon,
        parentLabel: "Support Operations",
        parentHref: "/support-operations",
        path: "/support-operations/human-in-the-loop-support",
        serviceDescription:
          "Human-in-the-loop support design covering automation-to-specialist handoff, edge case review, and audit trails for automated decisions.",
        covers: [
          "Defined automation-to-specialist handoff design",
          "Specialist review of AI-flagged edge cases",
          "Audit trails for automated decisions",
          "Escalation SLAs so nothing sits unresolved",
        ],
        problems: [
          "AI making customer-facing decisions with no human check.",
          "\"Human-in-the-loop\" used as a marketing checkbox with no real process.",
          "No clear ownership when automation gets something wrong.",
          "Escalations that reach a person with no context on why.",
        ],
        howItWorks: [
          { title: "Define the line", body: "We identify exactly which cases the automation shouldn't decide alone." },
          { title: "Design the handoff", body: "Specialists get full context, not just a flagged case with no explanation." },
          { title: "Track & improve", body: "Outcomes feed back into where the automation-to-human line should sit." },
        ],
        useCases: [
          "A support workflow where AI drafts a response and a specialist approves it for sensitive cases",
          "Automated flagging of low-confidence AI decisions for specialist review",
          "An audit trail showing who — or what — made every customer-facing decision",
        ],
        faq: [
          { q: "Isn't this just a review step in a workflow tool?", a: "Not if it's done right. The specific cases that need review, the context provided, and who owns the outcome all have to be designed deliberately — a generic approval step doesn't do that." },
          { q: "Does this slow down response times?", a: "Only for the cases that genuinely need it. Routine cases still move at automation speed; the loop exists specifically for what shouldn't be automated." },
          { q: "Who's accountable when something goes wrong?", a: "That's defined up front, not left ambiguous — a named owner, not a shared shrug." },
        ],
        related: [
          { label: "AI Customer Support Services", href: "/ai-automation/ai-customer-support-services" },
          { label: "Customer Support Outsourcing", href: "/support-operations/customer-support-outsourcing" },
          { label: "Support Operations overview", href: "/support-operations" },
        ],
      }}
    />
  );
}
