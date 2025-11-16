"use client";

import "@/styles/common/variables.css";

import Script from "next/script";
import React, { JSX } from "react";

import { useMobile } from "@/context/MobileContext";
import { darkTheme, lightTheme } from "@/styles/common/theme.css";

import { useTheme } from "./context/ThemeContext";
import { rootStyles } from "./RootContent.css";

const RootContent = ({ children }: { children: JSX.Element }) => {
  const { isMenuOpen } = useMobile();
  const { darkMode } = useTheme();

  return (
    <div
      className={`${rootStyles} ${darkMode ? darkTheme : lightTheme}`}
      style={{ overflow: isMenuOpen ? "hidden" : "initial" }}
    >
      <Script
        data-goatcounter="https://ardi.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
        strategy="afterInteractive"
      />
      <div className={darkMode ? darkTheme : lightTheme}></div>
      {children}
    </div>
  );
};

export default RootContent;
