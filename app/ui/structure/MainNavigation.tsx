"use client";

import React from "react";

import Menu from "@/appComponents/general/Menu";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className={styles.navigationContainer}>
      <Menu />
    </nav>
  );
};

export default MainNavigation;
