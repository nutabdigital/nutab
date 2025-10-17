import React from "react";
import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import dynamic from "next/dynamic";
import "./page.css";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { Briefcase, Users, Lightbulb } from "lucide-react";
import GetQuoteButton from "@/app/components/GetQuoteButton/GetQuoteButton";

const SectionWrapper = dynamic(
  () => import("../../components/SectionWrapper/SectionWrapper"),
  { ssr: false }
);

export const generateMetadata = (): import("next").Metadata => ({
  title: "Business & IT Consulting Services in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers business and IT consulting services in Calgary, Alberta. Get expert guidance on digital transformation, technology adoption, and growth strategies tailored to your business.",
  alternates: {
    canonical: "https://nutab.ca/services/business-it-consulting",
  },
  openGraph: {
    title: "Business & IT Consulting Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers business and IT consulting services in Calgary, Alberta. Get expert guidance on digital transformation, technology adoption, and growth strategies tailored to your business.",
    url: "https://nutab.ca/services/business-it-consulting",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/3d-nutab-logo.png",
        width: 600,
        height: 600,
        alt: "Business & IT Consulting Services in Calgary",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business & IT Consulting Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers business and IT consulting services in Calgary, Alberta. Get expert guidance on digital transformation, technology adoption, and growth strategies tailored to your business.",
    images: ["https://nutab.ca/photos/3d-nutab-logo.png"],
  },
});

