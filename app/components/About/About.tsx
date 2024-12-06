import React, { useEffect, useRef, useState } from "react";
import "./About.css";

// currentSection from page.tsx
interface AboutProps {
  currentSection: number;
}

const About: React.FC<AboutProps> = ({ currentSection }) => {

  const handleMouseEnter = () => {
    // Emit a custom event when mouse enters
    window.dispatchEvent(new CustomEvent('about-hover', { detail: { isHovering: true } }));
  };

  const handleMouseLeave = () => {
    // Emit a custom event when mouse leaves
    window.dispatchEvent(new CustomEvent('about-hover', { detail: { isHovering: false } }));
  };

  const [touchData, setTouchData] = useState<{ startY: number; endY: number | null }>({
    startY: 0,
    endY: null,
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Disable scroll behavior while transitioning
  const disableScroll = () => {
    document.body.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.pointerEvents = "";
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const touchStartHandler = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        setTouchData((prev) => ({
          ...prev,
          startY: e.touches[0].clientY,
        }));
      }
    };

    const touchMoveHandler = (e: TouchEvent) => {
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchData.startY - touchEndY;

      if (deltaY > 0 && !isTransitioning && currentSection == 1) {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          e.preventDefault(); // Prevent the default scroll behavior
          // Prevent scroll and trigger transition logic
          setIsTransitioning(true);
          disableScroll();
          // Scroll to the Services section smoothly
          servicesSection.scrollIntoView({ behavior: "smooth" });
          // Add your scroll transition logic here
          setTimeout(() => {
            servicesSection.scrollIntoView({ behavior: "auto" }); // Ensure alignment
            setIsTransitioning(false);
            enableScroll();
          }, 600); // Adjust timeout to match scroll speed

        }

      }

      setTouchData((prev) => ({ ...prev, endY: touchEndY }));
    };

    document.addEventListener("touchstart", touchStartHandler, { passive: false });
    document.addEventListener("touchmove", touchMoveHandler, { passive: false });

    return () => {
      document.removeEventListener("touchstart", touchStartHandler);
      document.removeEventListener("touchmove", touchMoveHandler);
    };
  }, [touchData, isTransitioning]);







  return (
    <section className="about-section">
      <div className="about-container">

        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="about-description">
          At <strong>NuTab</strong><sup>+</sup>, we see every project as an opportunity to innovate and exceed expectations
        </p>

        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="about-description">
          High-quality software that drives client success through expertise, reliability, and efficiency
        </p>

        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="about-description">
          Custom solutions that connect businesses with technology designed to grow with them
        </p>

      </div>
    </section>
  );
};

export default About;
