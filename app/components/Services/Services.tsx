import React, { useEffect, useRef, useState } from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      label: "Software",
      title: "Custom Software, Made Simple",
      className: "software",
      text: "Need a smarter way to get things done? We create personalized software that solves your problems and makes your work easier. Whether it’s automating tasks or creating tools to fit your unique needs, we’ll deliver a solution that’s built just for you. Let’s build software that truly works for you!",
      iconPath: "/icons/softdev.svg",
    },
    {
      label: "Web",
      title: "Web & App Development, Built for You",
      className: "web",
      text: "Bring your ideas to life with a custom website or web app designed just for you. We craft modern, responsive platforms that are easy to use and built to make an impact. Whether it’s a website or a web app, let’s create something that works beautifully and stands out!",
      iconPath: "/icons/webdev.svg",
    },
    {
      label: "Mobile",
      title: "Mobile Apps That Work for You",
      className: "mobile",
      text: "Turn your ideas into powerful mobile apps that connect with your users. We create sleek, easy-to-use apps designed to fit your needs perfectly. Let’s build an app that makes life simpler and delivers real results!",
      iconPath: "/icons/mobiledev.svg",
    },
    {
      label: "Cloud",
      title: "Cloud Development, Scalable & Secure",
      className: "cloud",
      text: "Take your business to the next level with cloud solutions that grow with you. We build secure, flexible cloud applications that are easy to scale and manage. Let’s create a system that supports your future growth!",
      iconPath: "/icons/clouddev.svg",
    },
  ];

  // const [currentService, setCurrentService] = useState(0);
  // const [isTransitioning, setIsTransitioning] = useState(false);

  // const handleCardClick = (index: number) => {
  //   if (index !== currentService && !isTransitioning) {
  //     setCurrentService(index);
  //     setIsTransitioning(true);
  //     setTimeout(() => setIsTransitioning(false), 500); 
  //   }
  // };


  // const handleScroll = (index: number) => {
  //   const section = document.getElementById("service-card.active");
  //   if (section) {
  
  //     window.dispatchEvent(new Event("smooth-scroll-start"));
  
  //     section.scrollIntoView({ behavior: "smooth" });
  
     
  //     setTimeout(() => {
  //       window.dispatchEvent(new Event("smooth-scroll-end"));
  //     }, 1000); 
  //   }
  // };

  return (
    <div className="services-container">
      {services.map((service, index) => {
        

        return (
          <div
            key={index}
            className={`service-card ${service.className}`}
          >
            {/* <h1 className="service-label">{service.label}</h1> */}
            <div className="card-rows">
              <h1 className="service-title">{service.title}</h1>
              <img
                src={service.iconPath}
                alt={`${service.label} Icon`}
                className="service-icon"
              />
              <p className="service-text">{service.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
