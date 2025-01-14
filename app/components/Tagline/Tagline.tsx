// Tagline.tsx
import React from "react";
import "./Tagline.css"; // Import the CSS file for styling

const Tagline: React.FC = () => {
  // Smooth scroll to the 'About' section when the button is clicked
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="tagline-section">
      <div className="tagline-container">
        <h2 className="tagline-title">
        Open a New Tab,<br/>Start Something Extraordinary.
        </h2>
        <p className="tagline-description" >Elevating your brand through custom software solutions.</p>
        <div className="tag-buttons">
          <button
            className="learn-more-button"
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Tagline;