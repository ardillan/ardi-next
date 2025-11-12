import React from "react";

import HomeLayout from "@/appComponents/layouts/HomeLayout";
import { ARDI } from "@/lib/constants";

export async function generateMetadata() {
  return {
    title: ARDI.web.title,
    description: ARDI.web.description,
    author: ARDI.nickname,
    openGraph: {
      title: ARDI.web.title,
      description: ARDI.web.description,
      url: "https://ardi.monster",
      siteName: "Ardi Monster",
      images: [
        {
          url: "/open-graph.png",
          width: 1200,
          height: 630,
          alt: "Ardi Monster — Blog",
        },
      ],
      locale: "es_ES",
      type: "website",
    },
  };
}

export default async function Home() {
  return <HomeLayout />;
}
