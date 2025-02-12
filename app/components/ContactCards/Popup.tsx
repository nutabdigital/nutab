import React from "react";
import "./Card.css";

interface Contact {
  name: string;
  phone: string;
  email: string;
  company: string;
  website: string;
  photo: string;
}

interface PopupProps {
  contact: Contact;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ contact, onClose }) => {
  const generateVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
ORG:${contact.company}
TEL:${contact.phone}
EMAIL:${contact.email}
URL:${contact.website}
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${contact.name}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={onClose}>✖</button>
        <h2>{contact.name}</h2>
        <img src={contact.photo} alt={contact.name} className="popup-photo" />
        <h1>{contact.email}</h1>
        <h1>{contact.phone}</h1>
        {/* <h1>📧 {contact.email}</h1>
        <h1>📞 {contact.phone}</h1>
        <p>🏢 {contact.company}</p>
        <p>🌐 <a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.website}</a></p> */}
        <button className="save-contact-button" onClick={generateVCard}>Save Contact</button>
      </div>
    </div>
  );
};

export default Popup;
