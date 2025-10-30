import React from "react";
import type { Metadata } from "next";
import Loader from "../components/Loader/Loader";
import PriceChart from "../components/PriceChart/PriceChart";
import "./page.css";
import Background from "../components/Background/Background";

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
        url: "https://nutab.ca/photos/og-pricing.jpg", // Updated path
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
    images: ["https://nutab.ca/photos/og-pricing.jpg"], // Updated path
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