import { useEffect, useState } from "react";
import React from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return [theme, toggleTheme];
}
