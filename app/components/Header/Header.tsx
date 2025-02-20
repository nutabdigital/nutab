"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Header.css";

// Interface defining props for the Header component
interface HeaderProps {
  currentSection: number; // The index of the current section in view
}

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  // State to manage visibility of mobile navigation
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Access theme and toggleTheme from context
  // Function to determine CSS classes for nav links based on the current section
  const navLinkClasses = (sectionIndex: number) =>
    `nav-link ${currentSection === sectionIndex ? "active" : ""}`;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Scrolls smoothly to a specific section of the page
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Notify start of smooth-scroll
      window.dispatchEvent(new Event("smooth-scroll-start"));

      section.scrollIntoView({ behavior: "smooth" });

      // Notify end of smooth-scroll
      setTimeout(() => {
        window.dispatchEvent(new Event("smooth-scroll-end"));
      }, 1000); // Adjust timeout based on smooth-scroll duration
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo that scrolls to the 'tagline' section on click */}
        <div className="logo">
          <a href="#home" onClick={(e) => handleScroll(e, "tagline")}>
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
  
        {/* Theme toggle (fixed structure) */}
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
              onClick={(e) => {
                e.preventDefault();
                handleScroll(e, "about");
                setIsNavOpen(false);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(e, "services");
                setIsNavOpen(false);
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(e, "team");
                setIsNavOpen(false);
              }}
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              className="start-project-li"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(e, "contact");
                setIsNavOpen(false);
              }}
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
