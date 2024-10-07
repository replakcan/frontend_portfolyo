import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("DarkMode", false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
