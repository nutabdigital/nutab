"use client";

import React, { useEffect, useState } from "react";

const lightBg = `radial-gradient(circle at 20% 30%, rgba(240, 248, 255), transparent 60%), radial-gradient(circle at 80% 70%, rgba(230, 247, 255), transparent 60%), #ffffff`;
const darkBg = `radial-gradient(circle at 100% 70%, rgba(109, 36, 255, 0.418), transparent 50%), radial-gradient(circle at 20% 30%, rgba(122, 82, 252, 0.222), transparent 40%), radial-gradient(circle at 50% 50%, rgba(143, 110, 251, 0.156), transparent 60%), #000000`;

const GradientBackground: React.FC = () => {
  const [bg, setBg] = useState<string>(lightBg);

  useEffect(() => {
    const getTheme = () => document.documentElement.getAttribute("data-theme");
    const update = () => {
      const theme = getTheme();
      setBg(theme === "dark" ? darkBg : lightBg);
    };

    update();

    const obs = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "data-theme") {
          update();
        }
      }
    });

    obs.observe(document.documentElement, { attributes: true });
    return () => obs.disconnect();
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none"
      style={{ background: bg }}
    />
  );
};

export default GradientBackground;