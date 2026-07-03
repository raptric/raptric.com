import ChildServicePage from "@/components/service/child-service-page";
import { AppIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "SaaS Product Delivery Solution",
  description:
    "SaaS product delivery from discovery through shipped release, with a dedicated or augmented engineering team accountable end to end.",
  path: "/solutions/saas-product-delivery",
});

export default function SaasProductDeliverySolution() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Solutions",
        title: "SaaS Product Delivery",
        intro:
          "A dedicated or augmented engineering team taking a product from discovery to a shipped release — with accountability for delivery, not just code.",
        Icon: AppIcon,
        parentLabel: "Solutions",
        parentHref: "/solutions",
        path: "/solutions/saas-product-delivery",
        serviceDescription:
          "End-to-end SaaS product delivery combining discovery, architecture, development, and post-launch iteration.",
        covers: [
          "Product discovery and technical scoping",
          "Architecture decisions built for real scale, not just MVP",
          "Delivery by a dedicated or augmented team",
          "Post-launch iteration, not a one-time handoff",
        ],
        problems: [
          "Products that stall in development with no clear delivery path.",
          "No technical ownership from idea through to ship.",
          "Roadmaps with no accountability for actually shipping.",
          "Teams that need capacity but don't know whether to hire or outsource.",
        ],
        howItWorks: [
          { title: "Discovery & scoping", body: "We define what's actually being built and why, before writing code." },
          { title: "Build with the right model", body: "Dedicated team or staff augmentation, matched to what the roadmap needs." },
          { title: "Ship & iterate", body: "We stay accountable for delivery after launch, not just the first release." },
        ],
        useCases: [
          "A new product taken from discovery through a shipped first release",
          "An existing product with a stalled roadmap given dedicated delivery capacity",
          "A team unsure whether to hire or outsource, given a team that fits either need",
        ],
        faq: [
          { q: "Do we choose between a dedicated team and staff augmentation?", a: "We help you figure out which model fits — sometimes it's one, sometimes a mix, depending on the roadmap." },
          { q: "What if our product already exists?", a: "This applies to both new builds and continued development on an existing product." },
          { q: "Is there support after the initial release?", a: "Yes — delivery includes staying accountable for how the product performs and evolves after launch." },
        ],
        related: [
          { label: "SaaS Development Services", href: "/engineering-team/saas-development-services" },
          { label: "Dedicated Development Team", href: "/engineering-team/dedicated-development-team" },
          { label: "Solutions overview", href: "/solutions" },
        ],
      }}
    />
  );
}
