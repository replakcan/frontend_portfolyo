import { useContext } from "react";
import "./App.css";
import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Profile from "./layouts/Profile";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";
import { ThemeContext } from "./contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <QueryClientProvider client={queryClient}>
      <main className={darkMode ? "dark" : ""}>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}

export default App;
