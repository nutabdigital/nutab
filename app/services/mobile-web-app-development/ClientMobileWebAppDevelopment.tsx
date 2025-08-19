"use client";

import React, { useEffect, useRef } from "react";
import "./page.css";
import dynamic from "next/dynamic";
import PriceChart from "../../components/PriceChart/PriceChart";
import { useSectionContext } from "../../context/SectionContext";

const SectionWrapper = dynamic(() => import("../../components/SectionWrapper/SectionWrapper"), {
    ssr: false,
});

const ClientMobileWebAppDevelopment: React.FC = () => {
    const { setCurrentSection } = useSectionContext();
    const infoRef = useRef<HTMLDivElement>(null);
    const pricingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === pricingRef.current) {
                        if (entry.isIntersecting) {
                            setCurrentSection(1);
                        }
                    }
                    if (entry.target === infoRef.current) {
                        if (entry.isIntersecting) {
                            setCurrentSection(2);
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );
        if (infoRef.current) observer.observe(infoRef.current);
        if (pricingRef.current) observer.observe(pricingRef.current);

        return () => {
            if (infoRef.current) observer.unobserve(infoRef.current);
            if (pricingRef.current) observer.unobserve(pricingRef.current);
        };
    }, [setCurrentSection]);

    return (
        <>

            {/* ...rest of your JSX... */}
            <div ref={infoRef}>
                {/* FAQ */}
                <SectionWrapper className="section-wrapper--faq">
                    <div className="faq">
                        <header className="faq__header">
                            <h2>Frequently Asked Questions</h2>
                            <p className="faq__lead">Quick answers to common questions about our mobile & web app development services.</p>
                        </header>

                        <div className="faq__list">
                            <details className="faq__item">
                                <summary className="faq__summary">
                                    <h3 className="faq-question">What is mobile and web app development?</h3>
                                </summary>
                                <div className="faq-answer">
                                    <p>
                                        Mobile and web app development involves creating applications for
                                        mobile devices (iOS and Android) and web browsers. These apps are
                                        designed to provide seamless user experiences and meet specific
                                        business needs.
                                    </p>
                                </div>
                            </details>

                            <details className="faq__item">
                                <summary className="faq__summary">
                                    <h3 className="faq-question">How long does it take to develop an app?</h3>
                                </summary>
                                <div className="faq-answer">
                                    <p>
                                        The timeline depends on the complexity of the app. Simple apps can
                                        take a few weeks, while more complex apps may take several months. We
                                        work with you to create a realistic timeline.
                                    </p>
                                </div>
                            </details>

                            <details className="faq__item">
                                <summary className="faq__summary">
                                    <h3 className="faq-question">Can you build apps for both iOS and Android?</h3>
                                </summary>
                                <div className="faq-answer">
                                    <p>
                                        Yes, we specialize in building cross-platform apps that work
                                        seamlessly on both iOS and Android devices.
                                    </p>
                                </div>
                            </details>

                            <details className="faq__item">
                                <summary className="faq__summary">
                                    <h3 className="faq-question">Do you provide ongoing support for apps?</h3>
                                </summary>
                                <div className="faq-answer">
                                    <p>
                                        Yes, we offer ongoing support and maintenance to ensure your app
                                        remains up-to-date and performs optimally.
                                    </p>
                                </div>
                            </details>

                            <details className="faq__item">
                                <summary className="faq__summary">
                                    <h3 className="faq-question">Can you integrate third-party APIs into the app?</h3>
                                </summary>
                                <div className="faq-answer">
                                    <p>
                                        Absolutely! We can integrate third-party APIs to enhance your app's
                                        functionality, such as payment gateways, social media, or analytics
                                        tools.
                                    </p>
                                </div>
                            </details>
                        </div>
                    </div>
                </SectionWrapper>
                {/* ...other info sections... */}
            </div>
            <div ref={pricingRef}>
                <SectionWrapper className="section-wrapper--pricing-full">
                    <PriceChart />
                </SectionWrapper>
            </div>
        </>
    );
};

export default ClientMobileWebAppDevelopment;