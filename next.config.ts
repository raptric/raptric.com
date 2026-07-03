import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/saas-development",
        destination: "/engineering-team",
        permanent: true,
      },
      {
        source: "/customer-operations",
        destination: "/support-operations",
        permanent: true,
      },
      {
        source: "/business-operations",
        destination: "/engineering-team",
        permanent: true,
      },
      {
        source: "/technology-advisory",
        destination: "/engineering-team",
        permanent: true,
      },
      {
        source: "/solutions/ai-customer-support",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/solutions/technical-support-systems",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/solutions/back-office-operations",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/solutions/saas-product-delivery",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/solutions/lead-management-automation",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/solutions/ai-human-operations",
        destination: "/solutions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
