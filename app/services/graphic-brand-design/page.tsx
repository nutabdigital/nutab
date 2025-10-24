import React from "react";
import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import dynamic from "next/dynamic";
import "./page.css";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { PenTool, Palette, Image } from "lucide-react";
import GetQuoteButton from "@/app/components/GetQuoteButton/GetQuoteButton";

const SectionWrapper = dynamic(
  () => import("../../components/SectionWrapper/SectionWrapper"),
  { ssr: false }
);

export const generateMetadata = (): import("next").Metadata => ({
  title: "Graphic & Brand Design Services in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers graphic and brand design services in Calgary, Alberta. Strengthen your brand with creative design solutions, including logos, digital graphics, and visual identity.",
  alternates: {
    canonical: "https://nutab.ca/services/graphic-brand-design",
  },
  openGraph: {
    title: "Graphic & Brand Design Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers graphic and brand design services in Calgary, Alberta. Strengthen your brand with creative design solutions, including logos, digital graphics, and visual identity.",
    url: "https://nutab.ca/services/graphic-brand-design",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/3d-nutab-logo.png",
        width: 600,
        height: 600,
        alt: "Graphic & Brand Design Services in Calgary",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic & Brand Design Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers graphic and brand design services in Calgary, Alberta. Strengthen your brand with creative design solutions, including logos, digital graphics, and visual identity.",
    images: ["https://nutab.ca/photos/3d-nutab-logo.png"],
  },
});

const GraphicBrandDesign: React.FC = () => {
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
            name: "Graphic & Brand Design",
            description:
              "Strengthen your brand with creative design solutions, including logos, digital graphics, and visual identity.",
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
                "name": "What is brand design?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brand design is the process of creating a visual identity for your business, including logos, colors, fonts, and style guidelines."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer logo design?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in creating custom logos that reflect your brand’s personality and values."
                }
              },
              {
                "@type": "Question",
                "name": "Can you design graphics for social media?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We create digital graphics for social media, websites, and marketing campaigns."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide print design services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we design business cards, brochures, packaging, and other print materials."
                }
              },
              {
                "@type": "Question",
                "name": "Will I get all the design files?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you’ll receive all final design files and brand guidelines for your use."
                }
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <SectionWrapper>
        <HeroSection
          title="Graphic & Brand Design Services in Calgary"
          subtitle={
            <>
              At NuTab Digital, we help businesses stand out with creative graphic and brand design solutions. From logo design and visual identity to digital graphics, our team brings your brand vision to life.
            </>
          }
          icons={[
            {
              icon: <PenTool className="icon purple" />,
              label: "Logo Design",
            },
            {
              icon: <Palette className="icon blue" />,
              label: "Brand Identity",
            },
            {
              icon: <Image className="icon pink" />,
              label: "Digital Graphics",
            },
          ]}
          showCTA={true}
        />
      </SectionWrapper>

      {/* Why Choose This Service */}
      <SectionWrapper>
        <h2>Why Choose Graphic & Brand Design?</h2>
        <p>
          <strong>Graphic and brand design</strong> is essential for building a memorable and impactful brand. Our creative team helps you communicate your values and connect with your audience through stunning visuals.
        </p>
      </SectionWrapper>

      {/* Our Services */}
      <SectionWrapper>
        <h2>Our Design Services</h2>
        <ul>
          <li>
            <strong>Logo Design:</strong> Create a unique and professional logo for your business.
          </li>
          <li>
            <strong>Brand Identity:</strong> Develop a cohesive visual identity, including colors, fonts, and style guides.
          </li>
          <li>
            <strong>Digital Graphics:</strong> Design graphics for websites, social media, and marketing materials.
          </li>
          <li>
            <strong>Print Design:</strong> Produce business cards, brochures, and other print collateral.
          </li>
          <li>
            <strong>Packaging Design:</strong> Create eye-catching packaging for your products.
          </li>
        </ul>
      </SectionWrapper>

      {/* Benefits of the Service */}
      <SectionWrapper>
        <h2>Benefits of Graphic & Brand Design</h2>
        <ul>
          <li><strong>Memorable Branding:</strong> Make a lasting impression on your customers.</li>
          <li><strong>Professional Appearance:</strong> Build trust and credibility with polished visuals.</li>
          <li><strong>Consistency:</strong> Ensure your brand looks great across all platforms.</li>
          <li><strong>Creative Impact:</strong> Stand out in a crowded market with unique designs.</li>
          <li><strong>Versatility:</strong> Use your brand assets for digital and print needs.</li>
        </ul>
      </SectionWrapper>

      {/* Industries We Serve */}
      <SectionWrapper>
        <h2>Industries We Serve</h2>
        <p>
          Our <strong>graphic & brand design services</strong> support a wide range of industries:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "2rem" }}>
          <li>Retail</li>
          <li>Healthcare</li>
          <li>Finance</li>
          <li>Education</li>
          <li>Professional Services</li>
        </ul>
      </SectionWrapper>

      {/* How We Work */}
      <SectionWrapper>
        <h2>How We Work</h2>
        <ol>
          <li><strong>Discovery:</strong> We learn about your brand and goals.</li>
          <li><strong>Concept:</strong> Our designers create initial concepts for your review.</li>
          <li><strong>Design:</strong> We refine and finalize your brand assets.</li>
          <li><strong>Delivery:</strong> You receive all files and guidelines for use.</li>
          <li><strong>Support:</strong> Ongoing design support as your brand evolves.</li>
        </ol>
      </SectionWrapper>

      {/* Why Partner with NuTab Digital */}
      <SectionWrapper>
        <h2>Why Partner with NuTab Digital?</h2>
        <ul>
          <li><strong>Creative Expertise:</strong> Experienced designers with a passion for branding.</li>
          <li><strong>Tailored Solutions:</strong> Every project is customized to your needs.</li>
          <li><strong>Local Support:</strong> Calgary-based team for responsive service.</li>
          <li><strong>Long-Term Partnership:</strong> We’re committed to your brand’s success.</li>
        </ul>
      </SectionWrapper>

      {/* Internal Links for SEO */}
      <SectionWrapper>
        <h2>Related Services</h2>
        <ul>
          <li>
            <a href="/services/custom-software">Custom Software Development</a>
          </li>
          <li>
            <a href="/services/business-it-consulting">Business IT Consulting</a>
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
          Ready to elevate your brand? Contact us to discuss your <strong>graphic & brand design</strong> needs and discover how NuTab Digital can help you stand out.
        </p>
        <GetQuoteButton />
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="section-wrapper--faq">
        <div className="faq">
          <header className="faq__header">
            <h2>Frequently Asked Questions</h2>
            <p className="faq__lead">Quick answers to common questions about our graphic & brand design services.</p>
          </header>
          <div className="faq__list">
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">What is brand design?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Brand design is the process of creating a visual identity for your business, including logos, colors, fonts, and style guidelines.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Do you offer logo design?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Yes, we specialize in creating custom logos that reflect your brand’s personality and values.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Can you design graphics for social media?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Absolutely! We create digital graphics for social media, websites, and marketing campaigns.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Do you provide print design services?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Yes, we design business cards, brochures, packaging, and other print materials.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Will I get all the design files?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Yes, you’ll receive all final design files and brand guidelines for your use.
                </p>
              </div>
            </details>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default GraphicBrandDesign;