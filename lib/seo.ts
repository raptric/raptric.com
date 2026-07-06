import type { Metadata } from "next";

export const SITE_URL = "https://raptric.com";
export const SITE_NAME = "Raptric";
export const LEGAL_NAME = "Raptric LLC";
export const CONTACT_EMAIL = "info@raptric.com";
export const CONTACT_PHONE = "+15095887311";
export const CONTACT_PHONE_DISPLAY = "+1 509 588 7311";
export const STREET_ADDRESS = "40 Corbin Ave";
export const CITY_STATE_POSTAL = "Bay Shore, NY 11706";
export const FULL_ADDRESS = `${STREET_ADDRESS}, ${CITY_STATE_POSTAL}`;
export const CALENDLY_URL = "https://calendly.com/usman-raptric/30min";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/raptric-og-share-1200x630.png`;
export const COMPANY_LINKEDIN = "https://www.linkedin.com/company/raptric/";
export const OPERATING_FOOTPRINT = "Remote-first delivery for US and international teams";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
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
  imageAlt,
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
          alt: imageAlt ?? cleanTitle,
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
