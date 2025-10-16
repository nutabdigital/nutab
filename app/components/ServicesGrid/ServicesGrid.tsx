"use client";

import { useRef, useEffect, useState } from "react";
import "./ServicesGrid.css";

export interface ServiceItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

export interface ServicesGridProps {
  services: ServiceItem[];
  title?: string;
  subtitle?: string;
  layout?: "grid" | "list" | "compact" | "feature";
  columns?: 1 | 2 | 3 | 4;
  theme?: "light" | "dark" | "gradient";
  animated?: boolean;
  showIcons?: boolean;
  className?: string;
}

export default function ServicesGrid({
  services,
  title,
  subtitle,
  layout = "grid",
  columns = 2,
  theme = "gradient",
  animated = true,
  showIcons = true,
  className = "",
}: ServicesGridProps) {
  const [visibleServices, setVisibleServices] = useState<Set<number>>(new Set());
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!animated) {
      setVisibleServices(new Set(services.map((_, idx) => idx)));
      return;
    }

    const observers = serviceRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleServices((prev) => new Set([...Array.from(prev), index]));
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [services, animated]);

  const gridStyle =
    layout === "grid"
      ? { gridTemplateColumns: `repeat(${columns}, 1fr)` }
      : undefined;

  return (
    <div className={`services-grid-wrapper ${className}`}>
      {title && (
        <div className="services-grid-header">
          <h2 className="services-grid-title">{title}</h2>
          {subtitle && <p className="services-grid-subtitle">{subtitle}</p>}
        </div>
      )}

      <div
        className={`services-grid services-grid--${layout} services-grid--${theme}`}
        style={gridStyle}
      >
        {services.map((service, index) => (
          <div
            key={service.title}
            ref={(el) => {
              serviceRefs.current[index] = el;
            }}
            className={`service-card ${
              visibleServices.has(index) ? "service-card--visible" : ""
            } ${animated ? "service-card--animated" : ""}`}
            style={{
              animationDelay: animated ? `${index * 0.1}s` : "0s",
            }}
          >
            {service.image && (
              <div className="service-card-image">
                <img src={service.image} alt={service.title} />
              </div>
            )}

            {showIcons && service.icon && (
              <div className="service-card-icon">{service.icon}</div>
            )}

            <div className="service-card-content">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
