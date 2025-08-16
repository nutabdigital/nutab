import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <div className="contact-grid">
          {/* Left Side - Info */}
          <div className="contact-info">
            <h2 className="contact-title">Let’s Talk 👋</h2>
            <p className="contact-description">
              Have a project in mind or just want to say hi? Fill out the form and we’ll get back to you shortly.
            </p>
            <div className="contact-item">
              <Mail className="icon" />
              <span>hello@yourcompany.com</span>
            </div>
            <div className="contact-item">
              <Phone className="icon" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <MapPin className="icon" />
              <span>Calgary, Alberta</span>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <input placeholder="Your Name" className="form-input" />
              <input placeholder="Your Email" type="email" className="form-input" />
              <textarea placeholder="Your Message" rows={5} className="form-textarea" />
              <button type="submit" className="form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}