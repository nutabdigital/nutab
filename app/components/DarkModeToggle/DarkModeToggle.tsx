import { useTheme } from "../../context/ThemeContext";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import "./DarkModeToggle.css";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Optionally, avoid rendering until theme is set
  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <button
      onClick={toggleTheme}
      className={`darkmode-toggle ${theme === "dark" ? "dark" : "light"}`}
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <Sun size={20} className="darkmode-toggle-icon darkmode-toggle-sun" />
      ) : (
        <Moon size={20} className="darkmode-toggle-icon darkmode-toggle-moon" />
      )}
    </button>
  );
}