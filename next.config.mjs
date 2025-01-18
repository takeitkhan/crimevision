/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  },
  images: {
    domains: ["mathmozocms.test"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // destination: "https://admin.crimevision.news/api/v1/:path*",
        destination: "http://mathmozocms.test/api/v1/:path*", // Proxy to Backend
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
