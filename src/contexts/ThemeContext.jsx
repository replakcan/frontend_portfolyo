import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

const userDarkModePref =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log("user dark mode: ", userDarkModePref);

// eslint-disable-next-line react/prop-types
export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage(
    "DarkMode",
    userDarkModePref ? true : false
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
