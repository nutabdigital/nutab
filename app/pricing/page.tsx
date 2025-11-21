import React from "react";
import type { Metadata } from "next";
import PriceChart from "../components/PriceChart/PriceChart";
import dynamic from "next/dynamic";
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

// Defer below-the-fold charts to client to reduce initial payload
const PriceChartSEO = dynamic(
  () => import("../components/PriceChartSEO/PriceChartSEO"),
  { ssr: false, loading: () => <section className="pricing-section" aria-busy="true" aria-label="Loading SEO pricing..." /> }
);
const PriceChartBrandDesign = dynamic(
  () => import("../components/PriceChartBrandDesign/PriceChartBrandDesign"),
  { ssr: false, loading: () => <section className="pricing-section" aria-busy="true" aria-label="Loading brand design pricing..." /> }
);
const PriceChartEcommerce = dynamic(
  () => import("../components/PriceChartEcommerce/PriceChartEcommerce"),
  { ssr: false, loading: () => <section className="pricing-section" aria-busy="true" aria-label="Loading e-commerce pricing..." /> }
);
const PriceChartPhotoMedia = dynamic(
  () => import("../components/PriceChartPhotoMedia/PriceChartPhotoMedia"),
  { ssr: false, loading: () => <section className="pricing-section" aria-busy="true" aria-label="Loading photo and media pricing..." /> }
);
const PriceChartAppDev = dynamic(
  () => import("../components/PriceChartAppDev/PriceChartAppDev"),
  { ssr: false, loading: () => <section className="pricing-section" aria-busy="true" aria-label="Loading app development pricing..." /> }
);
const PriceChartITConsulting = dynamic(
  () => import("../components/PriceChartITConsulting/PriceChartITConsulting"),
  { ssr: false, loading: () => <section className="pricing-section" aria-busy="true" aria-label="Loading IT consulting pricing..." /> }
);
const PriceChartAIAutomation = dynamic(
  () => import("../components/PriceChartAIAutomation/PriceChartAIAutomation"),
  { ssr: false, loading: () => <section className="pricing-section" aria-busy="true" aria-label="Loading AI automation pricing..." /> }
);

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
      <PriceChartEcommerce />
      <PriceChartPhotoMedia />
      <PriceChartAppDev />
      <PriceChartITConsulting />
      <PriceChartAIAutomation />
    </main>
  );
};

export default PricingPage;