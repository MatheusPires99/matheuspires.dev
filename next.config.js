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
});

module.exports = nextConfig;
