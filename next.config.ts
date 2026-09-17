import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/globeway-ventures',
  assetPrefix: '/globeway-ventures/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;