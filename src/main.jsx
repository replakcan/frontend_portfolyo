import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LangContextProvider } from "./contexts/LangContext.jsx";
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <LangContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </LangContextProvider>
  </QueryClientProvider>
);
