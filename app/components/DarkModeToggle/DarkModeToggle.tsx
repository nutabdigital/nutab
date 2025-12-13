"use client";

import { useTheme } from "../../context/ThemeContext";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center w-10 h-10 p-2 rounded-full border-none cursor-pointer transition-colors duration-300 ${
        theme === "dark" ? "bg-white/10" : "bg-black/5"
      }`}
      aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
    >
      {!mounted ? (
        // Placeholder to prevent layout shift - matches icon size
        <span className="w-5 h-5" />
      ) : theme === "dark" ? (
        <Sun
          size={20}
          className="text-[#facc15] transition-transform duration-500 ease-[cubic-bezier(0.4,0.2,0.2,1)] hover:rotate-[360deg]"
        />
      ) : (
        <Moon
          size={20}
          className="text-[#2563eb] transition-transform duration-500 ease-[cubic-bezier(0.4,0.2,0.2,1)] hover:rotate-[360deg]"
        />
      )}
    </button>
  );
}