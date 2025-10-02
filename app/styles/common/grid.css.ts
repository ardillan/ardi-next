import { style } from "@vanilla-extract/css";

import * as vars from "@/styles/common/variables.css";
import { breakpoints } from "@/styles/common/variables.css";

export const mainContainer = style({
  maxWidth: vars.sizes.desktop,
  margin: "auto",

  "@media": {
    [breakpoints.desktop]: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
});
