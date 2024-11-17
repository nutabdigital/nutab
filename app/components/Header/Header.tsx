"use client";

import React, { useState, useEffect } from "react";
import "./Header.css";

// Interface defining props for the Header component
interface HeaderProps {
  currentSection: number; // The index of the current section in view
}

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  // Function to determine CSS classes for nav links based on the current section
  const navLinkClasses = (sectionIndex: number) =>
    `nav-link ${currentSection === sectionIndex ? "active" : ""}`;

  // State to manage visibility of mobile navigation
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Scrolls smoothly to a specific section of the page
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Effect to add event listeners for mobile navigation open/close functionality
  useEffect(() => {
    const menu = document.querySelector(".menu"); // Mobile menu button
    const close = document.querySelector(".close"); // Mobile nav close button
    const nav = document.querySelector(".mob-right-nav"); // Mobile nav menu

    if (menu && close && nav) {
      // Open mobile nav on menu button click
      menu.addEventListener("click", () => setIsNavOpen(true));
      // Close mobile nav on close button click
      close.addEventListener("click", () => setIsNavOpen(false));

      // Cleanup event listeners on component unmount
      return () => {
        menu.removeEventListener("click", () => setIsNavOpen(true));
        close.removeEventListener("click", () => setIsNavOpen(false));
      };
    }
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo that scrolls to the 'tagline' section on click */}
        <div className="logo">
          <a onClick={() => handleScroll("tagline")}>
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
          <button
            className={navLinkClasses(1)} // Add 'active' class if current section is 'About'
            onClick={() => handleScroll("about")}
          >
            About
          </button>
          <button
            className={navLinkClasses(2)} // Add 'active' class if current section is 'Services'
            onClick={() => handleScroll("services")}
          >
            Services
          </button>
          <button
            className={navLinkClasses(3)} // Add 'active' class if current section is 'Our Team'
            onClick={() => handleScroll("team")}
          >
            Our Team
          </button>
          <button
            className="start-project-btn" // Button for starting a project inquiry
            onClick={() => handleScroll("contact")}
          >
            Start a Project
          </button>
        </nav>

        {/* Mobile menu button */}
        <img src="../icons/menu.svg" className="menu" alt="menu" />
      </div>

      {/* Mobile right navigation menu */}
      <nav className={`mob-right-nav ${isNavOpen ? "open-nav" : ""}`}>
        {/* Close button for mobile navigation */}
        <img src="../icons/close.svg" className="close" alt="close" />
        <ul>
          <li>
            <a
              className="start-project-li"
              href="#contact" // Link to 'contact' section
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact");
              }}
            >
              Start A Project
            </a>
          </li>
          <li>
            <a
              href="#about" // Link to 'about' section
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#team" // Link to 'team' section
              onClick={(e) => {
                e.preventDefault();
                handleScroll("team");
              }}
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href="#services" // Link to 'services' section
              onClick={(e) => {
                e.preventDefault();
                handleScroll("services");
              }}
            >
              Services
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
