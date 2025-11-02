import { style } from "@vanilla-extract/css";

import { fontDinish } from "@/styles/common/fonts.css";
import { theme } from "@/styles/common/theme.css";

export const menuContainer = style({
  display: "grid",
  gridTemplateColumns: "300px 1fr",
  alignItems: "center",
  justifyContent: "left",
});

export const hamburguer = style({
  display: "none",
});

export const items = style({
  display: "flex",
  flexDirection: "row",
  listStyleType: "none",
  justifyContent: "flex-end",
  gap: "1rem",
  fontFamily: fontDinish,
});

export const itemsLink = style({
  textDecoration: "none",
  cursor: "pointer",
  color: theme.color.text,
  display: "block",
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
