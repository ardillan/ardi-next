import React from "react";

import BasicLayout from "@/appComponents/layouts/BasicLayout";

import styles from "./NotFound.module.css";

export default function Custom404() {
  return (
    <BasicLayout>
      <div className={styles.container}>
        <h1 className={styles.glitch} data-text="👻">
          👻
        </h1>
        <p className={styles.text}>
          Aquí no hay nada, será mejor que te des la vuelta.
        </p>
        <a href="/" className={styles.link}>
          Seguir con la aventura
        </a>
      </div>
    </BasicLayout>
  );
}
