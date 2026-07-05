import ChildServicePage from "@/components/service/child-service-page";
import { AppIcon } from "@/components/illustrations/concept-icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "SaaS Development Services",
  description:
    "SaaS development services: custom platforms, dashboards, portals, APIs, and integrations built for how your business actually operates.",
  path: "/engineering-team/saas-development-services",
  noIndex: true,
});

export default function SaasDevelopmentServices() {
  return (
    <ChildServicePage
      data={{
        eyebrow: "Engineering Team",
        title: "SaaS Development Services",
        intro:
          "Custom SaaS platforms, dashboards, portals, APIs, and integrations — built around your operation instead of forcing a workaround onto off-the-shelf software.",
        Icon: AppIcon,
        parentLabel: "Engineering Team",
        parentHref: "/engineering-team",
        path: "/engineering-team/saas-development-services",
        serviceDescription:
          "SaaS product development covering custom platforms, dashboards, portals, APIs, and third-party integrations.",
        covers: [
          "Custom SaaS platforms and internal products",
          "Dashboards and operational portals",
          "API development and third-party integrations",
          "Ongoing product development, not a one-time build",
        ],
        problems: [
          "Off-the-shelf software that almost fits, at the cost of constant workarounds.",
          "Internal tools built once and never maintained.",
          "Data scattered across systems with no single source of truth.",
          "Engineering roadmaps built with no operational context.",
        ],
        howItWorks: [
          { title: "Understand the operation", body: "We learn how the business runs before designing what the software should do." },
          { title: "Build the platform", body: "We ship the product, dashboards, or APIs against real operational needs." },
          { title: "Iterate post-launch", body: "The product keeps developing as the operation changes, not frozen at v1." },
        ],
        useCases: [
          "An internal portal replacing a dozen spreadsheets with one system of record",
          "A customer-facing dashboard built on top of existing data sources",
          "API integrations connecting a CRM, a billing system, and internal tools",
        ],
        faq: [
          { q: "Do you build from scratch or work on existing products?", a: "Both — new SaaS platforms from discovery, or continued development on a product you already have." },
          { q: "Can you integrate with our existing systems?", a: "Yes — API and third-party integration work is core to how we build, not an afterthought." },
          { q: "What happens after the initial version ships?", a: "We keep developing it. Software built once and abandoned is exactly the problem we're building against." },
        ],
        related: [
          { label: "Software Development Partner", href: "/engineering-team/software-development-partner" },
          { label: "Staff Augmentation Services", href: "/engineering-team/staff-augmentation-services" },
          { label: "Engineering Team overview", href: "/engineering-team" },
        ],
      }}
    />
  );
}
