import React from "react";
import type { Metadata } from "next";
import Loader from "../components/Loader/Loader";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import PriceChart from "../components/PriceChart/PriceChart";
import "./page.css";

export const metadata: Metadata = {
  title: "Pricing - NuTab Digital",
  description: "Transparent pricing for NuTab Digital services. Pick the plan that matches your goals.",
};

const PricingPage: React.FC = () => {
  return (
    <>
      <Loader />
      <main className="pricing-main">
        <SectionWrapper className="section-wrapper--custom-padding pricing-section">
          <h1 className="pricing-title">Our Pricing</h1>
          <p className="pricing-lead">
            Clear, flexible plans tailored to your stage of growth.
          </p>
          <PriceChart />
        </SectionWrapper>
      </main>
    </>
  );
};

export default PricingPage;