import React from "react";
// import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import "./page.css";
import { Metadata } from "next";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { PenTool, Palette, Image } from "lucide-react";
import GetQuoteButton from "../../components/GetQuoteButton/GetQuoteButton";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ServicesWhySection, { WhySolution } from "../../components/ServicesWhySection/ServicesWhySection";
import ServicesGrid, { ServiceItem } from "../../components/ServicesGrid/ServicesGrid";
import BenefitsSection, { Benefit } from "../../components/BenefitsSection/BenefitsSection";
import IndustryGrid, { IndustryItem } from "../../components/IndustryGrid/IndustryGrid";
import ProcessTimeline, { ProcessStep } from "../../components/ProcessTimeline/ProcessTimeline";
import FeatureGrid, { FeatureItem } from "../../components/FeatureGrid/FeatureGrid";
import RelatedServicesSection, { RelatedServiceItem } from "../../components/RelatedServicesSection/RelatedServicesSection";

export const generateMetadata = (): Metadata => ({
  title: "Graphic & Brand Design Services in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers graphic and brand design services in Calgary, Alberta. Strengthen your brand with creative design solutions, including logos, digital graphics, and visual identity.",
  alternates: {
    canonical: "https://nutab.ca/services/graphic-brand-design",
  },
  openGraph: {
    title: "Graphic & Brand Design Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers graphic and brand design services in Calgary, Alberta. Strengthen your brand with creative design solutions, including logos, digital graphics, and visual identity.",
    url: "https://nutab.ca/services/graphic-brand-design",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/3d-nutab-logo.png",
        width: 600,
        height: 600,
        alt: "Graphic & Brand Design Services in Calgary",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic & Brand Design Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers graphic and brand design services in Calgary, Alberta. Strengthen your brand with creative design solutions, including logos, digital graphics, and visual identity.",
    images: ["https://nutab.ca/photos/3d-nutab-logo.png"],
  },
});

const services: ServiceItem[] = [
  { title: "Logo Design", description: "Custom logos that reflect your brand identity." },
  { title: "Visual Identity", description: "Color systems, typography, and brand guidelines." },
  { title: "Digital Graphics", description: "Assets for web, social, and marketing." },
  { title: "Print Collateral", description: "Business cards, brochures, and packaging." },
  { title: "Brand Refresh", description: "Modernize and align your brand across touchpoints." },
];

const industries: IndustryItem[] = [
  { name: "Retail" },
  { name: "Healthcare" },
  { name: "Finance" },
  { name: "Education" },
  { name: "Professional Services" },
];

const relatedServices: RelatedServiceItem[] = [
  { label: "Custom Software Development", link: "/services/custom-software" },
  { label: "Business IT Consulting", link: "/services/business-it-consulting" },
  { label: "SEO & Digital Marketing", link: "/services/seo-digital-marketing" },
];

const benefits: Benefit[] = [
  { title: "Memorable Branding", description: "Create a strong visual identity that resonates with customers." },
  { title: "Professional Appearance", description: "Build trust with polished, consistent design." },
  { title: "Cross-Channel Consistency", description: "Ensure your brand looks great across digital and print." },
  { title: "Creative Impact", description: "Stand out in competitive markets with unique visuals." },
  { title: "Reusable Assets", description: "Receive files and guidelines for long-term use." },
];

const processSteps: ProcessStep[] = [
  { title: "Discovery", description: "Understand your brand, goals, and audience." },
  { title: "Concept", description: "Develop initial concepts and direction." },
  { title: "Design", description: "Refine and finalize brand assets." },
  { title: "Delivery", description: "Provide production-ready files and guidelines." },
  { title: "Support", description: "Ongoing design support as your brand evolves." },
];

const features: FeatureItem[] = [
  { title: "Creative Expertise", description: "Experienced designers focused on brand impact." },
  { title: "Tailored Solutions", description: "Designs crafted to your unique needs." },
  { title: "Local Support", description: "Calgary-based team for responsive collaboration." },
  { title: "Full-Service", description: "From logo to launch-ready brand systems." },
  { title: "File Handover", description: "You receive all assets and guidelines for future use." },
];

const whySolutions: WhySolution[] = [
  { icon: "PenTool", title: "Logo & Identity", description: "Distinctive logos and cohesive visual systems." },
  { icon: "Palette", title: "Creative Direction", description: "Strategic design that communicates brand value." },
  { icon: "Image", title: "Digital & Print", description: "Assets optimized for every channel." },
];

