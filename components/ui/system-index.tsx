import Link from "next/link";
import type { ComponentType } from "react";

export type SystemIndexItem = {
  Icon: ComponentType<{ className?: string }>;
  name: string;
  body: string;
  href?: string;
};

function Row({ item, index, isLast }: { item: SystemIndexItem; index: number; isLast: boolean }) {
  const inner = (
    <>
      <span className="absolute left-[19px] top-11 z-0 h-[calc(100%-1rem)] w-px bg-ink-200 group-hover:bg-signal-300" aria-hidden={!isLast} style={isLast ? { display: "none" } : undefined} />
      <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink-200 bg-mist-50 transition-colors group-hover:border-signal-400 group-hover:bg-signal-500/5">
        <item.Icon className="h-[18px] w-[18px] text-ink-600 transition-colors group-hover:text-signal-600" />
      </span>
      <div className="min-w-0 flex-1 pb-10">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <span className="font-mono text-xs text-ink-400">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="text-h3 font-medium text-ink-900">{item.name}</h3>
        </div>
        <p className="mt-1.5 max-w-xl text-body text-ink-600">{item.body}</p>
        {item.href && (
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-signal-600">
            Learn more
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
          </span>
        )}
      </div>
    </>
  );

  const className = "group relative flex gap-5";

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
    <div className="flex flex-col">
      {items.map((item, i) => (
        <Row key={item.name} item={item} index={i} isLast={i === items.length - 1} />
      ))}
    </div>
  );
}
