import React from "react";
import { Github, House, Linkedin, Sun, Moon, Instagram } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { icon: <Github />, src: "https://github.com/david-rai" },
  {
    icon: <Linkedin />,
    src: "https://www.linkedin.com/in/david-rai-81983a36b/",
  },
  { icon: <Instagram />, src: "https://www.instagram.com/davidrai119/" },
];

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="w-full flex items-center justify-center fixed py-5 left-0 bottom-0">
      {/* Bottom blur */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-bg))",
        }}
      />

      {/* Navigation bar */}
      <nav
        className="
        z-50
          w-[300px] h-18 cursor-pointer bg-bg border border-border
          flex items-center justify-center gap-3 rounded-full
          hover:w-[350px]
          transition-[width,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]
        "
      >
        {/* Home */}
        <a
          href={window.origin}
          className="
            text-text p-2 rounded-full
            transition-all duration-200 ease-out
            hover:scale-125 hover:bg-border
            active:scale-95
          "
        >
          <House size={20} />
        </a>

        {/* Divider */}
        <div className="w-[1.2px] h-[60%] bg-border opacity-70" />

        {/* Social links */}
        <div className="flex gap-1">
          {links.map((l, i) => (
            <a
              href={l.src}
              target="_blank"
              key={i}
              className="
                text-text p-2 rounded-full
                transition-all duration-200 ease-out
                hover:scale-125 hover:bg-border hover:-translate-y-1
                active:scale-95 active:translate-y-0
              "
            >
              {l.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-[1.2px] h-[60%] bg-border opacity-60" />

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="
            text-text p-2 rounded-full
            transition-all duration-200 ease-out
            hover:scale-125 hover:bg-border hover:rotate-12
            active:scale-95 active:rotate-0
          "
        >
          {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </nav>
    </section>
  );
};

export default NavBar;
