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
    ];
  },
};

export default nextConfig;
