import React, { useEffect, useRef, useState } from "react";
import "./About.css";

// currentSection from page.tsx
interface AboutProps {
  currentSection: number;
}

const About: React.FC<AboutProps> = ({ currentSection }) => {

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
            <h1>Calgary Software Development Excellence.<br />
              Your Trusted Alberta Digital Partner.</h1>
          </div>

        </div>
        <div className="about-grid">
          <div
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
              We create tailored software solutions for Calgary businesses—whether it's building custom software applications,
              improving your SEO, or developing mobile and web apps to engage your customers. Our Calgary-based team delivers
              innovative software development services across Alberta.
            </p>
          </div>
          <div
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
              Our team works directly with Calgary and Alberta businesses to understand their unique software development needs
              and deliver results that drive growth. We build long-term partnerships with local companies, not just software solutions.
            </p>
          </div>
          <div
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
              To empower Calgary and Alberta businesses with innovative, scalable, and effective software development
              strategies that boost visibility and success in today's competitive market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;