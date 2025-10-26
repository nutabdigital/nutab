import React from "react";
import type { Metadata } from "next";
import Loader from "../components/Loader/Loader";
import PriceChart from "../components/PriceChart/PriceChart";
import "./page.css";
import Background from "../components/Background/Background";

export const metadata: Metadata = {
  title: "Web Design Pricing | Transparent Packages Starting at $899 | NuTab Digital",
  description:
    "Professional web design packages for Canadian businesses. Essential ($899), Growth ($1,799), and Enterprise ($3,599) plans with clear deliverables. No hidden fees.",
  openGraph: {
    title: "Web Design Pricing | NuTab Digital",
    description:
      "Professional web design packages starting at $899. Transparent pricing, clear deliverables, custom solutions for Canadian businesses.",
    url: "https://nutab.ca/pricing",
    siteName: "NuTab Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://nutab.ca/photos/3d-nutab-logo.webp",
        width: 600,
        height: 600,
        alt:
          "NuTab Digital pricing packages comparison - Essential, Growth, and Enterprise plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Pricing | NuTab Digital",
    description: "Professional web design packages starting at $899. Transparent pricing for Canadian businesses.",
    images: ["https://nutab.ca/photos/3d-nutab-logo.webp"],
  },
  alternates: {
    canonical: "https://nutab.ca/pricing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PricingPage: React.FC = () => {
  return (
    <>
      <Background /> 
      <Loader />
      <main className="pricing-main">
          <PriceChart />
      </main>
    </>
  );
};

export default PricingPage;