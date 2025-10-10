import { ReactNode } from "react";
import "./Hero.css";

export interface HeroFeature {
  icon: ReactNode;
  label: string;
  description?: string;
}

export interface HeroButton {
  text: string;
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export interface HeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  description?: string | ReactNode;
  features?: HeroFeature[];
  buttons?: HeroButton[];
  variant?: "default" | "card" | "minimal" | "split";
  theme?: "light" | "dark" | "gradient";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  showFeatures?: boolean;
  featuresLayout?: "horizontal" | "grid";
  alignment?: "center" | "left";
  backgroundImage?: string;
  backgroundOpacity?: number;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  features = [],
  buttons = [],
  variant = "card",
  theme = "gradient",
  size = "md",
  animated = true,
  showFeatures = true,
  featuresLayout = "horizontal",
  alignment = "center",
  backgroundImage,
  backgroundOpacity = 0.2,
  className = "",
}: HeroProps) {
  return (
    <section
      className={`hero hero--${variant} hero--${theme} hero--${size} hero--${alignment} ${
        animated ? "hero--animated" : ""
      } ${className}`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="hero-background-image">
          <img
            src={backgroundImage}
            alt=""
            style={{ opacity: backgroundOpacity }}
          />
        </div>
      )}

      <div className="hero-container">
        <div className="hero-content">
          {/* Title */}
          <h1 className={`hero-title ${animated ? "hero-title--animated" : ""}`}>
            {title}
          </h1>

          {/* Subtitle & Description */}
          {(subtitle || description) && (
            <div className={`hero-text ${animated ? "hero-text--animated" : ""}`}>
              {subtitle && (
                <div className="hero-subtitle">
                  {typeof subtitle === "string" ? <p>{subtitle}</p> : subtitle}
                </div>
              )}
              {description && (
                <div className="hero-description">
                  {typeof description === "string" ? <p>{description}</p> : description}
                </div>
              )}
            </div>
          )}

          {/* Features */}
          {showFeatures && features.length > 0 && (
            <div
              className={`hero-features hero-features--${featuresLayout} ${
                animated ? "hero-features--animated" : ""
              }`}
            >
              {features.map((feature, index) => (
                <div
                  key={feature.label}
                  className="hero-feature"
                  style={{
                    animationDelay: animated ? `${0.7 + index * 0.1}s` : "0s",
                  }}
                >
                  <div className="hero-feature-icon">{feature.icon}</div>
                  <div className="hero-feature-content">
                    <span className="hero-feature-label">{feature.label}</span>
                    {feature.description && (
                      <span className="hero-feature-description">
                        {feature.description}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Buttons */}
          {buttons.length > 0 && (
            <div className={`hero-buttons ${animated ? "hero-buttons--animated" : ""}`}>
              {buttons.map((button, index) => {
                const ButtonWrapper = button.href ? "a" : "button";
                const wrapperProps = button.href ? { href: button.href } : {};

                return (
                  <ButtonWrapper
                    key={button.text}
                    {...wrapperProps}
                    className={`hero-button hero-button--${button.variant || "primary"}`}
                    onClick={button.onClick}
                    style={{
                      animationDelay: animated ? `${0.9 + index * 0.1}s` : "0s",
                    }}
                  >
                    {button.text}
                    {button.icon && <span className="hero-button-icon">{button.icon}</span>}
                  </ButtonWrapper>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
