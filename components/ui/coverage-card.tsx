import Link from "next/link";
import type { ComponentType } from "react";
import IconBadge from "@/components/ui/icon-badge";

export function CoverageCard({
  Icon,
  name,
  body,
  href,
}: {
  Icon: ComponentType<{ className?: string }>;
  name: string;
  body: string;
  href?: string;
}) {
  const className = `flex flex-col gap-3 rounded-[var(--radius-lg)] border border-ink-200 bg-mist-50 p-6 ${
    href ? "transition-all hover:border-signal-400 hover:shadow-lg" : ""
  }`;
  const content = (
    <>
      <IconBadge Icon={Icon} className="h-11 w-11" />
      <h3 className="text-h3 font-medium text-ink-900">{name}</h3>
      <p className="text-body text-ink-600">{body}</p>
      {href && (
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-signal-600">
          Learn more →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
