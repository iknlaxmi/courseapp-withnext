/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    domains: ["source.unsplash.com"],
  },
};

module.exports = nextConfig;
