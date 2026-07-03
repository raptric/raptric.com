import ChildServicePage from "@/components/service/child-service-page";
import { HeadsetIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Customer Support Solution",
  description:
    "AI customer support as one integrated system: AI-handled first response and a specialist escalation tier, unified under one point of ownership.",
  path: "/solutions/ai-customer-support",
});

export default function AiCustomerSupportSolution() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Solutions",
        title: "AI Customer Support",
        intro:
          "AI-handled first response and a specialist escalation tier, run as one integrated system — not an AI vendor and an outsourced support team that don't talk to each other.",
        Icon: HeadsetIcon,
        parentLabel: "Solutions",
        parentHref: "/solutions",
        path: "/solutions/ai-customer-support",
        serviceDescription:
          "An integrated AI and human customer support solution combining AI Automation and Support Operations under one system.",
        covers: [
          "AI-handled first response and triage",
          "Specialist-staffed escalation tier",
          "Unified reporting across automation and human support",
          "A single point of ownership for the whole system",
        ],
        problems: [
          "AI and human support running as disconnected systems.",
          "No unified view of how tickets actually get resolved.",
          "Buying \"AI support\" and \"outsourced support\" from two vendors that don't integrate.",
          "No one accountable for the system as a whole.",
        ],
        howItWorks: [
          { title: "Design the split", body: "We define what AI handles and where specialists take over, as one system." },
          { title: "Build & staff", body: "AI Automation and Support Operations are implemented together, not separately." },
          { title: "Operate as one system", body: "Reporting, ownership, and improvement happen across both, not in silos." },
        ],
        useCases: [
          "AI resolving common tickets with specialist-staffed escalation for the rest",
          "One reporting view across automated and human-handled resolutions",
          "A single team accountable for support quality regardless of how a ticket was resolved",
        ],
        faq: [
          { q: "How is this different from just buying AI Customer Support Services?", a: "This solution combines the AI Automation piece with the Support Operations staffing piece as one designed system, rather than one component alone." },
          { q: "Do we need both AI and human support to start?", a: "You can start with either and add the other — but they're designed to work as one system from the outset." },
          { q: "Who owns the outcome if something goes wrong?", a: "One accountable system, not a finger-pointing exercise between an AI vendor and a support vendor." },
        ],
        related: [
          { label: "AI Customer Support Services", href: "/ai-automation/ai-customer-support-services" },
          { label: "Customer Support Outsourcing", href: "/support-operations/customer-support-outsourcing" },
          { label: "Solutions overview", href: "/solutions" },
        ],
      }}
    />
  );
}
