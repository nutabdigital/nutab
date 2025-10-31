import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X logo
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="socials-icons">
            <a
              href="https://www.linkedin.com/company/nutab-digital-inc/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NuTab Digital LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/nutab_digital/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NuTab Digital Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61575073651409"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NuTab Digital Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://x.com/NuTabDigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NuTab Digital on X (Twitter)"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
          <p className="rights-text">
            © {new Date().getFullYear()} NuTab Digital Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
