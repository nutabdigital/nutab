"use client";

import React from "react";
import "./PriceChartAIAutomation.css";
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton";

type AIPackage = {
  id: string;
  title: string;
  subtitle: string;
  priceNumber: number;
  priceDisplay: string;
  features: string[];
  badge?: string;
  suffix?: string;
};

const aiPackages: AIPackage[] = [
  {
    id: "ai-starter",
    title: "Automation Starter",
    subtitle: "Pilot one workflow with measurable ROI",
    priceNumber: 3000,
    priceDisplay: "$3,000",
    features: [
      "Process discovery workshop",
      "1 automated workflow (Zapier/Make/API)",
      "Basic data validation & logging",
      "Email/Slack notifications",
      "Handover + quickstart playbook",
    ],
  },
  {
    id: "ai-growth",
    title: "Automation Growth",
    subtitle: "Stack multiple automations across teams",
    badge: "Popular",
    priceNumber: 6000,
    priceDisplay: "$6,000",
    features: [
      "3–5 workflows across apps",
      "Human-in-the-loop approvals",
      "LLM prompts for drafting/emails",
      "Error handling & retries",
      "Observability dashboard",
    ],
    suffix: "Includes Starter",
  },
  {
    id: "ai-scale",
    title: "Automation Scale",
    subtitle: "Custom agents, APIs, and governance",
    priceNumber: 12000,
    priceDisplay: "$12,000",
    features: [
      "Custom API/DB integrations",
      "RAG/embeddings for knowledge",
      "Fine-tuned prompts & evals",
      "Role-based access & audit",
      "Runbooks + enablement",
    ],
    suffix: "Includes Growth",
  },
];

const ldJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital AI Automation Pricing",
  description:
    "Starter, Growth and Scale automation packages (25% discount applied).",
  itemListElement: aiPackages.map((p, i) => {
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
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: discounted,
        priceCurrency: "CAD",
      },
      itemOffered: {
        "@type": "Service",
        name: p.title,
        serviceType: "AI Automation",
        provider: { "@id": "https://nutab.ca/#organization" },
      },
    };
  }),
};

const PriceChartAIAutomation: React.FC = () => {
  const fmt = (n: number) =>
    "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <section
      className="aiauto-price-chart"
      aria-labelledby="aiauto-pricing-heading"
      aria-describedby="aiauto-pricing-desc"
      role="region"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />

      <div className="aiauto-price-chart__intro">
        <h2 id="aiauto-pricing-heading" className="aiauto-muted">
          AI Automation Pricing
        </h2>
        <p id="aiauto-pricing-desc" className="aiauto-intro">
          Build from a pilot to org-wide automation. 25% OFF applied.
        </p>
      </div>

      <div className="aiauto-price-chart__grid" role="list" aria-label="AI automation packages">
        {aiPackages.map((pkg) => {
          const discountedRaw = Math.round(pkg.priceNumber * 0.75);
          const discountedDisplay = fmt(discountedRaw);
          return (
            <article
              key={pkg.id}
              id={pkg.id}
              className={`aiauto-bundle ${pkg.badge ? "aiauto-bundle--popular" : ""}`}
              aria-labelledby={`${pkg.id}-title`}
              itemScope
              itemType="https://schema.org/Service"
            role="listitem"
            >
              {pkg.badge && (
                <span className="aiauto-bundle__badge">{pkg.badge}</span>
              )}
              <span
                className="aiauto-bundle__promo-badge"
                aria-label="Limited time 25 percent off"
              >
                25% OFF
              </span>

              <h3 id={`${pkg.id}-title`} className="aiauto-bundle__title" itemProp="name">
                {pkg.title}
              </h3>
              <p className="aiauto-bundle__subtitle" itemProp="description">
                {pkg.subtitle}
              </p>

              <div
                className="aiauto-bundle__price"
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <span className="aiauto-bundle__price-from">Starting from</span>
                <meta itemProp="priceCurrency" content="CAD" />
                <meta itemProp="url" content="https://nutab.ca/pricing" />
                <meta itemProp="availability" content="https://schema.org/InStock" />
                <span
                  className="aiauto-bundle__price-amount aiauto-bundle__price-original"
                  aria-label={`Original price ${pkg.priceDisplay}`}
                >
                  {pkg.priceDisplay}
                </span>
                <span
                  className="aiauto-bundle__price-amount aiauto-bundle__price-discounted"
                  itemProp="price"
                  content={String(discountedRaw)}
                  aria-label={`Discounted price ${discountedDisplay}`}
                >
                  {discountedDisplay}
                </span>
                {pkg.suffix && (
                  <span className="aiauto-bundle__price-suffix">{pkg.suffix}</span>
                )}
              </div>

              <ul className="aiauto-bundle__features" aria-label={`${pkg.title} features`}>
                {pkg.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="aiauto-bundle__cta">
                <GetQuoteButton />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PriceChartAIAutomation;
