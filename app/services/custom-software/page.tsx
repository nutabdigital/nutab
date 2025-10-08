import React from "react";
import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import "./page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import GetQuoteButton from "../../components/GetQuoteButton/GetQuoteButton";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { Code2, Layers, ShieldCheck } from "lucide-react";
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

const SectionWrapper = dynamic(
  () => import("../../components/SectionWrapper/SectionWrapper"),
  {
    ssr: false,
  }
);

export const generateMetadata = (): Metadata => ({
  title: "Custom Software Development Services in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers custom software development services in Calgary, Alberta. We create tailored solutions to streamline operations, enhance efficiency, and drive business growth.",
  alternates: {
    canonical: "https://nutab.ca/services/custom-software",
  },
  openGraph: {
    title: "Custom Software Development Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers custom software development services in Calgary, Alberta. We create tailored solutions to streamline operations, enhance efficiency, and drive business growth.",
    url: "https://nutab.ca/services/custom-software",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/3d-nutab-logo.png",
        width: 600,
        height: 600,
        alt: "Custom Software Development Services in Calgary",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers custom software development services in Calgary, Alberta. We create tailored solutions to streamline operations, enhance efficiency, and drive business growth.",
    images: ["https://nutab.ca/photos/3d-nutab-logo.png"],
  },
});

const services: ServiceItem[] = [
  {
    title: "Enterprise Software Development",
    description: "Build robust, scalable solutions for large-scale operations.",
  },
  {
    title: "Custom SaaS Solutions",
    description:
      "Create subscription-based software tailored to your business model.",
  },
  {
    title: "System Integration",
    description:
      "Seamlessly integrate new software with your existing systems.",
  },
  {
    title: "Secure Architecture",
    description:
      "Ensure your software is built with top-notch security protocols.",
  },
  {
    title: "Ongoing Support",
    description:
      "Receive continuous updates and maintenance to keep your software running smoothly.",
  },
];

const industries: IndustryItem[] = [
  { name: "Healthcare" },
  { name: "Finance" },
  { name: "Retail and E-Commerce" },
  { name: "Education" },
  { name: "Manufacturing" },
  { name: "Logistics and Supply Chain" },
  { name: "Real Estate" },
];

const relatedServices: RelatedServiceItem[] = [
  {
    label: "AI & Automation Solutions",
    link: "/services/ai-automation",
  },
  {
    label: "Business IT Consulting",
    link: "/services/business-it-consulting",
  },
  {
    label: "SEO & Digital Marketing",
    link: "/services/seo-digital-marketing",
  },
];

