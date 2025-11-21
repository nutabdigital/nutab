"use client";

import React from "react";
import "./PriceChartSEO.css";
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton";

// Simplified SEO-specific bundles (monthly retainers)
const seoBundles = [
  {
    id: "seo-starter",
    title: "Starter SEO",
    subtitle: "Set up and fix the basics",
    priceDisplay: "$400/mo",
    priceNumber: 400,
    priceSuffix: "Flexible month-to-month",
    features: [
      "Keyword basics (up to 15)",
      "Fix key on-page issues",
      "Technical health fixes",
      "Monthly performance snapshot",
    ],
  },
  {
    id: "seo-growth",
    title: "Growth SEO",
    subtitle: "Grow traffic with better content",
    badge: "Popular",
    priceDisplay: "$800/mo",
    priceNumber: 800,
    priceSuffix: "Includes Starter plan",
    features: [
      "Expanded keyword plan",
      "Site speed improvements",
      "3 new optimized pages / month",
      "Local & schema setup",
      "Monthly review call",
    ],
  },
  {
    id: "seo-scale",
    title: "Scale SEO",
    subtitle: "Build authority & momentum",
    priceDisplay: "$1,600/mo",
    priceNumber: 1600,
    priceSuffix: "Includes Growth plan",
    features: [
      "Content roadmap",
      "6 new optimized pages / month",
      "Link outreach",
      "Authority building",
      "Custom KPI dashboard",
    ],
  },
];

// JSON-LD structured data for SEO service packages
const seoLdJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital SEO Service Pricing",
  description: "Starter, Growth and Scale SEO monthly plans (25% discount applied).",
  itemListElement: seoBundles.map((b, i) => {
    const discounted = Math.round(b.priceNumber * 0.75);
    return {
      "@type": "Offer",
      position: i + 1,
      name: b.title,
      description: `${b.subtitle}. ${b.features.join(", ")}`,
      price: discounted,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://nutab.ca/pricing#${b.id}`,
      seller: { "@id": "https://nutab.ca/#organization" },
      priceSpecification: { "@type": "UnitPriceSpecification", price: discounted, priceCurrency: "CAD", unitText: "MONTH" },
      itemOffered: { "@type": "Service", name: b.title, serviceType: "Search Engine Optimization", provider: { "@id": "https://nutab.ca/#organization" } }
    };
  }),
};

export default function PriceChartSEO() {
  return (
    <section
      className="seo-price-chart"
      aria-labelledby="seo-pricing-heading"
      aria-describedby="seo-pricing-desc"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoLdJson) }}
      />

      <div className="seo-price-chart__intro">
        <h2 id="seo-pricing-heading" className="seo-muted">
          Monthly SEO Packages
        </h2>
        <p id="seo-pricing-desc" className="seo-price-intro">
          Three straightforward tiers to build, grow, and scale organic visibility.
        </p>
      </div>

      <div className="seo-price-chart__grid">
        {seoBundles.map((b) => {
          const discountedRaw = Math.round(b.priceNumber * 0.75);
          const formatPrice = (num: number) =>
            "$" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/mo";
          const discountedDisplay = formatPrice(discountedRaw);
          return (
            <article
              key={b.id}
              className={`seo-bundle ${b.badge ? "seo-bundle--badge" : ""}`}
              aria-labelledby={`${b.id}-title`}
              itemScope
              itemType="https://schema.org/Service"
            >
              {b.badge && <span className="seo-bundle__badge">{b.badge}</span>}
              <span className="seo-bundle__promo-badge" aria-label="Limited time 25% off">25% OFF</span>

            <h3 id={`${b.id}-title`} className="seo-bundle__title" itemProp="name">
              {b.title}
            </h3>
            <p className="seo-bundle__subtitle" itemProp="description">{b.subtitle}</p>

            <div
              className="seo-bundle__price"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <span className="seo-bundle__price-from">Starting at</span>
              <meta itemProp="priceCurrency" content="CAD" />
              <meta itemProp="url" content="https://nutab.ca/pricing" />
              <meta itemProp="availability" content="https://schema.org/InStock" />
              <span
                className="seo-bundle__price-amount seo-bundle__price-original"
                aria-label={`Original price ${b.priceDisplay}`}
              >
                {b.priceDisplay}
              </span>
              <span
                className="seo-bundle__price-amount seo-bundle__price-discounted"
                itemProp="price"
                content={String(discountedRaw)}
                aria-label={`Discounted price ${discountedDisplay}`}
              >
                {discountedDisplay}
              </span>
              {b.priceSuffix && (
                <span className="seo-bundle__price-suffix">{b.priceSuffix}</span>
              )}
            </div>

            <ul
              className="seo-bundle__features"
              aria-label={`${b.title} features`}
            >
              {b.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="seo-bundle__cta">
              <GetQuoteButton />
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}
