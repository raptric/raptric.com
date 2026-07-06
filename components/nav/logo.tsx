import Image from "next/image";
import Link from "next/link";

const markSrc = {
  ink: "/raptric-mark-red.png",
  light: "/raptric-mark-red.png",
} as const;

export default function Logo({
  variant = "ink",
  showWordmark = true,
}: {
  variant?: "ink" | "light";
  showWordmark?: boolean;
}) {
  const wordmarkColor = variant === "ink" ? "text-ink-900" : "text-mist-50";

  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0"
      aria-label="Raptric home"
    >
      <Image
        src={markSrc[variant]}
        alt="Raptric"
        width={30}
        height={30}
        className="h-7 w-7"
        priority
      />
      {showWordmark ? (
        <span
          className={`font-sans font-semibold text-lg tracking-tight ${wordmarkColor}`}
        >
          Raptric
        </span>
      ) : null}
    </Link>
  );
}
