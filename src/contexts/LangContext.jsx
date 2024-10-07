import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";
import { langData } from "../data";

export const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("X-lang", "TR");

  const toggleLang = () => {
    if (lang === "TR") {
      setLang("EN");
    } else {
      setLang("TR");
    }
  };

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", langData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};
