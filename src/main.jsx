import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LangContextProvider } from "./contexts/LangContext.jsx";
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <LangContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </LangContextProvider>
);
