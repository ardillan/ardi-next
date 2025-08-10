import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

import { useMobile } from "@/context/MobileContext";
import { ARDI } from "@/lib/constants";
import getWeather from "@/lib/getWeather";
import { getAge, getExperience } from "@/lib/helpers";

export const getHappiness = (temperature: number | undefined) => {
  if (!temperature) return 0;

  switch (true) {
    case temperature < 10:
      return 1;
    case temperature < 15:
      return 2;
    case temperature < 20:
      return 3;
    case temperature >= 20:
      return 4;
  }
  return temperature;
};

export const getText = (temperature: number) => {
  switch (true) {
    case temperature < 10:
      return `¡Qué frío! Ahora mismo hay ${temperature} grados en Torrelavega`;
    case temperature < 15:
      return `No está mal, ${temperature} grados en Torrelavega`;
    case temperature < 20:
      return `¡Hoy hace bueno! Hay ${temperature} grados en Torrelavega`;
    case temperature >= 20:
      return `¡Qué bien!, hay ${temperature} grados en Torrelavega. Me voy a dar un paseo en bici`;
  }
  return "";
};

const Stats = () => {
  const age = getAge();
  const hearts = [1, 2, 3, 4];
  const experience = getExperience(ARDI.birthday);
  const { isMenuOpen, toggleMenuMobile } = useMobile();
  const [currentTemperature, setCurrentTemperature] = useState<number>(0);
  const happiness = getHappiness(currentTemperature);

  useEffect(() => {
    (async () => {
      const weather = await getWeather();
      const { temperature_2m } = weather;
      const hour = new Date().getHours();
      setCurrentTemperature(temperature_2m[hour]);
    })();
  }, []);

  return (
    <div>
      <Link href="/" {...(isMenuOpen && { onClick: toggleMenuMobile })}>
        <img
          src="/sad-ardi.png"
          alt="Autorretrato en estilo pixel art"
          width={100}
        />
      </Link>
      <div>
        <a
          data-tooltip-id="experience"
          data-tooltip-place="right"
          data-tooltip-content={getText(currentTemperature)}
        >
          {hearts.map((value: number, index: number) => {
            return (
              <span key={value}>
                <img
                  src={happiness <= index ? "/heart-empty.svg" : "/heart.svg"}
                  alt="Contenedor de vitalidad"
                  title="Contenedor de vitalidad"
                  width={10}
                  height={10}
                />
              </span>
            );
          })}
        </a>

        <div>
          <progress id="file" value={experience} max="365" />
        </div>
        <a
          data-tooltip-id="experience"
          data-tooltip-place="bottom-end"
          data-tooltip-content={`Aún faltan ${
            365 - experience
          } días para mi cumpleaños`}
        >
          <div>
            <p>
              LV.<span>{age}</span> EXP.
              {experience}
              <span>/</span>365
            </p>
          </div>
        </a>
      </div>

      <Tooltip
        opacity={1}
        id="experience"
        style={{
          backgroundColor: "rgba(var(--color-space-darker))",
          color: "rgba(var(--color-honey-yellow))",
          zIndex: 10,
          fontSize: "0.85rem",
          fontFamily: "sans-serif",
        }}
      />

      <Tooltip
        opacity={1}
        id="happiness"
        style={{
          backgroundColor: "rgba(var(--color-space-darker))",
          color: "rgba(var(--color-honey-yellow))",
          zIndex: 10,
          fontSize: "0.85rem",
          fontFamily: "sans-serif",
        }}
      />
    </div>
  );
};

export default Stats;
