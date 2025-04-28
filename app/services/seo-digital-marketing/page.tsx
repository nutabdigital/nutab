import React from "react";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import Footer from "../../components/Footer/Footer";
import "./page.css"; // Add CSS for styling
import { Metadata } from "next";

// Add unique meta tags for SEO
export const generateMetadata = (): Metadata => ({
  title: "SEO & Digital Marketing Services in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers SEO and digital marketing services in Calgary, Alberta. Enhance your online visibility, attract customers, and grow your business.",
  keywords:
    "SEO services, digital marketing, Calgary, Alberta, search engine optimization, online marketing, content marketing, social media marketing, PPC advertising",
});

const SEODigitalMarketing: React.FC = () => {
  return (
    <>
      <Header />
      <Background />
      <Loader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO & Digital Marketing",
            "description":
              "Enhance your online visibility and attract customers with our SEO and digital marketing services.",
            "provider": {
              "@type": "Organization",
              "name": "NuTab Digital",
              "url": "https://nutab.ca",
            },
            "areaServed": "Calgary, Alberta",
          }),
        }}
      />
      <section className="seo-digital-marketing-page">
        <h1>SEO & Digital Marketing Services in Calgary</h1>
        <p>
          At <strong>NuTab Digital</strong>, we specialize in delivering{" "}
          <strong>SEO and digital marketing solutions</strong> that help
          businesses enhance their online visibility, attract more customers,
          and achieve sustainable growth. Whether you’re looking to improve
          your search engine rankings or run targeted ad campaigns, our team is
          here to help.
        </p>

        <h2>Why Choose SEO & Digital Marketing?</h2>
        <p>
          In today’s digital-first world, having a strong online presence is
          essential for success. Our <strong>SEO and digital marketing
          services</strong> are designed to help your business stand out in
          search results, engage your target audience, and drive measurable
          results.
        </p>

        <h2>Our SEO & Digital Marketing Services</h2>
        <ul>
          <li>
            <strong>Search Engine Optimization (SEO):</strong> Improve your
            website’s visibility on search engines like Google and Bing.
          </li>
          <li>
            <strong>Content Marketing:</strong> Create high-quality, engaging
            content that resonates with your audience.
          </li>
          <li>
            <strong>Social Media Marketing:</strong> Build your brand and
            connect with customers on platforms like Facebook, Instagram, and
            LinkedIn.
          </li>
          <li>
            <strong>Pay-Per-Click (PPC) Advertising:</strong> Run targeted ad
            campaigns to drive traffic and conversions.
          </li>
          <li>
            <strong>Email Marketing:</strong> Nurture leads and retain
            customers with personalized email campaigns.
          </li>
        </ul>

        <h2>Benefits of SEO & Digital Marketing</h2>
        <p>
          Investing in <strong>SEO and digital marketing</strong> offers
          numerous advantages for your business:
        </p>
        <ul>
          <li>
            <strong>Increased Online Visibility:</strong> Ensure your business
            appears at the top of search results.
          </li>
          <li>
            <strong>Higher Website Traffic:</strong> Attract more visitors to
            your website with targeted strategies.
          </li>
          <li>
            <strong>Improved Customer Engagement:</strong> Build meaningful
            connections with your audience.
          </li>
          <li>
            <strong>Better ROI:</strong> Achieve measurable results with
            cost-effective marketing campaigns.
          </li>
          <li>
            <strong>Competitive Advantage:</strong> Stay ahead of your
            competitors with innovative marketing strategies.
          </li>
        </ul>

        <h2>Industries We Serve</h2>
        <p>
          Our <strong>SEO and digital marketing services</strong> cater to a
          wide range of industries, including:
        </p>
        <ul>
          <li>Retail and E-Commerce</li>
          <li>Healthcare</li>
          <li>Finance</li>
          <li>Education</li>
          <li>Real Estate</li>
        </ul>

        <h2>How We Work</h2>
        <p>
          Our process ensures your satisfaction at every step:
        </p>
        <ol>
          <li>
            <strong>Consultation:</strong> We start by understanding your
            business goals and target audience.
          </li>
          <li>
            <strong>Strategy Development:</strong> Our team creates a
            customized marketing plan tailored to your needs.
          </li>
          <li>
            <strong>Implementation:</strong> We execute your campaigns using
            the latest tools and techniques.
          </li>
          <li>
            <strong>Monitoring and Optimization:</strong> We track performance
            and make data-driven adjustments to maximize results.
          </li>
          <li>
            <strong>Reporting:</strong> Receive detailed reports to measure the
            success of your campaigns.
          </li>
        </ol>

        <h2>Why Partner with NuTab Digital?</h2>
        <p>
          At NuTab Digital, we pride ourselves on delivering{" "}
          <strong>results-driven SEO and digital marketing solutions</strong>.
          Here’s why businesses choose us:
        </p>
        <ul>
          <li>
            <strong>Expertise:</strong> Our team has extensive experience in
            SEO and digital marketing.
          </li>
          <li>
            <strong>Customization:</strong> We tailor every strategy to meet
            your specific needs.
          </li>
          <li>
            <strong>Transparency:</strong> We provide clear and detailed
            reporting on campaign performance.
          </li>
          <li>
            <strong>Ongoing Support:</strong> We offer continuous support and
            optimization to ensure long-term success.
          </li>
        </ul>

        <h2>Get Started Today</h2>
        <p>
          Ready to enhance your online presence? <br />
          Contact us today to learn more about our <strong>SEO and digital
          marketing services</strong> and how we can help your business grow.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default SEODigitalMarketing;