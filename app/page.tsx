"use client";

import React, { useEffect, useState, Suspense } from "react";
// import Loader from "./components/Loader/Loader";
import Tagline from "./components/Tagline/Tagline";
// Lazy load below-the-fold components for better initial load performance
const About = React.lazy(() => import("./components/About/About"));
const Services = React.lazy(() => import("./components/ServicesSummary/Services"));
const Team = React.lazy(() => import("./components/Team/Team"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const ContactPopup = React.lazy(() => import("./components/ContactPopup/ContactPopup"));
const Reviews = React.lazy(() => import("./components/Reviews/Reviews"));
import { useModelState } from "./context/ModelStateProvider"; // adjust path if needed
import { useHeaderSection } from "./context/HeaderSectionContext";
import { NUTAB_BUSINESS } from "../data/calgaryLocalization";

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

  const { setState } = useModelState();
  const { setCurrentSection } = useHeaderSection();

  useEffect(() => {
    const sections = document.querySelectorAll(".page-section");

    // Guard for older browsers that don't support IntersectionObserver
    if (typeof IntersectionObserver === "undefined") {
      // Fallback: make all sections visible immediately
      sections.forEach((section) => section.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionNumber = parseInt(
              entry.target.getAttribute("data-section") || "0"
            );

            // Update model state for 3D model interactions
            setState({ currentSection: sectionNumber });
            // Update header section for nav highlighting
            setCurrentSection(sectionNumber);

            // Removed console.log for production performance
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
  }, [setState, setCurrentSection]);

  return (
    <>
      {/* WebSite JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: NUTAB_BUSINESS.name,
            url: NUTAB_BUSINESS.url,
            description: "Calgary's premier custom software development, web design, and digital marketing agency serving businesses across Alberta.",
            publisher: {
              "@type": "Organization",
              "@id": `${NUTAB_BUSINESS.url}/#organization`
            }
          }),
        }}
      />
      {/* Page section styles moved to globals.css for SSR */}
      {/* <Loader /> */}
      <div className="gradient-background"></div>
      <main className="home-page">
        <div className="content-wrapper">
          <section
            id="tagline"
            className="page-section align-right"
            data-section="0"
          >
            {/* Ensure Tagline renders a visible <h1>. If it doesn't, add a visible H1 here */}
            {/* <h1>Custom Software Solutions | NuTab</h1> */}
            <Tagline />
          </section>
          <section
            id="about"
            className="page-section fade-section align-left"
            data-section="1"
          >
            <Suspense fallback={
              <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ opacity: 0.3 }}>Loading...</div>
              </div>
            }>
              <About />
            </Suspense>
          </section>

          <section
            id="services"
            className="page-section fade-section align-right"
            data-section="2"
          >
            <Suspense fallback={
              <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ opacity: 0.3 }}>Loading...</div>
              </div>
            }>
              <Services />
            </Suspense>
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


          <section
            id="reviews"
            className="page-section fade-section align-right"
            data-section="4"
          >
            <Suspense fallback={<h2>Client Reviews</h2>}>
              <Reviews />
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
            data-section="5"
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
