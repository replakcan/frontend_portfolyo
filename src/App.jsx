import "./App.css";
import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Profile from "./layouts/Profile";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";

function App() {
  return (
    <main>
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
