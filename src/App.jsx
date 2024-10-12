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
        <ToastContainer />
      </main>
    </QueryClientProvider>
  );
}

export default App;
