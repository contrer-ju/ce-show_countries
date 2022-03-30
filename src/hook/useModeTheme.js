import { useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleThemeMode = () => setDarkMode(!darkMode);

  return {
    darkMode,
    toggleThemeMode,
  };
};

export default useDarkMode;
