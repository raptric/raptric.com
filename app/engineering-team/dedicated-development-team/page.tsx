import ChildServicePage from "@/components/service/child-service-page";
import { DevIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dedicated Development Team",
  description:
    "A consistent dedicated development team assigned to your product — not rotating contractors — with direct communication and long-term roadmap ownership.",
  path: "/engineering-team/dedicated-development-team",
});

export default function DedicatedDevelopmentTeam() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Engineering Team",
        title: "Dedicated Development Team",
        intro:
          "A consistent team assigned to your product — not rotating contractors — with direct communication and long-term ownership of the roadmap.",
        Icon: DevIcon,
        parentLabel: "Engineering Team",
        parentHref: "/engineering-team",
        path: "/engineering-team/dedicated-development-team",
        serviceDescription:
          "A dedicated development team assigned long-term to a single product, covering development, QA, and delivery.",
        covers: [
          "A consistent team assigned to your product, not rotating staff",
          "Full-stack coverage — development, QA, and delivery",
          "Long-term embedding in your roadmap, not a fixed-scope project",
          "Direct communication with the team, not through account layers",
        ],
        problems: [
          "Rotating contractors with no continuity between engagements.",
          "Losing context every time someone new joins the project.",
          "Agencies that reassign staff mid-project without warning.",
          "No long-term technical ownership of the product.",
        ],
        howItWorks: [
          { title: "Assemble the team", body: "We build a consistent team matched to your product's actual needs." },
          { title: "Embed in the roadmap", body: "The team works inside your planning process, not as an external vendor." },
          { title: "Stay consistent", body: "The same team continues long-term, retaining context and momentum." },
        ],
        useCases: [
          "A product built and maintained by the same team over multiple release cycles",
          "A team that owns a specific product area long-term, not project by project",
          "Direct collaboration between your product owner and the dedicated team",
        ],
        faq: [
          { q: "How is this different from staff augmentation?", a: "Staff augmentation embeds individuals into your existing team. A dedicated team is a consistent, self-contained unit assigned to your product." },
          { q: "Will the same people stay on the project long-term?", a: "Yes — continuity is the point. The team doesn't rotate between engagements." },
          { q: "Can the team size flex over time?", a: "Yes, based on the roadmap — but the core team stays consistent rather than churning." },
        ],
        related: [
          { label: "Staff Augmentation Services", href: "/engineering-team/staff-augmentation-services" },
          { label: "Software Development Partner", href: "/engineering-team/software-development-partner" },
          { label: "Engineering Team overview", href: "/engineering-team" },
        ],
      }}
    />
  );
}
