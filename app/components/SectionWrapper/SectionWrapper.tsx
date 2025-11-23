"use client";

import React from "react";
import "./SectionWrapper.css";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className }) => {
  return <section className={`section-wrapper ${className ? className : ""}`.trim()}>{children}</section>;
};

export default SectionWrapper;