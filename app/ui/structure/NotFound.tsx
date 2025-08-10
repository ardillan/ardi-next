import React from "react";

import BasicLayout from "@/appComponents/layouts/BasicLayout";

import styles from "./not-found.module.css";

export default function Custom404() {
  return (
    <BasicLayout>
      <div className={styles.notFound}>
        <span>😢</span>
        <h1>Página no encontrada</h1>
      </div>
    </BasicLayout>
  );
}
