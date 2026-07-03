import ChildServicePage from "@/components/service/child-service-page";
import { OnboardIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Virtual Assistant Services for Businesses",
  description:
    "Ongoing virtual assistant services: inbox and calendar management, data entry and research, and recurring administrative work handled by a dedicated specialist.",
  path: "/support-operations/virtual-assistant-services",
});

export default function VirtualAssistantServices() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Support Operations",
        title: "Virtual Assistant Services",
        intro:
          "Ongoing operational support — inbox and calendar management, data entry, research, and the recurring admin work that piles up — handled by a dedicated specialist, not an ad hoc freelancer.",
        Icon: OnboardIcon,
        parentLabel: "Support Operations",
        parentHref: "/support-operations",
        path: "/support-operations/virtual-assistant-services",
        serviceDescription:
          "Virtual assistant services covering inbox and calendar management, data entry, research, and recurring administrative tasks.",
        covers: [
          "Inbox and calendar management",
          "Data entry and research",
          "Recurring administrative tasks",
          "Dedicated ongoing support, not project-based freelancing",
        ],
        problems: [
          "Founders and managers buried in administrative work.",
          "Inconsistent coverage from rotating freelancers.",
          "Recurring tasks that fall through the cracks.",
          "No continuity — every new task means re-explaining context.",
        ],
        howItWorks: [
          { title: "Scope the work", body: "We identify the recurring tasks actually worth delegating." },
          { title: "Assign a specialist", body: "A dedicated person learns your context, not a rotating pool." },
          { title: "Operate ongoing", body: "Work runs continuously, with visibility into what's being handled." },
        ],
        useCases: [
          "Inbox and calendar management for a founder or executive",
          "Recurring data entry and reporting handled without weekly reminders",
          "Research and admin support scaling with a growing team",
        ],
        faq: [
          { q: "Is this the same person every time, or a rotating pool?", a: "A dedicated specialist who learns your context, not a different person each time." },
          { q: "What kind of tasks are a good fit?", a: "Recurring, definable work — inbox management, scheduling, data entry, research — rather than one-off specialized projects." },
          { q: "Can this scale as our needs grow?", a: "Yes — capacity adjusts as the recurring workload changes." },
        ],
        related: [
          { label: "Customer Support Outsourcing", href: "/support-operations/customer-support-outsourcing" },
          { label: "Human-in-the-Loop Support", href: "/support-operations/human-in-the-loop-support" },
          { label: "Support Operations overview", href: "/support-operations" },
        ],
      }}
    />
  );
}
