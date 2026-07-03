import ChildServicePage from "@/components/service/child-service-page";
import { HeadsetIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Customer Support Outsourcing",
  description:
    "Customer support outsourcing built as a system: specialist operators, defined coverage hours, and automation for volume — so quality doesn't erode as you grow.",
  path: "/support-operations/customer-support-outsourcing",
});

export default function CustomerSupportOutsourcing() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Support Operations",
        title: "Customer Support Outsourcing",
        intro:
          "Multi-channel customer support staffed by specialists and backed by automation for volume — designed as a system, not a headcount line item.",
        Icon: HeadsetIcon,
        parentLabel: "Support Operations",
        parentHref: "/support-operations",
        path: "/support-operations/customer-support-outsourcing",
        serviceDescription:
          "Outsourced customer support across chat, email, and phone, staffed by specialists and backed by automation for volume.",
        covers: [
          "Multi-channel support: chat, email, and phone",
          "Specialist staffing matched to your support volume",
          "Defined coverage hours, including nights and weekends",
          "Escalation paths designed before day one",
        ],
        problems: [
          "Support quality that degrades as ticket volume grows.",
          "Hiring and training overhead for every new support hire.",
          "Coverage gaps — nights, weekends, spikes — nobody wants to staff.",
          "Response times that scale linearly with headcount.",
        ],
        howItWorks: [
          { title: "Assess volume & channels", body: "We look at your actual ticket volume, channels, and complexity mix." },
          { title: "Design the split", body: "We define what's automated and what needs a specialist, and staff accordingly." },
          { title: "Operate & report", body: "Specialists run support day to day, with visibility into what's happening and why." },
        ],
        useCases: [
          "Full coverage across chat, email, and phone during and after business hours",
          "A support team that scales up for seasonal or launch-driven spikes",
          "Specialist-handled escalations layered onto an existing internal support team",
        ],
        faq: [
          { q: "How is this different from a generic BPO?", a: "We staff and structure support as one system with automation, not headcount thrown at ticket volume with no design behind it." },
          { q: "Can you cover nights and weekends?", a: "Yes — coverage hours are defined up front based on your actual demand, not a fixed 9-to-5 default." },
          { q: "Do you handle escalations to our internal team?", a: "Yes — escalation paths are designed before launch, so complex cases reach the right person without friction." },
        ],
        related: [
          { label: "Technical Support Outsourcing", href: "/support-operations/technical-support-outsourcing" },
          { label: "AI Customer Support Services", href: "/ai-automation/ai-customer-support-services" },
          { label: "Support Operations overview", href: "/support-operations" },
        ],
      }}
    />
  );
}
