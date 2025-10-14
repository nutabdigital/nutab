"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./ServiceHeroSection.css";
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton";

export interface HeroSectionIcon {
  icon: React.ReactNode;
  label: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: React.ReactNode;
  icons?: HeroSectionIcon[];
  showCTA?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  icons,
  showCTA = true,
}: HeroSectionProps) {
  const [showOrbs, setShowOrbs] = useState<boolean>(true);

  useEffect(() => {
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
    <section className="hero-section">
      <div className="overlay"></div>

      {showOrbs && (
        <>
          <motion.div
            className="floating-orb orb-purple"
            animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="floating-orb orb-blue"
            animate={{ y: [0, 30, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtext">{subtitle}</p>

        {icons && (
          <div className="icon-row">
            {icons.map(({ icon, label }, idx) => (
              <motion.div whileHover={{ scale: 1.1 }} className="icon-box" key={idx}>
                {icon}
                <p>{label}</p>
              </motion.div>
            ))}
          </div>
        )}

        {showCTA && (
          <motion.div whileHover={{ scale: 1.05 }} className="cta-container">
            <GetQuoteButton />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
