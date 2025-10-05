import React, { useEffect, useRef, useState } from "react";
import "./Team.css";

// Contact structure
interface Contact {
  name: string;
  phone: string;
  email: string;
  company: string;
  website: string;
  photo: string;
}

interface TeamProps {
  onSelectContact: (contact: Contact) => void;
}

// Contact database
const contacts: Record<string, Contact> = {
  navjot: {
    name: "Navjot Saran",
    phone: "(587) 707-2495",
    email: "navjots@nutab.ca",
    company: "Nutab",
    website: "https://www.nutab.ca",
    photo: "/photos/nav-headshot.webp",
  },
  fysal: {
    name: "Fysal Beauferris",
    phone: "(587) 888-6755",
    email: "fysalb@nutab.ca",
    company: "Nutab",
    website: "https://www.nutab.ca",
    photo: "/photos/fysal-headshot.webp",
  },
};

const Team: React.FC<TeamProps> = ({ onSelectContact }) => {
  return (
    <section className="team-section">
      <h2 className="team-header">Our Team</h2>
      <p className="team-subtitle">
        Meet the passionate developers behind NuTab Digital
      </p>
      <div className="grid-container">
        <div className="team-member" onClick={() => onSelectContact(contacts.navjot)}>
          <img
            className="photo"
            src="/photos/nav-headshot.webp"
            alt="Navjot Saran headshot"
            loading="lazy"
          />
          <p className="team-name">Navjot Saran</p>
          <p className="team-role">Co-Founder</p>
          <p className="team-position">Software Developer</p>
          <p className="team-description">
            B.Sc. in Computer Science, University of Calgary
          </p>
        </div>
        <div className="team-member" onClick={() => onSelectContact(contacts.fysal)}>
          <img
            className="photo"
            src="/photos/fysal-headshot.webp"
            alt="Fysal Beauferris headshot"
            loading="lazy"
          />
          <p className="team-name">Fysal Beauferris</p>
          <p className="team-role">Co-Founder</p>
          <p className="team-position">Software Developer</p>
          <p className="team-description">
            B.Sc. in Computer Science, University of Calgary
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
