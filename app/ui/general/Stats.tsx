import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

import { useMobile } from "@/context/MobileContext";
import Heart from "@/icons/heart";
import { ARDI } from "@/lib/constants";
import getWeather from "@/lib/getWeather";
import { getAge, getExperience } from "@/lib/helpers";
import { theme } from "@/styles/common/theme.css";

import styles from "./Stats.module.css";

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
    <div className={styles.container}>
      <Link href="/" {...(isMenuOpen && { onClick: toggleMenuMobile })}>
        <img
          src="/ardi-portrait-4.png"
          alt="Autorretrato en estilo pixel art"
          width={100}
          className={styles.avatar}
        />
      </Link>
      <div className={styles.statsContainer}>
        <div
          data-tooltip-id="experience"
          data-tooltip-place="right"
          data-tooltip-content={getText(currentTemperature)}
          className={styles.heartContainer}
        >
          {hearts.map((value: number, index: number) => {
            return (
              <Heart
                className={styles.heart}
                key={value}
                type={happiness <= index ? "empty" : "full"}
              />
            );
          })}
        </div>

        <div>
          <progress className={styles.progress} value={experience} max="365" />
        </div>

        <div
          data-tooltip-id="experience"
          data-tooltip-place="bottom-end"
          data-tooltip-content={`Aún faltan ${
            365 - experience
          } días para mi cumpleaños`}
        >
          <div>
            <p className={styles.info}>
              LV.<span>{age}</span>{" "}
              <span style={{ color: theme.color.secondary }}>•</span> EXP{" "}
              {experience}
              <span>/</span>365
            </p>
          </div>
        </div>
      </div>

      <Tooltip
        opacity={1}
        id="experience"
        style={{ zIndex: 20, background: "#ffc430", color: "black" }}
      />

      <Tooltip
        opacity={1}
        id="happiness"
        style={{ zIndex: 20, background: "#ffc430", color: "black" }}
      />
    </div>
  );
};

export default Stats;
