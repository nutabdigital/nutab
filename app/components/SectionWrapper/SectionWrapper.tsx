"use client";
/**
 * SectionWrapper Component
 *
 * This component is a reusable wrapper for sections of a webpage. It provides
 * a consistent structure and styling for sections, while allowing customization
 * through additional class names and child components.
 *
 * Props:
 * - `children` (React.ReactNode): The content to be rendered inside the section.
 * - `className` (string, optional): Additional custom CSS class names to apply
 *   to the section wrapper. Defaults to an empty string if not provided.
 *
 * Example Usage:
 * ```tsx
 * <SectionWrapper className="custom-class">
 *   <h1>Welcome to the Section</h1>
 *   <p>This is some content inside the section.</p>
 * </SectionWrapper>
 * ```
 *
 * Styling:
 * - The base styling for this component is defined in the `SectionWrapper.css` file.
 * - Additional styles can be applied by passing a `className` prop.
 */

import React, { useEffect } from "react";
import "./SectionWrapper.css";

interface SectionWrapperProps {
  children: React.ReactNode; // The content to be rendered inside the section
  className?: string; // Optional: Additional custom classes for styling
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className }) => {

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      document.body.classList.add("scrolling");
      clearTimeout(scrollTimeout);

      // ⏱ extend this delay from 100 ms → 2000 ms or so
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove("scrolling");
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);



  return (
    <section className={`section-wrapper ${className || ""}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;