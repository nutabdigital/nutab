"use client";

import React, { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Tagline from "./components/Tagline/Tagline";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/page.css";

// Main functional component for the HomePage
const HomePage: React.FC = () => {
  // State to track the current section visible on the page
  const [currentSection, setCurrentSection] = useState<number>(0);
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

  // Handler to update hover status
  const handleHoverChange = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  // Effect to manage visibility of sections on scroll using Intersection Observer
  useEffect(() => {
    // Select all elements with the 'page-section' class
    const sections = document.querySelectorAll(".page-section");

    // Intersection Observer setup for fade-in/fade-out animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update the current section index when a section is in view
            setCurrentSection(
              parseInt(entry.target.getAttribute("data-section") || "0")
            );
            // Add 'visible' class for fade-in effect
            entry.target.classList.add("visible");
          } else {
            // Remove 'visible' class for fade-out effect
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.4 } // Trigger when 40% of section is in view
    );

    // Observe each section for visibility changes
    sections.forEach((section) => observer.observe(section));
    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Header component */}
      <Header currentSection={currentSection} />

      {/* Loader component */}
      <Loader />

      {/* Background layer for aesthetic effect */}
      <div className="background-cloudy"></div>

      {/* Main content wrapper */}
      <main className="home-page">
        {/* Background component, receives current section and hover state as props */}
        <Background currentSection={currentSection} hovered={isHovered} />

        {/* Content wrapper for sections */}
        <div className="content-wrapper">
          {/* Tagline Section */}
          <section
            id="tagline"
            className="page-section fade-section align-right"
            data-section="0"
          >
            <Tagline />
          </section>

          {/* About Section */}
          <section
            id="about"
            className="page-section fade-section align-left"
            data-section="1"
          >
            <About onHoverChange={handleHoverChange} />
          </section>

          {/* Services Section */}
          <section
            id="services"
            className="page-section fade-section align-right"
            data-section="2"
          >
            <Services />
          </section>

          {/* Team Section */}
          <section
            id="team"
            className="page-section fade-section align-left"
            data-section="3"
          >
            <Team />
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="page-section fade-section align-right"
            data-section="4"
          >
            <Contact />
          </section>
        </div>

        {/* Footer component */}
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
