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
  title: "E-Commerce Development Services in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers e-commerce development services in Calgary, Alberta. Build scalable, user-friendly online stores tailored to your business needs.",
  keywords:
    "e-commerce development, online store development, Calgary, Alberta, Shopify, WooCommerce, custom e-commerce solutions, scalable e-commerce platforms",
});

const EcommerceDevelopment: React.FC = () => {
  return (
    <>
      <Background />
      <Loader />

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "E-Commerce Development",
            description:
              "We create user-friendly e-commerce platforms tailored to your business needs.",
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
        <h1>E-Commerce Development Services in Calgary</h1>
        <p>
          At <strong>NuTab Digital</strong>, we specialize in creating{" "}
          <strong>custom e-commerce platforms</strong> that deliver seamless
          shopping experiences and help businesses thrive in the digital
          marketplace. Whether you need a <strong>Shopify store</strong>,{" "}
          <strong>WooCommerce site</strong>, or a fully custom solution, our
          team is here to bring your vision to life.
        </p>
      </SectionWrapper>

      {/* Why Choose This Service */}
      <SectionWrapper>
        <h2>Why Choose E-Commerce Development?</h2>
        <p>
          In today’s competitive market, having a <strong>user-friendly</strong>{" "}
          and <strong>scalable e-commerce platform</strong> is essential for
          engaging customers and driving sales. Our{" "}
          <strong>e-commerce development services</strong> focus on creating
          intuitive, secure, and high-performing online stores that meet your
          business goals.
        </p>
      </SectionWrapper>

      {/* Our Services */}
      <SectionWrapper>
        <h2>Our E-Commerce Development Services</h2>
        <ul>
          <li>
            <strong>Custom Online Store Development:</strong> Build feature-rich
            e-commerce platforms tailored to your needs.
          </li>
          <li>
            <strong>Shopify and WooCommerce Development:</strong> Leverage
            popular platforms to create scalable online stores.
          </li>
          <li>
            <strong>UI/UX Design:</strong> Deliver intuitive and visually
            appealing shopping experiences.
          </li>
          <li>
            <strong>Payment Gateway Integration:</strong> Seamlessly integrate
            secure payment solutions.
          </li>
          <li>
            <strong>Scalable Architecture:</strong> Ensure your store can grow
            with your business.
          </li>
        </ul>
      </SectionWrapper>

      {/* Benefits of the Service */}
      <SectionWrapper>
        <h2>Benefits of E-Commerce Development</h2>
        <p>
          Investing in <strong>e-commerce development</strong> offers numerous
          advantages for your business:
        </p>
        <ul>
          <li>
            <strong>Enhanced Customer Engagement:</strong> Provide a seamless
            shopping experience to keep your customers engaged.
          </li>
          <li>
            <strong>Increased Sales:</strong> Reach a wider audience and boost
            your revenue with an online store.
          </li>
          <li>
            <strong>Improved Efficiency:</strong> Automate processes and
            streamline workflows with custom e-commerce solutions.
          </li>
          <li>
            <strong>Scalability:</strong> Build platforms that grow with your
            business and adapt to changing needs.
          </li>
          <li>
            <strong>Competitive Advantage:</strong> Stand out in your industry
            with innovative and user-friendly e-commerce platforms.
          </li>
        </ul>
      </SectionWrapper>

      {/* Industries We Serve */}
      <SectionWrapper>
        <h2>Industries We Serve</h2>
        <p>
          Our <strong>e-commerce development services</strong> cater to a wide
          range of industries, including:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "2rem" }}>
          <li>Retail</li>
          <li>Fashion</li>
          <li>Electronics</li>
          <li>Health and Beauty</li>
          <li>Food and Beverage</li>
        </ul>
      </SectionWrapper>

      {/* How We Work */}
      <SectionWrapper>
        <h2>Our Development Process</h2>
        <p>Our development process ensures your satisfaction at every step:</p>
        <ol>
          <li>
            <strong>Consultation:</strong> We start by understanding your
            business goals and target audience.
          </li>
          <li>
            <strong>Design:</strong> Our team creates wireframes and prototypes
            for your approval.
          </li>
          <li>
            <strong>Development:</strong> We build your e-commerce platform
            using the latest technologies and best practices.
          </li>
          <li>
            <strong>Testing:</strong> Rigorous testing ensures your platform is
            bug-free and ready for launch.
          </li>
          <li>
            <strong>Launch and Support:</strong> We deploy your platform and
            provide ongoing support to ensure its success.
          </li>
        </ol>
      </SectionWrapper>

      {/* Why Partner with NuTab Digital */}
      <SectionWrapper>
        <h2>Why Partner with NuTab Digital?</h2>
        <p>
          At NuTab Digital, we pride ourselves on delivering{" "}
          <strong>future-ready e-commerce platforms</strong>. Here’s why
          businesses choose us:
        </p>
        <ul>
          <li>
            <strong>Expertise:</strong> Our team has extensive experience in
            e-commerce development.
          </li>
          <li>
            <strong>Customization:</strong> We tailor every solution to meet
            your specific needs.
          </li>
          <li>
            <strong>Local Expertise:</strong> Based in Calgary, we understand
            the unique challenges of Canadian businesses.
          </li>
          <li>
            <strong>Ongoing Support:</strong> We provide continuous updates and
            maintenance to keep your platform running smoothly.
          </li>
        </ul>
      </SectionWrapper>

      {/* Get Started Today */}
      <SectionWrapper>
        <h2>Ready to Build Your Online Store?</h2>
        <p>
          Contact us today to discuss your{" "}
          <strong>e-commerce development</strong> needs. Let’s work together to
          create a platform that drives growth and success for your business.
        </p>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="section-wrapper--faq">
        <h2>Frequently Asked Questions</h2>
        <h3 className="faq-question">What is e-commerce development?</h3>
        <p>
          E-commerce development involves creating online stores and platforms
          that allow businesses to sell products or services online. This
          includes features like product catalogs, shopping carts, and payment
          gateways.
        </p>

        <h3 className="faq-question">How long does it take to build an e-commerce website?</h3>
        <p>
          The timeline depends on the complexity of the website. Simple
          e-commerce sites can take a few weeks, while more complex platforms
          may take several months.
        </p>

        <h3 className="faq-question">Can you integrate payment gateways?</h3>
        <p>
          Yes, we can integrate secure payment gateways like PayPal, Stripe, or
          custom solutions to ensure smooth transactions for your customers.
        </p>

        <h3 className="faq-question">Do you provide ongoing support for e-commerce websites?</h3>
        <p>
          Yes, we offer ongoing support and maintenance to ensure your
          e-commerce platform runs smoothly and stays up-to-date.
        </p>

        <h3 className="faq-question">Can you customize the design of the e-commerce site?</h3>
        <p>
          Absolutely! We create custom designs tailored to your brand and
          business needs to provide a unique shopping experience for your
          customers.
        </p>
      </SectionWrapper>
    </>
  );
};

export default EcommerceDevelopment;
