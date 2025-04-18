import React from "react";
import "./Services.css";

const Services: React.FC = () => {
  const services = [
    {
      icon: "/icons/softdev.svg",
      id: "custom-software",
      name: "Custom Software Solutions",
      description:
        "We create custom software that streamlines operations and boosts efficiency, tailored to your business needs.",
      link: "#custom-software",
    },
    {
      icon: "/icons/appdev.svg",
      id: "app-development",
      name: "Mobile & Web App Development",
      description:
        "We create user-friendly apps that provide seamless experiences and help businesses engage customers.",
      link: "#app-development",
    },
    {
      icon: "/icons/seo-marketing.svg",
      id: "seo-digital-marketing",
      name: "SEO & Digital Marketing",
      description:
        "Enhance online visibility and attract customers with SEO and targeted digital marketing strategies.",
      link: "#seo-digital-marketing",
    },
    {
      icon: "/icons/ecommerce.svg",
      id: "ecommerce-development",
      name: "E-Commerce Development",
      description:
        "Build scalable e-commerce sites with seamless shopping experiences, secure payments, and inventory management.",
      link: "#ecommerce-development",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <a key={service.id} href={service.link} className="service-box">
            <img
              src={service.icon}
              alt={`${service.name} icon`}
              className="service-icon"
            />
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
