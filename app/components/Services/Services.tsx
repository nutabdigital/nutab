import React from "react";
import Link from "next/link"; // Import Next.js Link component
import "./Services.css";

const Services: React.FC = () => {
  const services = [
    {
      icon: "/icons/softdev.svg",
      id: "custom-software",
      name: "Custom Software Solutions",
      description:
        "We create custom software applications that streamline operations and boost efficiency, tailored to Calgary business needs.",
      link: "/services/custom-software",
    },
    {
      icon: "/icons/appdev.svg",
      id: "app-development",
      name: "Mobile & Web App Development",
      description:
        "We create user-friendly mobile and web apps that provide seamless experiences and help Calgary businesses engage customers.",
      link: "/services/mobile-web-app-development",
    },
    {
      icon: "/icons/seo-marketing.svg",
      id: "seo-digital-marketing",
      name: "SEO & Digital Marketing",
      description:
        "Enhance online visibility and attract customers with Calgary SEO and targeted digital marketing strategies.",
      link: "/services/seo-digital-marketing",
    },
    {
      icon: "/icons/ecommerce.svg",
      id: "ecommerce-development",
      name: "E-Commerce Development",
      description:
        "Build scalable e-commerce sites for Calgary businesses with seamless shopping experiences, secure payments, and inventory management.",
      link: "/services/ecommerce-development",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Calgary Software Development Services</h2>
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
              <div className="learn-more-bubble">
                Learn More
              </div>
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
};

export default Services;