const GraphicBrandDesign: React.FC = () => {
  return (
    <>
      <Background />
      {/* <Loader /> */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Graphic & Brand Design",
            description:
              "Strengthen your brand with creative design solutions, including logos, digital graphics, and visual identity.",
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
            mainEntity: [
              {
                "@type": "Question",
                name: "What is brand design?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Brand design is the process of creating a visual identity for your business, including logos, colors, fonts, and style guidelines."
                }
              },
              {
                "@type": "Question",
                name: "Do you offer logo design?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we create custom logos that reflect your brand’s personality and values."
                }
              },
              {
                "@type": "Question",
                name: "Can you design graphics for social media?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely — we design assets optimized for web and social platforms."
                }
              },
            ],
          }),
        }}
      />

      <SectionWrapper>
        <HeroSection
          title="Graphic & Brand Design Services in Calgary"
          subtitle={
            <>
              At NuTab Digital, we help businesses stand out with creative graphic and brand design solutions. From logo design and visual identity to digital graphics and print collateral, our team brings your brand vision to life.
            </>
          }
          icons={[
            { icon: <PenTool className="icon purple" />, label: "Logo Design" },
            { icon: <Palette className="icon blue" />, label: "Brand Identity" },
            { icon: <Image className="icon pink" />, label: "Digital Graphics" },
          ]}
          showCTA={true}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ServicesWhySection
          title="Why Choose Graphic & Brand Design?"
          description={
            <>
              Strong brand design builds recognition and trust. We create strategic, memorable visuals that communicate your values and help you connect with your audience.
            </>
          }
          solutions={whySolutions}
          theme="gradient"
          animated={true}
          interactive={false}
          columns={3}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ServicesGrid
          services={services}
          title="Our Design Services"
          subtitle="Logo design, brand systems, digital assets, and print collateral."
          layout="grid"
          columns={2}
          theme="gradient"
          animated={true}
          showIcons={false}
        />
      </SectionWrapper>

      <SectionWrapper>
        <BenefitsSection
          title="Benefits of Professional Design"
          subtitle="Investing in quality design delivers measurable brand benefits."
          benefits={benefits}
        />
      </SectionWrapper>

      <SectionWrapper>
        <IndustryGrid
          items={industries}
          title="Industries We Serve"
          subtitle="Branding and design for a wide range of industries."
          layout="pills"
          theme="gradient"
          animated={true}
          columns={3}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ProcessTimeline
          steps={processSteps}
          title="Our Creative Process"
          subtitle="A collaborative process to define and deliver your brand."
          orientation="vertical"
          theme="gradient"
          animated={true}
        />
      </SectionWrapper>

      <SectionWrapper>
        <FeatureGrid
          title="Why Partner with NuTab Digital?"
          subtitle={
            <>
              We combine creative expertise with practical delivery to produce brand systems that perform across channels.
            </>
          }
          features={features}
          columns={2}
          variant="gradient"
          theme="gradient"
          animated={true}
          interactive={false}
          showIcons={false}
          size="md"
          iconPosition="top"
        />
      </SectionWrapper>

      <SectionWrapper>
        <RelatedServicesSection
          title="Related Services"
          services={relatedServices}
          variant="gradient"
          theme="gradient"
          animated={true}
          interactive={true}
          layout="centered"
          columns={3}
          showIcons={false}
        />
      </SectionWrapper>

      <SectionWrapper>
        <h2>Get Started Today</h2>
        <p>
          Ready to elevate your brand? Contact us to discuss your graphic & brand design needs and discover how NuTab Digital can help you stand out.
        </p>
        <GetQuoteButton />
      </SectionWrapper>

      <SectionWrapper className="section-wrapper--faq">
        <div className="faq">
          <header className="faq__header">
            <h2>Frequently Asked Questions</h2>
            <p className="faq__lead">Quick answers to common questions about our graphic & brand design services.</p>
          </header>
          <div className="faq__list">
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">What is brand design?</h3>
              </summary>
              <div className="faq-answer">
                <p>Brand design is the process of creating a visual identity for your business, including logos, colors, fonts, and style guidelines.</p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Do you offer logo design?</h3>
              </summary>
              <div className="faq-answer">
                <p>Yes, we create custom logos that reflect your brand’s personality and values.</p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Can you design graphics for social media?</h3>
              </summary>
              <div className="faq-answer">
                <p>Absolutely — we design assets optimized for web and social platforms.</p>
              </div>
            </details>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default GraphicBrandDesign;