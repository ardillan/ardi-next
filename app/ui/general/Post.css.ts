import { style } from "@vanilla-extract/css";

import { theme } from "@/styles/common/theme.css";

export const postsImagesContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gridRowGap: "2rem",
  gridColumnGap: "2rem",
});

export const postImageContainer = style({
  display: "grid",
  gridTemplateColumns: "120px 1fr",
  columnGap: "1.5rem",
  alignItems: "center",
});

export const postTitle = style({
  color: theme.color.primary,
  fontWeight: 600,
  fontSize: "1rem",
});

export const postDate = style({
  fontSize: "0.75rem",
  color: theme.color.text,
  opacity: 0.4,
  margin: "0.1rem 0",
  display: "block",
});

export const postSubtitle = style({
  fontSize: "0.85rem",
});

export const postImage = style({
  borderRadius: ".85rem",
  aspectRatio: "1/1",
  zIndex: 20,
  position: "relative",
  pointerEvents: "none",
  objectFit: "cover",
});

export const postImageShadow = style({
  borderRadius: ".85rem",
  position: "absolute",
  left: 0,
  zIndex: 10,
  selectors: {
    "&:hover": {
      filter: "blur(25px)",
    },
  },
});
