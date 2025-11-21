"use client";

import React from "react";
import "./PriceChartAppDev.css";
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton";

interface AppDevPackage {
  id: string;
  title: string;
  subtitle: string;
  priceNumber: number;
  priceDisplay: string;
  features: string[];
  badge?: string;
  suffix?: string;
}

const appDevPackages: AppDevPackage[] = [
  {
    id: "app-prototype",
    title: "Prototype App",
    subtitle: "MVP to validate concept",
    priceNumber: 6000,
    priceDisplay: "$6,000",
    features: [
      "Core feature set (2–4 screens)",
      "Responsive UI / basic nav",
      "Auth & user model",
      "Basic API integration",
      "Error handling & logging"
    ]
  },
  {
    id: "app-growth",
    title: "Growth App",
    subtitle: "Expand features & scalability",
    badge: "Popular",
    priceNumber: 12000,
    priceDisplay: "$12,000",
    features: [
      "8–12 screens / modules",
      "Role-based access",
      "CI setup & automated tests",
      "Performance profiling",
      "Analytics instrumentation"
    ],
    suffix: "Includes Prototype App"
  },
  {
    id: "app-platform",
    title: "Platform Build",
    subtitle: "Custom architecture & integrations",
    priceNumber: 24000,
    priceDisplay: "$24,000",
    features: [
      "Complex domain modeling",
      "Advanced caching & queues",
      "3rd-party integrations",
      "Security & compliance review",
      "Load & performance test suite",
      "Observability dashboards"
    ],
    suffix: "Includes Growth App"
  }
];

// 25% discount integrated (displayed discounted price)
const ldJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital App Development Pricing",
  description: "Prototype, Growth and Platform app development packages (25% discount applied).",
  itemListElement: appDevPackages.map((p, i) => {
    const discounted = Math.round(p.priceNumber * 0.75);
    return {
      "@type": "Offer",
      position: i + 1,
      name: p.title,
      description: `${p.subtitle}. ${p.features.join(", ")}`,
      price: discounted,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://nutab.ca/pricing#${p.id}`,
      seller: { "@id": "https://nutab.ca/#organization" },
      priceSpecification: { "@type": "UnitPriceSpecification", price: discounted, priceCurrency: "CAD" },
      itemOffered: { "@type": "Service", name: p.title, serviceType: "Application Development", provider: { "@id": "https://nutab.ca/#organization" } }
    };
  })
};

const PriceChartAppDev: React.FC = () => {
  const formatPrice = (n: number) => "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <section className="appdev-price-chart" aria-labelledby="appdev-pricing-heading" aria-describedby="appdev-pricing-desc">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <div className="appdev-price-chart__intro">
        <h2 id="appdev-pricing-heading" className="appdev-muted">App Development Pricing</h2>
        <p id="appdev-pricing-desc" className="appdev-intro">Three tiers to ideate, grow, and scale your application. 25% OFF already included.</p>
      </div>
      <div className="appdev-price-chart__grid">
        {appDevPackages.map(pkg => {
          const discountedRaw = Math.round(pkg.priceNumber * 0.75);
          const discountedDisplay = formatPrice(discountedRaw);
          return (
            <article key={pkg.id} id={pkg.id} className={`appdev-bundle ${pkg.badge ? "appdev-bundle--popular" : ""}`} aria-labelledby={`${pkg.id}-title`} itemScope itemType="https://schema.org/Service">
              {pkg.badge && <span className="appdev-bundle__badge">{pkg.badge}</span>}
              <span className="appdev-bundle__promo-badge" aria-label="Limited time 25 percent off">25% OFF</span>
              <h3 id={`${pkg.id}-title`} className="appdev-bundle__title" itemProp="name">{pkg.title}</h3>
              <p className="appdev-bundle__subtitle" itemProp="description">{pkg.subtitle}</p>
              <div className="appdev-bundle__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <span className="appdev-bundle__price-from">Starting from</span>
                <meta itemProp="priceCurrency" content="CAD" />
                <meta itemProp="url" content="https://nutab.ca/pricing" />
                <meta itemProp="availability" content="https://schema.org/InStock" />
                <span className="appdev-bundle__price-amount appdev-bundle__price-original" aria-label={`Original price ${pkg.priceDisplay}`}>{pkg.priceDisplay}</span>
                <span className="appdev-bundle__price-amount appdev-bundle__price-discounted" itemProp="price" content={String(discountedRaw)} aria-label={`Discounted price ${discountedDisplay}`}>{discountedDisplay}</span>
                {pkg.suffix && <span className="appdev-bundle__price-suffix">{pkg.suffix}</span>}
              </div>
              <ul className="appdev-bundle__features" aria-label={`${pkg.title} features`}>
                {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <div className="appdev-bundle__cta"><GetQuoteButton /></div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PriceChartAppDev;
