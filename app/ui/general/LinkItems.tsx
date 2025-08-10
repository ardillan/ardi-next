import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { useMobile } from "@/context/MobileContext";
import { NAVIGATION } from "@/lib/constants";

import styles from "./LinkItems.module.css";

const isActiveClass = (pathName: string): boolean => {
  const currentPathName = usePathname();
  const regex = /\/([^/]+)/;
  const path = currentPathName.match(regex) ?? "/";

  if (pathName === path[0]) {
    return true;
  }

  return false;
};

const LinkItems = () => {
  const { isMenuOpen, toggleMenuMobile } = useMobile();

  const handleClick = () => {
    toggleMenuMobile();
  };

  return (
    <>
      <button className={styles.hamburguer} onClick={handleClick}>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="19"
            height="18"
            rx="4"
            stroke="white"
            strokeWidth="2"
          />
          <rect x="4" y="9" width="13" height="2" rx="1" fill="#FFDC24" />
          <rect x="4" y="5" width="13" height="2" rx="1" fill="#FFDC24" />
          <rect x="4" y="13" width="13" height="2" rx="1" fill="#FFDC24" />
        </svg>
      </button>
      <ul
        className={`${styles.items} ${isMenuOpen ? styles.open : styles.close}`}
        style={{ display: isMenuOpen ? "flex" : "" }}
      >
        {NAVIGATION.filter((link) =>
          link.position.includes("MainNavigation")
        ).map((link) => {
          return (
            <li key={link.title}>
              <Link
                className={isActiveClass(link.path) ? styles.active : ""}
                href={link.path}
                {...(isMenuOpen && { onClick: toggleMenuMobile })}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LinkItems;
