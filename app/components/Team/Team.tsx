import React, { useEffect, useRef, useState } from "react";
import "./Team.css";

// currentSection from page.tsx
interface TeamProps {
  currentSection: number;
}

const Team: React.FC<TeamProps> = ({ currentSection }) => {

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

      if (deltaY < 0 && !isTransitioning && currentSection == 3) {
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
    <section className="team-section">
      <h2 className="team-header">Our Team</h2>
      <div className="grid-container">
        <div className="team-member">
          <div
            className="photo"
            style={{ backgroundImage: 'url("/photos/nav-headshot.png")' }}
          ></div>
          <p className="team-name">Navjot Saran</p>
          <p className="team-role">
            <strong>Co-Founder</strong>
          </p>
          <p className="team-description">Software Developer</p>
          <p className="team-description">
            University of Calgary Computer Science
          </p>
        </div>
        <div className="team-member">
          <div
            className="photo"
            style={{ backgroundImage: 'url("/photos/fysal-headshot.png")' }}
          ></div>
          <p className="team-name">Fysal Beauferris</p>
          <p className="team-role">
            <strong>Co-Founder</strong>
          </p>
          <p className="team-description">Software Developer</p>
          <p className="team-description">
            University of Calgary Computer Science
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
