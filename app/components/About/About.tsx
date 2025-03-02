import React, { useEffect, useRef, useState } from "react";
import "./About.css";

// currentSection from page.tsx
interface AboutProps {
  currentSection: number;
}

const About: React.FC<AboutProps> = ({ currentSection }) => {
  // const handleMouseEnter = () => {
  //   // Emit a custom event when mouse enters
  //   window.dispatchEvent(
  //     new CustomEvent("about-hover", { detail: { isHovering: true } })
  //   );
  // };

  // const handleMouseLeave = () => {
  //   // Emit a custom event when mouse leaves
  //   window.dispatchEvent(
  //     new CustomEvent("about-hover", { detail: { isHovering: false } })
  //   );
  // };

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-title">
          <div className="about-cols">
            <img
              src="/icons/maple-leaf-icon.svg"
              alt="mapleleaf"
              className="iconcan"
            />
            <p>Built in Canada, Designed for Growth.<br />
              Your Digital Partner from Coast to Coast.</p>
          </div>

        </div>
        <div className="about-grid">
          <div
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            className="about-item"
          >
            <div className="about-cols">
              <img
                src="/icons/wrench-tool-icon.svg"
                alt="wrench"
                className="about-icon"
              />
              <h3>What We Do</h3>
            </div>

            <p>
              We create tailored solutions for businesses—whether it’s building a custom website,
              improving your SEO, or developing mobile apps to engage your customers.
            </p>
          </div>
          <div
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            className="about-item"
          >
            <div className="about-cols">
              <img
                src="/icons/hand-shake-icon.svg"
                alt="handshake"
                className="about-icon"
              />
              <h3>Why Choose Us</h3>
            </div>
            <p>
              Our team works face-to-face with Canadian businesses to understand their needs
              and deliver results that drive growth. We build long-term relationships, not just solutions.
            </p>
          </div>
          <div
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            className="about-item"
          >
            <div className="about-cols">
              <img
                src="/icons/globe-icon.svg"
                alt="globeicon"
                className="about-icon"
              />
              <h3>Our Vision</h3>
            </div>
            <p>
              To empower Canadian businesses with innovative, scalable, and effective digital
              strategies that boost visibility and success in today’s competitive market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
