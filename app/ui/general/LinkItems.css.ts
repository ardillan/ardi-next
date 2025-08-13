import { style } from "@vanilla-extract/css";

import { fontDKParmesi } from "@/styles/fonts.css";
import { theme } from "@/styles/theme.css.ts";

export const hamburguer = style({
  background: "white",
});

export const items = style({
  display: "flex",
  flexDirection: "row",
  listStyleType: "none",
  fontFamily: fontDKParmesi,
});

export const itemsLink = style({
  textDecoration: "none",
  color: theme.color.link,
});
