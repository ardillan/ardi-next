const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    formats: ["image/webp"], 
  },
  experimental: {
    // Excluye los posts grandes del bundle de funciones serverless
    outputFileTracingExcludes: {
      "public/posts/**": true,
    },
  },
};

module.exports = withVanillaExtract(nextConfig);