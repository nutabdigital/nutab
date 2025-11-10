import React from "react";
// import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./page.css";
import { Metadata } from "next";
import GetQuoteButton from "../../components/GetQuoteButton/GetQuoteButton";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { LineChart, Megaphone, Users } from "lucide-react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ServicesWhySection, { WhySolution } from "../../components/ServicesWhySection/ServicesWhySection";
import ServicesGrid, { ServiceItem } from "../../components/ServicesGrid/ServicesGrid";
import BenefitsSection, { Benefit } from "../../components/BenefitsSection/BenefitsSection";
import IndustryGrid, { IndustryItem } from "../../components/IndustryGrid/IndustryGrid";
import ProcessTimeline, { ProcessStep } from "../../components/ProcessTimeline/ProcessTimeline";
import FeatureGrid, { FeatureItem } from "../../components/FeatureGrid/FeatureGrid";
import RelatedServicesSection, { RelatedServiceItem } from "../../components/RelatedServicesSection/RelatedServicesSection";

export const generateMetadata = (): Metadata => ({
  title: "SEO & Digital Marketing Services in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers SEO and digital marketing services in Calgary, Alberta. Enhance your online visibility, attract customers, and grow your business.",
  alternates: {
    canonical: "https://nutab.ca/services/seo-marketing",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "SEO & Digital Marketing Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers SEO and digital marketing services in Calgary, Alberta. Enhance your online visibility, attract customers, and grow your business.",
    url: "https://nutab.ca/services/seo-marketing",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/3d-nutab-logo.png",
        width: 600,
        height: 600,
        alt: "SEO & Digital Marketing Services in Calgary",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Digital Marketing Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers SEO and digital marketing services in Calgary, Alberta. Enhance your online visibility, attract customers, and grow your business.",
    images: ["https://nutab.ca/photos/3d-nutab-logo.png"],
  },
});

const services: ServiceItem[] = [
  { title: "Search Engine Optimization (SEO)", description: "On-page, technical, and local SEO to improve organic visibility." },
  { title: "Content Marketing", description: "Strategy and content creation that attracts and converts your audience." },
  { title: "Paid Advertising (PPC)", description: "Targeted ad campaigns to drive traffic and conversions." },
  { title: "Social Media Marketing", description: "Build your brand and engage audiences across platforms." },
  { title: "Analytics & Reporting", description: "Data-driven insights to measure performance and optimize campaigns." },
];

const industries: IndustryItem[] = [
  { name: "Retail & E-Commerce" },
  { name: "Healthcare" },
  { name: "Finance" },
  { name: "Education" },
  { name: "Real Estate" },
];

const relatedServices: RelatedServiceItem[] = [
  { label: "Custom Software Development", link: "/services/custom-software" },
  { label: "Business IT Consulting", link: "/services/it-consulting" },
  { label: "AI & Automation Solutions", link: "/services/ai-automation" },
];

const benefits: Benefit[] = [
  { title: "Increased Visibility", description: "Improve search rankings to attract more organic traffic." },
  { title: "Better Conversions", description: "Optimize funnels and content to turn visitors into customers." },
  { title: "Cost-Effective Growth", description: "Long-term value through organic channels and optimized ad spend." },
  { title: "Audience Insights", description: "Use analytics to inform strategy and creative decisions." },
  { title: "Brand Authority", description: "Build trust and relevance through consistent, high-quality content." },
];

// FAQ data - single source of truth
const faqs = [
  {
    question: "What is SEO?",
    answer: "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results, making it easier for potential customers to find you online."
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "Results depend on competition and the current state of your site, but noticeable improvements often appear within 3–6 months."
  },
  {
    question: "Do you offer content creation?",
    answer: "Yes — we provide content strategy and production to support SEO and audience engagement."
  }
];

