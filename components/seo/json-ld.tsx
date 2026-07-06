import { CONTACT_EMAIL, LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/seo";

function Schema({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: LEGAL_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/raptric-mark.png`,
        email: CONTACT_EMAIL,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: CONTACT_EMAIL,
            url: `${SITE_URL}/contact`,
          },
        ],
      }}
    />
  );
}

export function WebSiteSchema() {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${SITE_URL}${item.path}`,
        })),
      }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: `${SITE_URL}${path}`,
        provider: {
          "@type": "Organization",
          name: LEGAL_NAME,
          url: SITE_URL,
        },
      }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url: `${SITE_URL}${path}`,
        datePublished,
        dateModified: dateModified ?? datePublished,
        author: {
          "@type": "Organization",
          name: LEGAL_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: LEGAL_NAME,
          url: SITE_URL,
        },
      }}
    />
  );
}

export function FAQSchema({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }}
    />
  );
}

export function ContactPageSchema() {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Raptric",
        url: `${SITE_URL}/contact`,
        mainEntity: {
          "@type": "Organization",
          name: LEGAL_NAME,
          url: SITE_URL,
          email: CONTACT_EMAIL,
        },
      }}
    />
  );
}

export function AboutPageSchema() {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Raptric",
        url: `${SITE_URL}/about`,
        about: {
          "@type": "Organization",
          name: LEGAL_NAME,
          url: SITE_URL,
        },
      }}
    />
  );
}

export function CollectionPageSchema({
  name,
  path,
  description,
}: {
  name: string;
  path: string;
  description: string;
}) {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name,
        description,
        url: `${SITE_URL}${path}`,
      }}
    />
  );
}

export function ItemListSchema({
  name,
  path,
  items,
}: {
  name: string;
  path: string;
  items: { name: string; path: string }[];
}) {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name,
        url: `${SITE_URL}${path}`,
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: `${SITE_URL}${item.path}`,
        })),
      }}
    />
  );
}
