/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://ploty-grygov.cz" : "",
  images: {
    unoptimized: true,
  },
  headers: () => [
    {
      source: "/_next/static/media/:path*",
      headers: [
        {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      ],
    },
  ],
};

export default nextConfig;
