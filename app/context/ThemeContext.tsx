"use client";

import React, { createContext, JSX, useContext, useState } from "react";

interface ITheme {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ITheme>({
  darkMode: true,
  toggleDarkMode: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
