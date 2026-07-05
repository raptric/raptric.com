import PackagedSolutionPage from "@/components/service/packaged-solution-page";
import EmailFlow from "@/components/illustrations/email-flow";
import { MailIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "eOS — Packaged Email Marketing Operating System",
  description:
    "eOS is a hyper-personalized email marketing operating system — sequencing outreach based on a contact's profile, designation, and role to get the meeting.",
  path: "/solutions/eos",
  noIndex: true,
});

export default function EosSolution() {
  return (
    <PackagedSolutionPage
      data={{
        name: "eOS",
        status: "In Development",
        category: "Packaged Email Marketing OS",
        title: "Hyper-personalized outreach, packaged.",
        intro:
          "An email marketing operating system that sequences outreach based on who a contact actually is — their profile, designation, and role — built to get the meeting, not just a reply. Currently in development and being refined.",
        Icon: MailIcon,
        diagram: <EmailFlow className="h-auto w-full" />,
        whatItIs:
          "eOS treats a contact's profile as the starting point, not an afterthought — designation, role, and company context shape the sequence, instead of one template sent to everyone on a list.",
        steps: [
          { title: "Profile ingestion", body: "Contact data — role, designation, company context — feeds the system." },
          { title: "Personalized sequencing", body: "Outreach is shaped around who the contact actually is, not a generic template." },
          { title: "Meeting booked", body: "The sequence is built around one outcome — getting the conversation started." },
        ],
        whoItsFor: [
          "Sales and go-to-market teams running outbound at scale",
          "Teams frustrated with templated batch email that reads like templated batch email",
          "Operations that want personalization without a person manually customizing every send",
        ],
        path: "/solutions/eos",
        serviceDescription:
          "eOS, a hyper-personalized email marketing operating system sequencing outreach by contact profile and role.",
        related: [
          { label: "AI Automation", href: "/ai-automation" },
          { label: "AI Automation Services", href: "/ai-automation/ai-automation-services" },
          { label: "Solutions overview", href: "/solutions" },
        ],
      }}
    />
  );
}
