import ChildServicePage from "@/components/service/child-service-page";
import { AiAutomationIcon } from "@/components/illustrations/service-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Automation Services for Businesses",
  description:
    "AI automation services built around your real workflows: AI workflow design, agent orchestration, tool integration, and ongoing monitoring — not a pilot that never ships.",
  path: "/ai-automation/ai-automation-services",
});

export default function AiAutomationServices() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "AI Automation",
        title: "AI Automation Services",
        intro:
          "End-to-end AI workflow design and implementation, built against your real tools and real exceptions — with a specialist checkpoint wherever judgment is required.",
        Icon: AiAutomationIcon,
        parentLabel: "AI Automation",
        parentHref: "/ai-automation",
        path: "/ai-automation/ai-automation-services",
        serviceDescription:
          "AI automation services covering workflow design, agent orchestration, tool integration, and ongoing monitoring.",
        covers: [
          "AI workflow design across your existing tools",
          "Multi-step agent orchestration, not single-shot prompts",
          "Integration with your CRM, support desk, and internal systems",
          "Monitoring and a named owner after launch",
        ],
        problems: [
          "AI pilots that never make it into production.",
          "Automation that handles the easy 80% and breaks on exceptions.",
          "No clear owner for automation once it's built.",
          "Manual, repetitive work consuming specialist time.",
        ],
        howItWorks: [
          { title: "Map the workflow", body: "We document the process as it actually runs today, exceptions included." },
          { title: "Design the split", body: "We define what the AI handles and where a specialist checkpoint sits." },
          { title: "Build & monitor", body: "We implement, integrate, and stay attached to how it performs after launch." },
        ],
        useCases: [
          "An agent that triages inbound requests and routes exceptions to a specialist",
          "Automated data entry and reconciliation across systems that don't talk to each other",
          "An internal assistant that answers operational questions from existing documentation",
        ],
        faq: [
          { q: "Do you work with our existing tools, or do we have to switch platforms?", a: "We build against what you already use. Automation gets integrated into your CRM, support desk, and internal tools rather than requiring a platform migration." },
          { q: "What happens when the AI can't handle a case?", a: "It routes to a specialist with full context, not a dead end. That handoff is designed up front, not bolted on afterward." },
          { q: "Who owns the automation after it launches?", a: "We stay operationally accountable — monitoring, adjusting, and improving it, rather than handing off a black box." },
        ],
        related: [
          { label: "n8n Automation Agency", href: "/ai-automation/n8n-automation-agency" },
          { label: "AI Customer Support Services", href: "/ai-automation/ai-customer-support-services" },
          { label: "AI Automation overview", href: "/ai-automation" },
        ],
      }}
    />
  );
}
