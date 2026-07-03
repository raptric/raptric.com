import type { ComponentType } from "react";

export default function IconBadge({
  Icon,
  variant = "signal",
  className = "",
}: {
  Icon: ComponentType<{ className?: string }>;
  variant?: "signal" | "muted";
  className?: string;
}) {
  const styles =
    variant === "signal"
      ? "bg-gradient-to-br from-signal-400 to-signal-600 shadow-md shadow-signal-500/25 text-white"
      : "bg-ink-100 text-ink-500";

  return (
    <div className={`inline-flex items-center justify-center rounded-xl ${styles} ${className}`}>
      <Icon className="h-1/2 w-1/2" />
    </div>
  );
}
