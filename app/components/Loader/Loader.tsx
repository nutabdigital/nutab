"use client";

import React, { useEffect } from "react";
import "./Loader.css"; // Import the CSS file

const Loader: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add("loaded");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  );
};

export default Loader;
