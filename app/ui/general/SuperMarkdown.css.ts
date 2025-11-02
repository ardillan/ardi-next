import { style } from "@vanilla-extract/css";

import { theme } from "@/styles/common/theme.css";

export const superMarkdown = style({
  fontFamily: theme.font.text,
});

export const paragraph = style({
  maxWidth: 500,
  fontSize: "1rem",
  marginBottom: "1.3rem",
  lineHeight: "1.6rem",
});

export const list = style({
  lineHeight: "1.75rem",
  paddingLeft: "1rem",
  listStyleType: "initial",
});

export const blockquote = style({
  padding: "1rem 3rem",
  margin: "0 0 1.5rem",
  borderWidth: 4,
  borderStyle: "solid",
  borderRadius: 10,
  backgroundColor: "#00000059",
  width: "max-content",
  borderColor:
    "rgba(255,220,36, 1) rgba(255,92,160, 1) rgba(92, 236, 102, 1) rgba(113, 203, 243, 1)",
  "@media": {
    ["screen and (max-width: 900px)"]: {
      width: "100%",
    },
  },
});

export const blockQuoteParagraph = style({
  margin: 0,
  padding: 0,
});

export const heading = style({
  maxWidth: 500,
  fontSize: "1.5rem",
  marginBottom: "1rem",
  color: theme.color.primary,
  marginTop: "5rem",
  fontFamily: theme.font.heading,
});

export const image = style({
  objectFit: "contain",
  height: "max-content",
  border: "1px solid #ffffff1a",
  margin: "1rem 0",
  borderRadius: 10,
  boxShadow: `${theme.color.dark} 0px 1px 3px, ${theme.color.dark} 0px 1px 2px`,
  "@media": {
    ["screen and (max-width: 900px)"]: {
      width: "100%",
    },
  },
});

export const figCaption = style({
  fontFamily: theme.font.subtitle,
  fontSize: "0.85rem",
  opacity: 0.7,
  textAlign: "center",
  marginBottom: "2rem",
});

export const hr = style({
  borderColor: "#4d4d5f",
  borderBottom: "2px solid #21212d",
  margin: "5rem 0 1rem 0",
  borderRightColor: "transparent",
  borderLeftColor: "transparent",
});
