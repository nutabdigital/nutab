import React from "react";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import Footer from "../../components/Footer/Footer";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"; // Import SectionWrapper
import { ThemeProvider } from "../../context/ThemeContext";
import "./page.css"; // Add CSS for styling
import { Metadata } from "next";

// Add unique meta tags for SEO
export const generateMetadata = (): Metadata => ({
  title: "E-Commerce Development Services in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers e-commerce development services in Calgary, Alberta. Build scalable, user-friendly online stores tailored to your business needs.",
  keywords:
    "e-commerce development, online store development, Calgary, Alberta, Shopify, WooCommerce, custom e-commerce solutions, scalable e-commerce platforms",
});

const EcommerceDevelopment: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <Background />
      <Loader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "E-Commerce Development",
            "description":
              "We create user-friendly e-commerce platforms tailored to your business needs.",
            "provider": {
              "@type": "Organization",
              "name": "NuTab Digital",
              "url": "https://nutab.ca",
            },
            "areaServed": "Calgary, Alberta",
          }),
        }}
      />
      <SectionWrapper>
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

      <SectionWrapper>
        <h2>Why Choose E-Commerce Development?</h2>
        <p>
          In today’s competitive market, having a{" "}
          <strong>user-friendly</strong> and{" "}
          <strong>scalable e-commerce platform</strong> is essential for
          engaging customers and driving sales. Our{" "}
          <strong>e-commerce development services</strong> focus on creating
          intuitive, secure, and high-performing online stores that meet your
          business goals.
        </p>
      </SectionWrapper>

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

      <SectionWrapper>
        <h2>Industries We Serve</h2>
        <p>
          Our <strong>e-commerce development services</strong> cater to a wide
          range of industries, including:
        </p>
        <ul>
          <li>Retail</li>
          <li>Fashion</li>
          <li>Electronics</li>
          <li>Health and Beauty</li>
          <li>Food and Beverage</li>
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <h2>How We Work</h2>
        <p>
          Our development process ensures your satisfaction at every step:
        </p>
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

      <SectionWrapper>
        <h3>Ready to Build Your Online Store?</h3>
        <p>
          Contact us today to discuss your{" "}
          <strong>e-commerce development</strong> needs. Let’s work together to
          create a platform that drives growth and success for your business.
        </p>
      </SectionWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default EcommerceDevelopment;