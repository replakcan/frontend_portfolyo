import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";
import { langData } from "../data";
import { toast } from "react-toastify";

export const LangContext = createContext();

// eslint-disable-next-line react/prop-types
export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("X-lang", "TR");
  const [data, setData] = useState(langData.tr);
 
  const notify_tr = () => toast("sayfa dili tr_TR'ye çevrildi");
  const notify_en = () => toast("page language is set to en_US");

  const toggleLang = () => {
    if (lang === "TR") {
      setLang("EN");
      notify_en()
    } else {
      setLang("TR");
      notify_tr();
    }
  };

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", langData)
      .then((response) => {
        console.log("RESPONSE: ", response);
        lang === "EN" ? setData(response.data.en) : setData(response.data.tr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [lang]);
  console.log("DATA: ", data);

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang, data }}>
      {children}
    </LangContext.Provider>
  );
};
