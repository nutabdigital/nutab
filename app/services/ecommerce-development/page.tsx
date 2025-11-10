import React from "react";
// import dynamic from "next/dynamic";
import Background from "../../components/Background/Background";
import "./page.css";
import { Metadata } from "next";
import GetQuoteButton from "../../components/GetQuoteButton/GetQuoteButton";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { ShoppingCart, Layers, ShieldCheck } from "lucide-react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ServicesWhySection, { WhySolution } from "../../components/ServicesWhySection/ServicesWhySection";
import ServicesGrid, { ServiceItem } from "../../components/ServicesGrid/ServicesGrid";
import BenefitsSection, { Benefit } from "../../components/BenefitsSection/BenefitsSection";
import IndustryGrid, { IndustryItem } from "../../components/IndustryGrid/IndustryGrid";
import ProcessTimeline, { ProcessStep } from "../../components/ProcessTimeline/ProcessTimeline";
import FeatureGrid, { FeatureItem } from "../../components/FeatureGrid/FeatureGrid";
import RelatedServicesSection, { RelatedServiceItem } from "../../components/RelatedServicesSection/RelatedServicesSection";

// const Loader = dynamic(() => import("../../components/Loader/Loader"), { ssr: false });

export const generateMetadata = (): Metadata => ({
  title: "E-Commerce Development Services in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers e-commerce development services in Calgary, Alberta. Build scalable, user-friendly online stores tailored to your business needs.",
  alternates: {
    canonical: "https://nutab.ca/services/ecommerce-development",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "E-Commerce Development Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers e-commerce development services in Calgary, Alberta. Build scalable, user-friendly online stores tailored to your business needs.",
    url: "https://nutab.ca/services/ecommerce-development",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-home.jpg", // 1200x800 existing
        width: 1200,
        height: 800,
        alt: "E-Commerce Development Services in Calgary",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Development Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers e-commerce development services in Calgary, Alberta. Build scalable, user-friendly online stores tailored to your business needs.",
    images: ["https://nutab.ca/photos/og-home.jpg"],
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
  { label: "Business IT Consulting", link: "/services/business-it-consulting" },
  { label: "SEO & Digital Marketing", link: "/services/seo-digital-marketing" },
];

const benefits: Benefit[] = [
  { title: "Higher Conversions", description: "Optimized UX and checkout to increase sales." },
  { title: "Scalability", description: "Architecture designed to handle growth." },
  { title: "Secure Payments", description: "PCI-compliant integrations and fraud protection." },
  { title: "Better UX", description: "User-centric design for improved engagement." },
  { title: "Analytics & Insights", description: "Data-driven improvements to maximize ROI." },
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
  { title: "Local Support", description: "Calgary-based team for responsive service." },
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
              { "@type": "ListItem", position: 3, name: "E-Commerce Development", item: "https://nutab.ca/services/ecommerce-development" }
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
            "@id": "https://nutab.ca/services/ecommerce-development#service",
            url: "https://nutab.ca/services/ecommerce-development",
            name: "E-Commerce Development",
            serviceType: "E-Commerce Development",
            description: "We create user-friendly e-commerce platforms tailored to your business needs.",
            provider: {
              "@type": "Organization",
              name: "NuTab Digital",
              url: "https://nutab.ca",
              sameAs: [
                "https://www.instagram.com/nutab_digital/",
                "https://twitter.com/NuTabDigital",
                "https://www.facebook.com/profile.php?id=61575073651409",
                "https://www.linkedin.com/company/nutab-digital-inc/"
              ]
            },
            areaServed: { "@type": "AdministrativeArea", name: "Calgary, AB" }
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
            mainEntity: [
              {
                "@type": "Question",
                name: "What is e-commerce development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "E-commerce development involves creating online stores and platforms that allow businesses to sell products or services online, including catalogs, carts, and payment gateways.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to build an e-commerce site?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Timelines depend on complexity; simple stores can be delivered in weeks, complex platforms in months.",
                },
              },
              {
                "@type": "Question",
                name: "Can you integrate payment gateways?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — we integrate gateways like Stripe, PayPal, and enterprise payment providers.",
                },
              },
            ],
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
        <ServicesWhySection
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
        <ServicesGrid
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
        <BenefitsSection
          title="Benefits of E-Commerce Development"
          subtitle="Investing in a quality e-commerce platform delivers measurable business benefits."
          benefits={benefits}
        />
      </SectionWrapper>

      <SectionWrapper>
        <IndustryGrid
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
        <ProcessTimeline
          steps={processSteps}
          title="Our Development Process"
          subtitle="A proven process to deliver robust, high-performing e-commerce platforms."
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
        <h2>Ready to Build Your Online Store?</h2>
        <p>
          Contact us to discuss your e-commerce project and get a tailored plan to grow your online sales.
        </p>
        <GetQuoteButton />
      </SectionWrapper>

      <SectionWrapper className="section-wrapper--faq">
        <div className="faq">
          <header className="faq__header">
            <h2>Frequently Asked Questions</h2>
            <p className="faq__lead">Quick answers to common questions about our e‑commerce development services.</p>
          </header>
          <div className="faq__list">
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">What is e-commerce development?</h3>
              </summary>
              <div className="faq-answer">
                <p>E-commerce development involves creating online stores and platforms that allow businesses to sell products or services online. This includes features like product catalogs, shopping carts, and payment gateways.</p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">How long does it take to build an e-commerce site?</h3>
              </summary>
              <div className="faq-answer">
                <p>Timelines vary based on complexity — simple stores in weeks, complex platforms in months.</p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Can you integrate payment gateways?</h3>
              </summary>
              <div className="faq-answer">
                <p>Yes — we can integrate Stripe, PayPal, and other secure payment providers.</p>
              </div>
            </details>
          </div>
        </div>
      </SectionWrapper>

      {/* Render Loader at the end so content is immediately visible */}
      {/* <Loader /> */}
    </main>
  );
};

export default EcommerceDevelopment;
