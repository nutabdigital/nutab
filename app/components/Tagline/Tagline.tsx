// Tagline.tsx
import React from "react";
import "./Tagline.css";
import { scrollToSection } from "@/app/utils/scrollToSection";

const Tagline: React.FC = () => {

  return (
    <section className="tagline-section">
      <div className="tagline-container">
        {/* Orbs for visual effect */}
        <div className="floating-orb orb-purple tagline-orb"></div>
        <div className="floating-orb orb-blue tagline-orb"></div>
        <h1 className="tagline-title">
          Open a New Tab,
        </h1>
        <h2 className="gradient-title">
          Start Something Extraordinary
        </h2>
        <p className="tagline-description">
          Elevating your brand through custom software solutions
        </p>
        <div className="tag-buttons">
          <button
            className="learn-more-button"
            onClick={() => scrollToSection("about", 10)} // optional small offset
          ><span>Learn More</span></button>
        </div>
      </div>
    </section>
  );
};

export default Tagline;