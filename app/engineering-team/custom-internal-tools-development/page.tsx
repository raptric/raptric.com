import ChildServicePage from "@/components/service/child-service-page";
import { CrmIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Custom Internal Tools Development",
  description:
    "Custom internal tools built for how your team actually operates: admin panels, internal dashboards, and workflow tools, maintained after they ship.",
  path: "/engineering-team/custom-internal-tools-development",
});

export default function CustomInternalToolsDevelopment() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Engineering Team",
        title: "Custom Internal Tools Development",
        intro:
          "Internal software built for how your team actually operates — admin panels, dashboards, and workflow tools — maintained after launch, not abandoned.",
        Icon: CrmIcon,
        parentLabel: "Engineering Team",
        parentHref: "/engineering-team",
        path: "/engineering-team/custom-internal-tools-development",
        serviceDescription:
          "Custom internal tools development covering admin panels, internal dashboards, workflow tools, and integrations between internal systems.",
        covers: [
          "Internal admin panels and dashboards",
          "Workflow tools built for a specific internal process",
          "Integrations between internal systems",
          "Ongoing maintenance as your processes change",
        ],
        problems: [
          "Teams working around spreadsheets because no real tool exists.",
          "Off-the-shelf internal tools that don't fit the actual process.",
          "Internal tools abandoned after the person who built them leaves.",
          "Business operations software built once and never updated.",
        ],
        howItWorks: [
          { title: "Understand the process", body: "We learn the actual internal workflow the tool needs to support." },
          { title: "Build the tool", body: "We ship something fitted to how your team works, not a generic template." },
          { title: "Maintain it", body: "The tool keeps working as your process changes, not frozen at v1." },
        ],
        useCases: [
          "An internal admin panel replacing a shared spreadsheet nobody trusts anymore",
          "A workflow tool built for a process specific to your operation",
          "An internal dashboard pulling data from multiple systems into one view",
        ],
        faq: [
          { q: "Is this different from SaaS Development Services?", a: "SaaS Development builds customer-facing or platform products. This is purely internal tooling for your own team's operations." },
          { q: "What happens if our process changes after launch?", a: "The tool gets maintained and adjusted — internal tools built once and abandoned are exactly the problem we build against." },
          { q: "Can you integrate with systems we already use?", a: "Yes — internal tools are usually built specifically to connect systems that don't already talk to each other." },
        ],
        related: [
          { label: "SaaS Development Services", href: "/engineering-team/saas-development-services" },
          { label: "Back Office Operations", href: "/solutions/back-office-operations" },
          { label: "Engineering Team overview", href: "/engineering-team" },
        ],
      }}
    />
  );
}
