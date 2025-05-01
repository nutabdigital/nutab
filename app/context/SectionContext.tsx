"use client";
// filepath: /app/context/SectionContext.tsx
import React, { createContext, useContext, useState } from "react";

const SectionContext = createContext<{
  currentSection: number;
  setCurrentSection: (section: number) => void;
} | null>(null);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
};