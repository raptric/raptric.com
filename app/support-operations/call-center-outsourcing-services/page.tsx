import ChildServicePage from "@/components/service/child-service-page";
import { ChatIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Call Center Outsourcing Services",
  description:
    "Inbound and outbound call center outsourcing with structured scripts, quality monitoring, and overflow coverage for peak hours.",
  path: "/support-operations/call-center-outsourcing-services",
  noIndex: true,
});

export default function CallCenterOutsourcingServices() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Support Operations",
        title: "Call Center Outsourcing Services",
        intro:
          "Inbound and outbound call handling staffed by specialists, with quality monitoring and overflow coverage — so peak hours don't mean dropped calls.",
        Icon: ChatIcon,
        parentLabel: "Support Operations",
        parentHref: "/support-operations",
        path: "/support-operations/call-center-outsourcing-services",
        serviceDescription:
          "Inbound and outbound call center outsourcing with call quality monitoring, scripting, and peak-hours overflow coverage.",
        covers: [
          "Inbound and outbound call handling",
          "Call quality monitoring and scripting",
          "Call routing and IVR setup",
          "Overflow coverage for peak-hours volume",
        ],
        problems: [
          "Dropped or missed calls during peak hours.",
          "Inconsistent call quality across agents.",
          "No visibility into call outcomes or trends.",
          "Outbound campaigns with no dedicated capacity to run them.",
        ],
        howItWorks: [
          { title: "Map call volume", body: "We look at call types, volume patterns, and current pain points." },
          { title: "Staff & script", body: "Specialists are trained on your scripts and staffed to your actual demand." },
          { title: "Monitor & report", body: "Call quality and outcomes are tracked, not just answered and forgotten." },
        ],
        useCases: [
          "Overflow call coverage during seasonal or launch-driven spikes",
          "Outbound calling campaigns run by a dedicated, trained team",
          "Inbound call routing structured by call type and urgency",
        ],
        faq: [
          { q: "Do you handle both inbound and outbound calls?", a: "Yes — both, staffed and scripted for your specific use case." },
          { q: "Can you cover overflow only, not full-time coverage?", a: "Yes — overflow coverage for peak hours or spikes is a common setup, alongside or instead of full-time staffing." },
          { q: "How do you measure call quality?", a: "Through monitoring and reporting on outcomes, not just call volume — so you know what's actually happening on the line." },
        ],
        related: [
          { label: "Phone Answering Services", href: "/support-operations/phone-answering-services" },
          { label: "Customer Support Outsourcing", href: "/support-operations/customer-support-outsourcing" },
          { label: "Support Operations overview", href: "/support-operations" },
        ],
      }}
    />
  );
}
