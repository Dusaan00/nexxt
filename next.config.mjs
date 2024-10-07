/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://www.ploty-grygov.cz" : "",
  basePath: process.env.NODE_ENV === "production" ? "t" : "",
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
