import React from "react";

import { Facts } from "@/appComponents/general/Facts";
import getStravaRides from "@/lib/getStrava";
import { metersToKM } from "@/lib/helpers";

import styles from "./Welcome.module.css";

const Welcome = async () => {
  const ridesPerYear = await getStravaRides();
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
            Tal vez me recuerdes por <Facts /> ó por haber recorrido unos{" "}
            <strong>{metersToKM(ridesPerYear)}</strong> km. en bicicleta.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
