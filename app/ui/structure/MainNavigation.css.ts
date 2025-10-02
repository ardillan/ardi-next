import { style } from "@vanilla-extract/css";

import * as vars from "@/styles/common/variables.css";
import { breakpoints } from "@/styles/common/variables.css";

export const navigationContainer = style({
  maxWidth: vars.sizes.desktop,
  marginTop: 50,
  marginRight: "auto",
  marginLeft: "auto",
  "@media": {
    [breakpoints.desktop]: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      marginTop: "1rem",
    },
  },
});
