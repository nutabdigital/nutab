"use client";

import { ReactNode } from "react";
import "./RelatedServicesSection.css";

export interface RelatedServiceItem {
  label: string;
  link?: string;
  icon?: ReactNode;
  badge?: string | number;
  description?: string;
}

export interface RelatedServicesSectionProps {
  title?: string;
  subtitle?: string;
  services: (string | RelatedServiceItem)[];
  size?: "sm" | "md" | "lg";
  variant?: "default" | "gradient" | "outlined" | "solid" | "pill";
  theme?: "light" | "dark" | "gradient";
  animated?: boolean;
  interactive?: boolean;
  layout?: "centered" | "left" | "grid";
  columns?: 2 | 3 | 4;
  showIcons?: boolean;
  className?: string;
  onServiceClick?: (service: string | RelatedServiceItem, index: number) => void;
}

export default function RelatedServicesSection({
  title = "Related Services",
  subtitle,
  services,
  size = "md",
  variant = "gradient",
  theme = "gradient",
  animated = true,
  interactive = true,
  layout = "centered",
  columns = 3,
  showIcons = true,
  className = "",
  onServiceClick,
}: RelatedServicesSectionProps) {
  // Normalize services to always be objects
  const normalizedServices: RelatedServiceItem[] = services.map((service) =>
    typeof service === "string" ? { label: service } : service
  );

  const handleServiceClick = (service: RelatedServiceItem, index: number) => {
    if (onServiceClick) {
      onServiceClick(service, index);
    } else if (service.link) {
      window.location.href = service.link;
    }
  };

  const gridStyle =
    layout === "grid"
      ? { gridTemplateColumns: `repeat(${columns}, 1fr)` }
      : undefined;

  return (
    <section
      className={`related-services-section related-services-section--${theme} ${className}`}
    >
      <div className="related-services-container">
        {/* Header */}
        <div className="related-services-header">
          <h2 className="related-services-title">{title}</h2>
          {subtitle && <p className="related-services-subtitle">{subtitle}</p>}
        </div>

        {/* Services */}
        <div
          className={`related-services-list related-services-list--${layout} related-services-list--${variant}`}
          style={gridStyle}
        >
          {normalizedServices.map((service, index) => {
            const ServiceWrapper = service.link ? "a" : "div";
            const wrapperProps = service.link ? { href: service.link } : {};

            return (
              <ServiceWrapper
                key={service.label}
                {...wrapperProps}
                className={`related-service-item related-service-item--${size} ${
                  interactive ? "related-service-item--interactive" : ""
                } ${animated ? "related-service-item--animated" : ""}`}
                style={{
                  animationDelay: animated ? `${index * 0.1}s` : "0s",
                }}
                onClick={() =>
                  interactive && !service.link
                    ? handleServiceClick(service, index)
                    : undefined
                }
              >
                {showIcons && service.icon && (
                  <span className="related-service-icon">{service.icon}</span>
                )}

                <div className="related-service-content">
                  <span className="related-service-label">{service.label}</span>

                  {service.description && (
                    <span className="related-service-description">
                      {service.description}
                    </span>
                  )}
                </div>

                {service.badge !== undefined && (
                  <span className="related-service-badge">{service.badge}</span>
                )}
              </ServiceWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
