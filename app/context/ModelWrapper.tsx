"use client";

import React, { useEffect, useState, Suspense } from "react";
import { usePathname } from "next/navigation";
const Model = React.lazy(() => import("../components/Model/Model"));

const ModelWrapper: React.FC = () => {
  const pathname = usePathname();
  const [currentSection, setCurrentSection] = useState<number>(0);

  useEffect(() => {
    if (pathname === "/") {
      // On the homepage, dynamically update the currentSection
      const sections = document.querySelectorAll(".page-section");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionNumber = parseInt(entry.target.getAttribute("data-section") || "0");
              setCurrentSection(sectionNumber);
            }
          });
        },
        { threshold: 0.2 }
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    } else {
      // On service pages, set currentSection to 2
      setCurrentSection(2);
    }
  }, [pathname]);

  return (
    <Suspense fallback={null}>
      <Model currentSection={currentSection} />
    </Suspense>
  );
};

export default ModelWrapper;