"use client";

import React from "react";
import "./Card.css";

interface FysalCardProps {
  closePopup: () => void;
}

const FysalCard: React.FC<FysalCardProps> = ({ closePopup }) => {
    const handleSaveContact = () => {
        const vCardData = `BEGIN:VCARD
    VERSION:3.0
    FN:Fysal Beauferris
    ORG:Nutab
    TITLE:Software Developer
    TEL;TYPE=work,voice:(587) 888-6755
    EMAIL:fysalb@nutab.ca
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
            <h2>Fysal Beauferris</h2>
            <div
            className="photo"
            style={{ backgroundImage: 'url("/photos/fysal-headshot.png")' }}
            ></div>
            <h1>Email: fysalb@nutab.ca</h1>
            <h1>Phone: (587) 888-6755</h1>
            <button className="save-contact-button" onClick={handleSaveContact}>
              Save Contact
            </button>
          </div>
        </div>
      );
    };

export default FysalCard;
