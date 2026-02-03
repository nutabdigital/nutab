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
      {/* Aggregate reviews JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "NuTab",
            url: "https://www.nutab.ca",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.nutab.ca/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "3",
            },
          }),
        }}
      />
      <style jsx global>{`
        /* Inlined from app/styles/page.css */
        html { scroll-behavior: smooth; }

        .page-section { scroll-margin-top: 0; }

        .home-page { position: relative; }

        .content-wrapper { z-index: 3; }

        .page-section { min-height: 100vh; margin-bottom: 10vh; display: flex; align-items: center; position: relative; z-index: 2; scroll-margin-top: 100px; }

        .fade-section { opacity: 0; transition: opacity 0.7s ease, transform 0.6s ease; }
        .fade-section.visible { opacity: 1; }

        .gradient-background { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 0; pointer-events: none; background: radial-gradient(circle at 20% 30%, rgba(240, 248, 255), transparent 60%), radial-gradient(circle at 80% 70%, rgba(230, 247, 255), transparent 60%), #ffffff; }

        @media (min-width: 600px) {
          .page-section.align-right { justify-content: flex-end; }
          .page-section.align-left { justify-content: flex-start; }
        }

        @media (max-width:600px) {
          .page-section { margin-top: 0 !important; margin-bottom: 20vh !important; min-height: 100vh; display: flex; justify-content: center; align-items: stretch; }
        }

        [data-theme="dark"] .gradient-background { background: radial-gradient(circle at 100% 70%, rgba(109, 36, 255, 0.418), transparent 50%), radial-gradient(circle at 20% 30%, rgba(122, 82, 252, 0.222), transparent 40%), radial-gradient(circle at 50% 50%, rgba(143, 110, 251, 0.156), transparent 60%), #000000; }
      `}</style>
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
