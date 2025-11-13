"use client";
import React, { useEffect } from "react";
import "./About.css";
import { Wrench, HeartHandshake, Globe } from "lucide-react";

const About: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Defer IntersectionObserver setup for better initial load performance
    const timeoutId = setTimeout(() => {
      const mm = window.matchMedia("(max-width: 600px)");
      if (!mm.matches) return; // only run on mobile

      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(".about-item")
      );
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              el.classList.add("inview");
            } else {
              el.classList.remove("inview");
            }
          });
        },
        { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );

      elements.forEach((el) => observer.observe(el));

      const mqListener = (e: MediaQueryListEvent | MediaQueryList) => {
        // if leaving mobile, cleanup classes and observer
        if (!("matches" in e ? e.matches : (e as MediaQueryList).matches)) {
          observer.disconnect();
          document
            .querySelectorAll(".about-item.inview")
            .forEach((n) => n.classList.remove("inview"));
        }
      };

      // attach listener (support older addListener fallback)
      if ((mm as any).addEventListener)
        (mm as any).addEventListener("change", mqListener);
      else (mm as any).addListener(mqListener);
    }, 100); // Small 100ms delay to prioritize initial render

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-title">
          <div className="about-cols">
            <img
              src="/icons/maple-leaf-icon.svg"
              alt="Canadian maple leaf icon representing local service"
              className="iconcan"
              loading="lazy"
              width="32"
              height="32"
            />
            <h2 className="about-main-title">Built in Canada, Designed for Growth</h2>
          </div>
          <h2 className="about-subtitle">
            Your Digital Partner from Coast to Coast
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-item">
            <div className="about-cols">
              <Wrench className="about-icon" aria-label="wrench" size={38} />
              <h3>What We Do</h3>
            </div>
            <p>
              We create tailored solutions for businesses—whether it’s building
              a custom website, improving your SEO, or developing mobile apps to
              engage your customers.
            </p>
          </div>
          <div className="about-item">
            <div className="about-cols">
              <HeartHandshake
                className="about-icon"
                aria-label="handshake"
                size={38}
              />
              <h3>Why Choose Us</h3>
            </div>
            <p>
              Our team works face-to-face with Canadian businesses to understand
              their needs and deliver results that drive growth. We build
              long-term relationships, not just solutions.
            </p>
          </div>
          <div className="about-item">
            <div className="about-cols">
              <Globe className="about-icon" aria-label="globeicon" size={38} />
              <h3>Our Vision</h3>
            </div>
            <p>
              To empower Canadian businesses with innovative, scalable, and
              effective digital strategies that boost visibility and success in
              today’s competitive market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
