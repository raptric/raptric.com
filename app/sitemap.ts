import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { SITE_URL } from "@/lib/seo";
import { getAllInsights } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const appRoot = /* turbopackIgnore: true */ process.cwd();
  const staticRoutes = [
    { path: "", file: "app/page.tsx" },
    { path: "/ai-automation", file: "app/ai-automation/page.tsx" },
    { path: "/support-operations", file: "app/support-operations/page.tsx" },
    { path: "/ai-support-operations", file: "app/ai-support-operations/page.tsx" },
    { path: "/engineering-team", file: "app/engineering-team/page.tsx" },
    { path: "/solutions", file: "app/solutions/page.tsx" },
    { path: "/about", file: "app/about/page.tsx" },
    { path: "/contact", file: "app/contact/page.tsx" },
    { path: "/insights", file: "app/insights/page.tsx" },
  ].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: fs.statSync(path.join(appRoot, route.file)).mtime,
  }));

  const insightRoutes = getAllInsights().map((entry) => ({
    url: `${SITE_URL}/insights/${entry.slug}`,
    lastModified: fs.statSync(path.join(appRoot, "content", "insights", `${entry.slug}.mdx`)).mtime,
  }));

  return [...staticRoutes, ...insightRoutes];
}
