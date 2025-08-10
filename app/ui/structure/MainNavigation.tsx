"use client";

import React from "react";

import Stats from "@/appComponents/general/Stats";

import LinkItems from "../../ui/general/LinkItems";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className={styles.container}>
      <Stats />
      <LinkItems />
    </nav>
  );
};

export default MainNavigation;
