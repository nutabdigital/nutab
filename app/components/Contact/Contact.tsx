"use client";

import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section className="contact-container contact-two-col">
      {/* Left Column */}
      <div className="contact-left">
        <h3>
          Let's Talk{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h3>
        <p>
          Have a project in mind or just want to say hi?
          <br />
          Fill out the form and we'll get back to you shortly.
        </p>
        <div className="contact-info">
          <p>
            <strong>Email:</strong> nutabdigital@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> (587) 707-2495
          </p>
          <p>
            <strong>Location:</strong> Calgary, Alberta
          </p>
        </div>
      </div>
      {/* Right Column */}
      <div className="contact-right">
        <div className="overlay"></div>

        <form
          action="https://formspree.io/f/manrbogw"
          method="POST"
          className="contact-form"
        >
          {/* Name input field */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="name-textarea"
              required
            />
          </div>

          {/* Email input field */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email-textarea"
              required
            />
          </div>

          {/* Message input field */}
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              className="message-textarea"
              required
            />
          </div>

          {/* Submit button to send the form */}
          <button className="submit-button"><span>Send</span></button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
