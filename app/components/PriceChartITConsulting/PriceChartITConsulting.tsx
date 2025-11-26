"use client";

import React from "react";
import "./PriceChartITConsulting.css";
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton";

interface ITConsultingPackage {
  id: string;
  title: string;
  subtitle: string;
  priceNumber: number;
  priceDisplay: string;
  features: string[];
  badge?: string;
  suffix?: string;
}

const itConsultingPackages: ITConsultingPackage[] = [
  {
    id: "it-assessment",
    title: "Assessment & Strategy",
    subtitle: "Baseline audit + roadmap",
    priceNumber: 3000,
    priceDisplay: "$3,000",
    features: [
      "Current state audit",
      "Risk & gap analysis",
      "Prioritized roadmap",
      "Governance recommendations",
      "1 workshop session"
    ]
  },
  {
    id: "it-optimization",
    title: "Optimization & Integration",
    subtitle: "Improve + connect systems",
    badge: "Popular",
    priceNumber: 7500,
    priceDisplay: "$7,500",
    features: [
      "Process optimization",
      "Tool / platform alignment",
      "Systems integration plan",
      "Security hardening",
      "KPI tracking setup"
    ],
    suffix: "Includes Assessment & Strategy"
  },
  {
    id: "it-transformation",
    title: "Enterprise Transformation",
    subtitle: "Scale & modernize portfolio",
    priceNumber: 15000,
    priceDisplay: "$15,000",
    features: [
      "Multi-stream program plan",
      "Cloud & architecture blueprint",
      "Change management support",
      "Compliance alignment",
      "Measurement & reporting framework",
      "Executive stakeholder sessions"
    ],
    suffix: "Includes Optimization & Integration"
  }
];

// 25% discount integrated (displayed discounted price)
const ldJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital IT Consulting Pricing",
  description: "Assessment & Strategy, Optimization & Integration, and Enterprise Transformation IT consulting packages (25% discount applied).",
  itemListElement: itConsultingPackages.map((p, i) => {
    const discounted = Math.round(p.priceNumber * 0.75);
    return {
      "@type": "Offer",
      position: i + 1,
      name: p.title,
      description: `${p.subtitle}. ${p.features.join(", ")}`,
      price: discounted,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://nutab.ca/services/it-consulting#${p.id}`,
      seller: { "@id": "https://nutab.ca/#organization" },
      priceSpecification: { "@type": "UnitPriceSpecification", price: discounted, priceCurrency: "CAD" },
      itemOffered: { "@type": "Service", name: p.title, serviceType: "IT Consulting", provider: { "@id": "https://nutab.ca/#organization" } }
    };
  })
};

const PriceChartITConsulting: React.FC = () => {
  const formatPrice = (n: number) => "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <section className="itc-price-chart" aria-labelledby="itc-pricing-heading" aria-describedby="itc-pricing-desc" role="region">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <div className="itc-price-chart__intro">
        <h2 id="itc-pricing-heading" className="itc-muted">IT Consulting Pricing</h2>
        <p id="itc-pricing-desc" className="itc-intro">Three tiers to assess, optimize, and transform. 25% OFF already included.</p>
      </div>
      <div className="itc-price-chart__grid" role="list" aria-label="IT consulting packages">
        {itConsultingPackages.map(pkg => {
          const discountedRaw = Math.round(pkg.priceNumber * 0.75);
          const discountedDisplay = formatPrice(discountedRaw);
          return (
            <article key={pkg.id} id={pkg.id} className={`itc-bundle ${pkg.badge ? "itc-bundle--popular" : ""}`} aria-labelledby={`${pkg.id}-title`} itemScope itemType="https://schema.org/Service" role="listitem">
              {pkg.badge && <span className="itc-bundle__badge">{pkg.badge}</span>}
              <span className="itc-bundle__promo-badge" aria-label="Limited time 25 percent off">25% OFF</span>
              <h3 id={`${pkg.id}-title`} className="itc-bundle__title" itemProp="name">{pkg.title}</h3>
              <p className="itc-bundle__subtitle" itemProp="description">{pkg.subtitle}</p>
              <div className="itc-bundle__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <span className="itc-bundle__price-from">Starting from</span>
                <meta itemProp="priceCurrency" content="CAD" />
                <meta itemProp="url" content="https://nutab.ca/services/it-consulting" />
                <meta itemProp="availability" content="https://schema.org/InStock" />
                <span className="itc-bundle__price-amount itc-bundle__price-original" aria-label={`Original price ${pkg.priceDisplay}`}>{pkg.priceDisplay}</span>
                <span className="itc-bundle__price-amount itc-bundle__price-discounted" itemProp="price" content={String(discountedRaw)} aria-label={`Discounted price ${discountedDisplay}`}>{discountedDisplay}</span>
                {pkg.suffix && <span className="itc-bundle__price-suffix">{pkg.suffix}</span>}
              </div>
              <ul className="itc-bundle__features" aria-label={`${pkg.title} features`}>
                {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <div className="itc-bundle__cta"><GetQuoteButton /></div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PriceChartITConsulting;
