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

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Scrolls smoothly to a specific section of the page
  const handleScroll = (sectionId: string) => {
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
        <span className={`mobile-menu ${isNavOpen ? 'toggle' : ''}`} onClick={toggleNav}>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </span>
      </div>

      {/* Mobile right navigation menu */}
      <nav className={`mob-right-nav ${isNavOpen ? "open-nav" : ""}`}>
        {/* Close button for mobile navigation */}
        <ul>
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
              href="#services" // Link to 'services' section
              onClick={(e) => {
                e.preventDefault();
                handleScroll("services");
              }}
            >
              Services
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
