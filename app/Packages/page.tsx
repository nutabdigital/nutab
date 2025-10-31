import React from "react";
// import Loader from "../components/Loader/Loader";
import Background from "../components/Background/Background";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import PriceChart from "../components/PriceChart/PriceChart";
import "./page.css"; 

export const metadata = {
  title: "Packages - NuTab Digital",
  description: "Transparent pricing for all NuTab Digital services. Find the right package for your business needs.",
};

const PackagesPage: React.FC = () => (
  <>
    {/* <Loader /> */}
    <Background />
    <main className="pricing-main">
      <SectionWrapper className="section-wrapper--custom-padding">
        <h1 className="pricing-title">Our Packages</h1>
        <p className="pricing-lead">
          Transparent, flexible pricing for every service. Choose the package that fits your business goals.
        </p>
        <PriceChart />
      </SectionWrapper>
    </main>
  </>
);

export default PackagesPage;
