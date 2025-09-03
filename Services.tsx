import React from "react";
import Link from "next/link";
import "./Services.css";

const services = [
  {
    icon: "/icons/softdev.svg",
    id: "custom-software",
    name: "Custom Software Solutions",
    description:
      "We create custom software that streamlines operations and boosts efficiency, tailored to your business needs.",
    link: "/services/custom-software",
  },
  {
    icon: "/icons/appdev.svg",
    id: "app-development",
    name: "Mobile & Web App Development",
    description:
      "We create user-friendly apps that provide seamless experiences and help businesses engage customers.",
    link: "/services/mobile-web-app-development",
  },
  {
    icon: "/icons/seo-marketing.svg",
    id: "seo-digital-marketing",
    name: "SEO & Digital Marketing",
    description:
      "Enhance online visibility and attract customers with SEO and targeted digital marketing strategies.",
    link: "/services/seo-digital-marketing",
  },
  {
    icon: "/icons/ecommerce.svg",
    id: "ecommerce-development",
    name: "E-Commerce Development",
    description:
      "Build scalable e-commerce sites with seamless shopping experiences, secure payments, and inventory management.",
    link: "/services/ecommerce-development",
  },
  {
    icon: "/icons/ai.svg",
    id: "ai-automation",
    name: "AI & Automation Solutions",
    description:
      "Leverage AI-driven tools and automation to improve efficiency, reduce manual tasks, and make smarter decisions.",
    link: "/services/ai-automation",
  },
  {
    icon: "/icons/consulting.svg",
    id: "business-consulting",
    name: "Business & IT Consulting",
    description:
      "Get expert guidance on digital transformation, technology adoption, and growth strategies tailored to your business.",
    link: "/services/business-it-consulting",
  },
  {
    icon: "/icons/design.svg",
    id: "graphic-design",
    name: "Graphic & Brand Design",
    description:
      "Strengthen your brand with creative design solutions, including logos, digital graphics, and visual identity.",
    link: "/services/graphic-brand-design",
  },
  {
    icon: "/icons/media.svg",
    id: "media-production",
    name: "Photography & Media Production",
    description:
      "High-quality photography and media services for websites, marketing campaigns, and brand storytelling.",
    link: "/services/photography-media-production",
  },
];

const Services: React.FC = () => (
  <section className="services-section">
    <h2 className="services-title">Our Services</h2>
    <div className="services-list">
      {services.map((service) => (
        <Link key={service.id} href={service.link} className="service-box">
          <img
            src={service.icon}
            alt={`${service.name} icon`}
            className="service-icon"
            loading="lazy"
          />
          <h3 className="service-name">{service.name}</h3>
          <p className="service-description">{service.description}</p>
          <div className="learn-more-wrapper">
            <div className="learn-more-bubble">Learn More</div>
            <img
              src="/icons/arrow.svg"
              alt="Arrow icon"
              className="learn-more-icon"
            />
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Services;