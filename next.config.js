const { withPlaiceholder } = require("@plaiceholder/next");

/** @type {import('next').NextConfig} */
const nextConfig = withPlaiceholder({
  images: {
    dangerouslyAllowSVG: true,
    domains: ["media.graphassets.com"],
  },
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: "/favicons/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.matheuspires.dev",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS, PUT, DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Origin, X-Requested-With, Content-Type, Accept",
          },
        ],
      },
    ];
  },
});

module.exports = nextConfig;
