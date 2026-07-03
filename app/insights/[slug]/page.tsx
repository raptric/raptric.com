import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import { TextLink } from "@/components/ui/button";
import { getAllInsights, getInsightBySlug } from "@/lib/mdx";

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
  return {
    title: `${entry.title} — Raptric`,
    description: entry.summary,
  };
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
      <Container className="py-20 md:py-24">
        <Eyebrow className="mb-5">{formatDate(entry.date)}</Eyebrow>
        <h1 className="max-w-2xl text-h1 font-semibold text-ink-900">
          {entry.title}
        </h1>

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
