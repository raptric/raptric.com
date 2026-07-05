import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllInsights } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/ai-automation",
    "/support-operations",
    "/engineering-team",
    "/solutions",
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
