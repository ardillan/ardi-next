import { style } from "@vanilla-extract/css";

import { theme } from "@/styles/common/theme.css";

export const header = style({
  textAlign: "center",
  margin: "5rem auto",
});

export const headerTitle = style({
  textAlign: "center",
  margin: "1rem auto",
  fontFamily: theme.font.heading,
  color: theme.color.primary,
  fontSize: 80,
});

export const headerSubtitle = style({
  maxWidth: 700,
  lineHeight: "1.5rem",
  fontWeight: 600,
  marginTop: 15,
  fontSize: "1rem",
  margin: "auto",
});
