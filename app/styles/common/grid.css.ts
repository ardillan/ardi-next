import { style } from "@vanilla-extract/css";

export const mainContainer = style({
  maxWidth: 900,
  margin: "auto",

  "@media": {
    ["screen and (max-width: 900px)"]: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
});
