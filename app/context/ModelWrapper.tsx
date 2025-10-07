// ModelWrapper.tsx
"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Model from "../components/Model/Model";
import { useModelState } from "./ModelStateProvider";

const ModelWrapper: React.FC = () => {
  const pathname = usePathname();
  const { setState } = useModelState();

  useEffect(() => {
    if (pathname === "/") {
      // On the homepage, dynamically update the currentSection
      const sections = document.querySelectorAll(".page-section");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionNumber = parseInt(entry.target.getAttribute("data-section") || "0");
              setState({ currentSection: sectionNumber });
            }
          });
        },
        { threshold: 0.2 }
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    } else {
      // On service pages, set currentSection to 2
      setState({ currentSection: 2 });
    }
  }, [pathname, setState]);

  return <Model useModelState={useModelState} />;
};

export default ModelWrapper;