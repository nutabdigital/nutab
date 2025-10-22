// ModelWrapper.tsx
"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useModelState } from "./ModelStateProvider";

// lazy-load the heavy Model component (code-split, client-only)
const Model = dynamic(() => import("../components/Model/Model"), { ssr: false, loading: () => null });

const ModelWrapper: React.FC = () => {
  const pathname = usePathname();
  const { setState } = useModelState();

  useEffect(() => {
    if (pathname === "/") {
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
      setState({ currentSection: 2 });
    }
  }, [pathname, setState]);

  return <Model useModelState={useModelState} />;
};

export default ModelWrapper;