import { globalStyle, style } from "@vanilla-extract/css";

import { theme } from "@/styles/common/theme.css";

export const container = style({
  display: "flex",
});

export const statsContainer = style({
  justifyContent: "center",
  flexDirection: "column",
  display: "flex",
  gap: 5,
});

export const avatar = style({
  aspectRatio: "1/1",
  objectFit: "cover",
  width: 80,
  marginRight: 20,
  borderRadius: theme.border.regular,
});

export const info = style({
  fontWeight: 600,
  fontSize: ".75rem",
});

export const heart = style({
  marginRight: 5,
});

export const heartContainer = style({
  display: "flex",
});

export const progress = style({
  width: 100,
  height: 20,
  borderRadius: 50,
  overflow: "hidden",
  appearance: "none",
  border: "2px solid white",
});

globalStyle(`${progress}[value]::-webkit-progress-value`, {
  width: 0,
  transition: "width 300ms ease",
  background: theme.color.primary,
});

globalStyle(`${progress}[value]::-webkit-progress-bar`, {
  width: "100%",
  transition: "width 300ms ease",
  background: theme.color.background,
});
