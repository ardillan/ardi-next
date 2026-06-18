/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");

const nextConfig = {
  turbopack: {
    root: path.join(__dirname, ".."),
    images: {
      remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
    },
  },
};

module.exports = nextConfig;
