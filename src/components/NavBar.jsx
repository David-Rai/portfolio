import React from "react";
import { Github, House, Linkedin, Sun, Moon, Instagram } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

const links = [
  {
    icon: <Github />,
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
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="w-full flex items-center justify-center fixed py-5 left-0 bottom-0">
      <nav
        className="min-w-[300px] h-18 cursor-pointer bg-red-100 border
      flex items-center justify-center gap-3 hover:w-[350px] transition-all duration-200
      border-border rounded-full"
      >
        <a href={window.origin}>
          <House />
        </a>
        <div className="flex gap-3">
          {links.map((l, i) => {
            return (
              <a href={l.src} target="_blank" key={i}>
                {l.icon}
              </a>
            );
          })}
        </div>
        <div onClick={toggleTheme}>{theme === "dark" ? <Moon /> : <Sun />}</div>
      </nav>
    </section>
  );
};

export default NavBar;
