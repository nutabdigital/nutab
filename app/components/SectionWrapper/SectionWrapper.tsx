import React from "react";
import "./SectionWrapper.css";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string; // Allow additional custom classes
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className }) => {
  return <section className={`section-wrapper ${className || ""}`}>{children}</section>;
};

export default SectionWrapper;