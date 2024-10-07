import { useEffect, useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Profile from "./layouts/Profile";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";
import axios from "axios";
import { langData } from "./data";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("DarkMode", false);
  const [lang, setLang] = useLocalStorage("x-lang", "TR");

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
    <main className={darkMode ? "dark" : ""}>
      <Hero
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
