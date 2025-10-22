"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Layers, Code2 } from "lucide-react";
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton";
import "./ServiceHeroSection.css";

type HeroSectionProps = {
  title: string;
  subtitle: React.ReactElement;
  icons: { icon: React.ReactElement; label: string }[];
  showCTA: boolean;
};

export default function HeroSection(props: HeroSectionProps) {
  const { title, subtitle, icons, showCTA } = props;
  const [showOrbs, setShowOrbs] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.innerWidth <= 700) {
      // Hide orbs initially on mobile
      setShowOrbs(false);

      const handleScroll = () => {
        setShowOrbs(true);
        window.removeEventListener("scroll", handleScroll);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="services-hero">
      <div className="overlay" />

      {showOrbs && (
        <>
          <motion.div
            className="floating-orb orb-purple"
            animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="floating-orb orb-blue"
            animate={{ y: [0, 30, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </>
      )}

      <div className="services-hero-container">
        <div className="services-hero-content">
          <h1 className="services-hero-title">{title}</h1>
          <p className="services-hero-subtitle">{subtitle}</p>

          {icons && (
            <div className="services-hero-features">
              {icons.map(({ icon, label }, idx) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="services-hero-feature-item"
                  key={idx}
                >
                  <div className="services-hero-feature-icon">
                    <span className="services-hero-icon">{icon}</span>
                  </div>
                  <p className="services-hero-feature-label">{label}</p>
                </motion.div>
              ))}
            </div>
          )}

          {showCTA && (
            <div className="services-hero-buttons">
              <motion.div whileHover={{ scale: 1.05 }} className="cta-container">
                <GetQuoteButton />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
