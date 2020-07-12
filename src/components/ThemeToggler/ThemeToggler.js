import React, { useCallback } from "react";
import styles from "./themeToggler.module.scss";

import Toggler from "../commons/Toggler";

import useTheme from "../../hooks/useTheme";
import { theme } from "../../config/constants";

const ThemeToggler = () => {
  const { themeMode, toggleThemeMode } = useTheme();

  const handleToggle = useCallback(() => {
    toggleThemeMode();
  }, [toggleThemeMode]);

  return (
    <div className={styles.container}>
      <Toggler
        handleClick={handleToggle}
        isActive={themeMode === theme.DARK_MODE ? true : false}
        elementOn={
          <span className={`material-icons ${styles.icon}`}>bedtime</span>
        }
        elementOff={
          <span className={`material-icons ${styles.icon}`}>brightness_5</span>
        }
      />
    </div>
  );
};

export default ThemeToggler;
