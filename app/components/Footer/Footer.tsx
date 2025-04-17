import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="socials-icons">
            <a href="https://www.linkedin.com/company/nutab-digital-inc/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/nutab_digital/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575073651409" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
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
