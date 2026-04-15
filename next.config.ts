import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/",
  assetPrefix: "/",
  output: "export",  // <=== enables static exports
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
