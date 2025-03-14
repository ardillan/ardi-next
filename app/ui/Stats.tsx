import Link from "next/link";
import React from "react";
import { Tooltip } from "react-tooltip";

import { useMobile } from "@/context/MobileContext";
import { ARDI } from "@/lib/constants";
import { getAge, getExperience } from "@/lib/helpers";

import styles from "./Stats.module.css";

const Stats = () => {
  const age = getAge();
  const hearts = [1, 2, 3, 4];
  const experience = getExperience(ARDI.birthday);
  const { isMenuOpen, toggleMenuMobile } = useMobile();

  return (
    <div className={styles.stats}>
      <Link href="/" {...(isMenuOpen && { onClick: toggleMenuMobile })}>
        <img src="/sad-ardi.png" alt="Autorretrato en estilo pixel art" />
      </Link>
      <div className={styles.indicators}>
        <div className={styles.hearts}>
          {hearts.map((value: number) => {
            return (
              <span key={value}>
                <img
                  src="/heart.svg"
                  alt="Contenedor de vitalidad"
                  title="Contenedor de vitalidad"
                />
              </span>
            );
          })}
        </div>
        <div
          className={`${styles.experience} ${
            experience === 365 ? styles.birthday : styles.regular
          }`}
        >
          <progress id="file" value={experience} max="365" />
        </div>

        <a
          className={styles.info}
          data-tooltip-id="experience"
          data-tooltip-place="bottom-end"
          data-tooltip-content={`Aún faltan ${
            365 - experience
          } días para mi cumpleaños`}
        >
          <div>
            <p>
              LV.<span className={styles.honeyYellow}>{age}</span> EXP.
              {experience}
              <span className={styles.honeyYellow}>/</span>365
            </p>
          </div>
        </a>
      </div>

      <Tooltip
        opacity={1}
        id="experience"
        data-tooltip-content="Hello world!"
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
