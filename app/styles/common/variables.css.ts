import { createVar, globalStyle } from "@vanilla-extract/css";

export const sizes = {
  desktop: createVar(),
  mobile: createVar(),
};

globalStyle(":root", {
  vars: {
    [sizes.desktop]: "900px",
    [sizes.mobile]: "600px",
  },
});

export const breakpoints = {
  mobile: "screen and (max-width: 600px)",
  desktop: "screen and (max-width: 900px)",
};
