import React from "react";
import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import dynamic from "next/dynamic";
import "./page.css";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { Brain, Zap, ShieldCheck } from "lucide-react";
import GetQuoteButton from "@/app/components/GetQuoteButton/GetQuoteButton";

const SectionWrapper = dynamic(
  () => import("../../components/SectionWrapper/SectionWrapper"),
  { ssr: false }
);

export const generateMetadata = (): import("next").Metadata => ({
  title: "AI & Automation Solutions in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers AI and automation solutions in Calgary, Alberta. Leverage artificial intelligence and automation to improve efficiency, reduce manual tasks, and make smarter decisions.",
  alternates: {
    canonical: "https://nutab.ca/services/ai-automation",
  },
  openGraph: {
    title: "AI & Automation Solutions in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers AI and automation solutions in Calgary, Alberta. Leverage artificial intelligence and automation to improve efficiency, reduce manual tasks, and make smarter decisions.",
    url: "https://nutab.ca/services/ai-automation",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/3d-nutab-logo.webp", // updated to webp
        width: 600,
        height: 600,
        alt: "AI & Automation Solutions in Calgary",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Automation Solutions in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers AI and automation solutions in Calgary, Alberta. Leverage artificial intelligence and automation to improve efficiency, reduce manual tasks, and make smarter decisions.",
    images: ["https://nutab.ca/photos/3d-nutab-logo.webp"], // updated to webp
  },
});

