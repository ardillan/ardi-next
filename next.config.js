const path = require("path");
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract({
  output: "standalone",

  // Para monorepos: si tienes archivos compartidos fuera de tu app
  outputFileTracingRoot: path.join(__dirname, "../../"),

  // Archivos extra que sí deben incluirse en las funciones
  outputFileTracingIncludes: {
    "/api/github/ardi": ["src/lib/github/**/*"],
    "/api/notion": ["src/lib/notion/**/*"],
    "/api/strava": ["src/lib/strava/**/*"],
    "/api/weather": ["src/lib/weather/**/*"],
  },

  // Excluimos los posts grandes de public para que no exploten el bundle
  outputFileTracingExcludes: {
    "/[slug]": ["public/posts/**/*"],
    "/blog/[...id]": ["public/posts/**/*"],
    "/memorias/[...id]": ["public/posts/**/*"],
    "/api/*": ["public/posts/**/*"],
  },
});
