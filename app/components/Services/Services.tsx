import React from "react";
import "./Services.css";

const Services: React.FC = () => {
  const services = [
    {
      icon: "/icons/softdev.svg",
      id: "custom-software",
      name: "Custom Software Development",
      description:
        "We create tailored software solutions that meet the unique needs of your business.",
      link: "#custom-software",
    },
    {
      icon: "/icons/mobiledev.svg",
      id: "mobile-app",
      name: "Mobile App Development",
      description:
        "Our team specializes in developing user-friendly mobile applications for iOS and Android.",
      link: "#mobile-app",
    },
    {
      icon: "/icons/webdev.svg",
      id: "web-development",
      name: "Web Development",
      description:
        "We design and build responsive websites that provide seamless user experiences.",
      link: "#web-development",
    },
    {
      icon: "/icons/clouddev.svg",
      id: "cloud-solutions",
      name: "Cloud Solutions",
      description:
        "We offer cloud-based solutions that enhance efficiency and scale with your business.",
      link: "#cloud-solutions",
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
