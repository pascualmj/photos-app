import React, { createContext, useState, useCallback } from "react";

import { theme } from "../config/constants";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(theme.LIGHT_MODE);

  const toggleThemeMode = useCallback(() => {
    setThemeMode((currentTheme) =>
      currentTheme === theme.LIGHT_MODE ? theme.DARK_MODE : theme.LIGHT_MODE
    );
  }, [setThemeMode]);

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        toggleThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
