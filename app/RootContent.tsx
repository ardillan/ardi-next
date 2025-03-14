"use client";

import Script from "next/script";
import React, { JSX } from "react";

import { fontFraiche, fontInter } from "@/appComponents/Fonts";
import { useMobile } from "@/context/MobileContext";

import { useTheme } from "./context/ThemeContext";

const RootContent = ({ children }: { children: JSX.Element }) => {
  const { isMenuOpen } = useMobile();
  const { darkMode } = useTheme();

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="64x64" />
        <Script
          data-goatcounter="https://ardi.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Feed RSS de mis últimas entradas"
          href="https://ardi.monster/rss/feed.xml"
        />
      </head>
      <body
        className={`${fontInter.variable} ${fontFraiche.variable}`}
        style={{ overflow: isMenuOpen ? "hidden" : "initial" }}
        data-dark-theme={darkMode}
      >
        {children}
      </body>
    </html>
  );
};

export default RootContent;
