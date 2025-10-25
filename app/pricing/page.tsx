import React from "react";
import type { Metadata } from "next";
import Loader from "../components/Loader/Loader";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import PriceChart from "../components/PriceChart/PriceChart";
import "./page.css";
import Background from "../components/Background/Background";

export const metadata: Metadata = {
  title: "Pricing - NuTab Digital",
  description: "Transparent pricing for NuTab Digital services. Pick the plan that matches your goals.",
};

const PricingPage: React.FC = () => {
  return (
    <>
      <Background /> 
      <Loader />
      <main className="pricing-main">
        <SectionWrapper className="section-wrapper--custom-padding pricing-section">
          <PriceChart />
        </SectionWrapper>
      </main>
    </>
  );
};

export default PricingPage;