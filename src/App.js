import React from "react";

import Text from "./components/commons/Text";

import { useTheme } from "./hooks";

const App = () => {
  const { themeMode, toggleThemeMode } = useTheme();

  return (
    <div className={`theme-${themeMode}`}>
      <Text color="primary" size="big" weight="bold">
        Hello from App.js!
      </Text>
      <button onClick={toggleThemeMode}>Toggle theme!</button>
    </div>
  );
};

export default App;
