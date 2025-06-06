"use client";

import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section className="contact-container">
      <h2>Contact Us</h2>
      {/* Contact form that submits data to FormSubmit using a provided endpoint */}
      <form
        action="https://formsubmit.co/7757f614a3d5884564ea3b58f465f7b1" 
        method="POST"
        className="contact-form"
      >
        {/* Honeypot field to help prevent spam by bots; styled to be invisible */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        {/* Enable captcha functionality for bot protection */}
        <input type="hidden" name="_captcha" value="true" />

        {/* Autoresponse message sent to users upon successful form submission */}
        <input
          type="hidden"
          name="_autoresponse"
          value="Hello,&#10;&#10;Thank you for reaching out to Nutab Digital! We’ve received your message and are excited to connect with you. One of our team members will review your inquiry and get back to you within 1-2 business days.&#10;&#10;If you have any urgent questions, please don’t hesitate to reach out at nutabdigital@gmail.com.&#10;&#10;Best regards,&#10;The Nutab Digital Team&#10;Nutab Digital"
        />

        {/* Set email subject for easier identification of incoming messages */}
        <input type="hidden" name="_subject" value="New submission!" />

        {/* Format submission data in a table for improved readability */}
        <input type="hidden" name="_template" value="table"/>

        {/* Name input field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" className="name-textarea" required />
        </div>

        {/* Email input field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" className="email-textarea" required />
        </div>

        {/* Message input field */}
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" className="message-textarea" required />
        </div>

        {/* Submit button to send the form */}
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
