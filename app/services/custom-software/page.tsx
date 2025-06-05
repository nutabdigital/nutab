import React from "react";
import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import "./page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const SectionWrapper = dynamic(
  () => import("../../components/SectionWrapper/SectionWrapper"),
  {
    ssr: false, // Disable SSR if the component doesn't need it
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

      {/* Structured Data Script */}
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

      {/* Hero Section */}
      <SectionWrapper className="section-wrapper--custom-padding">
        <h1>Custom Software Development Services in Calgary</h1>
        <p>
          At <strong>NuTab Digital</strong>, we specialize in delivering{" "}
          <strong>custom software solutions</strong> that are tailored to meet
          the unique needs of businesses in <strong>Calgary, Alberta</strong>,
          and beyond. Our mission is to help you streamline operations, enhance
          efficiency, and achieve your business goals with innovative, scalable,
          and secure software.
        </p>
      </SectionWrapper>

      {/* Why Choose This Service */}
      <SectionWrapper>
        <h2>Why Choose Custom Software Development?</h2>
        <p>
          Off-the-shelf software often falls short of meeting the specific
          requirements of growing businesses. With{" "}
          <strong>custom software development</strong>, you gain a solution that
          is designed exclusively for your workflows, ensuring seamless
          integration and maximum efficiency. Whether you need a{" "}
          <strong>bespoke application</strong>,{" "}
          <strong>enterprise-grade software</strong>, or a{" "}
          <strong>custom SaaS platform</strong>, we’ve got you covered.
        </p>
      </SectionWrapper>

      {/* Our Services */}
      <SectionWrapper>
        <h2>Our Custom Software Development Services</h2>
        <ul>
          <li>
            <strong>Enterprise Software Development:</strong> Build robust,
            scalable solutions for large-scale operations.
          </li>
          <li>
            <strong>Custom SaaS Solutions:</strong> Create subscription-based
            software tailored to your business model.
          </li>
          <li>
            <strong>System Integration:</strong> Seamlessly integrate new
            software with your existing systems.
          </li>
          <li>
            <strong>Secure Architecture:</strong> Ensure your software is built
            with top-notch security protocols.
          </li>
          <li>
            <strong>Ongoing Support:</strong> Receive continuous updates and
            maintenance to keep your software running smoothly.
          </li>
        </ul>
      </SectionWrapper>

      {/* Benefits of the Service */}
      <SectionWrapper>
        <h2>Benefits of Custom Software Development</h2>
        <p>
          Investing in custom software development offers numerous advantages
          for your business:
        </p>
        <ul>
          <li>
            <strong>Tailored Solutions:</strong> Address your unique business
            challenges with software designed specifically for your needs.
          </li>
          <li>
            <strong>Scalability:</strong> Ensure your software grows with your
            business, adapting to changing requirements.
          </li>
          <li>
            <strong>Improved Efficiency:</strong> Automate repetitive tasks and
            streamline workflows to save time and resources.
          </li>
          <li>
            <strong>Competitive Advantage:</strong> Stand out in your industry
            with innovative and unique software solutions.
          </li>
          <li>
            <strong>Enhanced Security:</strong> Protect sensitive data with
            custom-built security features.
          </li>
        </ul>
      </SectionWrapper>

      {/* Industries We Serve */}
      <SectionWrapper>
        <h2>Industries We Serve</h2>
        <p>
          Our <strong>custom software solutions</strong> cater to a wide range
          of industries, including:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "2rem" }}>
          <li>Healthcare</li>
          <li>Finance</li>
          <li>Retail and E-Commerce</li>
          <li>Education</li>
          <li>Manufacturing</li>
          <li>Logistics and Supply Chain</li>
          <li>Real Estate</li>
        </ul>
      </SectionWrapper>

      {/* How We Work */}
      <SectionWrapper>
        <h2>Our Development Process</h2>
        <p>
          At NuTab Digital, we follow a proven process to ensure the success of
          your custom software project:
        </p>
        <ol>
          <li>
            <strong>Consultation:</strong> We start by understanding your
            business needs and goals.
          </li>
          <li>
            <strong>Design:</strong> Our team creates a detailed plan and
            wireframes for your approval.
          </li>
          <li>
            <strong>Development:</strong> We build your software using the
            latest technologies and best practices.
          </li>
          <li>
            <strong>Testing:</strong> Rigorous testing ensures your software is
            bug-free and ready for deployment.
          </li>
          <li>
            <strong>Deployment and Support:</strong> We launch your software and
            provide ongoing support to ensure its success.
          </li>
        </ol>
      </SectionWrapper>

      {/* Why Partner with NuTab Digital */}
      <SectionWrapper>
        <h2>Why Partner with NuTab Digital?</h2>
        <p>
          At NuTab Digital, we pride ourselves on being a{" "}
          <strong>trusted software development partner</strong>. Here’s why
          businesses choose us:
        </p>
        <ul>
          <li>
            <strong>Transparency:</strong> We value open communication and keep
            you informed at every stage of development.
          </li>
          <li>
            <strong>Scalability:</strong> Our solutions are designed to grow
            with your business.
          </li>
          <li>
            <strong>Local Expertise:</strong> Based in Calgary, we understand
            the unique challenges and opportunities of Canadian businesses.
          </li>
          <li>
            <strong>Future-Ready Solutions:</strong> We use the latest
            technologies to ensure your software stays relevant.
          </li>
          <li>
            <strong>Customer-Centric Approach:</strong> Your satisfaction is our
            top priority.
          </li>
        </ul>
      </SectionWrapper>

      {/* Get Started Today */}
      <SectionWrapper>
        <h2>Get Started Today</h2>
        <p>
          Ready to take your business to the next level? Contact us today to
          learn more about our{" "}
          <strong>custom software development services</strong> and how we can
          help you achieve your goals.
        </p>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="section-wrapper--faq">
        <h2>Frequently Asked Questions</h2>
        <h3>What is custom software development?</h3>
        <p>
          Custom software development involves creating software applications
          tailored to meet the specific needs of a business or organization.
          Unlike off-the-shelf software, custom solutions are designed to
          address unique challenges and workflows.
        </p>

        <h3>How long does it take to develop custom software?</h3>
        <p>
          The timeline for custom software development depends on the complexity
          of the project. On average, it can take anywhere from a few weeks to
          several months. We work closely with you to establish a realistic
          timeline based on your requirements.
        </p>

        <h3>How much does custom software development cost?</h3>
        <p>
          The cost of custom software development varies depending on the scope
          and complexity of the project. Contact us for a free consultation and
          quote tailored to your needs.
        </p>

        <h3>Can you integrate custom software with our existing systems?</h3>
        <p>
          Yes, we specialize in system integration to ensure your new software
          works seamlessly with your existing tools and platforms.
        </p>

        <h3>Do you provide ongoing support after deployment?</h3>
        <p>
          Absolutely! We offer ongoing support and maintenance to ensure your
          software continues to perform optimally.
        </p>
      </SectionWrapper>
    </>
  );
};

export default CustomSoftwareSolutions;
