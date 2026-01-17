import "@/styles/common/variables.css";
import "@/styles/common/vanilla-variables.css";
import "@/styles/common/reset.css";
import "@/styles/common/global.css";

import React, { ReactNode } from "react";

import MainNavigation from "@/appComponents/structure/MainNavigation";
import ContextProvider from "@/context/ContextProvider";

import RootContent from "./RootContent";
import Footer from "./ui/structure/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" data-theme="dark">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="64x64" />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Feed RSS de mis últimas entradas"
          href="https://ardi.monster/rss/feed.xml"
        />
      </head>
      <body>
        <ContextProvider>
          <RootContent>
            <>
              <MainNavigation />
              {children}
              <Footer />
            </>
          </RootContent>
        </ContextProvider>
      </body>
    </html>
  );
}
