import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { useMobile } from "@/context/MobileContext";
import { NAVIGATION } from "@/lib/constants";

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
      <button onClick={handleClick}>
        MENU MÓVIL {`${isActiveClass.name}`}
      </button>
      <ul style={{ display: isMenuOpen ? "flex" : "" }}>
        {NAVIGATION.filter((link) =>
          link.position.includes("MainNavigation")
        ).map((link) => {
          return (
            <li key={link.title}>
              <Link
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
