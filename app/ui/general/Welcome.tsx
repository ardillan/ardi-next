import React from "react";

import getStravaRides from "@/lib/getStrava";
import { metersToKM } from "@/lib/helpers";

const Welcome = async () => {
  const ridesPerYear = await getStravaRides();
  return (
    <div>
      <p>
        <span>It's a me</span>
        <span>Ardi!</span>
        <span>
          Este año he andado unos <strong>{metersToKM(ridesPerYear)}</strong>{" "}
          kilómetros en bicicleta
        </span>
      </p>
    </div>
  );
};

export default Welcome;
