"use client";

import React from "react";
import "./PriceChartPhotoMedia.css";
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton";

interface PhotoMediaPackage {
  id: string;
  title: string;
  subtitle: string;
  priceNumber: number;
  priceDisplay: string;
  features: string[];
  badge?: string;
  suffix?: string;
}

const photoPackages: PhotoMediaPackage[] = [
  {
    id: "photo-basic",
    title: "Basic Shoot",
    subtitle: "Essential photography session",
    priceNumber: 600,
    priceDisplay: "$600",
    features: [
      "Up to 2 hours on-site",
      "30 edited photos",
      "Basic lighting setup",
      "Commercial usage rights"
    ]
  },
  {
    id: "media-plus",
    title: "Media Plus",
    subtitle: "Mixed photo & short video",
    badge: "Popular",
    priceNumber: 1200,
    priceDisplay: "$1,200",
    features: [
      "Half‑day production",
      "60 edited photos",
      "2 short social videos",
      "Color grading & light retouch",
      "Priority turnaround"
    ],
    suffix: "Includes Basic Shoot"
  },
  {
    id: "full-production",
    title: "Full Production",
    subtitle: "Story-driven photo + video",
    priceNumber: 2400,
    priceDisplay: "$2,400",
    features: [
      "Full‑day multi-location",
      "100 edited photos",
      "4 polished videos (30–60s)",
      "Storyboarding & direction",
      "Advanced post-production",
      "License & asset delivery"
    ],
    suffix: "Includes Media Plus"
  }
];

// 25% discount integrated
const ldJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital Photography & Media Pricing",
  description: "Basic Shoot, Media Plus, and Full Production packages (25% discount applied).",
  itemListElement: photoPackages.map((p, i) => {
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
      itemOffered: { "@type": "Service", name: p.title, serviceType: "Photography & Media Production", provider: { "@id": "https://nutab.ca/#organization" } }
    };
  })
};

const PriceChartPhotoMedia: React.FC = () => {
  const formatPrice = (n: number) => "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <section className="photo-media-price-chart" aria-labelledby="photo-media-pricing-heading" aria-describedby="photo-media-pricing-desc" role="region">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <div className="photo-media-price-chart__intro">
        <h2 id="photo-media-pricing-heading" className="photo-media-muted">Photography & Media Pricing</h2>
        <p id="photo-media-pricing-desc" className="photo-media-intro">Three clear tiers for professional visual content. 25% OFF already included.</p>
      </div>
      <div className="photo-media-price-chart__grid" role="list" aria-label="Photography & media packages">
        {photoPackages.map(pkg => {
          const discountedRaw = Math.round(pkg.priceNumber * 0.75);
          const discountedDisplay = formatPrice(discountedRaw);
          return (
            <article key={pkg.id} id={pkg.id} className={`photo-media-bundle ${pkg.badge ? "photo-media-bundle--popular" : ""}`} aria-labelledby={`${pkg.id}-title`} itemScope itemType="https://schema.org/Service" role="listitem">
              {pkg.badge && <span className="photo-media-bundle__badge">{pkg.badge}</span>}
              <span className="photo-media-bundle__promo-badge" aria-label="Limited time 25 percent off">25% OFF</span>
              <h3 id={`${pkg.id}-title`} className="photo-media-bundle__title" itemProp="name">{pkg.title}</h3>
              <p className="photo-media-bundle__subtitle" itemProp="description">{pkg.subtitle}</p>
              <div className="photo-media-bundle__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <span className="photo-media-bundle__price-from">Starting from</span>
                <meta itemProp="priceCurrency" content="CAD" />
                <meta itemProp="url" content="https://nutab.ca/pricing" />
                <meta itemProp="availability" content="https://schema.org/InStock" />
                <span className="photo-media-bundle__price-amount photo-media-bundle__price-original" aria-label={`Original price ${pkg.priceDisplay}`}>{pkg.priceDisplay}</span>
                <span className="photo-media-bundle__price-amount photo-media-bundle__price-discounted" itemProp="price" content={String(discountedRaw)} aria-label={`Discounted price ${discountedDisplay}`}>{discountedDisplay}</span>
                {pkg.suffix && <span className="photo-media-bundle__price-suffix">{pkg.suffix}</span>}
              </div>
              <ul className="photo-media-bundle__features" aria-label={`${pkg.title} features`}>
                {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <div className="photo-media-bundle__cta"><GetQuoteButton /></div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PriceChartPhotoMedia;
