import { createTheme } from "@vanilla-extract/css";

export const [lightTheme, theme] = createTheme({
  color: {
    background: "#ffffff",
    text: "#000000",
    link: "#f300c2ff",
  },
});

export const darkTheme = createTheme(theme, {
  color: {
    background: "#000000",
    text: "#ffffff",
    link: "#1e90ff",
  },
});
