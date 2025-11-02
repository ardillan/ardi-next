import { createTheme } from "@vanilla-extract/css";

import { fontDinish, fontPicnic, notoSerif } from "./fonts.css";

export const [lightTheme, theme] = createTheme({
  color: {
    background: "#f2f2f2ff",
    text: "#1B1B28",
    primary: "#fe9951",
    secondary: "#3cb484ff",
    dark: "#ffffff",
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
    dark: "#13131D",
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
