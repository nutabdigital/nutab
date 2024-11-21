import React from "react";
import "./Team.css";

const Team: React.FC = () => {
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
