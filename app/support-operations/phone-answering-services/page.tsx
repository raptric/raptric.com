import ChildServicePage from "@/components/service/child-service-page";
import { PhoneIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Answering Services",
  description:
    "Professional phone answering services for small and growing businesses: live call answering, message taking, and appointment scheduling — no call goes to voicemail.",
  path: "/support-operations/phone-answering-services",
});

export default function PhoneAnsweringServices() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Support Operations",
        title: "Phone Answering Services",
        intro:
          "Live call answering under your business name — message taking, appointment scheduling, and basic routing, so calls stop going to voicemail.",
        Icon: PhoneIcon,
        parentLabel: "Support Operations",
        parentHref: "/support-operations",
        path: "/support-operations/phone-answering-services",
        serviceDescription:
          "Professional phone answering with live call handling, message taking, and appointment scheduling under the client's business name.",
        covers: [
          "Live call answering under your business name",
          "Message taking and forwarding",
          "Appointment scheduling",
          "Basic call routing to the right person",
        ],
        problems: [
          "Missed calls going straight to voicemail.",
          "No coverage after hours or during busy periods.",
          "Calls answered inconsistently depending on who's free.",
          "Callers who hang up rather than leave a message.",
        ],
        howItWorks: [
          { title: "Set the script", body: "We define how calls should be answered and what information matters." },
          { title: "Staff the line", body: "Specialists answer live, under your business name, following your process." },
          { title: "Route & report", body: "Messages and appointments reach the right person, with visibility into call volume." },
        ],
        useCases: [
          "After-hours coverage so calls don't go to voicemail overnight",
          "Appointment scheduling handled live instead of via callback",
          "Overflow answering during business hours when the team is at capacity",
        ],
        faq: [
          { q: "Will callers know they're not reaching us directly?", a: "Calls are answered under your business name and script, structured to feel like a direct extension of your team." },
          { q: "Can you schedule appointments directly into our calendar?", a: "Yes — appointment scheduling integrates with the tools you already use." },
          { q: "Is this different from a full call center?", a: "Yes — this is lighter-weight, focused on answering, message-taking, and routing rather than complex call center operations." },
        ],
        related: [
          { label: "Call Center Outsourcing Services", href: "/support-operations/call-center-outsourcing-services" },
          { label: "Customer Support Outsourcing", href: "/support-operations/customer-support-outsourcing" },
          { label: "Support Operations overview", href: "/support-operations" },
        ],
      }}
    />
  );
}
