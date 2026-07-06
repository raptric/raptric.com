import fs from "fs";
import path from "path";
import matter from "gray-matter";

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

export type InsightMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  author: string;
};

export function getAllInsights(): InsightMeta[] {
  const files = fs.readdirSync(INSIGHTS_DIR).filter((f) => f.endsWith(".mdx"));

  const insights = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(INSIGHTS_DIR, file), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string,
      author: (data.author as string) || "Raptric Editorial Team",
    };
  });

  return insights.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getInsightBySlug(slug: string) {
  const filePath = path.join(INSIGHTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    summary: data.summary as string,
    author: (data.author as string) || "Raptric Editorial Team",
    content,
  };
}
