import React from "react";
import { X, Download } from "lucide-react";
import "./ContactPopup.css";

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

const ContactPopup: React.FC<PopupProps> = ({ contact, onClose }) => {
  const generateVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:${contact.name}
FN:${contact.name}
ORG:${contact.company}
TEL;TYPE=CELL:${contact.phone}
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
        <button className="popup-close-btn" onClick={onClose}>
          <X size={30} />
        </button>
        <div className="popup-photo" style={{ backgroundImage: `url(${contact.photo})` }} aria-label={`${contact.name} headshot`} />
        <p className="popup-team-name">{contact.name}</p>
        <p className="popup-team-role">Co-Founder</p>
        <p className="popup-team-position">Software Developer</p>
        <p className="popup-team-description">B.Sc. in Computer Science, University of Calgary</p>
        <p className="popup-contact-info"><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p className="popup-contact-info">{contact.phone}</p>
        <button className="popup-save-contact-button" onClick={generateVCard}>
          <Download size={18} />
          Save Contact
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;
