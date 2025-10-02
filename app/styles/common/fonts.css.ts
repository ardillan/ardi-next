import { fontFace } from "@vanilla-extract/css";

export const fontPicnic = fontFace({
  src: "local('PicNic'), url('/fonts/PicNic-Regular.otf') format('opentype')",
  fontWeight: "200",
});

export const fontDinish = fontFace({
  src: "local('DINish'), url('/fonts/DINish.ttf') format('truetype')",
  fontWeight: "400",
});

export const notoSerif = fontFace({
  src: "local('Noto Serif'), url('/fonts/NotoSerif-VariableFont_wdth,wght.ttf') format('truetype')",
  fontWeight: "100 900",
  fontStyle: "normal",
});
