"use client";

import React, { useEffect, useState, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Tagline from "./components/Tagline/Tagline";
import About from "./components/About/About";
import Services from "./components/ServicesSummary/Services";
const Team = React.lazy(() => import("./components/Team/Team"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
import "./styles/page.css"; // Only keep if needed for above-the-fold
const ContactPopup = React.lazy(() => import("./components/ContactPopup/ContactPopup"));
import { useModelState } from "./context/ModelStateProvider"; // adjust path if needed

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
    photo: "/photos/nav-headshot.webp", // updated to webp
  },
  fysal: {
    name: "Fysal Beauferris",
    phone: "(587) 888-6755",
    email: "fysalb@nutab.ca",
    company: "Nutab",
    website: "https://www.nutab.ca",
    photo: "/photos/fysal-headshot.webp", // updated to webp
  },
};

const HomePage: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [currentSection, setCurrentSection] = useState<number>(0);

  const { state: modelRef, setState } = useModelState();

  useEffect(() => {
    const sections = document.querySelectorAll(".page-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionNumber = parseInt(
              entry.target.getAttribute("data-section") || "0"
            );

            // Directly set currentSection
            setState({ currentSection: sectionNumber });

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
  }, [setState]);

  return (
    <>
      <Loader />
      <div className="gradient-background"></div>

      {/* === Hero placeholder for LCP === */}
      <section className="hero-placeholder" aria-hidden="false">
        <h1 className="seo-lcp-text">Custom Software Solutions | Nutab</h1>
      </section>
      {/* === End Hero === */}

      <main className="home-page">
        <div className="content-wrapper">
          <section
            id="tagline"
            className="page-section fade-section align-right"
            data-section="0"
          >
            <Tagline />
          </section>

          <section
            id="about"
            className="page-section fade-section align-left"
            data-section="1"
          >
            <About />
          </section>

          <section
            id="services"
            className="page-section fade-section align-right"
            data-section="2"
          >
            <Services />
          </section>

          <section
            id="team"
            className="page-section fade-section align-left"
            data-section="3"
          >
            {/* Clicking team member passes contact info */}
            <Suspense fallback={<h2>Our Team</h2>}>
              <Team onSelectContact={setSelectedContact} />
            </Suspense>
          </section>

          {/* Show popup if a contact is selected */}
          {selectedContact && (
            <Suspense fallback={<h2>Co-Founder</h2>}>
              <ContactPopup
                contact={selectedContact}
                onClose={() => setSelectedContact(null)}
              />
            </Suspense>
          )}

          <section
            id="contact"
            className="page-section fade-section align-right"
            data-section="4"
          >
            <Suspense fallback={<h2>Contact Us</h2>}>
              <Contact />
            </Suspense>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
