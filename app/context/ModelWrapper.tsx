"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Model from "../components/Model/Model";
import { useSectionContext } from "./SectionContext";

const ModelWrapper: React.FC = () => {
  const pathname = usePathname();
  const { currentSection } = useSectionContext();
  const [section, setSection] = useState<number>(0);

  useEffect(() => {
    if (pathname === "/") {
      // On the homepage, dynamically update the currentSection
      const sections = document.querySelectorAll(".page-section");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionNumber = parseInt(entry.target.getAttribute("data-section") || "0");
              setSection(sectionNumber);
            }
          });
        },
        { threshold: 0.2 }
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    } else {
      // On service pages, use the context value
      setSection(currentSection);
    }
  }, [pathname, currentSection]);

  return <Model currentSection={section} />;
};

export default ModelWrapper;