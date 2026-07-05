import ChildServicePage from "@/components/service/child-service-page";
import { FlowIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "n8n Automation Agency — n8n Workflow Builds & Support",
  description:
    "n8n automation agency for teams that want to own their workflows: custom n8n builds, self-hosted setup, and ongoing maintenance — no vendor lock-in.",
  path: "/ai-automation/n8n-automation-agency",
  noIndex: true,
});

export default function N8nAutomationAgency() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "AI Automation",
        title: "n8n Automation Agency",
        intro:
          "n8n workflow builds and ongoing maintenance for teams that want an open, self-hostable automation layer they actually own — not a closed platform you're renting.",
        Icon: FlowIcon,
        parentLabel: "AI Automation",
        parentHref: "/ai-automation",
        path: "/ai-automation/n8n-automation-agency",
        serviceDescription:
          "n8n workflow automation builds, self-hosted setup, custom node development, and migration from closed automation platforms.",
        covers: [
          "Custom n8n workflow builds for your specific process",
          "Self-hosted n8n setup, hardening, and maintenance",
          "Custom node development for tools without native integrations",
          "Migration from closed or vendor-locked automation platforms",
        ],
        problems: [
          "Vendor lock-in with closed automation platforms.",
          "n8n workflows nobody on the team can maintain after we leave.",
          "Self-hosting complexity — security, uptime, updates.",
          "Automation tools that don't integrate with what you already use.",
        ],
        howItWorks: [
          { title: "Audit existing workflows", body: "We review what's automated today and what's still manual." },
          { title: "Build in n8n", body: "We design and implement workflows against your real tools and data." },
          { title: "Host & document", body: "Self-hosted, hardened, and documented so your team can actually maintain it." },
        ],
        useCases: [
          "Migrating a Zapier-dependent process to a self-hosted n8n workflow",
          "A custom node connecting an internal tool with no existing integration",
          "Lead routing and CRM automation running entirely inside n8n",
        ],
        faq: [
          { q: "Why n8n instead of Zapier or Make?", a: "n8n is open-source and self-hostable, so you own the workflow and the data instead of renting access to a closed platform." },
          { q: "Do you handle hosting?", a: "Yes — we can set up and maintain a self-hosted instance, or work inside one you already run." },
          { q: "Can our team maintain the workflows after handoff?", a: "That's the point of self-hosting with n8n — we document and structure builds so your team isn't locked out of their own automation." },
        ],
        related: [
          { label: "AI Automation Services", href: "/ai-automation/ai-automation-services" },
          { label: "AI Customer Support Services", href: "/ai-automation/ai-customer-support-services" },
          { label: "AI Automation overview", href: "/ai-automation" },
        ],
      }}
    />
  );
}
