import React from "react";
import Header from "../../components/Header/Header"; 
import Loader from "../../components/Loader/Loader"; 
import Footer from "../../components/Footer/Footer"; 
import "./page.css"; 
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Custom Software Development - NuTab Digital",
  description:
    "NuTab Digital offers custom software solutions tailored to streamline operations and boost efficiency for businesses in Calgary, Alberta.",
  keywords: "custom software development, Calgary, Alberta, enterprise software, SaaS solutions",
});

const CustomSoftwareSolutions: React.FC = () => {
  return (
    <>
      <Header />
      <Loader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "We create custom software solutions tailored to streamline operations and boost efficiency.",
            "provider": {
              "@type": "Organization",
              "name": "NuTab Digital",
              "url": "https://nutab.ca",
            },
            "areaServed": "Calgary, Alberta",
          }),
        }}
      />
      <nav aria-label="breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li aria-current="page">Custom Software Development</li>
        </ol>
      </nav>
      <section className="custom-software-page">
        <h1>Custom Software Development Services</h1>
        <p>
          At <strong>NuTab Digital</strong>, we specialize in delivering <strong>custom software solutions</strong> that are tailored to meet the unique needs of businesses in <strong>Calgary, Alberta</strong>, and beyond. Our mission is to help you streamline operations, enhance efficiency, and achieve your business goals with innovative, scalable, and secure software.
        </p>

        <h2>Why Choose Custom Software Development?</h2>
        <p>
          Off-the-shelf software often falls short of meeting the specific requirements of growing businesses. With <strong>custom software development</strong>, you gain a solution that is designed exclusively for your workflows, ensuring seamless integration and maximum efficiency. Whether you need a <strong>bespoke application</strong>, <strong>enterprise-grade software</strong>, or a <strong>custom SaaS platform</strong>, we’ve got you covered.
        </p>

        <h2>Our Custom Software Development Services</h2>
        <ul>
          <li><strong>Enterprise Software Development:</strong> Build robust, scalable solutions for large-scale operations.</li>
          <li><strong>Custom SaaS Solutions:</strong> Create subscription-based software tailored to your business model.</li>
          <li><strong>System Integration:</strong> Seamlessly integrate new software with your existing systems.</li>
          <li><strong>Secure Architecture:</strong> Ensure your software is built with top-notch security protocols.</li>
          <li><strong>Ongoing Support:</strong> Receive continuous updates and maintenance to keep your software running smoothly.</li>
        </ul>

        <h2>Why Partner with NuTab Digital?</h2>
        <p>
          At NuTab Digital, we pride ourselves on being a <strong>trusted software development partner</strong>. Here’s why businesses choose us:
        </p>
        <ul>
          <li><strong>Transparency:</strong> We value open communication and keep you informed at every stage of development.</li>
          <li><strong>Scalability:</strong> Our solutions are designed to grow with your business.</li>
          <li><strong>Local Expertise:</strong> Based in Calgary, we understand the unique challenges and opportunities of Canadian businesses.</li>
          <li><strong>Future-Ready Solutions:</strong> We use the latest technologies to ensure your software stays relevant.</li>
        </ul>

        <h2>Industries We Serve</h2>
        <p>
          Our <strong>custom software solutions</strong> cater to a wide range of industries, including:
        </p>
        <ul>
          <li>Healthcare</li>
          <li>Finance</li>
          <li>Retail and E-Commerce</li>
          <li>Education</li>
          <li>Manufacturing</li>
        </ul>

        <h3>How We Work</h3>
        <p>
          Our development process is designed to ensure your satisfaction:
        </p>
        <ol>
          <li><strong>Consultation:</strong> We start by understanding your business needs and goals.</li>
          <li><strong>Design:</strong> Our team creates a detailed plan and wireframes for your approval.</li>
          <li><strong>Development:</strong> We build your software using the latest technologies and best practices.</li>
          <li><strong>Testing:</strong> Rigorous testing ensures your software is bug-free and ready for deployment.</li>
          <li><strong>Deployment and Support:</strong> We launch your software and provide ongoing support to ensure its success.</li>
        </ol>

        <h3>Ready to Transform Your Business?</h3>
        <p>
          Contact us today to discuss your <strong>custom software development</strong> needs. Let’s work together to create a solution that drives your business forward.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default CustomSoftwareSolutions;