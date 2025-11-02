import Link from "next/link";
import React from "react";

import getStravaRides from "@/lib/getStrava";
import { metersToKM } from "@/lib/helpers";
import { mainContainer } from "@/styles/common/grid.css";
import { theme } from "@/styles/common/theme.css";

import { description, introduction, welcomeContainer } from "./Welcome.css";

const randomFacts = [
  {
    fact: "ser fan de {{Scatman}}",
    link: "https://es.wikipedia.org/wiki/Scatman_John",
  },
  {
    fact: "gustarme la {{pizza con piña}}",
    link: "https://es.wikipedia.org/wiki/Sam_Panopoulos",
  },
  {
    fact: "adorar a {{Grim Fandango}}",
    link: "https://es.wikipedia.org/wiki/Grim_Fandango",
  },
];

function getRandomFacts(
  facts: { fact: string; link: string }[],
  count: number
) {
  const shuffled = [...facts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

const Welcome = async () => {
  const ridesPerYear = await getStravaRides();
  const facts = getRandomFacts(randomFacts, 2);
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
            Tal vez me recuerdes por{" "}
            {facts.map((item) => {
              const match = item.fact.match(/^(.*){{(.*)}}(.*)$/);
              if (!match) {
                return item.fact + ", ";
              }
              const before = match[1];
              const inside = match[2];
              const after = match[3];
              return (
                <React.Fragment key={item.fact}>
                  {before}
                  <Link
                    href={item.link}
                    target="_blank"
                    style={{ color: theme.color.primary }}
                  >
                    {inside}
                  </Link>
                  {after}
                  {", "}
                </React.Fragment>
              );
            })}
            ó por haber recorrido unos{" "}
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
