"use client";

import "@/styles/common/variables.css";

import Script from "next/script";
import React, { JSX, useEffect } from "react";

import { useMobile } from "@/context/MobileContext";
import { darkTheme, lightTheme } from "@/styles/common/theme.css";

import { useTheme } from "./context/ThemeContext";

const RootContent = ({ children }: { children: JSX.Element }) => {
  const { isMenuOpen } = useMobile();
  const { darkMode } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  return (
    <div
      className={`${darkMode ? darkTheme : lightTheme}`}
      style={{ overflow: isMenuOpen ? "hidden" : "initial" }}
    >
      <Script
        data-goatcounter="https://ardi.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
        strategy="afterInteractive"
      />
      {children}
    </div>
  );
};

export default RootContent;
