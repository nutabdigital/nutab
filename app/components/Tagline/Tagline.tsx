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
          Empowering Change with <strong>NuTab</strong><sup>+</sup>. Innovation Starts with <strong>NuTab</strong><sup>+</sup>.
          Open New Horizons with <strong>NuTab</strong><sup>+</sup>. Reshaping the Future, One Scroll at a Time.
          Evolving Ideas, Dynamic Solutions with <strong>NuTab</strong><sup>+</sup>. Where Innovation Takes Shape.
          Constantly Evolving, Just Like Your Ideas. Shaping Your Next Digital Chapter.
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