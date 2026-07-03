import ChildServicePage from "@/components/service/child-service-page";
import { DevIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Staff Augmentation Services",
  description:
    "Software staff augmentation: developers and QA embedded inside your existing team and roadmap, scaling up or down without a full-time hiring cycle.",
  path: "/engineering-team/staff-augmentation-services",
});

export default function StaffAugmentationServices() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Engineering Team",
        title: "Staff Augmentation Services",
        intro:
          "Developers and QA specialists embedded inside your existing team and roadmap — not a separate outsourced project, and not a full-time hiring cycle.",
        Icon: DevIcon,
        parentLabel: "Engineering Team",
        parentHref: "/engineering-team",
        path: "/engineering-team/staff-augmentation-services",
        serviceDescription:
          "Software staff augmentation embedding developers and QA specialists inside an existing engineering team and process.",
        covers: [
          "Embedded developers working in your existing sprint cycle",
          "Embedded QA specialists for release testing",
          "Flexible scaling up or down as the roadmap changes",
          "Fit with your existing tools and process, not a separate workflow",
        ],
        problems: [
          "Hiring timelines too slow for the roadmap in front of you.",
          "Cost of a full-time hire for what's actually a temporary spike.",
          "Contractor quality that's inconsistent project to project.",
          "Augmented staff who don't actually fit the team's process.",
        ],
        howItWorks: [
          { title: "Scope the gap", body: "We identify exactly what capacity you need and for how long." },
          { title: "Embed the specialist", body: "They join your existing standups, tooling, and workflow — not a separate silo." },
          { title: "Scale as needed", body: "Capacity flexes up or down with the roadmap, without a rehiring cycle." },
        ],
        useCases: [
          "An embedded developer joining an existing sprint cycle for a fixed engagement",
          "QA capacity added ahead of a major release, then scaled back down",
          "A specialist filling a skills gap the current team doesn't have in-house",
        ],
        faq: [
          { q: "How is this different from hiring a contractor directly?", a: "You get someone who fits your process from day one, with the accountability and continuity of a partner, not a one-off freelancer." },
          { q: "Can we scale the engagement up or down?", a: "Yes — that flexibility is the point. Capacity adjusts as your roadmap changes." },
          { q: "Do augmented staff use our tools or yours?", a: "Yours. They join your existing standups, ticketing, and workflow rather than working in a separate silo." },
        ],
        related: [
          { label: "Software Development Partner", href: "/engineering-team/software-development-partner" },
          { label: "SaaS Development Services", href: "/engineering-team/saas-development-services" },
          { label: "Engineering Team overview", href: "/engineering-team" },
        ],
      }}
    />
  );
}
