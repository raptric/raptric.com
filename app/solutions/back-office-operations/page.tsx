import ChildServicePage from "@/components/service/child-service-page";
import { CrmIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Back Office Operations Solution",
  description:
    "Back office operations support: CRM administration, reporting automation, and recurring admin work handled as one system, not a pile of manual tasks.",
  path: "/solutions/back-office-operations",
});

export default function BackOfficeOperationsSolution() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Solutions",
        title: "Back Office Operations",
        intro:
          "CRM administration, reporting, and the recurring admin work that piles up — handled as one system combining automation and specialist oversight, not a manual task list.",
        Icon: CrmIcon,
        parentLabel: "Solutions",
        parentHref: "/solutions",
        path: "/solutions/back-office-operations",
        serviceDescription:
          "Back office operations support combining CRM administration, reporting automation, and recurring process automation.",
        covers: [
          "CRM administration and data hygiene",
          "Reporting pipelines that update without manual assembly",
          "Recurring admin process automation",
          "Specialist review for anything automation shouldn't decide alone",
        ],
        problems: [
          "CRM data nobody fully trusts.",
          "Reporting manually assembled every week, always a little out of date.",
          "Admin work with no system behind it — just a task list.",
          "Process knowledge that lives in one person's head.",
        ],
        howItWorks: [
          { title: "Audit the current state", body: "We look at what's manual, what's automated, and where data breaks down." },
          { title: "Design the system", body: "We define what gets automated and where a specialist stays involved." },
          { title: "Implement & maintain", body: "The system runs ongoing, adjusted as your operation changes." },
        ],
        useCases: [
          "CRM data hygiene automation paired with specialist review of edge cases",
          "Reporting pipelines that update automatically instead of manual weekly assembly",
          "Recurring admin processes handled by a defined automation-plus-specialist system",
        ],
        faq: [
          { q: "Does this include the CRM administration piece specifically?", a: "Yes — CRM support and data hygiene are core to this solution, alongside broader reporting and admin automation." },
          { q: "Can this work alongside our existing internal tools?", a: "Yes — back office automation is usually built to work with what you already use, not replace it wholesale." },
          { q: "What if some of this work still needs a person?", a: "That's expected — the system defines exactly where specialist review stays involved, rather than automating everything indiscriminately." },
        ],
        related: [
          { label: "Custom Internal Tools Development", href: "/engineering-team/custom-internal-tools-development" },
          { label: "AI Automation Services", href: "/ai-automation/ai-automation-services" },
          { label: "Solutions overview", href: "/solutions" },
        ],
      }}
    />
  );
}
