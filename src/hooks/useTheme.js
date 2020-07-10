import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeProvider";

const useTheme = () => useContext(ThemeContext);

export default useTheme;
