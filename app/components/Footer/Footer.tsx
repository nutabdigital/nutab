import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} NuTab Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
