"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext"; // Import the ThemeProvider
import Loader from "./components/Loader/Loader";
// import Model from "./components/Model/Model";
import Header from "./components/Header/Header";  //should remove soon
import Tagline from "./components/Tagline/Tagline";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
import "./styles/page.css";
import Popup from "./components/ContactCards/Popup";

interface Contact {
  name: string;
  phone: string;
  email: string;
  company: string;
  website: string;
  photo: string;
}

// Contact database
const contacts: Record<string, Contact> = {
  navjot: {
    name: "Navjot Saran",
    phone: "(587) 707-2495",
    email: "navjots@nutab.ca",
    company: "Nutab",
    website: "https://www.nutab.ca",
    photo: "/photos/nav-headshot.png",

  },
  fysal: {
    name: "Fysal Beauferris",
    phone: "(587) 888-6755",
    email: "fysalb@nutab.ca",
    company: "Nutab",
    website: "https://www.nutab.ca",
    photo: "/photos/fysal-headshot.png",
  },
};

const HomePage: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [currentSection, setCurrentSection] = useState<number>(0);

  useEffect(() => {
    const sections = document.querySelectorAll(".page-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionNumber = parseInt(entry.target.getAttribute("data-section") || "0");
            setCurrentSection(sectionNumber);
            console.log(`Currently in section: ${sectionNumber}`);
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Check URL for NFC contact (only runs once on mount)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const contactParam = urlParams.get("contact"); // Get "contact" from URL
    if (contactParam && contacts[contactParam]) {
      setSelectedContact(contacts[contactParam]); // Show corresponding popup
    }
  }, []);

  return (
    <ThemeProvider>
      <Header currentSection={currentSection} />
      <Loader />
      <div className="background-cloudy"></div>

      <main className="home-page">
        {/* <Model currentSection={currentSection} /> */}

        <div className="content-wrapper">
          <section id="tagline" className="page-section fade-section align-right" data-section="0">
            <Tagline />
          </section>

          <section id="about" className="page-section fade-section align-left" data-section="1">
            <About currentSection={currentSection} />
          </section>

          <section id="services" className="page-section fade-section align-right" data-section="2">
            <Services />
          </section>

          <section id="team" className="page-section fade-section align-left" data-section="3">
            {/* Clicking team member passes contact info */}
            <Team onSelectContact={setSelectedContact} />
          </section>

          {/* Show popup if a contact is selected */}
          {selectedContact && (
            <Popup contact={selectedContact} onClose={() => setSelectedContact(null)} />
          )}

          <section id="contact" className="page-section fade-section align-right" data-section="4">
            <Contact />
          </section>
        </div>

        {/* <Footer /> */}
      </main>
    </ThemeProvider>
  );
};

export default HomePage;
