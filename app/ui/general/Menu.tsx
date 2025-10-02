import "@/styles/common/animations/fire.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import Stats from "@/appComponents/general/Stats";
import { useMobile } from "@/context/MobileContext";
import { useTheme } from "@/context/ThemeContext.tsx";
import { NAVIGATION } from "@/lib/constants";

import { hamburguer, items, itemsLink, menuContainer } from "./Menu.css.ts";
const isActiveClass = (pathName: string): boolean => {
  const currentPathName = usePathname();
  const regex = /\/([^/]+)/;
  const path = currentPathName.match(regex) ?? "/";

  if (pathName === path[0]) {
    return true;
  }

  return false;
};

const Menu = () => {
  const { isMenuOpen, toggleMenuMobile } = useMobile();

  const { toggleDarkMode, darkMode } = useTheme();

  const handleMobileMenu = () => {
    toggleMenuMobile();
  };
  const handleTheme = () => {
    toggleDarkMode();
  };

  return (
    <div className={menuContainer}>
      <Stats key="stats" />
      <button onClick={handleMobileMenu} className={hamburguer}>
        MENU MÓVIL {`${isActiveClass.name}`}
      </button>
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
          <span onClick={handleTheme} className={itemsLink}>
            {darkMode ? (
              <div className="fire">
                <div className="flames">
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                </div>
                <div className="logs"></div>
              </div>
            ) : (
              <div className="smoke">
                <div className="smoke-part"></div>
                <div className="smoke-part"></div>
                <div className="smoke-part"></div>
                <div className="logs"></div>
              </div>
            )}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
