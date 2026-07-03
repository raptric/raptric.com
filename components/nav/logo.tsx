import Image from "next/image";
import Link from "next/link";

const markSrc = {
  ink: "/raptric-mark.png",
  light: "/raptric-mark-signal.png",
} as const;

export default function Logo({ variant = "ink" }: { variant?: "ink" | "light" }) {
  const wordmarkColor = variant === "ink" ? "text-ink-900" : "text-mist-50";

  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0"
      aria-label="Raptric — home"
    >
      <Image
        src={markSrc[variant]}
        alt=""
        width={28}
        height={28}
        className="h-7 w-7"
        priority
      />
      <span
        className={`font-sans font-semibold text-lg tracking-tight ${wordmarkColor}`}
      >
        Raptric
      </span>
    </Link>
  );
}
