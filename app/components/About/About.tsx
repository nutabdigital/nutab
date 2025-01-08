import React, { useEffect, useRef, useState } from "react";
import "./About.css";

// currentSection from page.tsx
interface AboutProps {
  currentSection: number;
}

const About: React.FC<AboutProps> = ({ currentSection }) => {
  const handleMouseEnter = () => {
    // Emit a custom event when mouse enters
    window.dispatchEvent(
      new CustomEvent("about-hover", { detail: { isHovering: true } })
    );
  };

  const handleMouseLeave = () => {
    // Emit a custom event when mouse leaves
    window.dispatchEvent(
      new CustomEvent("about-hover", { detail: { isHovering: false } })
    );
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-title">
          <h2>Our Principles</h2>
          <p>Discover the values that drive <strong>NuTab</strong><sup>+</sup> Digital.</p>
        </div>
        <div className="about-grid">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="about-item"
          >
            <h3>Innovation</h3>
            <p>
              Every project is an opportunity to innovate, exceed expectations,
              and deliver transformative solutions.
            </p>
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="about-item"
          >
            <h3>Excellence</h3>
            <p>
              We craft high-quality software that drives client success through
              expertise, reliability, and efficiency.
            </p>
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="about-item"
          >
            <h3>Scalability</h3>
            <p>
              Our custom solutions connect businesses with technology designed
              to evolve and grow with them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
