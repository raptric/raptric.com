import ChildServicePage from "@/components/service/child-service-page";
import { ChatIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Customer Support Services",
  description:
    "AI customer support services that handle first response and triage, with a clear handoff to a specialist — grounded in your own documentation, not generic answers.",
  path: "/ai-automation/ai-customer-support-services",
});

export default function AiCustomerSupportServices() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "AI Automation",
        title: "AI Customer Support Services",
        intro:
          "AI-handled first response and ticket triage, grounded in your own documentation — with a designed handoff to a specialist for anything that needs real judgment.",
        Icon: ChatIcon,
        parentLabel: "AI Automation",
        parentHref: "/ai-automation",
        path: "/ai-automation/ai-customer-support-services",
        serviceDescription:
          "AI-handled customer support first response, ticket triage and routing, and specialist escalation design.",
        covers: [
          "AI first-response handling across chat and email",
          "Ticket triage and routing by complexity",
          "Answers grounded in your actual documentation, not generic training data",
          "Escalation design for when AI shouldn't decide",
        ],
        problems: [
          "Support teams drowning in repetitive, low-complexity tickets.",
          "AI chatbots that give confidently wrong answers.",
          "No clear line between what AI should and shouldn't handle.",
          "Response times that don't scale with ticket volume.",
        ],
        howItWorks: [
          { title: "Ground the AI", body: "We connect it to your actual documentation and past resolutions, not generic answers." },
          { title: "Define the handoff", body: "We set the specific line where a case routes to a specialist instead of the AI deciding." },
          { title: "Launch & tune", body: "We monitor accuracy and adjust the automation-to-human split as real tickets come in." },
        ],
        useCases: [
          "First-response AI that resolves common questions and escalates the rest",
          "Ticket triage that routes by complexity instead of arrival order",
          "A support assistant grounded in your help center and past resolved tickets",
        ],
        faq: [
          { q: "Will the AI give customers wrong information?", a: "It's grounded in your own documentation and scoped to what it can answer confidently — anything outside that scope routes to a specialist instead of guessing." },
          { q: "Does this replace our support team?", a: "No — it absorbs the repetitive volume so your specialists spend their time on the cases that actually need judgment." },
          { q: "How is this different from a generic chatbot?", a: "A generic chatbot answers from general training data. This is grounded in your documentation and has a defined escalation path, not just a fallback message." },
        ],
        related: [
          { label: "AI Automation Services", href: "/ai-automation/ai-automation-services" },
          { label: "Customer Support Outsourcing", href: "/support-operations/customer-support-outsourcing" },
          { label: "AI Automation overview", href: "/ai-automation" },
        ],
      }}
    />
  );
}
