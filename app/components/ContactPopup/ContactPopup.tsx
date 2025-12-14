import React from "react";
import { X, Download } from "lucide-react";

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
    <div
      className="fixed inset-0 w-screen h-screen flex justify-center items-center z-[1000] backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="flex flex-col gap-4 items-center bg-white p-8 rounded-2xl relative max-w-[400px] w-[80vw] text-center shadow-lg backdrop-blur-xl text-[var(--foreground)] dark:bg-black dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close contact popup"
          className="absolute top-2.5 right-4 bg-transparent border-0 p-0 cursor-pointer flex items-center justify-center text-[#222] hover:text-[#0067e7] w-10 h-10 transition-colors dark:text-white dark:hover:text-sky-400"
        >
          <X size={30} />
        </button>

        <div
          className="w-[200px] h-[200px] bg-cover bg-center rounded-full mt-4 border-4 border-[rgba(0,103,231,0.5)]"
          style={{ backgroundImage: `url(${contact.photo})` }}
          aria-label={`${contact.name} headshot`}
        />

        <p className="text-2xl font-normal">{contact.name}</p>

        <p className="bg-[#0067e7] rounded-full px-3 py-1 text-white inline-block text-base font-normal">Co-Founder</p>

        <p className="text-[1.05rem] font-normal text-[#0067e7] opacity-[0.95]">Software Developer</p>

        <p className="opacity-[0.85]">B.Sc. in Computer Science, University of Calgary</p>

        <p className="text-base opacity-[0.85]"><a className="text-[#0067e7] opacity-[0.95] no-underline break-all" href={`mailto:${contact.email}`}>{contact.email}</a></p>

        <p className="text-base opacity-[0.85]">{contact.phone}</p>

        <button
          className="px-6 py-3 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] text-slate-50 rounded-full text-base font-normal cursor-pointer transition-transform duration-150 transform hover:-translate-y-0.5 shadow-lg flex items-center gap-2 dark:from-[#3f37c9] dark:to-[#3b82f6]"
          onClick={generateVCard}
        >
          <Download size={18} />
          Save Contact
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;
