import { style } from "@vanilla-extract/css";

import { theme } from "@/styles/common/theme.css";
import * as vars from "@/styles/common/variables.css";

export const header = style({
  maxWidth: vars.sizes.desktop,
  display: "grid",
  gridTemplateColumns: "1fr 400px",
  alignItems: "center",
  marginTop: "2rem",
  marginBottom: "4rem",
});

export const title = style({
  fontFamily: theme.font.heading,
  fontSize: "3rem",
  color: theme.color.primary,
  lineHeight: "2.5rem",
});

export const subtitle = style({
  fontSize: "1rem",
  fontWeight: 600,
  marginTop: "0.75rem",
});

export const date = style({
  fontSize: "0.75rem",
  color: theme.color.text,
  opacity: 0.4,
  margin: ".5rem 0",
  display: "block",
});

export const image = style({
  maxWidth: vars.sizes.desktop,
  borderRadius: ".85rem",
});
