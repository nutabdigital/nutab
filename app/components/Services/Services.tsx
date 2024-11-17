"use client";

import React, { useState } from "react";
import "./Services.css";

const Services: React.FC = () => {
  const [visibleOverlay, setVisibleOverlay] = useState<string | null>(null);

  const toggleOverlay = (overlayId: React.SetStateAction<string | null>) => {
    // If the clicked overlay is already open, close it; otherwise, open it
    setVisibleOverlay(visibleOverlay === overlayId ? null : overlayId);
  };

  // Function to show overlay on desktop when hovering over a service
  const showOverlay = (service: string) => {
    if (window.innerWidth >= 769) setVisibleOverlay(service);
  };

  // Function to hide overlay
  const hideOverlay = () => setVisibleOverlay(null);

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        {/* Custom Software Development */}
        <div
          className="service-box"
          onClick={() => toggleOverlay("custom-software-development")}
        >
          <h3 className="service-name">Custom Software Development</h3>
          <p className="service-description">
            We create tailored software solutions that meet the unique needs of
            your business.
          </p>
          {visibleOverlay === "custom-software-development" && (
            <div
              className={`overlay-soft ${
                visibleOverlay === "custom-software-development"
                  ? "visible"
                  : ""
              }`}
            >
              <p>
                "Tailored Software Solutions for Every Need" Whether you need
                robust backend systems, efficient automation tools, or custom
                software for unique business challenges, we provide high-quality
                development that’s scalable and secure. Our team works closely
                with you to ensure that every solution aligns with your business
                goals, from concept through to delivery and support.
              </p>
            </div>
          )}
        </div>

        {/* Mobile App Development */}
        <div
          className="service-box"
          onClick={() => toggleOverlay("mobile-app-development")}
        >
          <h3 className="service-name">Mobile App Development</h3>
          <p className="service-description">
            Our team specializes in developing user-friendly mobile applications
            for iOS and Android.
          </p>
          {visibleOverlay === "mobile-app-development" && (
            <div
              className={`overlay-mobileapp ${
                visibleOverlay === "mobile-app-development" ? "visible" : ""
              }`}
            >
              <p>
                "Empowering Users with Dynamic Apps" We develop powerful,
                user-friendly apps for businesses and individuals, designed to
                engage and perform. From concept and UX design to development
                and deployment, our apps offer seamless performance across all
                platforms. Whether you’re looking to build a social app, a
                productivity tool, or an e-commerce app, we bring your vision to
                life.
              </p>
            </div>
          )}
        </div>

        {/* Web Development */}
        <div
          className="service-box"
          onClick={() => toggleOverlay("web-development")}
        >
          <h3 className="service-name">Web Development</h3>
          <p className="service-description">
            We design and build responsive websites that provide seamless user
            experiences.
          </p>
          {visibleOverlay === "web-development" && (
            <div
              className={`overlay-web ${
                visibleOverlay === "web-development" ? "visible" : ""
              }`}
            >
              <p>
                "Build an Exceptional Online Presence" Our web development
                services transform your ideas into immersive, responsive, and
                accessible websites. We handle everything from front-end design
                to back-end integration, ensuring seamless user experiences
                across all devices. Each website is crafted for performance,
                optimized for search engines, and built to reflect your brand’s
                identity.
              </p>
            </div>
          )}
        </div>

        {/* Cloud Solutions */}
        <div
          className="service-box"
          onClick={() => toggleOverlay("cloud-solutions")}
        >
          <h3 className="service-name">Cloud Solutions</h3>
          <p className="service-description">
            We offer cloud-based solutions that enhance scalability and
            efficiency for your business.
          </p>
          {visibleOverlay === "cloud-solutions" && (
            <div
              className={`overlay-cloud ${
                visibleOverlay === "cloud-solutions" ? "visible" : ""
              }`}
            >
              <p>
                "Flexible, Scalable, and Secure Cloud Services" Unlock the
                potential of the cloud to optimize your workflows and scale
                effortlessly. We design, deploy, and manage cloud solutions that
                help you reduce infrastructure costs and enhance accessibility.
                Our cloud services support everything from storage and computing
                to advanced cloud-native applications, ensuring reliable,
                secure, and high-performance solutions tailored to your needs.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
