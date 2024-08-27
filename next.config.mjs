/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[t]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  trailingSlash: true,
};

export default nextConfig;
