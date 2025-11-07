import React from "react";

import HomeLayout from "@/appComponents/layouts/HomeLayout";
import { ARDI } from "@/lib/constants";

export async function generateMetadata() {
  return {
    title: ARDI.web.title,
    description: ARDI.web.description,
    author: ARDI.nickname,
  };
}

export default async function Home() {
  return <HomeLayout />;
}
