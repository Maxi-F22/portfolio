import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  output: "export",  // <=== enables static exports
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
