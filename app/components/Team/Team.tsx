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
    photo: "/photos/nav-headshot.png",
  },
  fysal: {
    name: "Fysal Beauferris",
    phone: "(587) 888-6755",
    email: "fysalb@nutab.ca",
    company: "Nutab",
    website: "https://www.nutab.ca",
    photo: "/photos/fysal-headshot.png",
  },
};


const Team: React.FC<TeamProps> = ({ onSelectContact }) => {

  
  return (
    <section className="team-section">
      <h2 className="team-header">Our Team</h2>
      <div className="grid-container">
        <div className="team-member" onClick={() => onSelectContact(contacts.navjot)}>
          <div
            className="photo"
            style={{ backgroundImage: 'url("/photos/nav-headshot.png")' }}
            aria-label="Navjot Saran headshot"
          ></div>
          <p className="team-name">Navjot Saran</p>
          <p className="team-role">
            <strong>Co-Founder</strong>
          </p>
          <p className="team-description">Software Developer</p>
          <p className="team-description">
          B.Sc. in Computer Science, University of Calgary
          </p>
        </div>
        <div className="team-member" onClick={() => onSelectContact(contacts.fysal)}>
          <div
            className="photo"
            style={{ backgroundImage: 'url("/photos/fysal-headshot.png")' }}
            aria-label="Fysal Beauferris headshot"
          ></div>
          <p className="team-name">Fysal Beauferris</p>
          <p className="team-role">
            <strong>Co-Founder</strong>
          </p>
          <p className="team-description">Software Developer</p>
          <p className="team-description">
          B.Sc. in Computer Science, University of Calgary
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
