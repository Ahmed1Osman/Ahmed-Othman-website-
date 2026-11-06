import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [{ source: '/ahmed-othman-ai-engineer.jpg', destination: '/profile.jpeg' }];
  },
};

export default nextConfig;
