import { style } from "@vanilla-extract/css";

import { theme } from "@/styles/common/theme.css";

export const header = style({
  maxWidth: 900,
  display: "grid",
  gridTemplateColumns: "1fr 400px",
  alignItems: "center",
  marginTop: "2rem",
  marginBottom: "4rem",
  position: "relative",
  zIndex: 10,
  "@media": {
    ["screen and (max-width: 900px)"]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  },
});

export const title = style({
  fontFamily: theme.font.heading,
  fontSize: "3rem",
  color: theme.color.primary,
  lineHeight: "2.5rem",
  "@media": {
    ["screen and (max-width: 900px)"]: {
      marginTop: "2rem",
    },
  },
});

export const subtitle = style({
  fontSize: "1rem",
  fontWeight: 600,
  marginTop: "0.75rem",
});

export const date = style({
  fontSize: "0.75rem",
  color: theme.color.text,
  opacity: 0.4,
  margin: ".5rem 0",
  display: "block",
});

export const image = style({
  maxWidth: 900,
  minHeight: 400,
  minWidth: 400,
  borderRadius: ".85rem",
  objectFit: "cover",
  width: "100%",
  position: "relative",
  "@media": {
    ["screen and (max-width: 900px)"]: {
      marginTop: "1rem",
    },
  },
});

export const background = style({
  position: "absolute",
  background: "#00000066",
  width: "100vw",
  top: 0,
  left: 0,
  height: 500,
});
