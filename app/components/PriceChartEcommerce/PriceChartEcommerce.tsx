"use client";

import React from "react";
import "./PriceChartEcommerce.css";
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton";

interface EcommercePackage {
  id: string;
  title: string;
  subtitle: string;
  priceNumber: number;
  priceDisplay: string;
  features: string[];
  badge?: string;
  suffix?: string;
}

const ecommercePackages: EcommercePackage[] = [
  {
    id: "starter-store",
    title: "Starter Store",
    subtitle: "Launch-ready foundational setup",
    priceNumber: 4000,
    priceDisplay: "$4,000",
    features: [
      "Up to 25 products",
      "Responsive theme setup",
      "Payment & tax configuration",
      "Basic analytics & reporting"
    ]
  },
  {
    id: "growth-store",
    title: "Growth Store",
    subtitle: "Scale features & optimization",
    badge: "Popular",
    priceNumber: 7500,
    priceDisplay: "$7,500",
    features: [
      "Up to 250 products",
      "Custom theme adjustments",
      "Advanced shipping & taxes",
      "Performance optimization",
      "Conversion tracking"
    ],
    suffix: "Includes Starter Store"
  },
  {
    id: "scale-commerce",
    title: "Scale Commerce",
    subtitle: "Enterprise flexibility & integrations",
    priceNumber: 12000,
    priceDisplay: "$12,000",
    features: [
      "Unlimited products",
      "Custom design components",
      "Headless & API integrations",
      "Advanced caching & performance",
      "Ongoing support setup"
    ],
    suffix: "Includes Growth Store"
  }
];

// 25% discount integrated (already applied in displayed discounted price)
const ldJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital E-Commerce Development Pricing",
  description: "Transparent e-commerce development pricing: starter store, growth store, scale commerce (25% savings included).",
  itemListElement: ecommercePackages.map((p, i) => {
    const discounted = Math.round(p.priceNumber * 0.75);
    return {
      "@type": "Offer",
      position: i + 1,
      name: p.title,
      description: `${p.subtitle}. ${p.features.join(", ")}`,
      price: discounted,
      priceCurrency: "CAD",
      url: `https://nutab.ca/pricing#${p.id}`,
      availability: "https://schema.org/InStock",
      seller: { "@id": "https://nutab.ca/#organization" },
      priceSpecification: { "@type": "UnitPriceSpecification", price: discounted, priceCurrency: "CAD" },
      itemOffered: { "@type": "Service", name: p.title, serviceType: "E-Commerce Development", provider: { "@id": "https://nutab.ca/#organization" } }
    };
  })
};

const PriceChartEcommerce: React.FC = () => {
  const formatDiscount = (n: number) => "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <section className="ecommerce-price-chart" aria-labelledby="ecommerce-pricing-heading" aria-describedby="ecommerce-pricing-desc" role="region">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <div className="ecommerce-price-chart__intro">
        <h2 id="ecommerce-pricing-heading" className="ecommerce-muted">E-Commerce Development Pricing</h2>
        <p id="ecommerce-pricing-desc" className="ecommerce-intro">Three clear tiers to launch, grow, and scale your online store. 25% OFF is already included.</p>
      </div>
      <div className="ecommerce-price-chart__grid" role="list" aria-label="E-Commerce packages">
        {ecommercePackages.map(pkg => {
          const discountedRaw = Math.round(pkg.priceNumber * 0.75);
          const discountedDisplay = formatDiscount(discountedRaw);
          return (
            <article key={pkg.id} id={pkg.id} className={`ecommerce-bundle ${pkg.badge ? "ecommerce-bundle--popular" : ""}`} aria-labelledby={`${pkg.id}-title`} itemScope itemType="https://schema.org/Service" role="listitem">
              {pkg.badge && <span className="ecommerce-bundle__badge">{pkg.badge}</span>}
              <span className="ecommerce-bundle__promo-badge" aria-label="Limited time 25 percent off">25% OFF</span>
              <h3 id={`${pkg.id}-title`} className="ecommerce-bundle__title" itemProp="name">{pkg.title}</h3>
              <p className="ecommerce-bundle__subtitle" itemProp="description">{pkg.subtitle}</p>
              <div className="ecommerce-bundle__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <span className="ecommerce-bundle__price-from">Starting from</span>
                <meta itemProp="priceCurrency" content="CAD" />
                <meta itemProp="url" content="https://nutab.ca/pricing" />
                <span className="ecommerce-bundle__price-amount ecommerce-bundle__price-original" aria-label={`Original price ${pkg.priceDisplay}`}>{pkg.priceDisplay}</span>
                <span className="ecommerce-bundle__price-amount ecommerce-bundle__price-discounted" itemProp="price" content={String(discountedRaw)} aria-label={`Discounted price ${discountedDisplay}`}>{discountedDisplay}</span>
                {pkg.suffix && <span className="ecommerce-bundle__price-suffix">{pkg.suffix}</span>}
              </div>
              <ul className="ecommerce-bundle__features" aria-label={`${pkg.title} features`}>
                {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <div className="ecommerce-bundle__cta"><GetQuoteButton /></div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PriceChartEcommerce;
