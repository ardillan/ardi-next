import "@/styles/global.css";

import React, { JSX } from "react";
import Script from "next/script";

import ContextProvider from "@/context/ContextProvider";

import RootContent from "./RootContent";

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <ContextProvider>
      <Script
        data-goatcounter="https://ardi.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
        strategy="afterInteractive"
      />
      <RootContent>{children}</RootContent>
    </ContextProvider>
  );
}
