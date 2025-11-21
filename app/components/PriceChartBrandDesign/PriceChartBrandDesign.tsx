"use client";

import React from "react";
import "./PriceChartBrandDesign.css";
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton";

interface BrandPackage {
  id: string;
  title: string;
  subtitle: string;
  priceNumber: number;
  priceDisplay: string;
  features: string[];
  badge?: string;
  suffix?: string;
}

const brandPackages: BrandPackage[] = [
  {
    id: "basic-logo",
    title: "Basic Logo Package",
    subtitle: "Simple logo and files",
    priceNumber: 500,
    priceDisplay: "$500",
    features: [
      "Two logo ideas",
      "One round of edits",
      "Final logo files",
      "Simple color & font list"
    ]
  },
  {
    id: "brand-kit",
    title: "Brand Kit Package",
    subtitle: "Logo plus colors and fonts",
    badge: "Popular",
    priceNumber: 900,
    priceDisplay: "$900",
    features: [
      "Logo versions (main & small)",
      "Color list & font choices",
      "Short usage guide",
      "Two ready templates"
    ],
    suffix: "Includes Basic Logo Package"
  },
  {
    id: "full-brand",
    title: "Complete Brand Package",
    subtitle: "Everything for a full brand",
    priceNumber: 1800,
    priceDisplay: "$1,800",
    features: [
      "Intro planning call",
      "Full brand guide",
      "All logo versions",
      "Four easy templates",
      "Help setting up files"
    ],
    suffix: "Includes Brand Kit Package"
  }
];

const ldJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital Brand Design Pricing",
  description: "Simple logo and brand packages: basic logo, brand kit, full brand (25% off).",
  itemListElement: brandPackages.map((p, i) => {
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
      itemOffered: { "@type": "Service", name: p.title, serviceType: "Graphic & Brand Design", provider: { "@id": "https://nutab.ca/#organization" } }
    };
  })
};

const PriceChartBrandDesign: React.FC = () => {
  const formatDiscount = (n: number) => "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <section className="brand-price-chart" aria-labelledby="brand-pricing-heading" aria-describedby="brand-pricing-desc">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <div className="brand-price-chart__intro">
        <h2 id="brand-pricing-heading" className="brand-muted">Brand Design Pricing</h2>
        <p id="brand-pricing-desc" className="brand-intro">Choose what you need: a basic logo, a brand kit, or the complete package. 25% OFF is already included.</p>
      </div>
      <div className="brand-price-chart__grid">
        {brandPackages.map(pkg => {
          const discountedRaw = Math.round(pkg.priceNumber * 0.75);
          const discountedDisplay = formatDiscount(discountedRaw);
          return (
            <article key={pkg.id} id={pkg.id} className={`brand-bundle ${pkg.badge ? "brand-bundle--popular" : ""}`} aria-labelledby={`${pkg.id}-title`} itemScope itemType="https://schema.org/Service">
              {pkg.badge && <span className="brand-bundle__badge">{pkg.badge}</span>}
              <span className="brand-bundle__promo-badge" aria-label="Limited time 25 percent off">25% OFF</span>
              <h3 id={`${pkg.id}-title`} className="brand-bundle__title" itemProp="name">{pkg.title}</h3>
              <p className="brand-bundle__subtitle" itemProp="description">{pkg.subtitle}</p>
              <div className="brand-bundle__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <span className="brand-bundle__price-from">Starting from</span>
                <meta itemProp="priceCurrency" content="CAD" />
                <meta itemProp="url" content="https://nutab.ca/pricing" />
                <span className="brand-bundle__price-amount brand-bundle__price-original" aria-label={`Original price ${pkg.priceDisplay}`}>{pkg.priceDisplay}</span>
                <span className="brand-bundle__price-amount brand-bundle__price-discounted" itemProp="price" content={String(discountedRaw)} aria-label={`Discounted price ${discountedDisplay}`}>{discountedDisplay}</span>
                {pkg.suffix && <span className="brand-bundle__price-suffix">{pkg.suffix}</span>}
              </div>
              <ul className="brand-bundle__features" aria-label={`${pkg.title} features`}>
                {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <div className="brand-bundle__cta"><GetQuoteButton /></div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PriceChartBrandDesign;
