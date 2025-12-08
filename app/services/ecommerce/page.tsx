import React from "react";
// import dynamic from "next/dynamic";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./page.css";
import { Metadata } from "next";
import GetQuoteButton from "../../components/GetQuoteButton/GetQuoteButton";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { ShoppingCart, Layers, ShieldCheck } from "lucide-react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import WhyChooseSection, { WhySolution } from "../../components/WhyChooseSection/WhyChooseSection";
import ServicesList, { ServiceItem } from "../../components/ServicesList/ServicesList";
import BenefitsOverview, { Benefit } from "../../components/BenefitsOverview/BenefitsOverview";
import IndustriesServed, { IndustryItem } from "../../components/IndustriesServed/IndustriesServed";
import HowItWorksTimeline, { ProcessStep } from "../../components/HowItWorksTimeline/HowItWorksTimeline";
import FeatureHighlights, { FeatureItem } from "../../components/FeatureHighlights/FeatureHighlights";
import RelatedServices, { RelatedServiceItem } from "../../components/RelatedServices/RelatedServices";
import FAQSection from "../../components/FAQSection/FAQSection";

// const Loader = dynamic(() => import("../../components/Loader/Loader"), { ssr: false });

export const generateMetadata = (): Metadata => ({
  title: "E-Commerce Development Calgary | Shopify & WooCommerce Experts | NuTab Digital",
  description:
    "Calgary's e-commerce development specialists. NuTab Digital builds high-converting online stores for Alberta businesses — Shopify, WooCommerce, custom platforms. Secure payments. Free consultation.",
  keywords: ["ecommerce development Calgary", "Shopify developer Calgary", "WooCommerce Calgary", "online store Calgary", "ecommerce website Alberta", "Calgary web store development"],
  alternates: {
    canonical: "https://nutab.ca/services/ecommerce",
  },
  openGraph: {
    title: "E-Commerce Development Calgary | Shopify & WooCommerce Experts | NuTab Digital",
    description:
      "Calgary's e-commerce development specialists. NuTab Digital builds high-converting online stores for Alberta businesses — Shopify, WooCommerce, custom platforms.",
    url: "https://nutab.ca/services/ecommerce",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-ecommerce.webp",
        width: 1200,
        height: 800,
        alt: "E-Commerce Development Services in Calgary, Alberta",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Development Calgary | Shopify & WooCommerce Experts | NuTab Digital",
    description:
      "Calgary's e-commerce development specialists. Build high-converting online stores for Alberta businesses.",
    images: ["https://nutab.ca/photos/og-ecommerce.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
});

const services: ServiceItem[] = [
  { title: "Custom Online Stores", description: "Feature-rich, tailored e-commerce platforms." },
  { title: "Shopify & WooCommerce", description: "Platform-specific builds and migrations." },
  { title: "Payment Integration", description: "Secure payment gateways and checkout flows." },
  { title: "Performance Optimization", description: "Fast, SEO-friendly storefronts that convert." },
  { title: "Ongoing Support", description: "Maintenance, analytics, and feature improvements." },
];

const industries: IndustryItem[] = [
  { name: "Retail" },
  { name: "Fashion" },
  { name: "Electronics" },
  { name: "Health & Beauty" },
  { name: "Food & Beverage" },
];

const relatedServices: RelatedServiceItem[] = [
  { label: "Custom Software Development", link: "/services/custom-software" },
  { label: "Business IT Consulting", link: "/services/it-consulting" },
  { label: "SEO & Digital Marketing", link: "/services/seo-marketing" },
];

const benefits: Benefit[] = [
  { title: "Higher Conversions", description: "Optimized UX and checkout to increase sales." },
  { title: "Scalability", description: "Architecture designed to handle growth." },
  { title: "Secure Payments", description: "PCI-compliant integrations and fraud protection." },
  { title: "Better UX", description: "User-centric design for improved engagement." },
  { title: "Analytics & Insights", description: "Data-driven improvements to maximize ROI." },
];

// FAQ data - single source of truth
const faqs = [
  {
    question: "What is e-commerce development?",
    answer: "E-commerce development involves creating online stores and platforms that allow businesses to sell products or services online, including catalogs, carts, and payment gateways."
  },
  {
    question: "How long does it take to build an e-commerce site?",
    answer: "Timelines depend on complexity; simple stores can be delivered in weeks, complex platforms in months."
  },
  {
    question: "Can you integrate payment gateways?",
    answer: "Yes — we integrate gateways like Stripe, PayPal, and enterprise payment providers."
  }
    // SEO-focused FAQs
    ,{
      question: "How much does it cost to build an e-commerce website?",
      answer: "Costs vary based on features, platform, and design. We offer solutions for every budget and provide transparent quotes."
    }
    ,{
      question: "Will my online store be optimized for SEO?",
      answer: "Yes, we build e-commerce sites with SEO best practices to help your products rank higher and attract more customers."
    }
    ,{
      question: "Can you migrate my existing store to Shopify or WooCommerce?",
      answer: "Absolutely. We handle migrations to Shopify, WooCommerce, and other platforms with minimal downtime and data loss."
    }
    ,{
      question: "Is my e-commerce site secure for customer payments?",
      answer: "We implement PCI-compliant payment integrations and security protocols to protect customer data and transactions."
    }
    ,{
      question: "Do you provide ongoing support and updates?",
      answer: "Yes, we offer maintenance, analytics, and feature improvements to keep your store competitive and running smoothly."
    }
    // Local Calgary FAQs
    ,{
      question: "Do you build e-commerce websites for Calgary businesses?",
      answer: "Yes! NuTab Digital is Calgary-based and specializes in e-commerce development for local Alberta businesses. We build Shopify, WooCommerce, and custom online stores."
    }
    ,{
      question: "Can you help Calgary retailers sell online?",
      answer: "Absolutely. We help Calgary retail businesses expand online with professional e-commerce websites, local SEO, and secure payment integrations."
    }
    ,{
      question: "Do you offer local Calgary e-commerce support?",
      answer: "Yes, our Calgary team provides ongoing support, training, and optimization for local e-commerce businesses. We're available for in-person meetings and consultations."
    }
];

const processSteps: ProcessStep[] = [
  { title: "Discovery", description: "Understand products, audience, and business goals." },
  { title: "Design", description: "Wireframes and UI/UX tailored to your brand." },
  { title: "Development", description: "Build storefront, integrations, and admin tools." },
  { title: "Testing", description: "QA, performance, and payment validation." },
  { title: "Launch & Support", description: "Deploy, monitor, and iterate post-launch." },
];

const features: FeatureItem[] = [
  { title: "Conversion Focused", description: "Designs and flows that drive purchases." },
  { title: "Secure Checkout", description: "Best practices for safe transactions." },
  { title: "Headless Options", description: "Flexible architectures for custom experiences." },
  { title: "Platform Migrations", description: "Move stores with minimal downtime." },
  { title: "Local Calgary Expertise", description: "Calgary-based team with deep knowledge of Alberta's retail and e-commerce market." },
];

const whySolutions: WhySolution[] = [
  { icon: "ShoppingCart", title: "Seamless Shopping", description: "Smooth customer journeys from product to checkout." },
  { icon: "Layers", title: "Scalable Platforms", description: "Solutions that grow with your catalog and traffic." },
  { icon: "ShieldCheck", title: "Secure Payments", description: "Reliable integrations and fraud protection." },
];

const EcommerceDevelopment: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1}>
      <Background />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "E-Commerce Development" }
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
              { "@type": "ListItem", position: 3, name: "E-Commerce Development", item: "https://nutab.ca/services/ecommerce" }
            ]
          }),
        }}
      />

      {/* Service JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://nutab.ca/services/ecommerce#service",
            url: "https://nutab.ca/services/ecommerce",
            name: "E-Commerce Development",
            serviceType: "E-Commerce Development",
            description: "We create user-friendly e-commerce platforms tailored to your business needs.",
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
              serviceUrl: "https://nutab.ca/services/ecommerce"
            }
          }),
        }}
      />

      {/* FAQ JSON-LD */}
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
          title="E-Commerce Development Services in Calgary"
          subtitle={
            <>
              At NuTab Digital, we build custom e-commerce platforms that deliver fast, secure, and conversion-optimized shopping experiences. From Shopify and WooCommerce builds to fully custom headless stores, we create solutions that scale.
            </>
          }
          icons={[
            { icon: <ShoppingCart className="icon purple" />, label: "Seamless Shopping" },
            { icon: <Layers className="icon blue" />, label: "Scalable Platforms" },
            { icon: <ShieldCheck className="icon pink" />, label: "Secure Payments" },
          ]}
          showCTA={true}
        />
      </SectionWrapper>

      <SectionWrapper>
  <WhyChooseSection
          title="Why Choose E-Commerce Development?"
          description={
            <>
              We focus on building stores that convert, perform, and scale while providing a great experience for both customers and store admins.
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
          title="Our E-Commerce Services"
          subtitle="End-to-end e-commerce development services to launch and grow your online store."
          layout="grid"
          columns={2}
          theme="gradient"
          animated={true}
          showIcons={false}
        />
      </SectionWrapper>

      <SectionWrapper>
  <BenefitsOverview
          title="Benefits of E-Commerce Development"
          subtitle="Investing in a quality e-commerce platform delivers measurable business benefits."
          benefits={benefits}
        />
      </SectionWrapper>

      <SectionWrapper>
  <IndustriesServed
          items={industries}
          title="Industries We Serve"
          subtitle="We build e-commerce solutions for a variety of industries."
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
          subtitle="A proven process to deliver robust, high-performing e-commerce platforms."
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
              We combine e-commerce expertise, strong technical delivery, and a focus on measurable results to help your store succeed.
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
        }}>Ready to Build Your Online Store?</h2>
        <p style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          Contact us to discuss your e-commerce project and get a tailored plan to grow your online sales.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <GetQuoteButton />
        </div>
      </SectionWrapper>

  <FAQSection faqs={faqs} lead="Quick answers to common questions about our e‑commerce development services." />

      {/* Render Loader at the end so content is immediately visible */}
      {/* <Loader /> */}
    </main>
  );
};

export default EcommerceDevelopment;
