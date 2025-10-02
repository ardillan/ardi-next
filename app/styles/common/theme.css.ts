import { createTheme } from "@vanilla-extract/css";

import { fontDinish, fontPicnic, notoSerif } from "./fonts.css";

export const [lightTheme, theme] = createTheme({
  color: {
    background: "#f2f2f2ff",
    text: "#1B1B28",
    primary: "#2d31a1ff",
    secondary: "#319c71ff",
  },
  border: {
    regular: "10px",
  },
  font: {
    heading: fontPicnic,
    subtitle: fontDinish,
    text: notoSerif,
  },
});

export const darkTheme = createTheme(theme, {
  color: {
    background: "#1B1B28",
    text: "#ffffff",
    primary: "#ffc430",
    secondary: "#F32164",
  },
  border: {
    regular: "10px",
  },
  font: {
    heading: fontPicnic,
    subtitle: fontDinish,
    text: notoSerif,
  },
});
