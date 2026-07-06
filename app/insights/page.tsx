import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import { BreadcrumbSchema, CollectionPageSchema, ItemListSchema } from "@/components/seo/json-ld";
import { getAllInsights } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights | AI Automation, Support Operations & Engineering Systems",
  description:
    "Insights on AI automation, support operations, engineering systems, human judgment, and real business workflows from the Raptric team.",
  path: "/insights",
  image: "/og/insights-1200x630.png",
  imageAlt: "Raptric insights social share image for AI automation, support operations, and engineering systems articles",
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Insights() {
  const insights = getAllInsights();

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }]} />
      <CollectionPageSchema
        name="Raptric Insights"
        path="/insights"
        description="Field notes on AI automation, support operations, engineering systems, and human judgment."
      />
      <ItemListSchema
        name="Raptric Insights"
        path="/insights"
        items={insights.map((entry) => ({
          name: entry.title,
          path: `/insights/${entry.slug}`,
        }))}
      />
      <section>
        <Container className="py-20 md:py-24">
          <Eyebrow className="mb-5">Field notes</Eyebrow>
          <h1 className="max-w-2xl text-h1 font-semibold text-ink-900">
            Insights on AI automation, support operations, and engineering systems.
          </h1>
          <p className="mt-5 max-w-2xl text-body-lg text-ink-600">
            Answer-first notes on workflow automation, technical support systems, AI plus human operations, and product delivery patterns that hold up in real businesses.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "AI automation vs manual workflows",
                body: "Where automation helps, where redesign matters, and where human review still protects the outcome.",
              },
              {
                title: "HITL vs fully automated support",
                body: "The practical difference between fast bot coverage and support systems that keep trust intact.",
              },
              {
                title: "Software development partner vs staff augmentation",
                body: "Why delivery visibility, QA discipline, and ownership change the buying decision.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-5 shadow-sm"
              >
                <p className="text-base font-medium text-ink-900">{item.title}</p>
                <p className="mt-3 text-body text-ink-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 divide-y divide-ink-900/10 border-t border-ink-900/10">
            {insights.map((entry) => (
              <Link
                key={entry.slug}
                href={`/insights/${entry.slug}`}
                className="group flex flex-col gap-2 py-8"
              >
                <p className="label text-slate-500">{formatDate(entry.date)}</p>
                <h2 className="text-h3 font-medium text-ink-900 transition-colors group-hover:text-signal-600 max-w-xl">
                  {entry.title}
                </h2>
                <p className="text-sm text-ink-500">By {entry.author}</p>
                <p className="text-body text-ink-600 max-w-xl">
                  {entry.summary}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
