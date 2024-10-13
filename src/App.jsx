import { useContext } from "react";
import "./App.css";
import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Profile from "./layouts/Profile";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";
import { ThemeContext } from "./contexts/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMainData } from "./services/tanStack";

function App() {
  const { darkMode } = useContext(ThemeContext);

  const { isPending, error } = useMainData();

  if (isPending) return <div className="loader">Loading</div>;

  if (error) return <p>Komsular yetisin error varrrr!!!</p>;

  return (
    <main className={darkMode ? "dark" : ""}>
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <ToastContainer />
    </main>
  );
}

export default App;
