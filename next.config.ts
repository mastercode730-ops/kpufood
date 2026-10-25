import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Blog posts are read from disk; make sure they ship with any server-rendered blog route.
  outputFileTracingIncludes: {
    "/blog/**": ["./content/blog/**/*"],
  },
};

export default nextConfig;
