import { useEffect, useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import React from "react";

const sections = ["hero", "about", "portfolio", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 60) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <h1
          onClick={() => scrollTo("hero")}
          className="font-bold text-xl cursor-pointer text-blue-600 dark:text-blue-400"
        >
          Portfolio
        </h1>
        <div className="flex space-x-6 items-center">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => scrollTo(sec)}
              className={`capitalize transition-colors ${
                activeSection === sec
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-600 dark:text-gray-300"
              } hover:text-blue-500 dark:hover:text-blue-300`}
            >
              {sec}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
