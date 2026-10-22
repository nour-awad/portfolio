import type { NextConfig } from "next";

// GitHub Pages serves this repo from https://nour-awad.github.io/portfolio,
// so production builds live under /portfolio. Override with NEXT_PUBLIC_BASE_PATH="".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/portfolio" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
