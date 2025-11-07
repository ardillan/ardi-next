"use client";

import React from "react";

import Menu from "@/appComponents/general/Menu";

import { navigationContainer } from "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <nav className={navigationContainer}>
      <Menu />
    </nav>
  );
};

export default MainNavigation;
