"use client";
import { useEffect } from "react";
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
  useEffect(() => {
    if (typeof document === "undefined") return;
    const id = "nt-tomorrow-font";
    if (document.getElementById(id)) return;

    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;600;700&display=swap";
    document.head.appendChild(link);
    // keep stylesheet persistent
  }, []);

  return (
    <section className="nt-hero">
      <div className="nt-hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="nt-hero-content"
        >
          <h1 className="nt-hero-title">
            Transform Your Ideas into Intelligent Software
          </h1>

          <p className="nt-hero-sub">
            NuTab Digital engineers{" "}
            <strong>high-performance custom software</strong> that fuels innovation
            and drives results. Whether it’s a{" "}
            <strong>custom-built app</strong>, <strong>enterprise-grade solution</strong>, or{" "}
            <strong>SaaS platform</strong>, we turn complexity into clarity — and
            ideas into reality.
          </p>

          <div className="nt-features">
            <div className="nt-feature">
              <div className="nt-feature-icon bg-blue">
                <Code2 />
              </div>
              <h3 className="nt-feature-title">Custom Development</h3>
              <p className="nt-feature-desc">
                Tailored applications designed to solve your toughest business
                challenges.
              </p>
            </div>

            <div className="nt-feature">
              <div className="nt-feature-icon bg-purple">
                <Layers />
              </div>
              <h3 className="nt-feature-title">Enterprise Integration</h3>
              <p className="nt-feature-desc">
                Robust systems that connect, automate, and scale seamlessly.
              </p>
            </div>

            <div className="nt-feature">
              <div className="nt-feature-icon bg-pink">
                <Shield />
              </div>
              <h3 className="nt-feature-title">Security by Design</h3>
              <p className="nt-feature-desc">
                Every layer of your software is protected with advanced security
                principles.
              </p>
            </div>
          </div>

          <div className="nt-cta-wrap">
            <GetQuoteButton/>
          </div>
        </motion.div>
      </div>

      <div className="nt-hero-bg" aria-hidden="true" />
    </section>
  );
}
