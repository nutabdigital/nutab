import React from "react";
import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import dynamic from "next/dynamic";
import "./page.css";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { Camera, Video, Image } from "lucide-react";

const SectionWrapper = dynamic(
  () => import("../../components/SectionWrapper/SectionWrapper"),
  { ssr: false }
);

export const generateMetadata = (): import("next").Metadata => ({
  title: "Photography & Media Production Services in Calgary - NuTab Digital",
  description:
    "NuTab Digital offers photography and media production services in Calgary, Alberta. High-quality photography and media for websites, marketing campaigns, and brand storytelling.",
  alternates: {
    canonical: "https://nutab.ca/services/photography-media-production",
  },
  openGraph: {
    title: "Photography & Media Production Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers photography and media production services in Calgary, Alberta. High-quality photography and media for websites, marketing campaigns, and brand storytelling.",
    url: "https://nutab.ca/services/photography-media-production",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/3d-nutab-logo.png",
        width: 600,
        height: 600,
        alt: "Photography & Media Production Services in Calgary",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography & Media Production Services in Calgary - NuTab Digital",
    description:
      "NuTab Digital offers photography and media production services in Calgary, Alberta. High-quality photography and media for websites, marketing campaigns, and brand storytelling.",
    images: ["https://nutab.ca/photos/3d-nutab-logo.png"],
  },
});

const PhotographyMediaProduction: React.FC = () => {
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
            name: "Photography & Media Production",
            description:
              "High-quality photography and media services for websites, marketing campaigns, and brand storytelling.",
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
                "name": "What types of photography do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer commercial, product, lifestyle, event, and business photography tailored to your needs."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide video production?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we produce promotional videos, interviews, and brand stories for marketing and web."
                }
              },
              {
                "@type": "Question",
                "name": "Can you cover events?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We offer professional event photography and videography services."
                }
              },
              {
                "@type": "Question",
                "name": "Will I get all the media files?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you’ll receive all final edited images and videos for your use."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer editing and post-production?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our team provides professional editing and post-production for all media projects."
                }
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <SectionWrapper className="section-wrapper--no-padding">
        <h1>Photography & Media Production Services in Calgary</h1>
        <HeroSection
          title="Photography & Media Production Services in Calgary"
          subtitle={
            <>
              At <span className="highlight">NuTab Digital</span>, we help brands tell their story with
              <span className="accent"> professional photography and media production </span>
              for websites, marketing campaigns, and digital content. Our creative team brings your vision to life with stunning visuals.
            </>
          }
          icons={[
            {
              icon: <Camera className="icon purple" />,
              label: "Photography",
            },
            {
              icon: <Video className="icon blue" />,
              label: "Video Production",
            },
            {
              icon: <Image className="icon pink" />,
              label: "Digital Media",
            },
          ]}
          showCTA={true}
        />
      </SectionWrapper>

      {/* Why Choose This Service */}
      <SectionWrapper>
        <h2>Why Choose Photography & Media Production?</h2>
        <p>
          <strong>Professional photography and media</strong> elevate your brand, engage your audience, and drive results. Our team creates high-impact visuals that capture attention and communicate your message.
        </p>
      </SectionWrapper>

      {/* Our Services */}
      <SectionWrapper>
        <h2>Our Photography & Media Services</h2>
        <ul>
          <li>
            <strong>Commercial Photography:</strong> Product, lifestyle, and business photography for marketing and web.
          </li>
          <li>
            <strong>Video Production:</strong> Promotional videos, interviews, and brand storytelling.
          </li>
          <li>
            <strong>Event Coverage:</strong> Capture your events with professional photo and video.
          </li>
          <li>
            <strong>Editing & Post-Production:</strong> High-quality editing for photos and videos.
          </li>
          <li>
            <strong>Content Creation:</strong> Visual assets for websites, social media, and campaigns.
          </li>
        </ul>
      </SectionWrapper>

      {/* Benefits of the Service */}
      <SectionWrapper>
        <h2>Benefits of Photography & Media Production</h2>
        <ul>
          <li><strong>Brand Storytelling:</strong> Communicate your brand’s story visually.</li>
          <li><strong>Professional Quality:</strong> Stand out with high-quality images and videos.</li>
          <li><strong>Audience Engagement:</strong> Capture attention and drive interaction.</li>
          <li><strong>Versatile Content:</strong> Use visuals across digital and print platforms.</li>
          <li><strong>Creative Impact:</strong> Make a memorable impression with unique media.</li>
        </ul>
      </SectionWrapper>

      {/* Industries We Serve */}
      <SectionWrapper>
        <h2>Industries We Serve</h2>
        <p>
          Our <strong>photography & media production services</strong> support a wide range of industries:
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
          <li><strong>Planning:</strong> Our team develops a creative concept and shot list.</li>
          <li><strong>Shooting:</strong> We capture your visuals on location or in studio.</li>
          <li><strong>Editing:</strong> Professional editing and post-production for polished results.</li>
          <li><strong>Delivery:</strong> You receive all final media assets for use.</li>
        </ol>
      </SectionWrapper>

      {/* Why Partner with NuTab Digital */}
      <SectionWrapper>
        <h2>Why Partner with NuTab Digital?</h2>
        <ul>
          <li><strong>Creative Expertise:</strong> Experienced photographers and media producers.</li>
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
          Ready to elevate your brand? Contact us to discuss your <strong>photography & media production</strong> needs and discover how NuTab Digital can help you stand out.
        </p>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="section-wrapper--faq">
        <div className="faq">
          <header className="faq__header">
            <h2>Frequently Asked Questions</h2>
            <p className="faq__lead">Quick answers to common questions about our photography & media production services.</p>
          </header>
          <div className="faq__list">
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">What types of photography do you offer?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  We offer commercial, product, lifestyle, event, and business photography tailored to your needs.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Do you provide video production?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Yes, we produce promotional videos, interviews, and brand stories for marketing and web.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Can you cover events?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Absolutely! We offer professional event photography and videography services.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Will I get all the media files?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Yes, you’ll receive all final edited images and videos for your use.
                </p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Do you offer editing and post-production?</h3>
              </summary>
              <div className="faq-answer">
                <p>
                  Yes, our team provides professional editing and post-production for all media projects.
                </p>
              </div>
            </details>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default PhotographyMediaProduction;