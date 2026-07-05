import Link from "next/link";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import { BreadcrumbSchema, CollectionPageSchema } from "@/components/seo/json-ld";
import { getAllInsights } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Field notes on AI automation, support operations, engineering systems, and human judgment in real business workflows.",
  path: "/insights",
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
      <section>
        <Container className="py-20 md:py-24">
          <Eyebrow className="mb-5">Field notes</Eyebrow>
          <h1 className="max-w-2xl text-h1 font-semibold text-ink-900">
            Notes from building and operating, written as they happen.
          </h1>

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
