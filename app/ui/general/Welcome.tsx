import React from "react";

import { Facts } from "@/appComponents/general/Facts";

import styles from "./Welcome.module.css";

const Welcome = async () => {
  return (
    <div className={styles.welcome}>
      <div>
        <h1>
          <span>¡Hola!</span>
          <br />
          <span>¡Soy Ardi!</span>
        </h1>

        <p>
          <span>
            Tal vez me recuerdes por <Facts />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
