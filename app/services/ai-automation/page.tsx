import React from "react";
// import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./page.css";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { Brain, Zap, ShieldCheck } from "lucide-react";
import GetQuoteButton from "../../components/GetQuoteButton/GetQuoteButton";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ProcessTimeline, { ProcessStep } from "../../components/ProcessTimeline/ProcessTimeline";
import IndustryGrid, { IndustryItem } from "../../components/IndustryGrid/IndustryGrid";
import ServicesGrid, { ServiceItem } from "../../components/ServicesGrid/ServicesGrid";
import FeatureGrid, { FeatureItem } from "../../components/FeatureGrid/FeatureGrid";
import RelatedServicesSection, { RelatedServiceItem } from "../../components/RelatedServicesSection/RelatedServicesSection";
import BenefitsSection, { Benefit } from "../../components/BenefitsSection/BenefitsSection";
import ServicesWhySection, { WhySolution } from "../../components/ServicesWhySection/ServicesWhySection";

export const generateMetadata = (): import("next").Metadata => ({
  title: "AI & Automation Solutions in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers AI and automation solutions in Calgary, Alberta. Leverage artificial intelligence and automation to improve efficiency, reduce manual tasks, and make smarter decisions.",
  alternates: {
    canonical: "https://nutab.ca/services/ai-automation",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AI & Automation Solutions in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers AI and automation solutions in Calgary, Alberta. Leverage artificial intelligence and automation to improve efficiency, reduce manual tasks, and make smarter decisions.",
    url: "https://nutab.ca/services/ai-automation",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/3d-nutab-logo.webp",
        width: 600,
        height: 600,
        alt: "AI & Automation Solutions in Calgary",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Automation Solutions in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers AI and automation solutions in Calgary, Alberta. Leverage artificial intelligence and automation to improve efficiency, reduce manual tasks, and make smarter decisions.",
    images: ["https://nutab.ca/photos/3d-nutab-logo.webp"],
  },
});

const services: ServiceItem[] = [
  { title: "Machine Learning Models", description: "Custom ML models for prediction, classification, and recommendations." },
  { title: "Workflow Automation", description: "Automate repetitive business processes and reduce manual work." },
  { title: "AI-Powered Chatbots", description: "Conversational assistants to enhance customer support and engagement." },
  { title: "Data Engineering", description: "Pipeline design, ETL, and data preparation for reliable AI." },
  { title: "Integration & APIs", description: "Integrate AI capabilities into existing systems and applications." },
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
  { label: "Business IT Consulting", link: "/services/it-consulting" },
  { label: "SEO & Digital Marketing", link: "/services/seo-marketing" },
];

const benefits: Benefit[] = [
  { title: "Efficiency", description: "Automate repetitive tasks and free up valuable time." },
  { title: "Accuracy", description: "Reduce errors and improve consistency with data-driven decisions." },
  { title: "Scalability", description: "AI solutions that grow with your business." },
  { title: "Cost Savings", description: "Lower operational costs by automating manual processes." },
  { title: "Competitive Edge", description: "Adopt innovative technology to stay ahead." },
];

// FAQ data - single source of truth
const faqs = [
  {
    question: "What is AI & automation?",
    answer: "AI (Artificial Intelligence) uses computer systems to perform tasks that normally require human intelligence. Automation uses technology to perform tasks with minimal human intervention."
  },
  {
    question: "How can AI help my business?",
    answer: "AI can help you analyze data, automate decisions, improve customer service, and optimize operations for better results."
  },
  {
    question: "Is automation expensive?",
    answer: "Automation can reduce costs over time by saving labor and improving efficiency. We offer solutions for businesses of all sizes."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we provide ongoing support and optimization to ensure your AI and automation solutions continue to deliver value."
  },
  {
    question: "Can you integrate AI with my existing systems?",
    answer: "Absolutely! We specialize in integrating AI and automation tools with your current business software and workflows."
  }
];

