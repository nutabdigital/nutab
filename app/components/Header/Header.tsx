"use client";

import React, { useState, useEffect, useRef, useMemo, memo } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { scrollToSection } from "@/app/utils/scrollToSection";
import { useHeaderSection } from "@/app/context/HeaderSectionContext";
import { useTheme } from "@/app/context/ThemeContext";

// Color schemes for different pages (hex values for light and dark modes)
const pageColors: Record<string, { light: string; dark: string }> = {
  "/services/app-development": { light: "#4f46e5", dark: "#818cf8" }, // indigo
  "/services/web-design": { light: "#2563eb", dark: "#60a5fa" }, // blue
  "/services/seo-marketing": { light: "#16a34a", dark: "#4ade80" }, // green
  "/services/ecommerce": { light: "#059669", dark: "#34d399" }, // emerald
  "/services/ai-automation": { light: "#9333ea", dark: "#c084fc" }, // purple
  "/services/it-consulting": { light: "#d97706", dark: "#fbbf24" }, // amber
  "/services/brand-design": { light: "#db2777", dark: "#f472b6" }, // pink
  "/services/photo-media": { light: "#e11d48", dark: "#fb7185" }, // rose
  "/portfolio": { light: "#dc2626", dark: "#f87171" }, // red
};

// Default colors (used on main page and services index)
const defaultColors = { light: "#005DFF", dark: "#A78BFA" };

// Helper function to normalize pathname (remove trailing slash)
const normalizePath = (path: string | null): string => {
  if (!path) return "";
  return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
};

// Helper function to get colors for current page
const getPageColor = (pathname: string | null, isDark: boolean): string => {
  if (!pathname) return isDark ? defaultColors.dark : defaultColors.light;
  const normalizedPath = normalizePath(pathname);
  const colors = pageColors[normalizedPath] || defaultColors;
  return isDark ? colors.dark : colors.light;
};

// Updated servicesDropdown with reorganized services
const servicesDropdown = [
  { name: "Custom App & Software Development", link: "/services/app-development" },
  { name: "Web Design & Development", link: "/services/web-design" },
  { name: "SEO & Digital Marketing", link: "/services/seo-marketing" },
  { name: "E-Commerce Development", link: "/services/ecommerce" },
  { name: "AI & Automation Solutions", link: "/services/ai-automation" },
  { name: "Business & IT Consulting", link: "/services/it-consulting" },
  { name: "Graphic & Brand Design", link: "/services/brand-design" },
  { name: "Photography & Media Production", link: "/services/photo-media" },
];

// NavLink component with animated underline indicator - memoized for performance
interface NavLinkProps {
  href: string;
  isActive: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
  className?: string;
  accentColor: string;
}

