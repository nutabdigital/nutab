"use client";

import { ReactNode } from "react";
import "./FeatureHighlights.css";

export interface FeatureItem {
  title: string;
  description: string;
  icon?: ReactNode;
  badge?: string | number;
  link?: string;
}

export interface FeatureGridProps {
  title?: string;
  subtitle?: string | ReactNode;
  features: FeatureItem[];
  columns?: 1 | 2 | 3 | 4;
  variant?: "default" | "gradient" | "outlined" | "solid" | "minimal";
  theme?: "light" | "dark" | "gradient";
  animated?: boolean;
  interactive?: boolean;
  showIcons?: boolean;
  iconPosition?: "top" | "left";
  size?: "sm" | "md" | "lg";
  className?: string;
  onFeatureClick?: (feature: FeatureItem, index: number) => void;
}

export default function FeatureHighlights({
  title,
  subtitle,
  features,
  columns = 2,
  variant = "gradient",
  theme = "gradient",
  animated = true,
  interactive = false,
  showIcons = true,
  iconPosition = "top",
  size = "md",
  className = "",
  onFeatureClick,
}: FeatureGridProps) {
  const handleFeatureClick = (feature: FeatureItem, index: number) => {
    if (onFeatureClick) {
      onFeatureClick(feature, index);
    } else if (feature.link) {
      window.location.href = feature.link;
    }
  };

  return (
    <section className={`feature-grid-section feature-grid-section--${theme} ${className}`}>
      <div className="feature-grid-container">
        {/* Header */}
        {(title || subtitle) && (
          <div className="feature-grid-header">
            {title && <h2 className="feature-grid-title">{title}</h2>}
            {subtitle && (
              <div className="feature-grid-subtitle">
                {typeof subtitle === "string" ? <p>{subtitle}</p> : subtitle}
              </div>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div
          className={`feature-grid feature-grid--${columns}col`}
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
          }}
        >
          {features.map((feature, index) => {
            const FeatureWrapper = feature.link ? "a" : "div";
            const wrapperProps = feature.link ? { href: feature.link } : {};

            return (
              <FeatureWrapper
                key={feature.title}
                {...wrapperProps}
                className={`feature-item feature-item--${variant} feature-item--${size} feature-item--icon-${iconPosition} ${
                  animated ? "feature-item--animated" : ""
                } ${interactive || feature.link ? "feature-item--interactive" : ""}`}
                style={{
                  animationDelay: animated ? `${index * 0.1}s` : "0s",
                }}
                onClick={() =>
                  (interactive || feature.link) && !feature.link
                    ? handleFeatureClick(feature, index)
                    : undefined
                }
              >
                {showIcons && feature.icon && (
                  <div className="feature-icon">{feature.icon}</div>
                )}

                <div className="feature-content">
                  <div className="feature-header">
                    <h3 className="feature-title">{feature.title}</h3>
                    {feature.badge !== undefined && (
                      <span className="feature-badge">{feature.badge}</span>
                    )}
                  </div>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </FeatureWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
