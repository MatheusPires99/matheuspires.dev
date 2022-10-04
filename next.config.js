/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["media.graphassets.com"],
  },
  experimental: {
    newNextLinkBehavior: true,
  },
};

module.exports = nextConfig;
