import type { Metadata } from "next";

export const SITE_URL = "https://raptric.com";
export const SITE_NAME = "Raptric";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`;

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
  noIndex = false,
  type = "website",
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  type?: "website" | "article";
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const cleanTitle = sanitizeTitle(title);

  return {
    title: cleanTitle,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : undefined,
    openGraph: {
      title: cleanTitle,
      description,
      url,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${cleanTitle} | ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description,
      images: [image],
    },
  };
}
