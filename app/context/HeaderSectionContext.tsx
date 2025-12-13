"use client";
import React, { createContext, useContext, useState } from "react";

type HeaderSectionContextType = {
  currentSection: number;
  setCurrentSection: (section: number) => void;
};

const HeaderSectionContext = createContext<HeaderSectionContextType | undefined>(undefined);

export function HeaderSectionProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <HeaderSectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </HeaderSectionContext.Provider>
  );
}

export function useHeaderSection() {
  const context = useContext(HeaderSectionContext);
  if (!context) throw new Error("useHeaderSection must be used within HeaderSectionProvider");
  return context;
}
