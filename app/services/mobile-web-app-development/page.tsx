import React from "react";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import Footer from "../../components/Footer/Footer";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { ThemeProvider } from "../../context/ThemeContext";
import "./page.css";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Mobile & Web App Development Services in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers mobile and web app development services in Calgary, Alberta. Build scalable, user-friendly apps for iOS, Android, and the web.",
  keywords:
    "mobile app development, web app development, Calgary, Alberta, iOS apps, Android apps, responsive web applications, scalable apps, custom app development",
});

const MobileWebAppDevelopment: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <Loader />
      <Background />

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile & Web App Development",
            "description":
              "We create user-friendly mobile and web applications tailored to your business needs.",
            "provider": {
              "@type": "Organization",
              "name": "NuTab Digital",
              "url": "https://nutab.ca",
            },
            "areaServed": "Calgary, Alberta",
          }),
        }}
      />

      {/* Hero Section */}
      <SectionWrapper className="section-wrapper--custom-padding">
        <h1>Mobile & Web App Development Services in Calgary</h1>
        <p>
          At <strong>NuTab Digital</strong>, we specialize in creating{" "}
          <strong>custom mobile and web applications</strong> that deliver
          seamless user experiences and help businesses thrive in the digital
          age. Whether you need a <strong>mobile app</strong> for iOS or
          Android, or a <strong>responsive web application</strong>, our team
          is here to bring your vision to life.
        </p>
      </SectionWrapper>

      {/* Why Choose This Service */}
      <SectionWrapper>
        <h2>Why Choose Mobile & Web App Development?</h2>
        <p>
          In today’s fast-paced world, having a{" "}
          <strong>mobile-friendly</strong> and{" "}
          <strong>responsive application</strong> is essential for engaging
          customers and staying ahead of the competition. Our{" "}
          <strong>mobile and web app development services</strong> focus on
          creating intuitive, scalable, and secure applications that meet your
          business goals.
        </p>
      </SectionWrapper>

      {/* Our Services */}
      <SectionWrapper>
        <h2>Our Mobile & Web App Development Services</h2>
        <ul>
          <li>
            <strong>Custom Mobile App Development:</strong> Build feature-rich
            apps for iOS and Android platforms.
          </li>
          <li>
            <strong>Responsive Web Applications:</strong> Create web apps that
            look and perform flawlessly on all devices.
          </li>
          <li>
            <strong>UI/UX Design:</strong> Deliver intuitive and visually
            appealing user interfaces.
          </li>
          <li>
            <strong>API Integration:</strong> Seamlessly connect your app with
            third-party services and tools.
          </li>
          <li>
            <strong>Scalable Architecture:</strong> Ensure your app can grow
            with your business.
          </li>
        </ul>
      </SectionWrapper>

      {/* Benefits of the Service */}
      <SectionWrapper>
        <h2>Benefits of Mobile & Web App Development</h2>
        <p>
          Investing in <strong>mobile and web app development</strong> offers
          numerous advantages for your business:
        </p>
        <ul>
          <li>
            <strong>Enhanced Customer Engagement:</strong> Provide a seamless
            user experience to keep your customers engaged.
          </li>
          <li>
            <strong>Increased Accessibility:</strong> Reach your audience on
            their preferred devices, anytime, anywhere.
          </li>
          <li>
            <strong>Improved Efficiency:</strong> Automate processes and
            streamline workflows with custom applications.
          </li>
          <li>
            <strong>Scalability:</strong> Build apps that grow with your
            business and adapt to changing needs.
          </li>
          <li>
            <strong>Competitive Advantage:</strong> Stand out in your industry
            with innovative and user-friendly applications.
          </li>
        </ul>
      </SectionWrapper>

      {/* Industries We Serve */}
      <SectionWrapper>
        <h2>Industries We Serve</h2>
        <p>
          Our <strong>mobile and web app development services</strong> cater to
          a wide range of industries, including:
        </p>
        <ul>
          <li>Healthcare</li>
          <li>Finance</li>
          <li>Retail and E-Commerce</li>
          <li>Education</li>
          <li>Travel and Hospitality</li>
        </ul>
      </SectionWrapper>

      {/* How We Work */}
      <SectionWrapper>
        <h2>Our Development Process</h2>
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
            <strong>Development:</strong> We build your app using the latest
            technologies and best practices.
          </li>
          <li>
            <strong>Testing:</strong> Rigorous testing ensures your app is
            bug-free and ready for launch.
          </li>
          <li>
            <strong>Launch and Support:</strong> We deploy your app and provide
            ongoing support to ensure its success.
          </li>
        </ol>
      </SectionWrapper>

      {/* Why Partner with NuTab Digital */}
      <SectionWrapper>
        <h2>Why Partner with NuTab Digital?</h2>
        <p>
          At NuTab Digital, we pride ourselves on delivering{" "}
          <strong>future-ready mobile and web applications</strong>. Here’s why
          businesses choose us:
        </p>
        <ul>
          <li>
            <strong>Expertise:</strong> Our team has extensive experience in
            mobile and web app development.
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
            maintenance to keep your app running smoothly.
          </li>
        </ul>
      </SectionWrapper>

      {/* Get Started Today */}
      <SectionWrapper>
        <h2>Get Started Today</h2>
        <p>
          Ready to build your app? Contact us today to discuss your{" "}
          <strong>mobile and web app development</strong> needs. Let’s work
          together to create an application that drives growth and success for
          your business.
        </p>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className = "section-wrapper--faq">
        <h2>Frequently Asked Questions</h2>
        <h3>What is mobile and web app development?</h3>
        <p>
          Mobile and web app development involves creating applications for
          mobile devices (iOS and Android) and web browsers. These apps are
          designed to provide seamless user experiences and meet specific
          business needs.
        </p>

        <h3>How long does it take to develop an app?</h3>
        <p>
          The timeline depends on the complexity of the app. Simple apps can
          take a few weeks, while more complex apps may take several months. We
          work with you to create a realistic timeline.
        </p>

        <h3>Can you build apps for both iOS and Android?</h3>
        <p>
          Yes, we specialize in building cross-platform apps that work
          seamlessly on both iOS and Android devices.
        </p>

        <h3>Do you provide ongoing support for apps?</h3>
        <p>
          Yes, we offer ongoing support and maintenance to ensure your app
          remains up-to-date and performs optimally.
        </p>

        <h3>Can you integrate third-party APIs into the app?</h3>
        <p>
          Absolutely! We can integrate third-party APIs to enhance your app's
          functionality, such as payment gateways, social media, or analytics
          tools.
        </p>
      </SectionWrapper>

      <Footer />
    </ThemeProvider>
  );
};

export default MobileWebAppDevelopment;