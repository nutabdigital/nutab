import React from "react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Palette, Layers, Sparkles, ArrowRight, PenTool, Image, FileText, CheckCircle2, ChevronDown, Eye, Lightbulb } from "lucide-react";
import Link from "next/link";
import FAQSection from "../../components/FAQSection/FAQSection";
import PricingSection, { PricingPackage } from "../../components/PricingSection/PricingSection";

export const generateMetadata = (): import("next").Metadata => ({
  title: "Graphic & Brand Design Calgary | Logo Design & Visual Identity | NuTab Digital",
  description:
    "Calgary's creative brand design studio. NuTab Digital delivers professional logo design, visual identity, and brand strategy for Alberta businesses. Make your brand unforgettable.",
  keywords: ["brand design Calgary", "logo design Calgary", "graphic design Alberta", "visual identity Calgary", "branding agency Calgary", "creative design Alberta"],
  alternates: {
    canonical: "https://nutab.ca/services/brand-design",
  },
  openGraph: {
    title: "Graphic & Brand Design Calgary | Logo Design & Visual Identity | NuTab Digital",
    description:
      "Calgary's creative brand design studio. NuTab Digital delivers professional logo design, visual identity, and brand strategy.",
    url: "https://nutab.ca/services/brand-design",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-brand-design.webp",
        width: 1200,
        height: 800,
        alt: "Graphic & Brand Design Services in Calgary, Alberta",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic & Brand Design Calgary | Logo Design & Visual Identity | NuTab Digital",
    description: "Calgary's creative brand design studio delivering professional logo design and visual identity.",
    images: ["https://nutab.ca/photos/og-brand-design.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
});

const faqs = [
  {
    question: "What is brand design?",
    answer: "Brand design encompasses the visual elements that represent your business — logo, colors, typography, and imagery — creating a cohesive identity that resonates with your audience."
  },
  {
    question: "How long does a branding project take?",
    answer: "Most branding projects take 2–6 weeks depending on scope. Simple logo designs can be completed faster, while comprehensive brand identities require more time."
  },
  {
    question: "Do you provide brand guidelines?",
    answer: "Yes, we create detailed brand guidelines that ensure consistent application of your visual identity across all touchpoints."
  },
  {
    question: "Can you redesign an existing brand?",
    answer: "Absolutely! We specialize in brand refreshes and complete rebrands to modernize your visual identity while preserving brand equity."
  },
  {
    question: "What file formats will I receive?",
    answer: "You'll receive all source files plus optimized versions for web, print, and social media in formats like AI, EPS, PDF, PNG, and SVG."
  },
  {
    question: "Do you offer brand strategy services?",
    answer: "Yes, we provide brand strategy consulting to help define your brand positioning, messaging, and target audience before diving into visual design."
  },
  {
    question: "Can you design marketing materials?",
    answer: "Yes, we create business cards, brochures, social media graphics, presentations, and other marketing collateral that align with your brand."
  },
  {
    question: "Do you offer brand design services in Calgary?",
    answer: "Yes! NuTab Digital is a Calgary-based brand design studio serving businesses across Alberta. We provide logo design, visual identity, and brand strategy."
  },
  {
    question: "Can Calgary businesses benefit from professional branding?",
    answer: "Absolutely. Strong branding helps Calgary businesses stand out, build trust, and connect with local and national audiences."
  },
  {
    question: "Is your design team based in Calgary?",
    answer: "Yes, our Calgary-based creative team provides in-person consultations and ongoing collaboration for branding projects."
  }
];

const brandPackages: PricingPackage[] = [
  {
    id: "basic-logo",
    title: "Logo Package",
    subtitle: "Essential logo for new businesses",
    priceNumber: 500,
    priceDisplay: "$500",
    features: [
      "2 initial logo concepts",
      "2 rounds of revisions",
      "Final logo files (AI, PNG, SVG)",
      "Basic color palette",
      "Simple usage guide"
    ]
  },
  {
    id: "brand-kit",
    title: "Brand Kit",
    subtitle: "Complete visual identity system",
    badge: "Popular",
    priceNumber: 900,
    priceDisplay: "$900",
    features: [
      "Logo + alternate versions",
      "Color palette & typography",
      "Brand usage guidelines",
      "Social media templates",
      "Business card design"
    ],
    suffix: "Includes Logo Package"
  },
  {
    id: "full-brand",
    title: "Complete Brand",
    subtitle: "Full strategy + design system",
    priceDisplay: "Request a Quote",
    features: [
      "Brand strategy workshop",
      "Comprehensive brand guide",
      "All logo variations",
      "Marketing collateral templates",
      "Presentation templates",
      "Ongoing brand support"
    ],
    suffix: "Includes Brand Kit"
  }
];

const pricingLdJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital Brand Design Pricing",
  description: "Logo, Brand Kit, and Complete Brand packages (25% discount applied).",
  itemListElement: brandPackages.map((p, i) => {
    const offer: any = {
      "@type": "Offer",
      position: i + 1,
      name: p.title,
      description: `${p.subtitle}. ${p.features.join(", ")}`,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://nutab.ca/services/brand-design#${p.id}`,
      seller: { "@id": "https://nutab.ca/#organization" },
      itemOffered: {
        "@type": "Service",
        name: p.title,
        serviceType: "Graphic & Brand Design",
        provider: { "@id": "https://nutab.ca/#organization" },
      },
    };

        if (typeof p.priceNumber === "number") {
          offer.price = p.priceNumber;
        }

    return offer;
  }),
};

const BrandDesign: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="relative dark">
      <Background />
      
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Graphic & Brand Design" }
      ]} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://nutab.ca" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://nutab.ca/services" },
              { "@type": "ListItem", position: 3, name: "Graphic & Brand Design", item: "https://nutab.ca/services/brand-design" }
            ]
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://nutab.ca/services/brand-design#service",
            name: "Graphic & Brand Design",
            description: "Professional brand design services including logo design, visual identity, and brand strategy.",
            serviceType: "Brand Design",
            url: "https://nutab.ca/services/brand-design",
            image: "https://nutab.ca/photos/3d-nutab-logo.png",
            datePublished: "2024-01-15",
            dateModified: "2025-12-11",
            provider: { "@id": "https://nutab.ca/#organization" },
            areaServed: {
              "@type": "City",
              name: "Calgary",
              containedIn: { "@type": "AdministrativeArea", name: "Alberta" }
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 dark:bg-pink-500/20 border border-pink-500/20 dark:border-pink-500/30 mb-8">
            <Palette className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-600 dark:text-pink-400">Calgary Creative Studio</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Build a Brand That</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent">
              Stands Out
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Create a memorable visual identity that captures your brand&apos;s essence. Our Calgary-based 
            creative team delivers logos, brand systems, and design assets that resonate with your 
            audience and drive recognition.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: PenTool, label: "Logo Design", color: "text-pink-500" },
              { icon: Layers, label: "Visual Identity", color: "text-rose-500" },
              { icon: Image, label: "Digital Graphics", color: "text-orange-500" },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex flex-col items-center gap-2 group">
                <div className="p-4 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105"
            >
              Start Your Brand
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300"
            >
              View Pricing
              <ChevronDown className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Brand Design Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Invest in <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Professional Branding?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Strong branding builds trust, differentiates you from competitors, and creates 
              lasting connections with your audience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "First Impressions Matter",
                description: "Your visual identity is often the first thing customers see. Make it count with professional design that conveys credibility.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: Lightbulb,
                title: "Brand Recognition",
                description: "Consistent visual elements across all touchpoints help customers remember and recognize your business instantly.",
                gradient: "from-rose-500 to-orange-500"
              },
              {
                icon: Sparkles,
                title: "Competitive Edge",
                description: "Stand out in crowded markets with unique, thoughtful design that captures what makes your business special.",
                gradient: "from-orange-500 to-amber-500"
              }
            ].map(({ icon: Icon, title, description, gradient }) => (
              <div key={title} className="group relative">
                <div className="h-full p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${gradient} mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Design Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive brand design services to establish and elevate your visual identity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Logo Design",
                description: "Distinctive, versatile logos that capture your brand's personality and work across all applications.",
                icon: PenTool
              },
              {
                title: "Visual Identity",
                description: "Complete brand systems including colors, typography, patterns, and visual elements.",
                icon: Layers
              },
              {
                title: "Brand Guidelines",
                description: "Comprehensive documentation ensuring consistent brand application across all channels.",
                icon: FileText
              },
              {
                title: "Marketing Collateral",
                description: "Business cards, brochures, presentations, and other branded materials that reinforce your identity.",
                icon: Image
              },
              {
                title: "Digital Graphics",
                description: "Social media assets, web graphics, and digital templates optimized for online platforms.",
                icon: Sparkles
              }
            ].map(({ title, description, icon: Icon }) => (
              <div 
                key={title}
                className="group flex gap-5 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:shadow-pink-500/5 dark:hover:shadow-pink-500/10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-pink-100 dark:bg-pink-900/30 group-hover:bg-pink-200 dark:group-hover:bg-pink-900/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        packages={brandPackages}
        title="Brand Design Pricing"
        subtitle="Choose the package that fits your branding needs. All packages include source files and revisions."
        accentColor="pink"
        ldJson={pricingLdJson}
      />

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We create brands for businesses across diverse sectors.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["Startups", "Professional Services", "Retail", "Healthcare", "Technology", "Hospitality", "Real Estate", "Non-Profit"].map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Creative Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collaborative approach that ensures your brand truly represents your business.
            </p>
          </div>
          
          <div className="relative dark">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 transform -translate-y-1/2 z-0" />
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Discovery", description: "Understand your brand, audience, and goals" },
                { step: "02", title: "Research", description: "Analyze competitors and market positioning" },
                { step: "03", title: "Concept", description: "Develop initial design directions" },
                { step: "04", title: "Refine", description: "Iterate based on feedback" },
                { step: "05", title: "Deliver", description: "Final files and brand guidelines" }
              ].map(({ step, title, description }) => (
                <div key={step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-600 text-white font-bold text-lg mb-4 shadow-lg shadow-pink-500/25">
                    {step}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose NuTab Digital?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Partner with Calgary&apos;s creative brand design studio for results that matter.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Creative Excellence", description: "Award-worthy designs that capture attention and convey your brand story" },
              { title: "Strategic Thinking", description: "Design decisions backed by research and business objectives" },
              { title: "Collaborative Process", description: "Your input shapes the design at every stage" },
              { title: "Complete Deliverables", description: "All files, formats, and documentation you need" },
              { title: "Local Calgary Team", description: "In-person consultations and ongoing creative support" },
              { title: "Fast Turnaround", description: "Efficient workflow without compromising quality" }
            ].map(({ title, description }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300">
                <CheckCircle2 className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Related Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            Explore more ways we can help build your brand presence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Photography & Media", href: "/services/photo-media" },
              { label: "SEO & Digital Marketing", href: "/services/seo-marketing" },
              { label: "Custom Software", href: "/services/app-development" }
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300"
              >
                {label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-pink-600 via-rose-600 to-orange-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Build Your Brand?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s create a visual identity that captures your brand&apos;s essence. Contact us today 
                for a free consultation with our Calgary creative team.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-pink-600 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs} 
        lead="Common questions about our graphic and brand design services."
        accentColor="pink"
      />
    </main>
  );
};

export default BrandDesign;
