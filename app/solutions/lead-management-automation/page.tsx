import ChildServicePage from "@/components/service/child-service-page";
import { ReportIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Lead Management Automation Solution",
  description:
    "Lead management automation: automated routing, scoring, and follow-up sequences inside the CRM you already run, with full context handed to sales.",
  path: "/solutions/lead-management-automation",
});

export default function LeadManagementAutomationSolution() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Solutions",
        title: "Lead Management Automation",
        intro:
          "Automated lead routing, scoring, and follow-up sequences inside the CRM you already run — so leads reach sales fast, with the context to act on them.",
        Icon: ReportIcon,
        parentLabel: "Solutions",
        parentHref: "/solutions",
        path: "/solutions/lead-management-automation",
        serviceDescription:
          "Automated lead routing, scoring, and follow-up sequencing built inside an existing CRM.",
        covers: [
          "Automated lead routing and scoring",
          "Follow-up sequence automation",
          "CRM data hygiene for lead records",
          "Handoff to sales with full context, not a bare notification",
        ],
        problems: [
          "Leads sitting unrouted for hours or days.",
          "Inconsistent or missed follow-up.",
          "Sales reaching out without context on what the lead actually wants.",
          "CRM data too messy to score or route reliably.",
        ],
        howItWorks: [
          { title: "Audit the funnel", body: "We look at how leads currently move from capture to sales handoff." },
          { title: "Build the automation", body: "Routing, scoring, and follow-up get automated inside your existing CRM." },
          { title: "Hand off with context", body: "Sales receives leads with the information needed to act immediately." },
        ],
        useCases: [
          "Inbound leads automatically routed to the right rep based on defined criteria",
          "Follow-up sequences that run without a rep needing to remember to send them",
          "Lead scoring that surfaces the highest-intent contacts first",
        ],
        faq: [
          { q: "Do you work inside our existing CRM?", a: "Yes — this is built inside the CRM you already use, not a separate platform to maintain." },
          { q: "Will this replace our sales team's judgment?", a: "No — it gets leads to the right person with the right context faster. The judgment calls still sit with sales." },
          { q: "Can this integrate with our marketing tools too?", a: "Yes — lead management automation typically connects marketing capture, the CRM, and sales handoff into one flow." },
        ],
        related: [
          { label: "AI Automation Services", href: "/ai-automation/ai-automation-services" },
          { label: "Back Office Operations", href: "/solutions/back-office-operations" },
          { label: "Solutions overview", href: "/solutions" },
        ],
      }}
    />
  );
}
