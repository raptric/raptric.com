import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllInsights } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/ai-automation",
    "/ai-automation/ai-automation-services",
    "/ai-automation/n8n-automation-agency",
    "/ai-automation/ai-customer-support-services",
    "/support-operations",
    "/support-operations/customer-support-outsourcing",
    "/support-operations/technical-support-outsourcing",
    "/support-operations/call-center-outsourcing-services",
    "/support-operations/phone-answering-services",
    "/support-operations/chat-support-outsourcing",
    "/support-operations/virtual-assistant-services",
    "/support-operations/human-in-the-loop-support",
    "/engineering-team",
    "/engineering-team/software-development-partner",
    "/engineering-team/staff-augmentation-services",
    "/engineering-team/saas-development-services",
    "/engineering-team/dedicated-development-team",
    "/engineering-team/support-engineering-team",
    "/engineering-team/custom-internal-tools-development",
    "/solutions",
    "/solutions/linkos",
    "/solutions/eos",
    "/solutions/voice-ai",
    "/solutions/healthcare-rcm-operations",
    "/about",
    "/contact",
    "/insights",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const insightRoutes = getAllInsights().map((entry) => ({
    url: `${SITE_URL}/insights/${entry.slug}`,
    lastModified: new Date(entry.date),
  }));

  return [...staticRoutes, ...insightRoutes];
}
