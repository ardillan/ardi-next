import "@/styles/common/reset.css";

import { style } from "@vanilla-extract/css";

import { fontDinish } from "@/styles/common/fonts.css";
import { theme } from "@/styles/common/theme.css";

export const rootStyles = style({
  fontFamily: fontDinish,
  color: theme.color.text,
  background: theme.color.background,
});
