import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Profile from "./layouts/Profile";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";


function App() {

  const [darkMode, setDarkMode] = useLocalStorage("DarkMode", false);


  return (
    <main className={darkMode ? 'dark bg-slate-900 h-screen' : ''}>
      <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
