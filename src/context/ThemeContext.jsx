import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  const getLocalTheme = () => {
    const t = localStorage.getItem("theme");
    if (t) {
      // console.log(t);
      setTheme(t);
      return true;
    }
    return false;
  };

  //checking user system theme
  useEffect(() => {
    // console.log("gettting system them from localstorage");
    const isPresent = getLocalTheme();
    if (isPresent) return;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(systemPrefersDark ? "dark" : "light");

    // Optional: Listen for system theme changes
    const listener = (e) => setTheme(e.matches ? "dark" : "light");
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