const NavLink = memo<NavLinkProps>(({ href, isActive, onClick, children, className = "", accentColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-transparent border-none cursor-pointer text-base font-medium transition-colors duration-300 ${className}`}
      style={{ color: isActive || isHovered ? accentColor : undefined }}
    >
      {children}
      {/* CSS transition underline - replaces framer-motion for better performance */}
      <span
        className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: accentColor,
          width: isActive ? "100%" : 0,
        }}
      />
    </a>
  );
});

// NavLinkWrapper for Link components with animated underline - memoized for performance
interface NavLinkWrapperProps {
  href: string;
  isActive: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  accentColor: string;
}

const NavLinkWrapper = memo<NavLinkWrapperProps>(({ href, isActive, onClick, children, className = "", accentColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-transparent border-none cursor-pointer text-base font-medium transition-colors duration-300 ${className}`}
      style={{ color: isActive || isHovered ? accentColor : undefined }}
    >
      {children}
      {/* CSS transition underline - replaces framer-motion for better performance */}
      <span
        className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: accentColor,
          width: isActive ? "100%" : 0,
        }}
      />
    </Link>
  );
});

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  // Get theme from context
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Get currentSection from context
  const { currentSection, setCurrentSection } = useHeaderSection();

  // Check if on homepage
  const isHomePage = pathname === "/";

  // Check if on a service page
  const isOnServicePage = pathname?.startsWith("/services");

  // Check if on portfolio page (handle trailing slash)
  const isOnPortfolioPage = pathname === "/portfolio" || pathname === "/portfolio/";

  // Get page-specific accent color - memoized to prevent recalculation on every render
  const accentColor = useMemo(() => getPageColor(pathname, isDark), [pathname, isDark]);

  // Reset currentSection when navigating away from homepage
  useEffect(() => {
    if (!isHomePage) {
      setCurrentSection(0);
    }
  }, [pathname, isHomePage, setCurrentSection]);

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

  // Reset services hover/open state when navigating to a new page
  useEffect(() => {
    setServicesHovered(false);
    setIsServicesOpen(false);
  }, [pathname]);

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

  const isServicesActive = isOnServicePage || (isHomePage && currentSection === 2);

  return (
    <header className="fixed top-0 bg-[var(--background)] text-[var(--foreground)] shadow-[0_4px_12px_rgba(3,3,3,0.198)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.752)] z-[11] w-screen max-h-[70px] max-sm:h-[66px] max-sm:max-h-[66px]">
      <div className="mx-auto p-4 flex justify-between items-center w-full max-w-[1200px] max-lg:min-[601px]:p-2 max-lg:min-[601px]:max-w-[900px]">
        {/* Logo on the left */}
        <div className="min-[600px]:cursor-pointer">
          <a href="/" onClick={(e) => handleScroll(e, "tagline")} className="inline-flex items-end gap-2 no-underline">
            {/* Single logo based on theme - saves HTTP request */}
            <img
              className="block pl-6"
              src={isDark ? "/icons/logo-dark.svg" : "/icons/logo-light.svg"}
              alt="New Tab Digital Logo"
              width={75}
              height={57}
              loading="eager"
              decoding="sync"
            />
            <span className="flex flex-col leading-[1.05] max-[725px]:hidden" aria-label="Nutab Digital">
              <span className="font-bold text-[1.1rem]">Nutab</span>
              <span className="font-bold text-[1.1rem]">Digital</span>
            </span>
          </a>
        </div>

        {/* Desktop navigation links */}
        <nav className="hidden min-[600px]:flex gap-8 max-lg:min-[601px]:gap-1">
          <NavLink
            href="#about"
            isActive={isHomePage && currentSection === 1}
            onClick={(e) => handleScroll(e, "about")}
            className="max-lg:min-[601px]:text-[0.95rem] max-lg:min-[601px]:ml-2 max-lg:min-[601px]:px-2 max-lg:min-[601px]:py-1"
            accentColor={accentColor}
          >
            About
          </NavLink>
          <div
            className="relative inline-block"
            onMouseEnter={() => { setIsServicesOpen(true); setServicesHovered(true); }}
            onMouseLeave={() => { setIsServicesOpen(false); setServicesHovered(false); }}
            tabIndex={0}
          >
            {/* Navigate to /services when clicked */}
            <Link
              href="/services"
              className="relative bg-transparent border-none cursor-pointer text-base font-medium transition-colors duration-300 flex items-center max-lg:min-[601px]:text-[0.95rem] max-lg:min-[601px]:ml-2 max-lg:min-[601px]:px-2 max-lg:min-[601px]:py-1"
              style={{ color: isServicesActive || servicesHovered ? accentColor : undefined }}
              onClick={() => setIsServicesOpen(false)}
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
            >
              <span>Services</span>
              <ChevronDown
                className={`inline-block ml-2 align-middle transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                size={18}
                strokeWidth={2}
              />
              {/* CSS transition underline - replaces framer-motion for better performance */}
              <span
                className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ease-in-out"
                style={{
                  backgroundColor: accentColor,
                  width: isServicesActive ? "100%" : 0,
                }}
              />
            </Link>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  className="absolute top-full left-0 bg-white dark:bg-[#181818] min-w-[220px] shadow-[0_4px_12px_rgba(3,3,3,0.15)] rounded-lg z-[100]"
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
                      <Link
                        href={service.link}
                        className="block py-3 px-5 no-underline transition-colors duration-200 bg-transparent hover:bg-[#0067e7] hover:text-white dark:text-white dark:hover:bg-[#0067e7]"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <span className="text-[0.9rem]">{service.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink
            href="#team"
            isActive={isHomePage && currentSection === 3}
            onClick={(e) => handleScroll(e, "team")}
            className="max-lg:min-[601px]:text-[0.95rem] max-lg:min-[601px]:ml-2 max-lg:min-[601px]:px-2 max-lg:min-[601px]:py-1"
            accentColor={accentColor}
          >
            Team
          </NavLink>
          <NavLink
            href="#contact"
            isActive={isHomePage && currentSection === 4}
            onClick={(e) => handleScroll(e, "contact")}
            className="max-lg:min-[601px]:text-[0.95rem] max-lg:min-[601px]:ml-2 max-lg:min-[601px]:px-2 max-lg:min-[601px]:py-1"
            accentColor={accentColor}
          >
            Contact
          </NavLink>
            <NavLinkWrapper
            href="/portfolio"
            isActive={!!isOnPortfolioPage}
            className="max-lg:min-[601px]:text-[0.95rem] max-lg:min-[601px]:ml-2 max-lg:min-[601px]:px-2 max-lg:min-[601px]:py-1"
            accentColor={accentColor}
          >
            Portfolio
          </NavLinkWrapper>
        </nav>

        {/* Mobile controls: DarkModeToggle + Mobile Menu Button */}
        <div className="flex items-center gap-2 flex-row min-[600px]:mr-12">
          <DarkModeToggle />
          <button
            className="hidden max-sm:flex bg-black/5 dark:bg-white/10 border-none cursor-pointer p-2 rounded-full items-center justify-center w-10 h-10 ml-0 transition-colors duration-300 active:bg-black/5 focus:bg-black/5 focus:outline-none"
            ref={menuBtnRef}
            onClick={toggleNav}
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
          >
            {isNavOpen ? (
              <X size={32} className="text-[#222] dark:text-white w-5 h-5 pointer-events-none transition-colors duration-200" />
            ) : (
              <Menu size={32} className="text-[#222] dark:text-white w-5 h-5 pointer-events-none transition-colors duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile right navigation menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.nav
            ref={navRef}
            className="hidden max-sm:block fixed right-0 top-[66px] bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] dark:bg-gradient-to-br dark:from-indigo-500 dark:via-purple-500 dark:to-violet-500 h-fit w-screen max-w-[55vw] z-[100] will-change-transform overflow-x-hidden rounded-bl-[20px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            aria-label="Primary"
          >
            <ul className="list-none p-[0.2rem] w-screen max-w-full">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScroll(e, "about")}
                  className="no-underline py-2 px-4 block text-[#03045e] dark:text-white rounded-md transition-colors duration-200 hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                {/* Services with expandable sublist */}
                <button
                  className="flex items-center w-full bg-transparent border-none text-[#03045e] dark:text-white font-inherit py-2 px-4 cursor-pointer shadow-none outline-none rounded-md transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();

                    if (!isMobileServicesOpen) {
                      // First tap: open sublist only
                      setIsMobileServicesOpen(true);
                    } else {
                      // Second tap: go to Services page and close the drawer
                      setIsMobileServicesOpen(false);
                      setIsNavOpen(false);
                      router.push("/services");
                    }
                  }}
                  aria-expanded={isMobileServicesOpen}
                >
                  <span className="flex-1 text-left">
                    Services{" "}
                    <ChevronDown
                      className={`inline-block ml-2 align-middle transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                      size={18}
                      strokeWidth={2}
                    />
                  </span>
                </button>


                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.ul
                      className="mt-0 text-[0.80rem] overflow-hidden flex flex-col gap-1"
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
                          <Link
                            href={service.link}
                            className="whitespace-normal break-words overflow-wrap-anywhere max-w-[50vw] block bg-transparent dark:bg-transparent text-[#03045e] dark:text-white rounded-md transition-colors duration-200 py-2 px-4"
                            onClick={() => setIsNavOpen(false)}
                          >
                            {service.name}
                          </Link>

                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => handleScroll(e, "team")}
                  className="no-underline py-2 px-4 block text-[#03045e] dark:text-white rounded-md transition-colors duration-200 hover:underline"
                >
                  Our Team
                </a>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  onClick={() => setIsNavOpen(false)}
                  className="no-underline py-2 px-4 block text-[#03045e] dark:text-white rounded-md transition-colors duration-200 hover:underline"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "contact")}
                  className="no-underline py-2 px-4 block text-[#03045e] dark:text-white rounded-md transition-colors duration-200 hover:underline"
                >
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
