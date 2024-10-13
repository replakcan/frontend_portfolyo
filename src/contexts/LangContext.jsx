import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";
import { langData } from "../data";
import { toast } from "react-toastify";
import { useMainData } from "../services/tanStack";

export const LangContext = createContext();

// eslint-disable-next-line react/prop-types
export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("X-lang", "TR");
  const { data: mainData } = useMainData();
  const [data, setData] = useState(langData.tr);
  
  const notify_tr = () => toast("sayfa dili tr_TR'ye çevrildi");
  const notify_en = () => toast("page language is set to en_US");

  const toggleLang = () => {
    if (lang === "TR") {
      setLang("EN");
      setData(mainData.en);
      notify_en()
    } else {
      setLang("TR");
      setData(mainData.tr)
      notify_tr();
    }
  };

  
  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang, data }}>
      {children}
    </LangContext.Provider>
  );
};
