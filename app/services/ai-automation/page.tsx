import React from "react";
// import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./page.css";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { Brain, Zap, ShieldCheck } from "lucide-react";
import GetQuoteButton from "../../components/GetQuoteButton/GetQuoteButton";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import HowItWorksTimeline, { ProcessStep } from "../../components/HowItWorksTimeline/HowItWorksTimeline";
import IndustriesServed, { IndustryItem } from "../../components/IndustriesServed/IndustriesServed";
import ServicesList, { ServiceItem } from "../../components/ServicesList/ServicesList";
import FeatureHighlights, { FeatureItem } from "../../components/FeatureHighlights/FeatureHighlights";
import RelatedServices, { RelatedServiceItem } from "../../components/RelatedServices/RelatedServices";
import BenefitsOverview, { Benefit } from "../../components/BenefitsOverview/BenefitsOverview";
import WhyChooseSection, { WhySolution } from "../../components/WhyChooseSection/WhyChooseSection";
import FAQSection from "../../components/FAQSection/FAQSection";

export const generateMetadata = (): import("next").Metadata => ({
  title: "AI & Automation Solutions Calgary | Machine Learning & Workflow Automation | NuTab Digital",
  description:
    "Calgary's AI and automation experts. NuTab Digital helps Alberta businesses leverage artificial intelligence, machine learning, and workflow automation to reduce costs and improve efficiency. Free consultation.",
  keywords: ["AI solutions Calgary", "automation Calgary", "machine learning Alberta", "AI development Calgary", "workflow automation Calgary", "chatbot development Alberta"],
  alternates: {
    canonical: "https://nutab.ca/services/ai-automation",
  },
  openGraph: {
    title: "AI & Automation Solutions Calgary | Machine Learning & Workflow Automation | NuTab Digital",
    description:
      "Calgary's AI and automation experts. NuTab Digital helps Alberta businesses leverage artificial intelligence, machine learning, and workflow automation.",
    url: "https://nutab.ca/services/ai-automation",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-ai-automation.webp",
        width: 1200,
        height: 800,
        alt: "AI & Automation Solutions in Calgary, Alberta",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Automation Solutions Calgary | Machine Learning & Workflow Automation | NuTab Digital",
    description:
      "Calgary's AI and automation experts helping Alberta businesses leverage artificial intelligence and workflow automation.",
    images: ["https://nutab.ca/photos/og-ai-automation.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
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
    // SEO-focused FAQs
    ,{
      question: "What are the main benefits of AI automation for businesses?",
      answer: "AI automation increases efficiency, reduces costs, improves accuracy, and enables smarter decision-making. It helps businesses stay competitive and scale operations easily."
    }
    ,{
      question: "Is AI automation secure for sensitive business data?",
      answer: "Yes, our AI automation solutions are designed with robust security protocols to protect your sensitive business data and ensure compliance with industry standards."
    }
    ,{
      question: "How do I get started with AI automation in my company?",
      answer: "Start by scheduling a consultation with our experts. We assess your needs, recommend the best AI automation strategies, and guide you through implementation."
    }
    ,{
      question: "Can small businesses benefit from AI automation?",
      answer: "Absolutely. AI automation is scalable and can help small businesses save time, reduce manual work, and improve customer service without large investments."
    }
    ,{
      question: "How long does it take to implement AI automation?",
      answer: "Implementation time varies based on project scope, but most businesses see results within weeks. We provide clear timelines and ongoing support throughout the process."
    }
    // Local Calgary FAQs
    ,{
      question: "Do you offer AI automation services in Calgary?",
      answer: "Yes! NuTab Digital is based in Calgary and provides AI and automation solutions for Alberta businesses. We help local companies leverage AI to improve efficiency and reduce costs."
    }
    ,{
      question: "Can Calgary businesses benefit from AI automation?",
      answer: "Absolutely. We work with Calgary businesses of all sizes to implement AI chatbots, workflow automation, and machine learning solutions tailored to local market needs."
    }
    ,{
      question: "Is your AI team based in Calgary?",
      answer: "Yes, our Calgary-based team provides local support, in-person consultations, and ongoing collaboration for AI and automation projects."
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
  { title: "Local Calgary Expertise", description: "Calgary-based AI specialists helping Alberta businesses adopt automation." },
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
            datePublished: "2024-01-15",
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
  <WhyChooseSection
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
  <ServicesList
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
  <BenefitsOverview
          title="Benefits of AI & Automation"
          subtitle="Investing in AI and automation delivers measurable benefits to your business."
          benefits={benefits}
        />
      </SectionWrapper>

      <SectionWrapper>
  <IndustriesServed
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
  <HowItWorksTimeline
          steps={processSteps}
          title="How We Work"
          subtitle="We follow a proven process to deliver reliable AI and automation solutions."
          orientation="vertical"
          theme="gradient"
          animated={true}
        />
      </SectionWrapper>

      <SectionWrapper>
  <FeatureHighlights
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
  <RelatedServices
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

  <FAQSection faqs={faqs} lead="Quick answers to common questions about our AI & automation solutions." />
    </main>
  );
};

export default AIAutomation;