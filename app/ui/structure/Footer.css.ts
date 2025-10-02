import { style } from "@vanilla-extract/css";

import { theme } from "@/styles/common/theme.css";
import * as vars from "@/styles/common/variables.css";
import { breakpoints } from "@/styles/common/variables.css";

export const footerContainer = style({
  paddingTop: "5rem",
  "@media": {
    [breakpoints.desktop]: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
});

export const footerData = style({
  alignItems: "center",
  display: "grid",
  gridTemplateColumns: "60px 1fr 1fr",
  gap: "1rem",
  "@media": {
    [breakpoints.desktop]: {},
  },
});

export const footerLinks = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "flex-end",
  "@media": {
    [breakpoints.desktop]: {},
  },
});

export const copyright = style({
  textAlign: "center",
  width: "100%",
  display: "block",
  margin: "5rem 0",
});

export const footerLink = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "flex-end",
  cursor: "pointer",
  "@media": {
    [breakpoints.desktop]: {},
  },
  textDecoration: "none",
  color: theme.color.text,
  fontWeight: 600,
  selectors: {
    "&:hover": {
      textDecoration: "underline wavy",
      textDecorationColor: "#f42264",
      textDecorationSkipInk: "none",
      textDecorationThickness: "1.4px",
      textUnderlineOffset: "5px",
    },
  },
});

export const factory = style({
  padding: 0,
  border: `2px solid ${theme.color.primary}`,
  width: 60,
  height: 60,
  borderRadius: 10,
  fontSize: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