const CustomSoftwareSolutions: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      title: "Consultation",
      description: "We start by understanding your business needs and goals.",
    },
    {
      title: "Design",
      description:
        "Our team creates a detailed plan and wireframes for your approval.",
    },
    {
      title: "Development",
      description:
        "We build your software using the latest technologies and best practices.",
    },
    {
      title: "Testing",
      description:
        "Rigorous testing ensures your software is bug-free and ready for deployment.",
    },
    {
      title: "Deployment and Support",
      description:
        "We launch your software and provide ongoing support to ensure its success.",
    },
  ];

  const features: FeatureItem[] = [
    {
      title: "Transparency",
      description:
        "We value open communication and keep you informed at every stage of development.",
      // icon: <YourIconComponent />, // Optional: add icons if desired
    },
    {
      title: "Scalability",
      description: "Our solutions are designed to grow with your business.",
    },
    {
      title: "Local Expertise",
      description:
        "Based in Calgary, we understand the unique challenges and opportunities of Canadian businesses.",
    },
    {
      title: "Future-Ready Solutions",
      description:
        "We use the latest technologies to ensure your software stays relevant.",
    },
    {
      title: "Customer-Centric Approach",
      description: "Your satisfaction is our top priority.",
    },
  ];

  return (
    <>
      <Loader />
      <Background />

      {/* Structured Data Script: Service & FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Custom Software Development",
            description:
              "NuTab Digital offers custom software development services in Calgary, Alberta. We create tailored solutions to streamline operations, enhance efficiency, and drive business growth.",
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
                name: "What is custom software development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Custom software development involves creating software applications tailored to meet the specific needs of a business or organization. Unlike off-the-shelf software, custom solutions are designed to address unique challenges and workflows.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to develop custom software?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The timeline for custom software development depends on the complexity of the project. On average, it can take anywhere from a few weeks to several months. We work closely with you to establish a realistic timeline based on your requirements.",
                },
              },
              {
                "@type": "Question",
                name: "How much does custom software development cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost of custom software development varies depending on the scope and complexity of the project. Contact us for a free consultation and quote tailored to your needs.",
                },
              },
              {
                "@type": "Question",
                name: "Can you integrate custom software with our existing systems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we specialize in system integration to ensure your new software works seamlessly with your existing tools and platforms.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide ongoing support after deployment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely! We offer ongoing support and maintenance to ensure your software continues to perform optimally.",
                },
              },
            ],
          }),
        }}
      />

      <SectionWrapper className="section-wrapper--no-padding">
        <HeroSection
          title="Custom Software Development Services in Calgary"
          subtitle={
            <>
              At <span className="highlight">NuTab Digital</span>, we build
              <span className="accent"> tailored software solutions </span>
              that streamline operations, boost efficiency, and drive business
              growth. Whether you need a{" "}
              <span className="accent">bespoke application</span>,
              <span className="accent">enterprise-grade software</span>, or a
              <span className="accent">custom SaaS platform</span>, our team
              delivers future-ready results.
            </>
          }
          icons={[
            {
              icon: <Code2 className="icon purple" />,
              label: "Custom Applications",
            },
            {
              icon: <Layers className="icon blue" />,
              label: "Enterprise Solutions",
            },
            {
              icon: <ShieldCheck className="icon pink" />,
              label: "Secure Architecture",
            },
          ]}
          showCTA={true}
        />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="gradient-title">
          Why Choose Custom Software Development?
        </h2>
        <p className="section-text">
          Off-the-shelf software often falls short of meeting the specific
          requirements of growing businesses. With{" "}
          <span className="highlight">custom software development</span>, you
          gain a solution that is designed exclusively for your workflows,
          ensuring seamless integration and maximum efficiency. Whether you need
          a <span className="accent">bespoke application</span>,{" "}
          <span className="accent">enterprise-grade software</span>, or a{" "}
          <span className="accent">custom SaaS platform</span>, we’ve got you
          covered.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <ServicesGrid
          services={services}
          title="Our Custom Software Development Services"
          subtitle="Explore our full range of custom software solutions designed to fit your business needs."
          layout="grid"
          columns={2}
          theme="gradient"
          animated={true}
          showIcons={false}
        />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="gradient-title">
          Benefits of Custom Software Development
        </h2>
        <p className="section-text">
          Investing in custom software development offers numerous advantages
          for your business:
        </p>
        <ul className="styled-list">
          <li>
            <span className="accent">Tailored Solutions:</span> Address your
            unique business challenges with software designed specifically for
            your needs.
          </li>
          <li>
            <span className="accent">Scalability:</span> Ensure your software
            grows with your business, adapting to changing requirements.
          </li>
          <li>
            <span className="accent">Improved Efficiency:</span> Automate
            repetitive tasks and streamline workflows to save time and
            resources.
          </li>
          <li>
            <span className="accent">Competitive Advantage:</span> Stand out in
            your industry with innovative and unique software solutions.
          </li>
          <li>
            <span className="accent">Enhanced Security:</span> Protect sensitive
            data with custom-built security features.
          </li>
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <IndustryGrid
          items={industries}
          title="Industries We Serve"
          subtitle="Our custom software solutions cater to a wide range of industries."
          layout="pills" // or "cards", "compact"
          theme="gradient" // or "light", "dark"
          animated={true}
          columns={3} // Adjust columns as needed
        />
      </SectionWrapper>

      <SectionWrapper>
        <ProcessTimeline
          steps={processSteps}
          title="Our Development Process"
          subtitle="At NuTab Digital, we follow a proven process to ensure the success of your custom software project."
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
              At NuTab Digital, we pride ourselves on being a{" "}
              <span className="highlight">
                trusted software development partner
              </span>
              . Here’s why businesses choose us:
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

      {/* Internal Links for SEO */}
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
          Ready to take your business to the next level? Contact us today to
          learn more about our{" "}
          <span className="highlight">
            custom software development services
          </span>{" "}
          and how we can help you achieve your goals.
        </p>

        <GetQuoteButton />
      </SectionWrapper>

      <SectionWrapper className="section-wrapper--faq">
        <div className="faq">
          <header className="faq__header">
            <h2 className="gradient-title">Frequently Asked Questions</h2>
            <p className="faq__lead section-text">
              Quick answers to common questions about our custom software
              development services.
            </p>
          </header>

          <div className="faq__list">
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">
                  What is custom software development?
                </h3>
              </summary>
              <div className="faq-answer section-text">
                <p>
                  Custom software development involves creating software
                  applications tailored to meet the specific needs of a business
                  or organization. Unlike off-the-shelf software, custom
                  solutions are designed to address unique challenges and
                  workflows.
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">
                  How long does it take to develop custom software?
                </h3>
              </summary>
              <div className="faq-answer section-text">
                <p>
                  The timeline for custom software development depends on the
                  complexity of the project. On average, it can take anywhere
                  from a few weeks to several months. We work closely with you
                  to establish a realistic timeline based on your requirements.
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">
                  How much does custom software development cost?
                </h3>
              </summary>
              <div className="faq-answer section-text">
                <p>
                  The cost of custom software development varies depending on
                  the scope and complexity of the project. Contact us for a free
                  consultation and quote tailored to your needs.
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">
                  Can you integrate custom software with our existing systems?
                </h3>
              </summary>
              <div className="faq-answer section-text">
                <p>
                  Yes, we specialize in system integration to ensure your new
                  software works seamlessly with your existing tools and
                  platforms.
                </p>
              </div>
            </details>

            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">
                  Do you provide ongoing support after deployment?
                </h3>
              </summary>
              <div className="faq-answer section-text">
                <p>
                  Absolutely! We offer ongoing support and maintenance to ensure
                  your software continues to perform optimally.
                </p>
              </div>
            </details>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default CustomSoftwareSolutions;
