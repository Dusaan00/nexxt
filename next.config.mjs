/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://www.ploty-grygov.cz" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
