const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    formats: ["image/webp"], 
  },
  // ← Mueve outputFileTracingExcludes fuera de experimental
  outputFileTracingExcludes: {
    "public/posts/**": true,
  },
};

module.exports = withVanillaExtract(nextConfig);