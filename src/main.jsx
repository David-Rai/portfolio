import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Home />
  </ThemeProvider>,
);
