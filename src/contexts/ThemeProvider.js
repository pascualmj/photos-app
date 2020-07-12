import React, { createContext, useState, useCallback } from "react";
import PropTypes from "prop-types";

import { theme } from "../config/constants";
import { addDatasetToDocument } from "../functions";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(theme.LIGHT_MODE);

  const toggleThemeMode = useCallback(() => {
    setThemeMode((currentTheme) => {
      if (currentTheme === theme.LIGHT_MODE) {
        addDatasetToDocument("themeMode", "dark");
        return theme.DARK_MODE;
      }
      addDatasetToDocument("themeMode", "light");
      return theme.LIGHT_MODE;
    });
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

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
