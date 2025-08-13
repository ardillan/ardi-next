import { style } from "@vanilla-extract/css";

import { fontDinish } from "@/styles/fonts.css";
import { theme } from "@/styles/theme.css.ts";

export const rootStyles = style({
  fontFamily: fontDinish,
  background: theme.color.background,
});
