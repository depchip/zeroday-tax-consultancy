import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/zeroday-tax-consultancy",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
