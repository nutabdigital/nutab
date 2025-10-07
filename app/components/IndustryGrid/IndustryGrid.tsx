"use client";

import { useRef, useEffect, useState } from "react";
import "./IndustryGrid.css";

export interface IndustryItem {
  name: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
}

export interface IndustryGridProps {
  items: (string | IndustryItem)[];
  title?: string;
  subtitle?: string;
  layout?: "pills" | "cards" | "compact";
  theme?: "light" | "dark" | "gradient";
  animated?: boolean;
  columns?: number;
  className?: string;
}

export default function IndustryGrid({
  items,
  title,
  subtitle,
  layout = "pills",
  theme = "gradient",
  animated = true,
  columns,
  className = "",
}: IndustryGridProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Normalize items to always be objects
  const normalizedItems: IndustryItem[] = items.map((item) =>
    typeof item === "string" ? { name: item } : item
  );

  useEffect(() => {
    if (!animated) {
      setVisibleItems(new Set(normalizedItems.map((_, idx) => idx)));
      return;
    }

    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...Array.from(prev), index]));
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
  }, [normalizedItems, animated]);

  const gridStyle = columns
    ? { gridTemplateColumns: `repeat(${columns}, 1fr)` }
    : undefined;

  return (
    <div className={`industry-grid-wrapper ${className}`}>
      {title && (
        <div className="industry-grid-header">
          <h2 className="industry-grid-title">{title}</h2>
          {subtitle && <p className="industry-grid-subtitle">{subtitle}</p>}
        </div>
      )}

      <div
        className={`industry-grid industry-grid--${layout} industry-grid--${theme}`}
        style={gridStyle}
      >
        {normalizedItems.map((item, index) => (
          <div
            key={item.name}
            ref={(el) => { itemRefs.current[index] = el; }}
            className={`industry-item ${
              visibleItems.has(index) ? "industry-item--visible" : ""
            } ${animated ? "industry-item--animated" : ""}`}
            style={{
              animationDelay: animated ? `${index * 0.05}s` : "0s",
            }}
          >
            {item.image && (
              <div className="industry-item-image">
                <img src={item.image} alt={item.name} />
              </div>
            )}

            {item.icon && <div className="industry-item-icon">{item.icon}</div>}

            <div className="industry-item-content">
              <h3 className="industry-item-name">{item.name}</h3>
              {item.description && (
                <p className="industry-item-description">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
