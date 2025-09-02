import React from "react";
import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import "./page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import GetQuoteButton from "../../components/GetQuoteButton/GetQuoteButton";
import HeroSection from "./HeroSection";
import { Code2, Layers, ShieldCheck } from "lucide-react";

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
  keywords:
    "custom software development, Calgary, Alberta, enterprise software, SaaS solutions, software integration, business software, scalable software solutions",
});

const CustomSoftwareSolutions: React.FC = () => {
  return (
    <>
      <Loader />
      <Background />

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

      <SectionWrapper className="section-wrapper--no-padding">
        <HeroSection
          title="Custom Software Development Services in Calgary"
          subtitle={
            <>
              At <span className="highlight">NuTab Digital</span>, we build
              <span className="accent"> tailored software solutions </span>
              that streamline operations, boost efficiency, and drive business growth.
              Whether you need a <span className="accent">bespoke application</span>, 
              <span className="accent">enterprise-grade software</span>, or a 
              <span className="accent">custom SaaS platform</span>, our team delivers future-ready results.
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
        <h2 className="gradient-title">
          Our Custom Software Development Services
        </h2>
        <ul className="styled-list">
          <li>
            <span className="accent">Enterprise Software Development:</span>{" "}
            Build robust, scalable solutions for large-scale operations.
          </li>
          <li>
            <span className="accent">Custom SaaS Solutions:</span> Create
            subscription-based software tailored to your business model.
          </li>
          <li>
            <span className="accent">System Integration:</span> Seamlessly
            integrate new software with your existing systems.
          </li>
          <li>
            <span className="accent">Secure Architecture:</span> Ensure your
            software is built with top-notch security protocols.
          </li>
          <li>
            <span className="accent">Ongoing Support:</span> Receive continuous
            updates and maintenance to keep your software running smoothly.
          </li>
        </ul>
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
        <h2 className="gradient-title">Industries We Serve</h2>
        <p className="section-text">
          Our <span className="highlight">custom software solutions</span> cater
          to a wide range of industries, including:
        </p>
        <ul
          className="styled-list"
          style={{ listStyleType: "disc", paddingLeft: "2rem" }}
        >
          <li>Healthcare</li>
          <li>Finance</li>
          <li>Retail and E-Commerce</li>
          <li>Education</li>
          <li>Manufacturing</li>
          <li>Logistics and Supply Chain</li>
          <li>Real Estate</li>
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="gradient-title">Our Development Process</h2>
        <p className="section-text">
          At NuTab Digital, we follow a proven process to ensure the success of
          your custom software project:
        </p>
        <ol className="styled-list">
          <li>
            <span className="accent">Consultation:</span> We start by
            understanding your business needs and goals.
          </li>
          <li>
            <span className="accent">Design:</span> Our team creates a detailed
            plan and wireframes for your approval.
          </li>
          <li>
            <span className="accent">Development:</span> We build your software
            using the latest technologies and best practices.
          </li>
          <li>
            <span className="accent">Testing:</span> Rigorous testing ensures
            your software is bug-free and ready for deployment.
          </li>
          <li>
            <span className="accent">Deployment and Support:</span> We launch
            your software and provide ongoing support to ensure its success.
          </li>
        </ol>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="gradient-title">Why Partner with NuTab Digital?</h2>
        <p className="section-text">
          At NuTab Digital, we pride ourselves on being a{" "}
          <span className="highlight">
            trusted software development partner
          </span>
          . Here’s why businesses choose us:
        </p>
        <ul className="styled-list">
          <li>
            <span className="accent">Transparency:</span> We value open
            communication and keep you informed at every stage of development.
          </li>
          <li>
            <span className="accent">Scalability:</span> Our solutions are
            designed to grow with your business.
          </li>
          <li>
            <span className="accent">Local Expertise:</span> Based in Calgary,
            we understand the unique challenges and opportunities of Canadian
            businesses.
          </li>
          <li>
            <span className="accent">Future-Ready Solutions:</span> We use the
            latest technologies to ensure your software stays relevant.
          </li>
          <li>
            <span className="accent">Customer-Centric Approach:</span> Your
            satisfaction is our top priority.
          </li>
        </ul>
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
