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
          Open New Possibilities with NuTab<sup>+</sup>
        </h2>
        <p className="tagline-description">
          Empowering businesses with innovative software solutions that drive
          growth and transform ideas into reality. From web development to
          digital transformation, we build the tools that shape the future.
          Evolving with you—because your ideas deserve dynamic, scalable
          solutions.
</p>
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