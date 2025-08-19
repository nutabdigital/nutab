"use client";

import React, { useEffect, useRef } from "react";
import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import "./page.css";
import dynamic from "next/dynamic";
import GetQuoteButton from "../../components/GetQuoteButton/GetQuoteButton";
import PriceChart from "../../components/PriceChart/PriceChart";
import { useSectionContext } from "../../context/SectionContext";

const SectionWrapper = dynamic(() => import("../../components/SectionWrapper/SectionWrapper"), {
  ssr: false,
});

const MobileWebAppDevelopment: React.FC = () => {
  const { setCurrentSection } = useSectionContext();
  const infoRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === pricingRef.current) {
            if (entry.isIntersecting) {
              setCurrentSection(1); // Pricing chart: behave like "about" section (center/zoom)
            }
          }
          if (entry.target === infoRef.current) {
            if (entry.isIntersecting) {
              setCurrentSection(2); // Info: behave like main page section 2 (default)
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    if (infoRef.current) observer.observe(infoRef.current);
    if (pricingRef.current) observer.observe(pricingRef.current);

    return () => {
      if (infoRef.current) observer.unobserve(infoRef.current);
      if (pricingRef.current) observer.unobserve(pricingRef.current);
    };
  }, [setCurrentSection]);

  return (
    <>
      <Loader />
      <Background />

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile & Web App Development",
            "description":
              "We create user-friendly mobile and web applications tailored to your business needs.",
            "provider": {
              "@type": "Organization",
              "name": "NuTab Digital",
              "url": "https://nutab.ca",
            },
            "areaServed": "Calgary, Alberta",
          }),
        }}
      />

      {/* Info Section (all non-pricing content) */}
      <div ref={infoRef}>
        <SectionWrapper className="section-wrapper--custom-padding">
          <h1>Mobile & Web App Development Services in Calgary</h1>
          <p>
            At <strong>NuTab Digital</strong>, we specialize in creating{" "}
            <strong>custom mobile and web applications</strong> that deliver
            seamless user experiences and help businesses thrive in the digital
            age. Whether you need a <strong>mobile app</strong> for iOS or
            Android, or a <strong>responsive web application</strong>, our team
            is here to bring your vision to life.
          </p>
          <GetQuoteButton />
        </SectionWrapper>
        {/* ...all other info SectionWrappers... */}
        {/* FAQ SectionWrapper, etc. */}
      </div>

      {/* Pricing Section */}
      <div ref={pricingRef}>
        <SectionWrapper>
          <PriceChart />
        </SectionWrapper>
      </div>
    </>
  );
};

export default MobileWebAppDevelopment;