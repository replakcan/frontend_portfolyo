import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { langData } from "../data";
import { toast } from "react-toastify";
import { useMainData, useProjectsData } from "../services/tanStack";

export const LangContext = createContext();

// eslint-disable-next-line react/prop-types
export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("X-lang", "TR");
  const { data: mainData } = useMainData();
  const { data: projectsData } = useProjectsData();
  const [data, setData] = useState(langData.tr);
 /*  const [projectData, setProjectData] = useState(projectsData.tr); */


  const notify_tr = () => toast("sayfa dili tr_TR'ye çevrildi");
  const notify_en = () => toast("page language is set to en_US");

  const toggleLang = () => {
    if (lang === "TR") {
      setLang("EN");
      setData(mainData.en);
      /* setProjectData(projectsData.en) */
      notify_en();
    } else {
      setLang("TR");
      setData(mainData.tr);
      /* setProjectData(projectsData.tr) */
      notify_tr();
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang, data, /* projectData */ }}>
      {children}
    </LangContext.Provider>
  );
};
