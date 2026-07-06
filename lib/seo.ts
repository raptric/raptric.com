import type { Metadata } from "next";

export const SITE_URL = "https://raptric.com";
export const SITE_NAME = "Raptric";
export const LEGAL_NAME = "Raptric LLC";
export const CONTACT_EMAIL = "info@raptric.com";
export const CALENDLY_URL = "https://calendly.com/usman-raptric/30min";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/raptric-og-share.png`;

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

function sanitizeTitle(title: string) {
  return title
    .replace(/\s+\|\s+Raptric$/i, "")
    .replace(/\s+[—-]\s+Raptric$/i, "")
    .trim();
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const cleanTitle = sanitizeTitle(title);
  const canonical = `${SITE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title: cleanTitle,
    description,
    alternates: {
      canonical,
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: cleanTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: cleanTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description,
      images: [ogImage],
    },
  };
}
