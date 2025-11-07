import { globalStyle } from "@vanilla-extract/css";

// Reset and Normalize Styles - inspired by modern-normalize

// Box sizing and margin/padding reset
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

// Base html and body styles
globalStyle("html", {
  lineHeight: 1.15,
  WebkitTextSizeAdjust: "100%",
  fontSize: "calc(1rem * 1.1)",
  height: "100%",
});

globalStyle("body", {
  height: "100%",
  fontFamily: "inherit",
  lineHeight: "inherit",
  backgroundColor: "white",
  color: "black",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
});

// Reset links
globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

// Reset images and media elements
globalStyle("img, picture, video, canvas, svg", {
  // display: "block",
  // maxWidth: "100%",
  // height: "auto",
});

// Reset buttons and inputs to inherit font and color
globalStyle("button, input, select, textarea", {
  fontFamily: "inherit",
  fontSize: "100%",
  lineHeight: "inherit",
  color: "inherit",
  background: "none",
  border: "none",
  padding: 0,
  margin: 0,
  overflow: "visible",
  cursor: "pointer",
});

// Reset lists
globalStyle("ul, ol", {
  listStyle: "none",
});

// Reset headings margins
globalStyle("h1, h2, h3, h4, h5, h6", {
  margin: 0,
  fontWeight: "inherit",
  lineHeight: "inherit",
});

// Reset tables
globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});
