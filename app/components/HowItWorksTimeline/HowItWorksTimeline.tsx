"use client";

import { useRef, useEffect, useState } from "react";
import "./HowItWorksTimeline.css";

export interface ProcessStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ProcessTimelineProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
  orientation?: "vertical" | "horizontal";
  theme?: "light" | "dark" | "gradient";
  animated?: boolean;
  className?: string;
}

export default function HowItWorksTimeline({
  steps,
  title,
  subtitle,
  orientation = "vertical",
  theme = "gradient",
  animated = true,
  className = "",
}: ProcessTimelineProps) {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!animated) {
      setVisibleSteps(new Set(steps.map((_, idx) => idx)));
      return;
    }

    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => new Set([...Array.from(prev), index]));
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [steps, animated]);

  return (
    <div className={`process-timeline-wrapper ${className}`}>
      {title && (
        <div className="process-timeline-header">
          <h2 className="process-timeline-title">{title}</h2>
          {subtitle && <p className="process-timeline-subtitle">{subtitle}</p>}
        </div>
      )}

      <div
        className={`process-timeline process-timeline--${orientation} process-timeline--${theme}`}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => { stepRefs.current[index] = el; }}
            className={`process-step ${
              visibleSteps.has(index) ? "process-step--visible" : ""
            } ${animated ? "process-step--animated" : ""}`}
            style={{
              animationDelay: animated ? `${index * 0.1}s` : "0s",
            }}
          >
            <div className="process-step-badge">
              {step.icon || <span className="process-step-number">{index + 1}</span>}
            </div>
            <div className="process-step-content">
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
