import type { Metadata } from "next";
import ServicePage from "@/components/service/service-page";
import { SaasDevelopmentIcon } from "@/components/illustrations/service-icons";

export const metadata: Metadata = {
  title: "SaaS Development — Raptric",
  description:
    "Custom SaaS platforms, internal products, dashboards, portals, APIs, and integrations, built for how the business actually operates.",
};

export default function SaasDevelopment() {
  return (
    <ServicePage
      data={{
        eyebrow: "SaaS Development",
        title: "Software built for how the business actually runs.",
        intro:
          "Custom SaaS platforms, internal products, dashboards, portals, APIs, and integrations — built around the operation, not a generic template.",
        Icon: SaasDevelopmentIcon,
        covers: [
          "Custom SaaS platforms and internal products",
          "Dashboards and operational portals",
          "APIs and third-party integrations",
          "Ongoing product development, not just a one-time build",
        ],
        problems: [
          "Off-the-shelf software that almost fits, at the cost of constant workarounds",
          "Internal tools built once and never maintained",
          "Data scattered across systems with no single source of truth",
          "Engineering roadmaps with no operational context",
        ],
        useCases: [
          "An internal portal that replaces a dozen spreadsheets with one system of record",
          "A customer-facing dashboard built on top of existing data sources",
          "API integrations connecting a CRM, a billing system, and internal tools",
        ],
        credibility:
          "We build software with the same operational lens we bring to automation — so the system gets used, not just shipped.",
      }}
    />
  );
}
