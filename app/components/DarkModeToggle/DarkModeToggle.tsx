import { useTheme } from "../../context/ThemeContext";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import "./DarkModeToggle.css";

export default function DarkModeToggle() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Display-only indicator showing current system theme
  return (
    <div
      className={`darkmode-toggle ${theme === "dark" ? "dark" : "light"}`}
      aria-label={`Current theme: ${theme}`}
      title={`System theme: ${theme}`}
    >
      {theme === "dark" ? (
        <Moon size={20} className="darkmode-toggle-icon darkmode-toggle-moon" />
      ) : (
        <Sun size={20} className="darkmode-toggle-icon darkmode-toggle-sun" />
      )}
    </div>
  );
}