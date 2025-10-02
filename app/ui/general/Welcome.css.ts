import { style } from "@vanilla-extract/css";

import { theme } from "@/styles/common/theme.css";
import { sizes } from "@/styles/common/variables.css";

export const welcomeContainer = style({
  maxWidth: sizes.desktop,
  margin: "auto",
  height: 400,
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

export const introduction = style({
  fontFamily: theme.font.heading,
  color: theme.color.primary,
  fontSize: 80,
  lineHeight: "85px",
  margin: 0,
});

export const description = style({
  maxWidth: 500,
  lineHeight: "1.5rem",
  fontWeight: 600,
  marginTop: 15,
});

export const itemsLink = style({
  textDecoration: "none",
  color: theme.color.text,
});
