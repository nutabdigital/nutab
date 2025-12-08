import React from "react";
// import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./page.css";
import { Metadata } from "next";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { MonitorSmartphone, Layers, ShieldCheck } from "lucide-react";
import GetQuoteButton from "../../components/GetQuoteButton/GetQuoteButton";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import WhyChooseSection, { WhySolution } from "../../components/WhyChooseSection/WhyChooseSection";
import ServicesList, { ServiceItem } from "../../components/ServicesList/ServicesList";
import BenefitsOverview, { Benefit } from "../../components/BenefitsOverview/BenefitsOverview";
import IndustriesServed, { IndustryItem } from "../../components/IndustriesServed/IndustriesServed";
import HowItWorksTimeline, { ProcessStep } from "../../components/HowItWorksTimeline/HowItWorksTimeline";
import FeatureHighlights, { FeatureItem } from "../../components/FeatureHighlights/FeatureHighlights";
import RelatedServices, { RelatedServiceItem } from "../../components/RelatedServices/RelatedServices";
import FAQSection from "../../components/FAQSection/FAQSection";

export const generateMetadata = (): Metadata => ({
  title: "Mobile & Web App Development Calgary | iOS, Android & Web Apps | NuTab Digital",
  description:
    "Calgary's top-rated mobile and web app development company. NuTab Digital builds custom iOS, Android, and web applications for Alberta businesses. Cross-platform expertise. Free quote.",
  keywords: ["app development Calgary", "mobile app developers Calgary", "web app development Alberta", "iOS app Calgary", "Android app Calgary", "cross-platform apps Alberta"],
  alternates: {
    canonical: "https://nutab.ca/services/app-development",
  },
  openGraph: {
    title: "Mobile & Web App Development Calgary | iOS, Android & Web Apps | NuTab Digital",
    description:
      "Calgary's top-rated mobile and web app development company. NuTab Digital builds custom iOS, Android, and web applications for Alberta businesses.",
    url: "https://nutab.ca/services/app-development",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-app-development.webp",
        width: 1200,
        height: 800,
        alt: "Mobile & Web App Development Services in Calgary, Alberta",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile & Web App Development Calgary | iOS, Android & Web Apps | NuTab Digital",
    description:
      "Calgary's top-rated mobile and web app development company. Build custom apps for iOS, Android, and the web.",
    images: ["https://nutab.ca/photos/og-app-development.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
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
  { label: "Business IT Consulting", link: "/services/it-consulting" },
  { label: "SEO & Digital Marketing", link: "/services/seo-marketing" },
];

const benefits: Benefit[] = [
  { title: "Improved Engagement", description: "Deliver native-like experiences that keep users coming back." },
  { title: "Cross-Platform Reach", description: "Reach customers on mobile and web with consistent experiences." },
  { title: "Faster Time-to-Market", description: "Iterate quickly with pragmatic development workflows." },
  { title: "Scalable Architecture", description: "Build apps that scale with your user base." },
  { title: "Ongoing Support", description: "Maintenance and enhancements to keep your app competitive." },
];

// FAQ data - single source of truth
const faqs = [
  {
    question: "What is mobile and web app development?",
    answer: "Mobile and web app development involves creating applications for mobile devices (iOS and Android) and web browsers with seamless user experiences."
  },
  {
    question: "How long does it take to develop an app?",
    answer: "Timelines vary by complexity — simple apps can be completed in weeks, complex projects may take several months."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer maintenance, monitoring, and iterative improvements post-launch."
  }
    // SEO-focused FAQs
    ,{
      question: "How much does it cost to develop a mobile or web app?",
      answer: "App development costs depend on features, platforms, and complexity. We provide transparent quotes and scalable solutions for every budget."
    }
    ,{
      question: "Can you build apps for both iOS and Android?",
      answer: "Yes, we specialize in cross-platform development, delivering apps that work seamlessly on both iOS and Android devices."
    }
    ,{
      question: "Will my app be optimized for SEO and performance?",
      answer: "Absolutely. We follow best practices for SEO, speed, and accessibility to ensure your app ranks well and delivers a great user experience."
    }
    ,{
      question: "Do you help with app store submission and launch?",
      answer: "Yes, we guide you through app store submission, launch, and post-launch support to maximize your app’s success."
    }
    ,{
      question: "Is my app idea safe and confidential?",
      answer: "We treat every project with strict confidentiality and can sign NDAs to protect your app idea and business information."
    }
    // Local Calgary FAQs
    ,{
      question: "Do you offer app development services in Calgary?",
      answer: "Yes! NuTab Digital is a Calgary-based app development company serving businesses across Alberta. We build iOS, Android, and web applications for local clients."
    }
    ,{
      question: "Can I meet with your Calgary app developers in person?",
      answer: "Absolutely. Our Calgary team is available for in-person consultations, demos, and ongoing project collaboration with local businesses."
    }
    ,{
      question: "Do you build apps for Calgary startups?",
      answer: "Yes, we specialize in helping Calgary startups and small businesses bring their app ideas to life with scalable, user-friendly solutions."
    }
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
  { title: "Local Calgary Expertise", description: "Calgary-based developers who understand Alberta businesses and local market needs." },
];

const whySolutions: WhySolution[] = [
  { icon: "MonitorSmartphone", title: "Mobile Apps", description: "Native and cross-platform apps tailored to your needs." },
  { icon: "Layers", title: "Web Applications", description: "Robust web apps with responsive design." },
  { icon: "ShieldCheck", title: "Secure & Scalable", description: "Architectures that protect data and scale with demand." },
];

const MobileWebAppDevelopment: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1}>
      <Background />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Mobile & Web App Development" }
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
              { "@type": "ListItem", position: 3, name: "Mobile & Web App Development", item: "https://nutab.ca/services/app-development" }
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
            "@id": "https://nutab.ca/services/app-development#service",
            name: "Mobile & Web App Development",
            description: "We create user-friendly mobile and web applications tailored to your business needs.",
            serviceType: "Mobile & Web App Development",
            url: "https://nutab.ca/services/app-development",
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
              serviceUrl: "https://nutab.ca/services/app-development"
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
                text: faq.answer
              }
            }))
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
  <WhyChooseSection
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
  <ServicesList
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
  <BenefitsOverview
          title="Benefits of Mobile & Web App Development"
          subtitle="Quality applications deliver measurable improvements in engagement, retention, and revenue."
          benefits={benefits}
        />
      </SectionWrapper>

      <SectionWrapper>
  <IndustriesServed
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
  <HowItWorksTimeline
          steps={processSteps}
          title="Our Development Process"
          subtitle="A structured process to ensure product-market fit and technical quality."
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
        <h2 style={{
          background: "linear-gradient(to right, rgb(192, 132, 252), rgb(147, 197, 253))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent"
        }}>Get Started Today</h2>
        <p>
          Ready to build your mobile or web app? Contact us to discuss your project and get a tailored plan to launch fast and scale safely.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <GetQuoteButton />
        </div>
      </SectionWrapper>

  <FAQSection faqs={faqs} lead="Quick answers to common questions about our mobile & web app development services." />
    </main>
  );
};

export default MobileWebAppDevelopment;