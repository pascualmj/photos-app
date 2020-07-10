import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";

import App from "./App";
import configureStore from "./store";

// Theme Provider
import ThemeProvider from "./contexts/ThemeProvider";

// SCSS: Reset, Normalize & Typo
import "./assets/scss/normalize.scss";
import "./assets/scss/reset.scss";
import "./assets/scss/typo.scss";

// Global SCSS File
import "./index.scss";

// Initialize Redux Store
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
