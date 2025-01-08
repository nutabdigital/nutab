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

const HomePage: React.FC = () => {
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

  return (
    <>
      <Header currentSection={currentSection} />
      <Loader />
      <div className="background-cloudy"></div>

      <main className="home-page">
        <Background currentSection={currentSection} />

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
            <Team currentSection={currentSection} />
          </section>

          <section id="contact" className="page-section fade-section align-right" data-section="4">
            <Contact />
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default HomePage;
