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
      text: "Take your business to the next level with cloud solutions that grow with you. We build secure, flexible cloud applications that are easy to scale and manage. Let’s create a cloud-based system that works seamlessly and supports your future growth!",
      iconPath: "/icons/clouddev.svg",
    },
  ];

  const [currentService, setCurrentService] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);

        if (entry.isIntersecting && containerRef.current && !isManualScroll) {
          containerRef.current.scrollIntoView({ behavior: "smooth" });
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [isManualScroll]);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!isInView || isTransitioning || isManualScroll) return;
  
      const threshold = 20; // Threshold to filter out small deltas
      if (Math.abs(e.deltaY) < threshold) return;
  
      // Allow scrolling out of the section at the first or last service
      if (
        (currentService === 0 && e.deltaY < 0) ||
        (currentService === services.length - 1 && e.deltaY > 0)
      ) {
        document.body.style.overflow = "hidden"; // Ensure smooth snapping
        const scrollOffset = e.deltaY > 0 ? window.innerHeight : -window.innerHeight; // Scroll 100vh up or down
        window.scrollBy({ top: scrollOffset, behavior: "smooth" });
        return;
      }
  
      e.preventDefault(); // Lock scrolling inside the services section
      setIsTransitioning(true);
  
      let nextService = currentService;
      if (e.deltaY > 0 && currentService < services.length - 1) {
        nextService = currentService + 1; // Scroll down
      } else if (e.deltaY < 0 && currentService > 0) {
        nextService = currentService - 1; // Scroll up
      }
  
      if (nextService !== currentService) {
        setCurrentService(nextService);
      }
  
      setTimeout(() => setIsTransitioning(false), 1000);
    };
  
    window.addEventListener("wheel", handleScroll, { passive: false });
  
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isInView, isTransitioning, currentService, isManualScroll, services.length]);
  
  useEffect(() => {
    let touchStartY = 0;
  
    const touchStartHandler = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
      }
    };
  
    const touchMoveHandler = (e: TouchEvent) => {
      if (!isInView || isTransitioning || isManualScroll || e.touches.length !== 1) return;
  
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;
  
      // Allow scrolling out of the section at the first or last service
      if (
        (currentService === 0 && deltaY < 0) ||
        (currentService === services.length - 1 && deltaY > 0)
      ) {
        document.body.style.overflow = "auto"; // Normal scrolling allowed
        return;
      }
  
      e.preventDefault(); // Lock scrolling inside the services section
      setIsTransitioning(true);
  
      let nextService = currentService;
      if (deltaY > 50 && currentService < services.length - 1) {
        nextService = currentService + 1; // Swipe up to next service
      } else if (deltaY < -50 && currentService > 0) {
        nextService = currentService - 1; // Swipe down to previous service
      }
  
      if (nextService !== currentService) {
        setCurrentService(nextService);
      }
  
      setTimeout(() => setIsTransitioning(false), 1000);
    };
  
    document.addEventListener("touchstart", touchStartHandler, { passive: false });
    document.addEventListener("touchmove", touchMoveHandler, { passive: false });
  
    return () => {
      document.removeEventListener("touchstart", touchStartHandler);
      document.removeEventListener("touchmove", touchMoveHandler);
    };
  }, [isInView, isTransitioning, currentService, isManualScroll, services.length]);
  
  
  
  

  useEffect(() => {
    const handleSmoothScrollStart = () => setIsManualScroll(true);
    const handleSmoothScrollEnd = () => setTimeout(() => setIsManualScroll(false), 1000);

    window.addEventListener("smooth-scroll-start", handleSmoothScrollStart);
    window.addEventListener("smooth-scroll-end", handleSmoothScrollEnd);

    return () => {
      window.removeEventListener("smooth-scroll-start", handleSmoothScrollStart);
      window.removeEventListener("smooth-scroll-end", handleSmoothScrollEnd);
    };
  }, []);

  const handleCardClick = (index: number) => {
    if (index !== currentService && !isTransitioning) {
      setCurrentService(index);
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  return (
    <div ref={containerRef} className="services-container">
      {services.map((service, index) => {
        const position =
          index === currentService
            ? "active"
            : index < currentService
              ? "above"
              : "below";

        return (
          <div
            key={index}
            className={`service-card ${position} ${service.className}`}
            style={{
              transform: `translateY(${(index - currentService) * 100}vh)`,
            }}
            onClick={position !== "active" ? () => handleCardClick(index) : undefined}
          >
            <h1 className="service-label">{service.label}</h1>
            <div className="card-rows">
              <h1 className="service-title">{service.title}</h1>
              <img
                src={service.iconPath}
                alt={`${service.label} Icon`}
                className="service-icon"
              />
              {position === "active" && <p className="service-text">{service.text}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