const BusinessITConsulting: React.FC = () => {
  return (
    <>
      <Background />
      <Loader />

      {/* Structured Data Script: Service & FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Business & IT Consulting",
            description:
              "Expert guidance on digital transformation, technology adoption, and growth strategies tailored to your business.",
            provider: {
              "@type": "Organization",
              name: "NuTab Digital",
              url: "https://nutab.ca",
            },
            areaServed: "Calgary, Alberta",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is business & IT consulting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Business & IT consulting provides expert advice on technology, strategy, and operations to help organizations achieve their goals and solve challenges."
                }
              },
              {
                "@type": "Question",
                "name": "How can consulting help my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Consulting helps you make informed decisions, optimize processes, adopt new technologies, and drive growth."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer ongoing support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide ongoing advice and optimization to ensure your business continues to succeed."
                }
              },
              {
                "@type": "Question",
                "name": "Can you help with digital transformation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We specialize in guiding organizations through digital transformation and technology adoption."
                }
              },
              {
                "@type": "Question",
                "name": "Is consulting right for small businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our consulting services are tailored for businesses of all sizes, including startups and small enterprises."
                }
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <SectionWrapper className="section-wrapper--no-padding">
        <HeroSection
          title="Business & IT Consulting Services in Calgary"
          subtitle={
            <>
              At <span className="highlight">NuTab Digital</span>, we empower organizations with
              <span className="accent"> expert business and IT consulting </span>
              to drive digital transformation, optimize technology adoption, and accelerate growth.
              Our team delivers actionable strategies tailored to your unique business needs.
            </>
          }
          icons={[
            {
              icon: <Briefcase className="icon purple" />,
              label: "Business Strategy",
            },
            {
              icon: <Users className="icon blue" />,
              label: "Team Enablement",
            },
            {
              icon: <Lightbulb className="icon pink" />,
              label: "Digital Innovation",
            },
          ]}
          showCTA={true}
        />
      </SectionWrapper>

      {/* Why Choose This Service */}
      <SectionWrapper>
        <h2>Why Choose Business & IT Consulting?</h2>
        <p>
          <strong>Business and IT consulting</strong> helps you navigate complex technology decisions, streamline operations, and unlock new growth opportunities. Our consultants provide the expertise and insights you need to stay competitive.
        </p>
      </SectionWrapper>

      {/* Our Services */}
      <SectionWrapper>
        <h2>Our Consulting Services</h2>
        <ul>
          <li>
            <strong>Digital Transformation:</strong> Modernize your business with the latest technologies and processes.
          </li>
          <li>
            <strong>IT Strategy & Planning:</strong> Develop a roadmap for technology adoption and integration.
          </li>
          <li>
            <strong>Process Optimization:</strong> Improve efficiency and reduce costs with streamlined workflows.
          </li>
          <li>
            <strong>Change Management:</strong> Ensure smooth transitions during technology upgrades or business changes.
          </li>
          <li>
            <strong>Risk Assessment:</strong> Identify and mitigate technology and business risks.
          </li>
        </ul>
      </SectionWrapper>

      {/* Benefits of the Service */}
      <SectionWrapper>
        <h2>Benefits of Business & IT Consulting</h2>
        <ul>
          <li><strong>Expert Guidance:</strong> Make informed decisions with help from experienced consultants.</li>
          <li><strong>Efficiency:</strong> Streamline operations and maximize ROI.</li>
          <li><strong>Innovation:</strong> Stay ahead with the latest digital solutions.</li>
          <li><strong>Scalability:</strong> Build a foundation for future growth.</li>
          <li><strong>Risk Reduction:</strong> Minimize risks and ensure business continuity.</li>
        </ul>
      </SectionWrapper>

      {/* Industries We Serve */}
      <SectionWrapper>
        <h2>Industries We Serve</h2>
        <p>
          Our <strong>business & IT consulting services</strong> support a wide range of industries:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "2rem" }}>
          <li>Healthcare</li>
          <li>Finance</li>
          <li>Retail</li>
          <li>Manufacturing</li>
          <li>Professional Services</li>
        </ul>
      </SectionWrapper>

      {/* How We Work */}
      <SectionWrapper>
        <h2>How We Work</h2>
        <ol>
          <li><strong>Discovery:</strong> We assess your business goals and challenges.</li>
          <li><strong>Strategy:</strong> Our team develops a tailored consulting plan.</li>
          <li><strong>Implementation:</strong> We guide you through technology adoption and process changes.</li>
          <li><strong>Support:</strong> Ongoing advice and optimization for lasting results.</li>
        </ol>
      </SectionWrapper>

      {/* Why Partner with NuTab Digital */}
      <SectionWrapper>
        <h2>Why Partner with NuTab Digital?</h2>
        <ul>
          <li><strong>Experienced Consultants:</strong> Deep expertise in business and IT strategy.</li>
          <li><strong>Tailored Solutions:</strong> Every engagement is customized to your needs.</li>
          <li><strong>Local Support:</strong> Calgary-based team for responsive service.</li>
          <li><strong>Long-Term Partnership:</strong> We’re committed to your ongoing success.</li>
        </ul>
      </SectionWrapper>

      {/* Internal Links for SEO */}
      <SectionWrapper>
        <h2>Related Services</h2>
        <ul>
          <li>
            <a href="/services/ai-automation">AI & Automation Solutions</a>
          </li>
          <li>
            <a href="/services/custom-software">Custom Software Development</a>
          </li>
          <li>
            <a href="/services/seo-digital-marketing">SEO & Digital Marketing</a>
          </li>
        </ul>
      </SectionWrapper>

      {/* Get Started Today */}
      <SectionWrapper>
        <h2>Get Started Today</h2>
        <p>
          Ready to transform your business? Contact us to discuss your <strong>business & IT consulting</strong> needs and discover how NuTab Digital can help you achieve your goals.
        </p>
        <GetQuoteButton />
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="section-wrapper--faq">
        <div className="faq">
          <header className="faq__header">
            <h2>Frequently Asked Questions</h2>
            <p className="faq__lead">Quick answers to common questions about our business & IT consulting services.</p>
          </header>
          <div className="faq__list">
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">What is business & IT consulting?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Business & IT consulting provides expert advice on technology, strategy, and operations to help organizations achieve their goals and solve challenges.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">How can consulting help my business?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Consulting helps you make informed decisions, optimize processes, adopt new technologies, and drive growth.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Do you offer ongoing support?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Yes, we provide ongoing advice and optimization to ensure your business continues to succeed.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Can you help with digital transformation?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Absolutely! We specialize in guiding organizations through digital transformation and technology adoption.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Is consulting right for small businesses?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Yes, our consulting services are tailored for businesses of all sizes, including startups and small enterprises.
                </p>
              </div>
            </details>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default BusinessITConsulting;