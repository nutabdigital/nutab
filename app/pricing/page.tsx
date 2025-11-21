import React from "react";
import type { Metadata } from "next";
import PriceChart from "../components/PriceChart/PriceChart";
import PriceChartSEO from "../components/PriceChartSEO/PriceChartSEO";
import PriceChartBrandDesign from "../components/PriceChartBrandDesign/PriceChartBrandDesign";
import "./page.css";
import Background from "../components/Background/Background";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pricing | Web Design Packages | NuTab Digital",
  description:
    "Transparent web design pricing. Essential ($899), Growth ($1,799), Enterprise Pro ($3,599). Custom solutions with no hidden fees.",
  openGraph: {
    title: "Pricing | Web Design Packages | NuTab Digital",
    description:
      "Web design packages starting at $899. Transparent pricing with clear deliverables.",
    url: "https://nutab.ca/pricing",
    siteName: "NuTab Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://nutab.ca/photos/og-pricing.webp",
        width: 1200,
        height: 800,
        alt: "NuTab Digital web design pricing - Essential, Growth, Enterprise Pro packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Web Design Packages | NuTab Digital",
    description: "Web design packages starting at $899. Transparent pricing with clear deliverables.",
    images: ["https://nutab.ca/photos/og-pricing.webp"],
  },
  alternates: {
    canonical: "https://nutab.ca/pricing",
  },
};

const PricingPage: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="pricing-main">
      <Background />
      
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Pricing" }
      ]} />

      {/* Breadcrumb JSON-LD (SSR, matches visible trail) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://nutab.ca/pricing#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://nutab.ca" },
              { "@type": "ListItem", position: 2, name: "Pricing", item: "https://nutab.ca/pricing" },
            ],
          }),
        }}
      />

      <PriceChart />
      <PriceChartSEO />
      <PriceChartBrandDesign />
    </main>
  );
};

export default PricingPage;