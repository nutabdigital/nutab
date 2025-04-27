import React from "react";
import Header from "../../components/Header/Header"; // Adjust the path if necessary
import Loader from "../../components/Loader/Loader"; // Adjust the path if necessary
import Footer from "../../components/Footer/Footer"; // Adjust the path if necessary
import "./page.css"; // Add CSS for styling
import { Metadata } from "next";

// Add unique meta tags for SEO
export const generateMetadata = (): Metadata => ({
  title: "E-Commerce Development - NuTab Digital",
  description:
    "NuTab Digital builds scalable e-commerce platforms with secure payments, seamless shopping experiences, and inventory management.",
  keywords: "e-commerce development, Calgary, Alberta, scalable e-commerce, secure payments, inventory management",
});

const EcommerceDevelopment: React.FC = () => {
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
            "name": "E-Commerce Development",
            "description": "Build scalable e-commerce platforms with secure payments and seamless shopping experiences.",
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
          <li aria-current="page">E-Commerce Development</li>
        </ol>
      </nav>
      <section className="ecommerce-development-page">
        <h1>E-Commerce Development Services</h1>
        <p>
          At <strong>NuTab Digital</strong>, we specialize in creating <strong>scalable e-commerce solutions</strong> that empower businesses to thrive in the digital marketplace. Whether you're launching a new online store or enhancing an existing platform, our team delivers <strong>custom e-commerce development</strong> tailored to your unique needs.
        </p>

        <h2>Why Choose E-Commerce Development?</h2>
        <p>
          In today’s competitive market, having a robust and user-friendly e-commerce platform is essential for success. Our <strong>e-commerce development services</strong> focus on creating seamless shopping experiences, secure payment gateways, and efficient inventory management systems. With our expertise, you can boost customer satisfaction and drive sales.
        </p>

        <h2>Our E-Commerce Development Services</h2>
        <ul>
          <li><strong>Custom E-Commerce Platforms:</strong> Build a unique online store tailored to your brand and business goals.</li>
          <li><strong>Responsive Design:</strong> Ensure your e-commerce site looks and performs flawlessly on all devices.</li>
          <li><strong>Secure Payment Integration:</strong> Implement trusted payment gateways for safe and seamless transactions.</li>
          <li><strong>Inventory Management:</strong> Streamline your operations with efficient inventory tracking and management tools.</li>
          <li><strong>Third-Party Integrations:</strong> Integrate with popular tools like CRM, ERP, and marketing platforms.</li>
        </ul>

        <h2>Why Partner with NuTab Digital?</h2>
        <p>
          At NuTab Digital, we pride ourselves on delivering <strong>future-ready e-commerce solutions</strong>. Here’s why businesses choose us:
        </p>
        <ul>
          <li><strong>Scalability:</strong> Our platforms are designed to grow with your business.</li>
          <li><strong>Customization:</strong> We tailor every solution to meet your specific needs.</li>
          <li><strong>Local Expertise:</strong> Based in Calgary, we understand the unique challenges of Canadian businesses.</li>
          <li><strong>Ongoing Support:</strong> We provide continuous updates and maintenance to keep your e-commerce site running smoothly.</li>
        </ul>

        <h2>Industries We Serve</h2>
        <p>
          Our <strong>e-commerce development services</strong> cater to a wide range of industries, including:
        </p>
        <ul>
          <li>Retail and Fashion</li>
          <li>Health and Wellness</li>
          <li>Electronics and Technology</li>
          <li>Food and Beverage</li>
          <li>Home and Lifestyle</li>
        </ul>

        <h3>How We Work</h3>
        <p>
          Our development process ensures your satisfaction at every step:
        </p>
        <ol>
          <li><strong>Consultation:</strong> We start by understanding your business goals and target audience.</li>
          <li><strong>Design:</strong> Our team creates a visually appealing and user-friendly design for your store.</li>
          <li><strong>Development:</strong> We build your e-commerce platform using the latest technologies and best practices.</li>
          <li><strong>Testing:</strong> Rigorous testing ensures your site is bug-free and ready for launch.</li>
          <li><strong>Launch and Support:</strong> We deploy your site and provide ongoing support to ensure its success.</li>
        </ol>

        <h3>Ready to Elevate Your Online Store?</h3>
        <p>
          Contact us today to discuss your <strong>e-commerce development</strong> needs. Let’s work together to create a platform that drives growth and success for your business.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default EcommerceDevelopment;