// Tagline.tsx
import React from "react";
import "./Tagline.css";
import { scrollToSection } from "@/app/utils/scrollToSection";

const Tagline: React.FC = () => {

  return (
    <section className="tagline-section">
      <div className="tagline-container">
        {/* SEO H1 - visually hidden but readable by search engines */}
        <h1 className="seo-h1">Custom Software Development & Web Design in Calgary | NuTab Digital</h1>
        
        {/* Orbs for visual effect */}
        <div className="floating-orb orb-purple tagline-orb"></div>
        <div className="floating-orb orb-blue tagline-orb"></div>
        <p className="tagline-title" aria-hidden="true">
          Open a New Tab,
        </p>
        <p className="gradient-title" aria-hidden="true">
          Start Something Extraordinary
        </p>
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