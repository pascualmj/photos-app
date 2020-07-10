import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ThemeProvider from "./context/ThemeProvider";

// SCSS: Reset, Normalize & Typo
import "./assets/scss/normalize.scss";
import "./assets/scss/reset.scss";
import "./assets/scss/typo.scss";

// Global SCSS File
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
