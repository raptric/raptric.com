import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import { CtaLink, TextLink } from "@/components/ui/button";
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

const RELATED_CONTENT: Record<
  string,
  {
    pillar: { label: string; href: string };
    reads: { title: string; href: string }[];
  }
> = {
  "ai-automation-vs-manual-workflows": {
    pillar: { label: "AI automation services", href: "/ai-automation" },
    reads: [
      {
        title: "CRM automation examples for growing teams",
        href: "/insights/crm-automation-examples",
      },
      {
        title: "What \"human-in-the-loop\" actually requires operationally",
        href: "/insights/human-in-the-loop-operationally",
      },
    ],
  },
  "hitl-vs-fully-automated-support": {
    pillar: { label: "technical support systems", href: "/support-operations" },
    reads: [
      {
        title: "Technical support outsourcing vs in-house",
        href: "/insights/technical-support-outsourcing-vs-in-house",
      },
      {
        title: "What \"human-in-the-loop\" actually requires operationally",
        href: "/insights/human-in-the-loop-operationally",
      },
    ],
  },
  "software-development-partner-vs-staff-augmentation": {
    pillar: { label: "software development partner services", href: "/engineering-team" },
    reads: [
      {
        title: "Technical support outsourcing vs in-house",
        href: "/insights/technical-support-outsourcing-vs-in-house",
      },
      {
        title: "Why point automation plateaus and operation-level systems compound",
        href: "/insights/point-automation-plateaus",
      },
    ],
  },
  "human-in-the-loop-operationally": {
    pillar: { label: "technical support systems", href: "/support-operations" },
    reads: [
      {
        title: "HITL vs fully automated support",
        href: "/insights/hitl-vs-fully-automated-support",
      },
      {
        title: "AI automation vs manual workflows",
        href: "/insights/ai-automation-vs-manual-workflows",
      },
    ],
  },
  "legacy-managed-services-lessons": {
    pillar: { label: "support operations", href: "/support-operations" },
    reads: [
      {
        title: "Technical support outsourcing vs in-house",
        href: "/insights/technical-support-outsourcing-vs-in-house",
      },
      {
        title: "Software development partner vs staff augmentation",
        href: "/insights/software-development-partner-vs-staff-augmentation",
      },
    ],
  },
  "point-automation-plateaus": {
    pillar: { label: "AI automation services", href: "/ai-automation" },
    reads: [
      {
        title: "AI automation vs manual workflows",
        href: "/insights/ai-automation-vs-manual-workflows",
      },
      {
        title: "CRM automation examples for growing teams",
        href: "/insights/crm-automation-examples",
      },
    ],
  },
  "technical-support-outsourcing-vs-in-house": {
    pillar: { label: "technical support systems", href: "/support-operations" },
    reads: [
      {
        title: "HITL vs fully automated support",
        href: "/insights/hitl-vs-fully-automated-support",
      },
      {
        title: "Lessons from legacy managed-services operations that still matter in AI rebuilds",
        href: "/insights/legacy-managed-services-lessons",
      },
    ],
  },
  "crm-automation-examples": {
    pillar: { label: "AI automation services", href: "/ai-automation" },
    reads: [
      {
        title: "AI automation vs manual workflows",
        href: "/insights/ai-automation-vs-manual-workflows",
      },
      {
        title: "Voice AI for operations",
        href: "/insights/voice-ai-for-operations",
      },
    ],
  },
  "voice-ai-for-operations": {
    pillar: { label: "support operations", href: "/support-operations" },
    reads: [
      {
        title: "CRM automation examples for growing teams",
        href: "/insights/crm-automation-examples",
      },
      {
        title: "HITL vs fully automated support",
        href: "/insights/hitl-vs-fully-automated-support",
      },
    ],
  },
};

export default async function InsightEntry({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getInsightBySlug(slug);
  if (!entry) notFound();
  const related = RELATED_CONTENT[slug];

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
        dateModified={entry.dateModified}
        author={entry.author}
      />
      <Container className="py-20 md:py-24">
        <Eyebrow className="mb-5">{formatDate(entry.date)}</Eyebrow>
        <h1 className="max-w-2xl text-h1 font-semibold text-ink-900">
          {entry.title}
        </h1>
        <p className="mt-4 max-w-2xl text-body text-ink-600">
          By {entry.author}. Field notes on automation, operations, and engineering systems.
        </p>

        <div className="prose-insight mt-12 max-w-2xl">
          <MDXRemote source={entry.content} />
        </div>

        {related ? (
          <div className="mt-14 grid gap-8 rounded-[var(--radius-lg)] border border-ink-900/10 bg-mist-100 p-6 md:grid-cols-[0.58fr_0.42fr]">
            <div>
              <Eyebrow className="mb-4">Where This Applies</Eyebrow>
              <h2 className="text-h3 font-medium text-ink-900">
                This article is most useful if you are evaluating {related.pillar.label}.
              </h2>
              <p className="mt-3 text-body text-ink-600">
                If the article matches the workflow or delivery problem you are working through, the most relevant next page is the one below.
              </p>
              <div className="mt-5">
                <CtaLink href={related.pillar.href}>
                  Explore {related.pillar.label}
                </CtaLink>
              </div>
            </div>
            <div>
              <Eyebrow className="mb-4">Related Reads</Eyebrow>
              <div className="grid gap-3">
                {related.reads.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-[var(--radius-md)] border border-ink-900/10 bg-white px-4 py-4 text-sm font-medium text-ink-800 transition-colors hover:border-signal-300 hover:text-signal-700"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-14 border-t border-ink-900/10 pt-8">
          <TextLink href="/insights">All field notes</TextLink>
        </div>
      </Container>
    </article>
  );
}
