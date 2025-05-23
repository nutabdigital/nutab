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

import React from "react";
import "./SectionWrapper.css";

interface SectionWrapperProps {
  children: React.ReactNode; // The content to be rendered inside the section
  className?: string; // Optional: Additional custom classes for styling
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className }) => {
  return (
    <section className={`section-wrapper ${className || ""}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;