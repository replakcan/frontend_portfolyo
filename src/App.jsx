import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="main-section">
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
