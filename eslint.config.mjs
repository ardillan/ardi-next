import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "**/node_modules/",
      "**/.next/",
      "**/.vercel/",
      "src/fonts/",
      "**/*.css",
      "**/app/styles/**",
    ],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: [
      "app/**/*.{js,jsx,ts,tsx}",
      "src/interfaces/**/*.{js,ts}",
      "src/lib/**/*.{js,ts}",
    ],
    plugins: {
      "@typescript-eslint": typescriptEslint,
      react,
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      globals: { ...globals.browser },
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "simple-import-sort/imports": "error",
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "react/no-unescaped-entities": 0,
    },
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ),
];
