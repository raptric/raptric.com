import Image from "next/image";
import Link from "next/link";

const lockupSrc = {
  ink: "/raptric-lockup-dark.png",
  light: "/raptric-logo-light.png",
} as const;

export default function Logo({
  variant = "ink",
}: {
  variant?: "ink" | "light";
  showWordmark?: boolean;
}) {
  return (
    <Link href="/" className="shrink-0" aria-label="Raptric home">
      <Image
        src={lockupSrc[variant]}
        alt="Raptric"
        width={196}
        height={42}
        className="h-9 w-auto md:h-10"
        priority
      />
    </Link>
  );
}
