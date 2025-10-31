import React from "react";
// import Loader from "../../components/Loader/Loader";
import Background from "../../components/Background/Background";
import "./page.css";
import { Metadata } from "next";
import HeroSection from "../../components/ServiceHeroSection/ServiceHeroSection";
import { Camera, Video, Image as ImgIcon } from "lucide-react";
import GetQuoteButton from "../../components/GetQuoteButton/GetQuoteButton";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ServicesWhySection, { WhySolution } from "../../components/ServicesWhySection/ServicesWhySection";
import ServicesGrid, { ServiceItem } from "../../components/ServicesGrid/ServicesGrid";
import BenefitsSection, { Benefit } from "../../components/BenefitsSection/BenefitsSection";
import IndustryGrid, { IndustryItem } from "../../components/IndustryGrid/IndustryGrid";
import ProcessTimeline, { ProcessStep } from "../../components/ProcessTimeline/ProcessTimeline";
import FeatureGrid, { FeatureItem } from "../../components/FeatureGrid/FeatureGrid";
import RelatedServicesSection, { RelatedServiceItem } from "../../components/RelatedServicesSection/RelatedServicesSection";

export const generateMetadata = (): Metadata => ({
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

const services: ServiceItem[] = [
  { title: "Commercial Photography", description: "Product, lifestyle, and business photography for marketing and web." },
  { title: "Video Production", description: "Promotional videos, interviews, and brand storytelling." },
  { title: "Event Coverage", description: "Professional photo and video capture for events." },
  { title: "Editing & Post-Production", description: "Professional editing for polished final assets." },
  { title: "Content Creation", description: "Visual assets optimized for web and social." },
];

const industries: IndustryItem[] = [
  { name: "Retail" },
  { name: "Healthcare" },
  { name: "Finance" },
  { name: "Education" },
  { name: "Professional Services" },
];

const relatedServices: RelatedServiceItem[] = [
  { label: "Custom Software Development", link: "/services/custom-software" },
  { label: "Business IT Consulting", link: "/services/business-it-consulting" },
  { label: "SEO & Digital Marketing", link: "/services/seo-digital-marketing" },
];

const benefits: Benefit[] = [
  { title: "Brand Storytelling", description: "Communicate your brand’s story with compelling visuals." },
  { title: "Professional Quality", description: "High-quality images and videos that elevate perception." },
  { title: "Audience Engagement", description: "Visuals that capture attention and drive interaction." },
  { title: "Versatile Content", description: "Use assets across web, social, and print." },
  { title: "Creative Impact", description: "Stand out with memorable media." },
];

const processSteps: ProcessStep[] = [
  { title: "Discovery", description: "We learn about your brand, goals and content needs." },
  { title: "Planning", description: "Develop shot lists, scripts and production plan." },
  { title: "Shooting", description: "On-location or studio capture with professional crew." },
  { title: "Editing", description: "Post-production, color grading and finishing." },
  { title: "Delivery", description: "Final assets delivered in required formats." },
];

const features: FeatureItem[] = [
  { title: "Creative Direction", description: "Concepts and storytelling that align with your brand." },
  { title: "Professional Crew", description: "Experienced photographers, videographers and editors." },
  { title: "Full-Service Production", description: "From pre-production to delivery." },
  { title: "High-Quality Assets", description: "Studio-grade equipment and post-production." },
  { title: "Local Support", description: "Calgary-based team for fast collaboration." },
];

const whySolutions: WhySolution[] = [
  { icon: "Camera", title: "Photography", description: "High-impact imagery for products and brand." },
  { icon: "Video", title: "Video Production", description: "Engaging video for marketing and storytelling." },
  { icon: "Image", title: "Digital Media", description: "Assets optimized for web and social channels." },
];

const PhotographyMediaProduction: React.FC = () => {
  return (
    <>
      <Background />
      {/* <Loader /> */}

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
            mainEntity: [
              {
                "@type": "Question",
                name: "What types of photography do you offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer commercial, product, lifestyle, event, and business photography tailored to your needs."
                }
              },
              {
                "@type": "Question",
                name: "Do you provide video production?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we produce promotional videos, interviews, and brand stories for marketing and web."
                }
              },
              {
                "@type": "Question",
                name: "Can you cover events?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely! We offer professional event photography and videography services."
                }
              },
              {
                "@type": "Question",
                name: "Will I get all the media files?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, you’ll receive all final edited images and videos for your use."
                }
              },
              {
                "@type": "Question",
                name: "Do you offer editing and post-production?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, our team provides professional editing and post-production for all media projects."
                }
              }
            ],
          }),
        }}
      />

      <SectionWrapper>
        <HeroSection
          title="Photography & Media Production Services in Calgary"
          subtitle={
            <>
              At NuTab Digital, we help brands tell their story with professional photography and media production for websites, marketing campaigns, and digital content. Our creative team brings your vision to life with stunning visuals.
            </>
          }
          icons={[
            { icon: <Camera className="icon purple" />, label: "Photography" },
            { icon: <Video className="icon blue" />, label: "Video Production" },
            { icon: <ImgIcon className="icon pink" />, label: "Digital Media" },
          ]}
          showCTA={true}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ServicesWhySection
          title="Why Choose Photography & Media Production?"
          description={
            <>
              Professional photography and media elevate your brand, engage your audience, and drive results. We create high-impact visuals tailored to your goals.
            </>
          }
          solutions={whySolutions}
          theme="gradient"
          animated={true}
          interactive={false}
          columns={3}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ServicesGrid
          services={services}
          title="Our Photography & Media Services"
          subtitle="Commercial photography, video production, event coverage and post-production."
          layout="grid"
          columns={2}
          theme="gradient"
          animated={true}
          showIcons={false}
        />
      </SectionWrapper>

      <SectionWrapper>
        <BenefitsSection
          title="Benefits of Photography & Media Production"
          subtitle="High-quality visual content delivers measurable benefits for your brand and campaigns."
          benefits={benefits}
        />
      </SectionWrapper>

      <SectionWrapper>
        <IndustryGrid
          items={industries}
          title="Industries We Serve"
          subtitle="We support a wide range of industries with creative media solutions."
          layout="pills"
          theme="gradient"
          animated={true}
          columns={3}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ProcessTimeline
          steps={processSteps}
          title="How We Work"
          subtitle="A collaborative, end-to-end production process from concept to delivery."
          orientation="vertical"
          theme="gradient"
          animated={true}
        />
      </SectionWrapper>

      <SectionWrapper>
        <FeatureGrid
          title="Why Partner with NuTab Digital?"
          subtitle={
            <>
              We combine creative expertise with production discipline to deliver media that performs across channels.
            </>
          }
          features={features}
          columns={2}
          variant="gradient"
          theme="gradient"
          animated={true}
          interactive={false}
          showIcons={false}
          size="md"
          iconPosition="top"
        />
      </SectionWrapper>

      <SectionWrapper>
        <RelatedServicesSection
          title="Related Services"
          services={relatedServices}
          variant="gradient"
          theme="gradient"
          animated={true}
          interactive={true}
          layout="centered"
          columns={3}
          showIcons={false}
        />
      </SectionWrapper>

      <SectionWrapper>
        <h2>Get Started Today</h2>
        <p>
          Ready to elevate your brand? Contact us to discuss your photography & media production needs and discover how NuTab Digital can help you stand out.
        </p>
        <GetQuoteButton />
      </SectionWrapper>

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
                <p>We offer commercial, product, lifestyle, event, and business photography tailored to your needs.</p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Do you provide video production?</h3>
              </summary>
              <div className="faq-answer">
                <p>Yes, we produce promotional videos, interviews, and brand stories for marketing and web.</p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Can you cover events?</h3>
              </summary>
              <div className="faq-answer">
                <p>Absolutely! We offer professional event photography and videography services.</p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Will I get all the media files?</h3>
              </summary>
              <div className="faq-answer">
                <p>Yes, you’ll receive all final edited images and videos for your use.</p>
              </div>
            </details>
            <details className="faq__item">
              <summary className="faq__summary">
                <h3 className="faq-question">Do you offer editing and post-production?</h3>
              </summary>
              <div className="faq-answer">
                <p>Yes, our team provides professional editing and post-production for all media projects.</p>
              </div>
            </details>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default PhotographyMediaProduction;