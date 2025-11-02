import { style } from "@vanilla-extract/css";

import { theme } from "@/styles/common/theme.css";

export const welcomeContainer = style({
  maxWidth: 900,
  margin: "auto",
  height: 400,
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  "@media": {
    ["screen and (max-width: 900px)"]: {
      margin: "3rem auto 5rem auto",
      height: "auto",
    },
  },
});

export const introduction = style({
  fontFamily: theme.font.heading,
  color: theme.color.primary,
  fontSize: 80,
  lineHeight: "85px",
  margin: 0,
  "@media": {
    ["screen and (max-width: 900px)"]: {
      fontSize: 60,
      lineHeight: "auto",
    },
  },
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