const processSteps: ProcessStep[] = [
  { title: "Discovery", description: "Audit current performance, competitors, and goals." },
  { title: "Strategy", description: "Create an SEO and marketing plan aligned to your objectives." },
  { title: "Implementation", description: "Execute technical fixes, content, and campaigns." },
  { title: "Optimize", description: "Iterate based on data, tests, and performance." },
  { title: "Report & Scale", description: "Deliver insights and scale successful tactics." },
];

const features: FeatureItem[] = [
  { title: "Data-Driven", description: "Decisions backed by analytics and A/B testing." },
  { title: "Content-first", description: "High-quality content to attract and retain users." },
  { title: "Local Expertise", description: "Strategies tailored for Calgary and Canadian markets." },
  { title: "Transparent Reporting", description: "Clear metrics and regular updates on campaign performance." },
  { title: "Integrated Approach", description: "SEO, content, ads, and social working together." },
];

const whySolutions: WhySolution[] = [
  { icon: "LineChart", title: "SEO Strategies", description: "Sustained organic growth through technical and content improvements." },
  { icon: "Megaphone", title: "Advertising", description: "Targeted paid campaigns to accelerate results." },
  { icon: "Users", title: "Audience Growth", description: "Build and nurture audiences across channels." },
];

const SEODigitalMarketing: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1}>
      <Background />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "SEO & Digital Marketing" }
      ]} />
      {/* <Loader /> */}

      {/* Breadcrumbs JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://nutab.ca" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://nutab.ca/services" },
              { "@type": "ListItem", position: 3, name: "SEO & Digital Marketing", item: "https://nutab.ca/services/seo-marketing" }
            ]
          }),
        }}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "SEO & Digital Marketing",
            description:
              "Enhance your online visibility and attract customers with our SEO and digital marketing services.",
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
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
              }
            })),
          }),
        }}
      />

      <SectionWrapper>
        <HeroSection
          title="SEO & Digital Marketing Services in Calgary"
          subtitle={
            <>
              At NuTab Digital, we deliver SEO and digital marketing that helps businesses increase visibility, attract qualified traffic, and convert visitors into customers across organic and paid channels.
            </>
          }
          icons={[
            { icon: <LineChart className="icon purple" />, label: "SEO Strategies" },
            { icon: <Megaphone className="icon blue" />, label: "Digital Campaigns" },
            { icon: <Users className="icon pink" />, label: "Audience Growth" },
          ]}
          showCTA={true}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ServicesWhySection
          title="Why Choose SEO & Digital Marketing?"
          description={
            <>
              We combine technical SEO, strategic content, and targeted campaigns to drive measurable growth for your business.
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
          title="Our SEO & Digital Marketing Services"
          subtitle="Comprehensive services designed to grow your online presence and conversions."
          layout="grid"
          columns={2}
          theme="gradient"
          animated={true}
          showIcons={false}
        />
      </SectionWrapper>

      <SectionWrapper>
        <BenefitsSection
          title="Benefits of SEO & Digital Marketing"
          subtitle="Invest in channels that deliver sustained growth and measurable outcomes."
          benefits={benefits}
        />
      </SectionWrapper>

      <SectionWrapper>
        <IndustryGrid
          items={industries}
          title="Industries We Serve"
          subtitle="Proven digital strategies across a range of industries."
          layout="pills"
          theme="gradient"
          animated={true}
          columns={3}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ProcessTimeline
          steps={processSteps}
          title="How We Work"
          subtitle="A data-driven process to plan, execute, and optimize marketing performance."
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
              We deliver transparent, measurable digital marketing that aligns with your business goals.
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
          Ready to grow your online presence? Contact us to discuss a tailored SEO and digital marketing plan for your business.
        </p>
        <GetQuoteButton />
      </SectionWrapper>

            <SectionWrapper className="section-wrapper--faq">
        <div className="faq">
          <header className="faq__header">
            <h2>Frequently Asked Questions</h2>
            <p className="faq__lead">Quick answers to common questions about our SEO & digital marketing services.</p>
          </header>
          <div className="faq__list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq__item">
                <summary className="faq__summary">
                  <h3 className="faq-question">{faq.question}</h3>
                </summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default SEODigitalMarketing;
