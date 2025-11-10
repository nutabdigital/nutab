import React from "react";
// import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import "./page.css";
import { Metadata } from "next";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { MonitorSmartphone, Layers, ShieldCheck } from "lucide-react";
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
  title: "Mobile & Web App Development Services in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers mobile and web app development services in Calgary, Alberta. Build scalable, user-friendly apps for iOS, Android, and the web.",
  alternates: {
    canonical: "https://nutab.ca/services/mobile-web-app-development",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Mobile & Web App Development Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers mobile and web app development services in Calgary, Alberta. Build scalable, user-friendly apps for iOS, Android, and the web.",
    url: "https://nutab.ca/services/mobile-web-app-development",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/3d-nutab-logo.png",
        width: 600,
        height: 600,
        alt: "Mobile & Web App Development Services in Calgary",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile & Web App Development Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers mobile and web app development services in Calgary, Alberta. Build scalable, user-friendly apps for iOS, Android, and the web.",
    images: ["https://nutab.ca/photos/3d-nutab-logo.png"],
  },
});

const services: ServiceItem[] = [
  { title: "Custom Mobile Apps", description: "Feature-rich apps for iOS and Android." },
  { title: "Responsive Web Apps", description: "Web applications that perform across devices." },
  { title: "UI/UX Design", description: "User-centered interfaces and workflows." },
  { title: "API Integration", description: "Connect with third-party services and internal systems." },
  { title: "Maintenance & Support", description: "Ongoing updates and monitoring." },
];

const industries: IndustryItem[] = [
  { name: "Healthcare" },
  { name: "Finance" },
  { name: "Retail and E-Commerce" },
  { name: "Education" },
  { name: "Travel & Hospitality" },
];

const relatedServices: RelatedServiceItem[] = [
  { label: "Custom Software Development", link: "/services/custom-software" },
  { label: "Business IT Consulting", link: "/services/business-it-consulting" },
  { label: "SEO & Digital Marketing", link: "/services/seo-digital-marketing" },
];

const benefits: Benefit[] = [
  { title: "Improved Engagement", description: "Deliver native-like experiences that keep users coming back." },
  { title: "Cross-Platform Reach", description: "Reach customers on mobile and web with consistent experiences." },
  { title: "Faster Time-to-Market", description: "Iterate quickly with pragmatic development workflows." },
  { title: "Scalable Architecture", description: "Build apps that scale with your user base." },
  { title: "Ongoing Support", description: "Maintenance and enhancements to keep your app competitive." },
];

const processSteps: ProcessStep[] = [
  { title: "Discovery", description: "Define goals, users, and technical constraints." },
  { title: "Design", description: "Wireframes and prototypes to validate UX." },
  { title: "Development", description: "Build using best-fit technologies and patterns." },
  { title: "Testing", description: "QA, performance, and accessibility testing." },
  { title: "Launch & Support", description: "Deploy, monitor, and iterate post-launch." },
];

const features: FeatureItem[] = [
  { title: "Cross-Platform Expertise", description: "Experience building for iOS, Android, and the web." },
  { title: "Performance Focused", description: "Optimized apps for fast, reliable experiences." },
  { title: "Secure by Design", description: "Security and privacy considered from day one." },
  { title: "User-Centered", description: "Designs that prioritize usability and conversion." },
  { title: "Local Support", description: "Calgary-based team for close collaboration." },
];

const whySolutions: WhySolution[] = [
  { icon: "MonitorSmartphone", title: "Mobile Apps", description: "Native and cross-platform apps tailored to your needs." },
  { icon: "Layers", title: "Web Applications", description: "Robust web apps with responsive design." },
  { icon: "ShieldCheck", title: "Secure & Scalable", description: "Architectures that protect data and scale with demand." },
];

const MobileWebAppDevelopment: React.FC = () => {
  return (
    <>
      <Background />
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
              { "@type": "ListItem", position: 3, name: "Mobile & Web App Development", item: "https://nutab.ca/services/mobile-web-app-development" }
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
            name: "Mobile & Web App Development",
            description: "We create user-friendly mobile and web applications tailored to your business needs.",
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
                name: "What is mobile and web app development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mobile and web app development involves creating applications for mobile devices (iOS and Android) and web browsers with seamless user experiences."
                }
              },
              {
                "@type": "Question",
                name: "How long does it take to develop an app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Timelines vary by complexity — simple apps can be completed in weeks, complex projects may take several months."
                }
              },
              {
                "@type": "Question",
                name: "Do you provide ongoing support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we offer maintenance, monitoring, and iterative improvements post-launch."
                }
              }
            ]
          }),
        }}
      />

      <SectionWrapper>
        <HeroSection
          title="Mobile & Web App Development Services in Calgary"
          subtitle={
            <>
              At NuTab Digital, we build mobile and web applications that deliver exceptional user experiences and reliable performance. From prototypes to production, we partner with you through the entire product lifecycle.
            </>
          }
          icons={[
            { icon: <MonitorSmartphone className="icon purple" />, label: "Mobile Apps" },
            { icon: <Layers className="icon blue" />, label: "Web Apps" },
            { icon: <ShieldCheck className="icon pink" />, label: "Secure & Scalable" },
          ]}
          showCTA={true}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ServicesWhySection
          title="Why Choose Mobile & Web App Development?"
          description={
            <>
              We blend design, engineering, and product thinking to deliver apps that solve real user problems and drive business outcomes.
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
          title="Our App Development Services"
          subtitle="End-to-end mobile and web app development services to bring your product to market."
          layout="grid"
          columns={2}
          theme="gradient"
          animated={true}
          showIcons={false}
        />
      </SectionWrapper>

      <SectionWrapper>
        <BenefitsSection
          title="Benefits of Mobile & Web App Development"
          subtitle="Quality applications deliver measurable improvements in engagement, retention, and revenue."
          benefits={benefits}
        />
      </SectionWrapper>

      <SectionWrapper>
        <IndustryGrid
          items={industries}
          title="Industries We Serve"
          subtitle="We build apps for a variety of industries and use-cases."
          layout="pills"
          theme="gradient"
          animated={true}
          columns={3}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ProcessTimeline
          steps={processSteps}
          title="Our Development Process"
          subtitle="A structured process to ensure product-market fit and technical quality."
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
              We combine deep engineering experience with practical product thinking to deliver apps that matter.
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
          Ready to build your mobile or web app? Contact us to discuss your project and get a tailored plan to launch fast and scale safely.
        </p>
        <GetQuoteButton />
      </SectionWrapper>

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
                  Mobile and web app development involves creating applications for mobile devices and web browsers with a focus on usability, performance, and security.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">How long does it take to develop an app?</h3>
              </summary>
              <div className="faq-answer">
                <p>Timelines depend on scope — simple projects in weeks, complex platforms in months.</p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Do you provide ongoing support?</h3>
              </summary>
              <div className="faq-answer">
                <p>Yes — we offer maintenance, monitoring, and iterative improvements post-launch.</p>
              </div>
            </details>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default MobileWebAppDevelopment;