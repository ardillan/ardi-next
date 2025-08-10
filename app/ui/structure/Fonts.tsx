import { Inter } from "next/font/google";
import localFont from "next/font/local";

const fontInter = Inter({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--inter-font",
});

const fontFraiche = localFont({
  src: "../../../src/fonts/fraiche/fraiche.otf",
  variable: "--fraiche-font",
});

export { fontInter, fontFraiche };
