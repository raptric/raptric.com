import Link from "next/link";
import type { ComponentType } from "react";

export type SystemIndexItem = {
  Icon: ComponentType<{ className?: string }>;
  name: string;
  body: string;
  href?: string;
};

function Card({ item, index }: { item: SystemIndexItem; index: number }) {
  const inner = (
    <>
      <span
        className="pointer-events-none absolute -right-3 -top-6 font-mono text-8xl font-semibold text-ink-100 transition-colors duration-300 group-hover:text-signal-100"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative">
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-signal-400 to-signal-600 shadow-md shadow-signal-500/25 transition-transform duration-300 group-hover:scale-105">
          <item.Icon className="h-7 w-7 text-white" />
        </span>
        <h3 className="mt-5 text-h3 font-medium text-ink-900">{item.name}</h3>
        <span className="mt-3 block h-px w-10 bg-ink-200 transition-all duration-300 group-hover:w-16 group-hover:bg-signal-400" aria-hidden />
        <p className="mt-3 max-w-xs text-body text-ink-600">{item.body}</p>
        {item.href && (
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-signal-600">
            Learn more
            <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </span>
        )}
      </div>
    </>
  );

  const className =
    "group relative overflow-hidden rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-signal-300 hover:shadow-xl";

  if (item.href) {
    return (
      <Link href={item.href} className={className}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}

export default function SystemIndex({ items }: { items: SystemIndexItem[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Card key={item.name} item={item} index={i} />
      ))}
    </div>
  );
}