const processSteps: ProcessStep[] = [
  { title: "Discovery", description: "Assess needs, data, and opportunities for AI & automation." },
  { title: "Design", description: "Prototype, model selection, and architecture planning." },
  { title: "Implementation", description: "Develop, integrate, and deploy AI systems." },
  { title: "Testing", description: "Validate performance, reliability, and safety." },
  { title: "Support", description: "Ongoing monitoring, maintenance, and optimization." },
];

const features: FeatureItem[] = [
  { title: "Automation Expertise", description: "Streamline operations with reliable automation." },
  { title: "Secure Deployments", description: "Security-first approach for all AI solutions." },
  { title: "Data-Driven Insights", description: "Turn data into actionable business intelligence." },
  { title: "Custom Integrations", description: "Seamless integration with existing systems." },
  { title: "Local Support", description: "Calgary-based team for responsive service." },
];

const whySolutions: WhySolution[] = [
  { icon: "Brain", title: "AI Strategy", description: "Roadmaps and plans to adopt AI responsibly and effectively." },
  { icon: "Zap", title: "Automation", description: "End-to-end automation for improved throughput." },
  { icon: "ShieldCheck", title: "Security & Compliance", description: "Design that meets security and regulatory needs." },
];

const AIAutomation: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1}>
      <Background />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "AI & Automation" }
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
              { "@type": "ListItem", position: 3, name: "AI & Automation", item: "https://nutab.ca/services/ai-automation" }
            ]
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://nutab.ca/services/ai-automation#service",
            name: "AI & Automation Solutions",
            description:
              "Leverage artificial intelligence and automation to improve efficiency, reduce manual tasks, and make smarter decisions.",
            serviceType: "AI & Automation",
            url: "https://nutab.ca/services/ai-automation",
            image: "https://nutab.ca/photos/3d-nutab-logo.png",
            dateModified: "2025-11-10",
            provider: {
              "@id": "https://nutab.ca/#organization"
            },
            areaServed: {
              "@type": "City",
              name: "Calgary",
              containedIn: {
                "@type": "AdministrativeArea",
                name: "Alberta"
              }
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://nutab.ca/services/ai-automation"
            }
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
          title="AI & Automation Solutions in Calgary"
          subtitle={
            <>
              At NuTab Digital, we help businesses unlock the power of artificial intelligence and automation to streamline operations, reduce manual tasks, and make smarter decisions. From machine learning to workflow automation, our team delivers future-ready solutions tailored to your needs.
            </>
          }
          icons={[
            { icon: <Brain className="icon purple" />, label: "AI Tools" },
            { icon: <Zap className="icon blue" />, label: "Automation" },
            { icon: <ShieldCheck className="icon pink" />, label: "Secure & Reliable" },
          ]}
          showCTA={true}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ServicesWhySection
          title="Why Choose AI & Automation?"
          description={
            <>
              AI and automation empower your business to work smarter, not harder. Automate repetitive tasks, gain insights from data, and improve decision-making with intelligent solutions.
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
          title="Our AI & Automation Services"
          subtitle="Explore how our AI & automation services can help your organization."
          layout="grid"
          columns={2}
          theme="gradient"
          animated={true}
          showIcons={false}
        />
      </SectionWrapper>

      <SectionWrapper>
        <BenefitsSection
          title="Benefits of AI & Automation"
          subtitle="Investing in AI and automation delivers measurable benefits to your business."
          benefits={benefits}
        />
      </SectionWrapper>

      <SectionWrapper>
        <IndustryGrid
          items={industries}
          title="Industries We Serve"
          subtitle="Our AI & automation solutions support a wide range of industries."
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
          subtitle="We follow a proven process to deliver reliable AI and automation solutions."
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
              At NuTab Digital, we pride ourselves on being a trusted AI and automation partner. Here’s why businesses choose us:
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
          Ready to transform your business with <strong>AI & automation?</strong> Contact us to discuss your goals and discover how NuTab Digital can help you work smarter.
        </p>
        <GetQuoteButton />
      </SectionWrapper>

      <SectionWrapper className="section-wrapper--faq">
        <div className="faq">
          <header className="faq__header">
            <h2>Frequently Asked Questions</h2>
            <p className="faq__lead">Quick answers to common questions about our AI & automation solutions.</p>
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

export default AIAutomation;