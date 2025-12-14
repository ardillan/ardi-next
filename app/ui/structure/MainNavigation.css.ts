import { style } from "@vanilla-extract/css";

export const navigationContainer = style({
  maxWidth: 900,
  paddingTop: 50,
  marginRight: "auto",
  marginLeft: "auto",
  zIndex: 40,
  position: "relative",
  "@media": {
    ["screen and (max-width: 900px)"]: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
});
