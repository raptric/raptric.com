import ChildServicePage from "@/components/service/child-service-page";
import { SystemsIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Software Development Partner",
  description:
    "A software development partner that stays accountable after launch — discovery, architecture, delivery, and ongoing support, not a scoped-out proposal handed off.",
  path: "/engineering-team/software-development-partner",
  noIndex: true,
});

export default function SoftwareDevelopmentPartner() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Engineering Team",
        title: "Software Development Partner",
        intro:
          "A technical partner for the build — discovery, architecture, delivery, and support after launch — not a proposal scoped out and handed to whoever's cheapest.",
        Icon: SystemsIcon,
        parentLabel: "Engineering Team",
        parentHref: "/engineering-team",
        path: "/engineering-team/software-development-partner",
        serviceDescription:
          "Software development partnership covering discovery, architecture, delivery, and post-launch support.",
        covers: [
          "Product discovery and technical scoping",
          "Architecture decisions made with your constraints in mind",
          "Delivery by a consistent team, not rotating contractors",
          "Support and iteration after launch, not a handoff and disappearance",
        ],
        problems: [
          "Agencies that disappear after launch, leaving no technical ownership.",
          "Proposals scoped without understanding the actual operation.",
          "Misaligned incentives — paid to ship, not to make it work.",
          "No accountability once the invoice is paid.",
        ],
        howItWorks: [
          { title: "Discovery", body: "We understand the operation the software needs to fit into, not just the feature list." },
          { title: "Architecture & build", body: "We make technical decisions for what you'll actually need to maintain and scale." },
          { title: "Deliver & stay attached", body: "We ship, then stay accountable for how it performs — not a one-time handoff." },
        ],
        useCases: [
          "A product built from discovery through launch by one consistent team",
          "An architecture decision made for a system that needs to scale past MVP",
          "Ongoing support and iteration on a platform after the initial build",
        ],
        faq: [
          { q: "Do you only handle new builds, or also existing products?", a: "Both — we take on greenfield builds and embed into existing codebases that need continued development." },
          { q: "What happens after launch?", a: "We stay attached — support, iteration, and accountability for how it performs, not a handoff into silence." },
          { q: "How is this different from staff augmentation?", a: "This is a full partnership with technical ownership of the build. Staff augmentation embeds individuals into your existing team and process instead." },
        ],
        related: [
          { label: "SaaS Development Services", href: "/engineering-team/saas-development-services" },
          { label: "Staff Augmentation Services", href: "/engineering-team/staff-augmentation-services" },
          { label: "Engineering Team overview", href: "/engineering-team" },
        ],
      }}
    />
  );
}
