"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./Header.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { scrollToSection } from "@/app/utils/scrollToSection";

// Interface defining props for the Header component
interface HeaderProps {
  currentSection?: number; // The index of the current section in view (optional for service pages)
}

// Updated servicesDropdown with Graphic & Brand Design
const servicesDropdown = [
  { name: "Custom Software Solutions", link: "/services/custom-software" },
  {
    name: "Mobile & Web App Development",
    link: "/services/mobile-web-app-development",
  },
  { name: "SEO & Digital Marketing", link: "/services/seo-digital-marketing" },
  { name: "E-Commerce Development", link: "/services/ecommerce-development" },
  { name: "AI & Automation Solutions", link: "/services/ai-automation" },
  { name: "Business & IT Consulting", link: "/services/business-it-consulting" },
  { name: "Graphic & Brand Design", link: "/services/graphic-brand-design" },
  { name: "Photography & Media Production", link: "/services/photography-media-production" }, // Added new service
  // Added new service
];

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  // Function to determine CSS classes for nav links based on the current section
  const navLinkClasses = (sectionIndex: number) =>
    `nav-link ${currentSection === sectionIndex ? "active" : ""}`;

  const toggleNav = () => setIsNavOpen((open) => !open);

  // Scrolls smoothly to a specific section of the page or redirects to the main page
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    setIsNavOpen(false); // close menu early

    if (window.location.pathname !== "/") {
      // push to index with hash then scroll after navigation
      // Next.js app-router's router.push returns void, so use a timeout fallback
      router.push(`/#${sectionId}`);
      // small timeout to let the new page render, then scroll
      setTimeout(() => scrollToSection(sectionId, 10), 200);
    } else {
      // already on homepage — scroll straight away
      scrollToSection(sectionId, 10);
    }
  };


  // Reset mobile services sublist when nav closes
  useEffect(() => {
    if (!isNavOpen) setIsMobileServicesOpen(false);
  }, [isNavOpen]);

  useEffect(() => {
    if (!isNavOpen) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      // If click is inside nav or menu button, do nothing
      if (
        (navRef.current && navRef.current.contains(event.target as Node)) ||
        (menuBtnRef.current && menuBtnRef.current.contains(event.target as Node))
      ) {
        return;
      }
      setIsNavOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isNavOpen]);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo on the left */}
        <div className="logo">
          <a href="/" onClick={(e) => handleScroll(e, "tagline")}>
            <img
              src="/icons/logo-light.svg"
              alt="New Tab Digital Light Logo"
              className="logo-light"
              fetchPriority="high"
            />
            <img
              src="/icons/logo-dark.svg"
              alt="New Tab Digital Dark Logo"
              className="logo-dark"
              fetchPriority="high"
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
          <div
            className="nav-link-dropdown"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            tabIndex={0}
          >
            <a
              href="#services"
              className={navLinkClasses(2)}
              onClick={(e) => handleScroll(e, "services")}
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>Services</span>
              <ChevronDown
                className={`menu-arrow${isServicesOpen ? " open" : ""}`}
                size={18}
                strokeWidth={2}
              />
            </a>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {servicesDropdown.map((service, idx) => (
                    <motion.div
                      key={service.link}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: 0.07 * idx }}
                    >
                      <Link href={service.link} className="dropdown-item">
                        {service.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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

        {/* Mobile controls: DarkModeToggle + Mobile Menu Button */}
        <div className="mobile-controls">
          <DarkModeToggle />
          <button
            className="mobile-menu-btn"
            ref={menuBtnRef}
            onClick={toggleNav}
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
          >
            {isNavOpen ? (
              <X size={32} className="mobile-menu-icon" />
            ) : (
              <Menu size={32} className="mobile-menu-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile right navigation menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.nav
            ref={navRef}
            className="mob-right-nav open-nav"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }} // <-- slide out to right when closing
            transition={{ duration: 0.3 }}
          >
            <ul>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, "about")}>
                  About
                </a>
              </li>
              <li>
                {/* Services with expandable sublist */}
                <button
                  className="mobile-services-toggle"
                  onClick={(e) => {
                    e.preventDefault();

                    // Toggle the sublist
                    setIsMobileServicesOpen((open) => !open);

                    if (!isMobileServicesOpen) {
                      // Only scroll if we're opening the menu
                      if (window.location.pathname === "/") {
                        scrollToSection("services", 10);
                      } else {
                        router.push("/#services");
                        setTimeout(() => scrollToSection("services", 10), 200);
                      }
                    }
                    // If sublist was already open, clicking again just closes it
                  }}
                  aria-expanded={isMobileServicesOpen}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    background: "none",
                    border: "none",
                    color: "inherit",
                    font: "inherit",
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ flex: 1, textAlign: "left" }}>
                    Services{" "}
                    <ChevronDown
                      className={`menu-arrow${isMobileServicesOpen ? " open" : ""}`}
                      size={18}
                      strokeWidth={2}
                    />
                  </span>
                </button>


                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.ul
                      className="mobile-services-sublist" // <-- REMOVE .open here
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {servicesDropdown.map((service, idx) => (
                        <motion.li
                          key={service.link}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ delay: 0.07 * idx }}
                        >
                          <Link href={service.link} className="mobile-services-link" onClick={() => setIsNavOpen(false)}>
                            {service.name}
                          </Link>

                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <a href="#team" onClick={(e) => handleScroll(e, "team")}>
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                  Start A Project
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
