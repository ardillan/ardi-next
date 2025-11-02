import React from "react";

import { Facts } from "@/appComponents/general/Facts";
import getStravaRides from "@/lib/getStrava";
import { metersToKM } from "@/lib/helpers";
import { mainContainer } from "@/styles/common/grid.css";
import { theme } from "@/styles/common/theme.css";

import { description, introduction, welcomeContainer } from "./Welcome.css";

const Welcome = async () => {
  const ridesPerYear = await getStravaRides();
  return (
    <div className={mainContainer}>
      <div className={welcomeContainer}>
        <h1 className={introduction}>
          <span style={{ color: theme.color.secondary }}>¡Hola!</span>
          <br />
          <span>¡Soy Ardi!</span>
        </h1>

        <p className={description}>
          <span>
            Tal vez me recuerdes por <Facts /> ó por haber recorrido unos{" "}
            <strong style={{ color: theme.color.primary }}>
              {metersToKM(ridesPerYear)}
            </strong>{" "}
            km. en bicicleta.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