const AIAutomation: React.FC = () => {
  return (
    <>
      <Background />
      <Loader />

      {/* Structured Data Script: Service & FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI & Automation Solutions",
            description:
              "Leverage artificial intelligence and automation to improve efficiency, reduce manual tasks, and make smarter decisions.",
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
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is AI & automation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI (Artificial Intelligence) uses computer systems to perform tasks that normally require human intelligence. Automation uses technology to perform tasks with minimal human intervention."
                }
              },
              {
                "@type": "Question",
                "name": "How can AI help my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI can help you analyze data, automate decisions, improve customer service, and optimize operations for better results."
                }
              },
              {
                "@type": "Question",
                "name": "Is automation expensive?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Automation can reduce costs over time by saving labor and improving efficiency. We offer solutions for businesses of all sizes."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide ongoing support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide ongoing support and optimization to ensure your AI and automation solutions continue to deliver value."
                }
              },
              {
                "@type": "Question",
                "name": "Can you integrate AI with my existing systems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We specialize in integrating AI and automation tools with your current business software and workflows."
                }
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <SectionWrapper className="section-wrapper--no-padding">
        <HeroSection
          title="AI & Automation Solutions in Calgary"
          subtitle={
            <>
              At <span className="highlight">NuTab Digital</span>, we help businesses unlock the power of
              <span className="accent"> artificial intelligence and automation </span>
              to streamline operations, reduce manual tasks, and make smarter decisions.
              From <span className="accent">machine learning</span> to <span className="accent">workflow automation</span>,
              our team delivers future-ready solutions tailored to your needs.
            </>
          }
          icons={[
            {
              icon: <Brain className="icon purple" />,
              label: "AI Tools",
            },
            {
              icon: <Zap className="icon blue" />,
              label: "Automation",
            },
            {
              icon: <ShieldCheck className="icon pink" />,
              label: "Secure & Reliable",
            },
          ]}
          showCTA={true}
        />
      </SectionWrapper>

      {/* Why Choose This Service */}
      <SectionWrapper>
        <h2>Why Choose AI & Automation?</h2>
        <p>
          <strong>AI and automation</strong> empower your business to work smarter, not harder.
          Automate repetitive tasks, gain insights from data, and improve decision-making with intelligent solutions.
        </p>
      </SectionWrapper>

      {/* Our Services */}
      <SectionWrapper>
        <h2>Our AI & Automation Services</h2>
        <ul>
          <li>
            <strong>Machine Learning Solutions:</strong> Predict trends and automate decisions with custom ML models.
          </li>
          <li>
            <strong>Workflow Automation:</strong> Streamline business processes and reduce manual work.
          </li>
          <li>
            <strong>Chatbots & Virtual Assistants:</strong> Enhance customer service with AI-powered bots.
          </li>
          <li>
            <strong>Data Analytics & Insights:</strong> Unlock actionable insights from your business data.
          </li>
          <li>
            <strong>Integration & Customization:</strong> Connect AI tools with your existing systems.
          </li>
        </ul>
      </SectionWrapper>

      {/* Benefits of the Service */}
      <SectionWrapper>
        <h2>Benefits of AI & Automation</h2>
        <ul>
          <li><strong>Efficiency:</strong> Automate repetitive tasks and free up valuable time.</li>
          <li><strong>Accuracy:</strong> Reduce errors and improve consistency.</li>
          <li><strong>Scalability:</strong> Grow your business with solutions that adapt to your needs.</li>
          <li><strong>Cost Savings:</strong> Lower operational costs by automating manual processes.</li>
          <li><strong>Competitive Edge:</strong> Stay ahead with innovative technology.</li>
        </ul>
      </SectionWrapper>

      {/* Industries We Serve */}
      <SectionWrapper>
        <h2>Industries We Serve</h2>
        <p>
          Our <strong>AI & automation solutions</strong> support a wide range of industries:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "2rem" }}>
          <li>Healthcare</li>
          <li>Finance</li>
          <li>Retail</li>
          <li>Manufacturing</li>
          <li>Professional Services</li>
        </ul>
      </SectionWrapper>

      {/* How We Work */}
      <SectionWrapper>
        <h2>How We Work</h2>
        <ol>
          <li><strong>Discovery:</strong> We assess your business needs and goals.</li>
          <li><strong>Design:</strong> Our team creates a tailored AI/automation strategy.</li>
          <li><strong>Implementation:</strong> We build and integrate your solution.</li>
          <li><strong>Testing:</strong> Rigorous testing ensures reliability and security.</li>
          <li><strong>Support:</strong> Ongoing optimization and support for long-term success.</li>
        </ol>
      </SectionWrapper>

      {/* Why Partner with NuTab Digital */}
      <SectionWrapper>
        <h2>Why Partner with NuTab Digital?</h2>
        <ul>
          <li><strong>Expertise:</strong> Experienced in AI, automation, and business transformation.</li>
          <li><strong>Customization:</strong> Solutions tailored to your unique needs.</li>
          <li><strong>Local Support:</strong> Calgary-based team for responsive service.</li>
          <li><strong>Continuous Improvement:</strong> We help you stay ahead with ongoing updates.</li>
        </ul>
      </SectionWrapper>

      {/* Internal Links for SEO */}
      <SectionWrapper>
        <h2>Related Services</h2>
        <ul>
          <li>
            <a href="/services/business-it-consulting">Business IT Consulting</a>
          </li>
          <li>
            <a href="/services/custom-software">Custom Software Development</a>
          </li>
          <li>
            <a href="/services/seo-digital-marketing">SEO & Digital Marketing</a>
          </li>
        </ul>
      </SectionWrapper>

      {/* Get Started Today */}
      <SectionWrapper>
        <h2>Get Started Today</h2>
        <p>
          Ready to transform your business with <strong>AI & automation?</strong> Contact us to discuss your goals and discover how NuTab Digital can help you work smarter.
        </p>
        <GetQuoteButton />
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="section-wrapper--faq">
        <div className="faq">
          <header className="faq__header">
            <h2>Frequently Asked Questions</h2>
            <p className="faq__lead">Quick answers to common questions about our AI & automation solutions.</p>
          </header>
          <div className="faq__list">
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">What is AI & automation?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  AI (Artificial Intelligence) uses computer systems to perform tasks that normally require human intelligence. Automation uses technology to perform tasks with minimal human intervention.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">How can AI help my business?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  AI can help you analyze data, automate decisions, improve customer service, and optimize operations for better results.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Is automation expensive?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Automation can reduce costs over time by saving labor and improving efficiency. We offer solutions for businesses of all sizes.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Do you provide ongoing support?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Yes, we provide ongoing support and optimization to ensure your AI and automation solutions continue to deliver value.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Can you integrate AI with my existing systems?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Absolutely! We specialize in integrating AI and automation tools with your current business software and workflows.
                </p>
              </div>
            </details>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default AIAutomation;