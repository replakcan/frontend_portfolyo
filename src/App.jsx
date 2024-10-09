import { useContext } from "react";
import "./App.css";

import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Profile from "./layouts/Profile";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";

import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);

  console.log("darkmode: ", darkMode);

  return (
    <main className={darkMode ? "dark" : ""}>
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
