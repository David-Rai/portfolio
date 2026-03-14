import React from "react";
import { Github, House, Linkedin, Sun, Moon, Instagram } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

const links = [
  {
    icon: <Github></Github>,
    src: "https://github.com/david-rai",
  },
  {
    icon: <linkedin />,
    src: "https://www.linkedin.com/in/david-rai-81983a36b/",
  },
  {
    icon: <Instagram />,
    src: "https://www.instagram.com/davidrai119/",
  },
];
const NavBar = () => {
  const { theme, setTheme, toggleTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
    const html = document.documentElement;
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
  }, [theme]);


  return (
    <section className="w-full flex items-center justify-center fixed py-5 left-0 bottom-0">
      <nav className="min-w-[300px] h-18 cursor-pointer bg-red-100 border border-border rounded-full">
        <a href={window.origin}>
          <House />
        </a>
        {}
        <div onClick={toggleTheme}>
          <Sun></Sun>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
