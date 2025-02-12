"use client";

import React from "react";
import "./Card.css";

interface NavjotCardProps {
  closePopup: () => void;
}

const NavjotCard: React.FC<NavjotCardProps> = ({ closePopup }) => {
    const handleSaveContact = () => {
        const vCardData = `BEGIN:VCARD
    VERSION:3.0
    FN:Navjot Saran
    ORG:Nutab
    TITLE:Software Developer
    TEL;TYPE=work,voice:(587) 707-2495
    EMAIL:navjots@nutab.ca
    URL:https://www.nutab.ca
    END:VCARD`;
    
        const blob = new Blob([vCardData], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "contact.vcf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      };
    
      return (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>✖</button>
            <h2>Navjot Saran</h2>
            <div
            className="photo"
            style={{ backgroundImage: 'url("/photos/nav-headshot.png")' }}
            ></div>
            <h1>Email: navjots@nutab.ca</h1>
            <h1>Phone: (587) 707-2495</h1>
            <button className="save-contact-button" onClick={handleSaveContact}>
              Save Contact
            </button>
          </div>
        </div>
      );
    };

export default NavjotCard;
