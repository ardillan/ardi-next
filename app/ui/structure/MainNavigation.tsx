"use client";

import React from "react";

import Stats from "@/appComponents/general/Stats";

import LinkItems from "../../ui/general/LinkItems";

const MainNavigation = () => {
  return (
    <nav>
      <Stats />
      <LinkItems />
    </nav>
  );
};

export default MainNavigation;
