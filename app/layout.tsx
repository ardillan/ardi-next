import React, { JSX } from "react";

import MainNavigation from "@/appComponents/structure/MainNavigation";
import ContextProvider from "@/context/ContextProvider";

import RootContent from "./RootContent";
import Footer from "./ui/structure/Footer";

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="es">
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
