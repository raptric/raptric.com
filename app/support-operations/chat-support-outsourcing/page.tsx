import ChildServicePage from "@/components/service/child-service-page";
import { FlowIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Chat Support Outsourcing",
  description:
    "Live chat support outsourcing across your website and app, with automation handling volume and specialists handling the conversations that need judgment.",
  path: "/support-operations/chat-support-outsourcing",
  noIndex: true,
});

export default function ChatSupportOutsourcing() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Support Operations",
        title: "Chat Support Outsourcing",
        intro:
          "Live chat coverage across your website and app, with automation absorbing repetitive questions and specialists handling the conversations that need real judgment.",
        Icon: FlowIcon,
        parentLabel: "Support Operations",
        parentHref: "/support-operations",
        path: "/support-operations/chat-support-outsourcing",
        serviceDescription:
          "Outsourced live chat support with automation for repetitive volume and specialist handling for complex conversations.",
        covers: [
          "Live chat coverage across website and in-app channels",
          "Chat-to-ticket escalation when a conversation needs follow-up",
          "Automated responses for repetitive questions, backed by specialists",
          "Coverage hours matched to your actual chat volume",
        ],
        problems: [
          "Chat abandoned because nobody responds fast enough.",
          "Chatbots that frustrate customers with no human option.",
          "Chat volume spiking with no coverage plan.",
          "Conversations that need follow-up but fall through the cracks.",
        ],
        howItWorks: [
          { title: "Map chat volume", body: "We look at question types, volume, and current response times." },
          { title: "Design the split", body: "Automation handles repetitive questions; specialists handle the rest." },
          { title: "Staff & escalate", body: "Live chat runs with a clear path to tickets when a conversation needs it." },
        ],
        useCases: [
          "Live chat coverage during business hours with after-hours automation",
          "Chat-to-ticket handoff for issues that need more than a quick answer",
          "Automated first response backed by a specialist for anything complex",
        ],
        faq: [
          { q: "Do you replace our chatbot or work alongside it?", a: "Either — we can design the automation layer from scratch or work alongside what you already have, with specialists handling the handoff." },
          { q: "What happens when a chat needs follow-up?", a: "It escalates to a ticket with full context, so nothing gets lost between chat and support." },
          { q: "Can coverage match our actual traffic patterns?", a: "Yes — coverage hours are based on your real chat volume, not a fixed default schedule." },
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
