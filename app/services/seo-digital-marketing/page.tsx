import React from "react";
import Header from "../../components/Header/Header"; // Adjust the path if necessary
import Loader from "../../components/Loader/Loader"; // Adjust the path if necessary
import Footer from "../../components/Footer/Footer"; // Adjust the path if necessary
import "./page.css"; // Add CSS for styling
import { Metadata } from "next";

// Add unique meta tags for SEO
export const generateMetadata = (): Metadata => ({
  title: "SEO & Digital Marketing - NuTab Digital",
  description:
    "NuTab Digital offers SEO and digital marketing services to enhance online visibility and attract customers in Calgary, Alberta.",
  keywords: "SEO services, digital marketing, Calgary, Alberta, online visibility, targeted marketing strategies",
});

const SEODigitalMarketing: React.FC = () => {
  return (
    <>
      <Header />
      <Loader />
      {/* Add structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO & Digital Marketing",
            "description": "Enhance online visibility and attract customers with targeted SEO and digital marketing strategies.",
            "provider": {
              "@type": "Organization",
              "name": "NuTab Digital",
              "url": "https://nutab.ca",
            },
            "areaServed": "Calgary, Alberta",
          }),
        }}
      />
      {/* Add breadcrumbs for navigation */}
      <nav aria-label="breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li aria-current="page">SEO & Digital Marketing</li>
        </ol>
      </nav>
      <section className="seo-digital-marketing-page">
        <h1>SEO & Digital Marketing Services</h1>
        <p>
          At <strong>NuTab Digital</strong>, we specialize in <strong>SEO and digital marketing services</strong> that help businesses enhance their online visibility, attract more customers, and achieve sustainable growth. Our team combines proven strategies with innovative techniques to deliver measurable results.
        </p>

        <h2>Why Choose SEO & Digital Marketing?</h2>
        <p>
          In today’s competitive digital landscape, having a strong online presence is essential. Our <strong>SEO and digital marketing services</strong> are designed to improve your search engine rankings, drive targeted traffic to your website, and convert visitors into loyal customers. With our expertise, you can stay ahead of the competition and grow your business.
        </p>

        <h2>Our SEO & Digital Marketing Services</h2>
        <ul>
          <li><strong>Search Engine Optimization (SEO):</strong> Improve your website’s visibility on Google and other search engines.</li>
          <li><strong>Pay-Per-Click (PPC) Advertising:</strong> Drive targeted traffic with cost-effective ad campaigns.</li>
          <li><strong>Content Marketing:</strong> Create engaging and valuable content to attract and retain your audience.</li>
          <li><strong>Social Media Marketing:</strong> Build your brand and connect with customers on platforms like Facebook, Instagram, and LinkedIn.</li>
          <li><strong>Email Marketing:</strong> Reach your audience with personalized and impactful email campaigns.</li>
        </ul>

        <h2>Why Partner with NuTab Digital?</h2>
        <p>
          At NuTab Digital, we pride ourselves on delivering <strong>data-driven SEO and digital marketing strategies</strong>. Here’s why businesses choose us:
        </p>
        <ul>
          <li><strong>Proven Results:</strong> We use tested strategies to improve your online visibility and ROI.</li>
          <li><strong>Customization:</strong> Every campaign is tailored to meet your unique business goals.</li>
          <li><strong>Local Expertise:</strong> Based in Calgary, we understand the needs of Canadian businesses.</li>
          <li><strong>Transparent Reporting:</strong> Stay informed with detailed performance reports and insights.</li>
        </ul>

        <h2>Industries We Serve</h2>
        <p>
          Our <strong>SEO and digital marketing services</strong> cater to a wide range of industries, including:
        </p>
        <ul>
          <li>Healthcare</li>
          <li>Finance</li>
          <li>Retail and E-Commerce</li>
          <li>Education</li>
          <li>Travel and Hospitality</li>
        </ul>

        <h3>How We Work</h3>
        <p>
          Our process ensures your satisfaction at every step:
        </p>
        <ol>
          <li><strong>Consultation:</strong> We start by understanding your business goals and target audience.</li>
          <li><strong>Strategy Development:</strong> Our team creates a customized plan to achieve your objectives.</li>
          <li><strong>Implementation:</strong> We execute the strategy using the latest tools and techniques.</li>
          <li><strong>Monitoring:</strong> We track performance and make adjustments to optimize results.</li>
          <li><strong>Reporting:</strong> Receive regular updates and insights on your campaign’s progress.</li>
        </ol>

        <h3>Ready to Boost Your Online Presence?</h3>
        <p>
          Contact us today to discuss your <strong>SEO and digital marketing</strong> needs. Let’s work together to create a strategy that drives growth and success for your business.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default SEODigitalMarketing;