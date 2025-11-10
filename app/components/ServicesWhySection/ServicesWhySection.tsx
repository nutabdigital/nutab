"use client";

import React from "react";
import { motion } from "framer-motion";
import "./ServicesWhySection.css";
import { Code2, Layers, ShieldCheck } from "lucide-react";

export interface WhySolution {
  // accept either a string key (serialized from server) or a component type
  icon: string | React.ElementType;
  title: string;
  description: string;
  number?: string;
  link?: string;
  badge?: string | number;
}

export interface ServicesWhySectionProps {
  title?: string;
  tagline?: string | React.ReactNode;
  description?: string | React.ReactNode;
  solutions: WhySolution[];
  theme?: "gradient" | "minimal" | "glass";
  animated?: boolean;
  interactive?: boolean;
  showNumbers?: boolean;
  columns?: 2 | 3 | 4;
  className?: string;
  onSolutionClick?: (solution: WhySolution, index: number) => void;
}

/**
 * ServicesWhySection
 *
 * - Exports types so other modules (like ProcessTimeline) can import them.
 * - Uses semantic wrappers (a / button / div) and delegates navigation to
 *   onSolutionClick or native anchor behavior instead of forcing window.location.
 * - Renders icons with React.createElement to support both component and SVG refs.
 */
export function ServicesWhySection({
  title = "Why Choose Custom Software Development?",
  tagline = "Transform your vision into powerful software solutions",
  description = (
    <>
      Off-the-shelf solutions force your business to adapt to their limitations.
      With <span style={{ color: "#ffffff", fontWeight: 600 }}>custom software development</span>, you get a competitive edge
      through technology that's designed exclusively for your workflows, scales with your ambitions,
      and evolves as your business grows. Stop compromising—start leading.
    </>
  ),
  solutions,
  theme = "gradient",
  animated = true,
  interactive = true,
  showNumbers = true,
  columns = 3,
  className = "",
  onSolutionClick,
}: ServicesWhySectionProps) {
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  const handleClick = (solution: WhySolution, idx: number) => {
    if (onSolutionClick) {
      onSolutionClick(solution, idx);
    }
  };

  // Choose motion wrapper or plain div depending on `animated`
  const MotionDiv: any = animated ? motion.div : (props: any) => <div {...props} />;

  return (
    <section className={`services-why-section services-why-section--${theme} ${className}`}>
      <div className="services-why-container">
        <div className="services-why-header">
          {title && (
            <MotionDiv
              initial={animated ? { opacity: 0, y: 20 } : {}}
              whileInView={animated ? { opacity: 1, y: 0 } : {}}
              viewport={{ once: true }}
              className="services-why-title"
            >
              <h2>{title}</h2>
            </MotionDiv>
          )}

          {tagline && (
            <MotionDiv
              initial={animated ? { opacity: 0, y: 10 } : {}}
              whileInView={animated ? { opacity: 1, y: 0 } : {}}
              viewport={{ once: true }}
              className="services-why-tagline"
            >
              {typeof tagline === "string" ? <p>{tagline}</p> : tagline}
            </MotionDiv>
          )}

          {description && (
            <MotionDiv
              initial={animated ? { opacity: 0 } : {}}
              whileInView={animated ? { opacity: 1 } : {}}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="services-why-description"
            >
              {typeof description === "string" ? <p>{description}</p> : description}
            </MotionDiv>
          )}
        </div>

        <div className="services-why-content">
          <div className="services-why-bg-glow" />

          <div className="services-why-grid" style={gridStyle}>
            {solutions.map((solution, idx) => {
              const isLink = Boolean(solution.link);
              const isClickable = interactive && (Boolean(solution.link) || Boolean(onSolutionClick));

              // Choose wrapper element: anchor for external/internal links, button for clickable cards without link, div otherwise
              const WrapperEl: any = isLink ? "a" : isClickable ? "button" : "div";
              const wrapperProps: any = isLink
                ? { href: solution.link, target: "_self", rel: "noopener noreferrer" }
                : isClickable
                ? { type: "button", onClick: () => handleClick(solution, idx) }
                : {};

              return (
                <MotionDiv
                  key={solution.title + idx}
                  initial={animated ? { opacity: 0, y: 30 } : {}}
                  whileInView={animated ? { opacity: 1, y: 0 } : {}}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.45 }}
                  whileHover={animated && interactive ? { y: -6, scale: 1.02 } : {}}
                  className="services-why-card-wrapper"
                >
                  <WrapperEl
                    {...wrapperProps}
                    className={`services-why-card ${interactive ? "services-why-card--interactive" : ""}`}
                    // ensure buttons don't inherit default styling when used as wrappers
                    aria-pressed={isClickable ? "false" : undefined}
                  >
                    <div className="services-why-card-glow" />

                    {showNumbers && (solution.number || `0${idx + 1}`) && (
                      <div className="services-why-card-number">
                        {solution.number || `0${idx + 1}`}
                      </div>
                    )}

                    <div className="services-why-icon-wrapper">
                      <MotionDiv
                        whileHover={animated && interactive ? { rotate: 360, scale: 1.06 } : {}}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="services-why-icon-container"
                      >
                        <div className="services-why-icon-blur" />
                        {(() => {
                          // map string keys to client-side icon components
                          const iconMap: Record<string, React.ElementType> = {
                            Code2,
                            Layers,
                            ShieldCheck,
                          };

                          const IconComp: React.ElementType =
                            typeof solution.icon === "string" ? iconMap[solution.icon] ?? Code2 : solution.icon;

                          return React.createElement(IconComp, { className: "services-why-icon", "aria-hidden": true });
                        })()}
                      </MotionDiv>
                    </div>

                    <div className="services-why-card-content">
                      <h3 className="services-why-card-title">{solution.title}</h3>
                      <p className="services-why-card-description">{solution.description}</p>
                    </div>

                    {solution.badge !== undefined && (
                      <span className="services-why-card-badge">{solution.badge}</span>
                    )}

                    <div className="services-why-card-accent" />
                  </WrapperEl>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesWhySection;
