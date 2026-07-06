import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import { TextLink } from "@/components/ui/button";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import { getAllInsights, getInsightBySlug } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllInsights().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getInsightBySlug(slug);
  if (!entry) return {};

  return buildMetadata({
    title: entry.title,
    description: entry.summary,
    path: `/insights/${slug}`,
    image: "/og/insights-1200x630.png",
    imageAlt: `${entry.title} social share image from Raptric Insights`,
    type: "article",
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightEntry({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getInsightBySlug(slug);
  if (!entry) notFound();

  return (
    <article>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: entry.title, path: `/insights/${entry.slug}` },
        ]}
      />
      <ArticleSchema
        title={entry.title}
        description={entry.summary}
        path={`/insights/${entry.slug}`}
        datePublished={entry.date}
      />
      <Container className="py-20 md:py-24">
        <Eyebrow className="mb-5">{formatDate(entry.date)}</Eyebrow>
        <h1 className="max-w-2xl text-h1 font-semibold text-ink-900">
          {entry.title}
        </h1>
        <p className="mt-4 max-w-2xl text-body text-ink-600">
          By Raptric. Field notes on automation, operations, and engineering systems.
        </p>

        <div className="prose-insight mt-12 max-w-2xl">
          <MDXRemote source={entry.content} />
        </div>

        <div className="mt-14 border-t border-ink-900/10 pt-8">
          <TextLink href="/insights">All field notes</TextLink>
        </div>
      </Container>
    </article>
  );
}
