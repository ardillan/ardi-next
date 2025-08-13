import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { useMobile } from "@/context/MobileContext";
import { useTheme } from "@/context/ThemeContext.tsx";
import { NAVIGATION } from "@/lib/constants";

import { hamburguer, items, itemsLink } from "./LinkItems.css.ts";

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

  const { toggleDarkMode } = useTheme();

  const handleMobileMenu = () => {
    toggleMenuMobile();
  };
  const handleTheme = () => {
    toggleDarkMode();
  };

  return (
    <>
      <button onClick={handleMobileMenu} className={hamburguer}>
        MENU MÓVIL {`${isActiveClass.name}`}
      </button>
      <button onClick={handleTheme}>Cambiar de tema</button>
      <ul className={items} style={{ display: isMenuOpen ? "flex" : "" }}>
        {NAVIGATION.filter((link) =>
          link.position.includes("MainNavigation")
        ).map((link) => {
          return (
            <li key={link.title}>
              <Link
                className={itemsLink}
                href={link.path}
                {...(isMenuOpen && { onClick: toggleMenuMobile })}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
        <li>
          <a
            href="https://mastodon.social/@ardillan"
            rel="me"
            className={itemsLink}
          >
            Mastodon
          </a>
        </li>
      </ul>
    </>
  );
};

export default LinkItems;
