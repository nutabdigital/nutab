import React from "react";
import "./About.css";


const About: React.FC = () => {

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
            <h1>Built in Canada, Designed for Growth</h1>
          </div>
          <div className="about-subtitle">
            Your Digital Partner from Coast to Coast
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
              We create tailored solutions for businesses—whether it’s building a custom website,
              improving your SEO, or developing mobile apps to engage your customers.
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
              Our team works face-to-face with Canadian businesses to understand their needs
              and deliver results that drive growth. We build long-term relationships, not just solutions.
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
