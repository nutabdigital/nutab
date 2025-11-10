import React from "react";
// import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./page.css";
import { Metadata } from "next";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { Briefcase, Users, Lightbulb } from "lucide-react";
import GetQuoteButton from "../../components/GetQuoteButton/GetQuoteButton";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ProcessTimeline, {
  ProcessStep,
} from "../../components/ProcessTimeline/ProcessTimeline";
import IndustryGrid, {
  IndustryItem,
} from "../../components/IndustryGrid/IndustryGrid";
import ServicesGrid, {
  ServiceItem,
} from "../../components/ServicesGrid/ServicesGrid";
import FeatureGrid, {
  FeatureItem,
} from "../../components/FeatureGrid/FeatureGrid";
import RelatedServicesSection, {
  RelatedServiceItem,
} from "../../components/RelatedServicesSection/RelatedServicesSection";
import BenefitsSection, {
  Benefit,
} from "../../components/BenefitsSection/BenefitsSection";
import ServicesWhySection, {
  WhySolution,
} from "../../components/ServicesWhySection/ServicesWhySection";

export const generateMetadata = (): Metadata => ({
  title: "Business & IT Consulting Services in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers business and IT consulting services in Calgary, Alberta. Get expert guidance on digital transformation, technology adoption, and growth strategies tailored to your business.",
  alternates: {
    canonical: "https://nutab.ca/services/it-consulting",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Business & IT Consulting Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers business and IT consulting services in Calgary, Alberta. Get expert guidance on digital transformation, technology adoption, and growth strategies tailored to your business.",
    url: "https://nutab.ca/services/it-consulting",
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

const services: ServiceItem[] = [
  {
    title: "Digital Transformation Strategy",
    description: "Roadmaps and plans to modernize systems and processes.",
  },
  {
    title: "IT Roadmapping",
    description: "Align technology with business goals and priorities.",
  },
  {
    title: "Cloud Strategy & Migration",
    description: "Plan and execute secure cloud moves with minimal disruption.",
  },
  {
    title: "Security & Compliance",
    description:
      "Risk assessments, policies, and controls for regulatory needs.",
  },
  {
    title: "Operational Optimization",
    description: "Improve processes to reduce cost and increase efficiency.",
  },
];

const industries: IndustryItem[] = [
  { name: "Healthcare" },
  { name: "Finance" },
  { name: "Retail" },
  { name: "Manufacturing" },
  { name: "Professional Services" },
];

const relatedServices: RelatedServiceItem[] = [
  { label: "Custom Software Development", link: "/services/custom-software" },
  { label: "AI & Automation Solutions", link: "/services/ai-automation" },
  { label: "SEO & Digital Marketing", link: "/services/seo-marketing" },
];

const benefits: Benefit[] = [
  {
    title: "Clear Roadmaps",
    description: "Actionable plans that reduce risk and speed up delivery.",
  },
  {
    title: "Cost Efficiency",
    description: "Optimize spend across people, processes, and platforms.",
  },
  {
    title: "Improved Security",
    description: "Stronger posture and compliance for peace of mind.",
  },
  {
    title: "Faster Time-to-Value",
    description: "Prioritized initiatives that deliver measurable outcomes.",
  },
  {
    title: "Scalable Operations",
    description: "Foundation that grows with your business needs.",
  },
];

// FAQ data - single source of truth
const faqs = [
  {
    question: "What is business & IT consulting?",
    answer: "Business & IT consulting provides expert advice on technology, strategy, and operations to help organizations achieve their goals and solve challenges."
  },
  {
    question: "How can consulting help my business?",
    answer: "Consulting helps you make informed decisions, optimize processes, adopt new technologies, and drive growth."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide ongoing advice and optimization to ensure your business continues to succeed."
  },
  {
    question: "Can you help with digital transformation?",
    answer: "Absolutely! We specialize in guiding organizations through digital transformation and technology adoption."
  },
  {
    question: "Is consulting right for small businesses?",
    answer: "Yes, our consulting services are tailored for businesses of all sizes, including startups and small enterprises."
  }
];

const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description:
      "Understand business objectives, constraints, and opportunities.",
  },
  {
    title: "Assessment",
    description: "Audit current systems, security, and processes.",
  },
  {
    title: "Strategy",
    description: "Develop prioritized roadmap and success metrics.",
  },
  {
    title: "Implementation",
    description: "Deliver projects, integrations, and change management.",
  },
  {
    title: "Support",
    description: "Ongoing monitoring, optimization, and training.",
  },
];

const features: FeatureItem[] = [
  {
    title: "Expert Advisors",
    description: "Experienced consultants with practical delivery experience.",
  },
  {
    title: "Practical Roadmaps",
    description: "Realistic plans focused on impact and feasibility.",
  },
  {
    title: "Vendor Neutral",
    description: "We recommend best-fit solutions, not vendor lock-in.",
  },
  {
    title: "Local Support",
    description: "Calgary-based team for timely, on-the-ground assistance.",
  },
  {
    title: "Outcome Focused",
    description: "We measure success by real business results.",
  },
];

const whySolutions: WhySolution[] = [
  {
    icon: "Briefcase",
    title: "Business Strategy",
    description: "Align IT investments with business outcomes.",
  },
  {
    icon: "Users",
    title: "Team Enablement",
    description: "Train and enable teams to adopt new tools and processes.",
  },
  {
    icon: "Lightbulb",
    title: "Innovation",
    description: "Identify opportunities for digital advantage.",
  },
];

const BusinessITConsulting: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1}>
      <Background />
      {/* <Loader /> */}
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "IT Consulting" }
      ]} />

      {/* Breadcrumbs JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://nutab.ca",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://nutab.ca/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Business IT Consulting",
                item: "https://nutab.ca/services/it-consulting",
              },
            ],
          }),
        }}
      />

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
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <SectionWrapper>
        <HeroSection
          title="Business & IT Consulting Services in Calgary"
          subtitle={
            <>
              At NuTab Digital, we empower organizations with expert business
              and IT consulting to drive digital transformation, optimize
              technology adoption, and accelerate growth. Our team delivers
              actionable strategies tailored to your unique business needs.
            </>
          }
          icons={[
            {
              icon: <Briefcase className="icon purple" />,
              label: "Business Strategy",
            },
            { icon: <Users className="icon blue" />, label: "Team Enablement" },
            {
              icon: <Lightbulb className="icon pink" />,
              label: "Digital Innovation",
            },
          ]}
          showCTA={true}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ServicesWhySection
          title="Why Choose Business & IT Consulting?"
          description={
            <>
              Effective consulting combines practical experience with a clear
              roadmap to deliver measurable outcomes. We prioritize initiatives
              that reduce risk and accelerate value.
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
          title="Our Consulting Services"
          subtitle="Practical services designed to align technology with business goals."
          layout="grid"
          columns={2}
          theme="gradient"
          animated={true}
          showIcons={false}
        />
      </SectionWrapper>

      <SectionWrapper>
        <BenefitsSection
          title="Benefits of Business & IT Consulting"
          subtitle="Partnering with consultants can deliver strategic clarity and operational improvements."
          benefits={benefits}
        />
      </SectionWrapper>

      <SectionWrapper>
        <IndustryGrid
          items={industries}
          title="Industries We Serve"
          subtitle="Our consulting services support a wide range of industries."
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
          subtitle="A pragmatic, outcome-focused process to deliver results."
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
              We combine strategy, technical expertise, and delivery experience
              to help organizations achieve their goals.
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
        <h2 className="gradient-title">Get Started Today</h2>
        <p className="section-text">
          Ready to transform your business? Contact us to discuss your business
          & IT consulting needs and discover how NuTab Digital can help you
          achieve your goals.
        </p>
        <GetQuoteButton />
      </SectionWrapper>

      <SectionWrapper className="section-wrapper--faq">
        <div className="faq">
          <header className="faq__header">
            <h2 className="gradient-title">Frequently Asked Questions</h2>
            <p className="faq__lead section-text">
              Quick answers to common questions about our business & IT
              consulting services.
            </p>
          </header>
          <div className="faq__list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq__item">
                <summary className="faq__summary">
                  <h3 className="faq-question">{faq.question}</h3>
                </summary>
                <div className="faq-answer section-text">
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

export default BusinessITConsulting;
