"use client";

import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useRouter } from "next/navigation"; // Import Next.js router
import "./Header.css";

// Interface defining props for the Header component
interface HeaderProps {
  currentSection?: number; // The index of the current section in view (optional for service pages)
}

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Access theme and toggleTheme from context
  const router = useRouter(); // Initialize Next.js router

  // Function to determine CSS classes for nav links based on the current section
  const navLinkClasses = (sectionIndex: number) =>
    `nav-link ${currentSection === sectionIndex ? "active" : ""}`;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Scrolls smoothly to a specific section of the page or redirects to the main page
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    if (window.location.pathname !== "/") {
      // If not on the main page, redirect to the main page with a hash for the section
      router.push(`/#${sectionId}`);
    } else {
      // If already on the main page, scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsNavOpen(false); // Close the mobile menu if open
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo that scrolls to the 'tagline' section on click */}
        <div className="logo">
          <a href="/" onClick={(e) => handleScroll(e, "tagline")}>
            <img
              src="/icons/logo-light.svg"
              alt="New Tab Digital Light Logo"
              className="logo-light"
            />
            <img
              src="/icons/logo-dark.svg"
              alt="New Tab Digital Dark Logo"
              className="logo-dark"
            />
          </a>
        </div>

        {/* Desktop navigation links */}
        <nav className="nav-links">
          <a
            href="#about"
            className={navLinkClasses(1)}
            onClick={(e) => handleScroll(e, "about")}
          >
            About
          </a>
          <a
            href="#services"
            className={navLinkClasses(2)}
            onClick={(e) => handleScroll(e, "services")}
          >
            Services
          </a>
          <a
            href="#team"
            className={navLinkClasses(3)}
            onClick={(e) => handleScroll(e, "team")}
          >
            Team
          </a>
          <a
            href="#contact"
            className={navLinkClasses(4)}
            onClick={(e) => handleScroll(e, "contact")}
          >
            Contact
          </a>
        </nav>

        {/* Theme toggle */}
        <div className="theme-toggle-container">
          <label className="theme-toggle">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="theme-toggle-input"
            />
            <span className="slider">
              <span className="slider-icon sun">☀️</span>
              <span className="slider-icon moon">🌙</span>
            </span>
          </label>
        </div>

        {/* Mobile menu button */}
        <span
          className={`mobile-menu ${isNavOpen ? "toggle" : ""}`}
          onClick={toggleNav}
        >
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </span>
      </div>

      {/* Mobile right navigation menu */}
      <nav className={`mob-right-nav ${isNavOpen ? "open-nav" : ""}`}>
        <ul>
          <li>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "services")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#team"
              onClick={(e) => handleScroll(e, "team")}
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
            >
              Start A Project
            </a>
          </li>
  
          {/* Theme toggle moved out of <a> */}
          <li>
            <div className="theme-toggle-container">
              <label className="theme-toggle">
                <input
                  type="checkbox"
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                  className="theme-toggle-input"
                />
                <span className="slider">
                  <span className="slider-icon sun">☀️</span>
                  <span className="slider-icon moon">🌙</span>
                </span>
              </label>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
