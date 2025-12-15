import React from "react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Search, BarChart3, TrendingUp, ArrowRight, Sparkles, Target, Users, CheckCircle2, ChevronDown, LineChart, Share2, FileText, Megaphone, MousePointer } from "lucide-react";
import Link from "next/link";
import FAQSection from "../../components/FAQSection/FAQSection";
import PricingSection, { PricingPackage } from "../../components/PricingSection/PricingSection";

export const generateMetadata = (): import("next").Metadata => ({
  title: "SEO & Digital Marketing Calgary | NuTab Digital",
  description:
    "Calgary's trusted SEO and digital marketing experts. Search engine optimization, content marketing, PPC, and social media management for Alberta businesses. Boost your online visibility.",
  keywords: ["SEO Calgary", "digital marketing Calgary", "search engine optimization Alberta", "PPC Calgary", "content marketing Calgary", "social media marketing Alberta"],
  alternates: {
    canonical: "https://nutab.ca/services/seo-marketing",
  },
  openGraph: {
    title: "SEO & Digital Marketing Calgary | NuTab Digital",
    description:
      "Calgary's trusted SEO and digital marketing experts. Search engine optimization, content marketing, PPC, and social media management for Alberta businesses.",
    url: "https://nutab.ca/services/seo-marketing",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-seo-marketing.webp",
        width: 1200,
        height: 800,
        alt: "SEO & Digital Marketing Services in Calgary, Alberta",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Digital Marketing Calgary | NuTab Digital",
    description:
      "Calgary's trusted SEO and digital marketing experts. SEO, PPC, content marketing, and social media for Alberta businesses.",
    images: ["https://nutab.ca/photos/og-seo-marketing.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
});

const faqs = [
  {
    question: "What is SEO and why does it matter?",
    answer: "SEO (Search Engine Optimization) improves your website's visibility in search results. Higher rankings mean more organic traffic, leads, and customers without paying for ads."
  },
  {
    question: "How long does SEO take to show results?",
    answer: "SEO is a long-term strategy. Most businesses see noticeable improvements in 3-6 months, with significant results in 6-12 months depending on competition and starting point."
  },
  {
    question: "Do you offer PPC advertising services?",
    answer: "Yes! We manage Google Ads, Microsoft Ads, and social media advertising campaigns to drive immediate traffic while your SEO builds momentum."
  },
  {
    question: "Can you help with content marketing?",
    answer: "Absolutely. We create blog posts, articles, guides, and other content optimized for search engines and designed to engage your target audience."
  },
  {
    question: "Do you manage social media accounts?",
    answer: "Yes, we offer social media management including content creation, scheduling, community engagement, and analytics reporting."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We track keyword rankings, organic traffic, conversion rates, and ROI. You'll receive regular reports with clear metrics and actionable insights."
  },
  {
    question: "What makes your SEO approach different?",
    answer: "We focus on sustainable, white-hat strategies that build long-term value. No shortcuts or risky tactics that could get your site penalized."
  },
  {
    question: "Can you help with local SEO in Calgary?",
    answer: "Yes! Local SEO is our specialty. We optimize your Google Business Profile, build local citations, and target Calgary and Alberta-specific keywords."
  },
  {
    question: "Do you provide ongoing SEO services?",
    answer: "Yes, SEO requires ongoing effort. We offer monthly retainers that include content updates, link building, technical maintenance, and strategy refinement."
  },
  {
    question: "Is digital marketing right for small businesses?",
    answer: "Absolutely. Digital marketing is often more cost-effective than traditional advertising, with better targeting and measurable results for businesses of all sizes."
  },
  {
    question: "Do you offer SEO services in Calgary?",
    answer: "Yes! NuTab Digital is a Calgary-based SEO and digital marketing agency. We specialize in helping local Alberta businesses rank higher and grow online."
  },
  {
    question: "Can Calgary businesses benefit from local SEO?",
    answer: "Definitely. Local SEO helps Calgary businesses appear in map results and local searches, driving foot traffic and leads from customers in your area."
  },
  {
    question: "Is your marketing team based in Calgary?",
    answer: "Yes, our Calgary-based team understands the local market and provides personalized service with in-person consultations available."
  }
];

const seoPackages: PricingPackage[] = [
  {
    id: "starter-seo",
    title: "Starter SEO",
    subtitle: "Essential monthly optimization",
    priceNumber: 300,
    priceDisplay: "$300",
    isMonthly: true,
    features: [
      "Keyword research & tracking",
      "Google Business Profile setup & optimization",
      "On-page SEO (up to 10 pages)",
      "Technical SEO audit",
      "Local citations & listings",
      "Monthly performance report"
    ]
  },
  {
    id: "growth-seo",
    title: "Growth SEO",
    subtitle: "Comprehensive marketing package",
    badge: "Popular",
    priceNumber: 650,
    priceDisplay: "$650",
    isMonthly: true,
    features: [
      "All Starter features",
      "Content strategy & creation",
      "Link building outreach",
      "Competitor analysis",
      "Advanced local SEO",
      "Bi-weekly strategy calls"
    ],
    suffix: "Includes Starter features"
  },
  {
    id: "scale-seo",
    title: "Scale SEO",
    subtitle: "Full-service digital marketing",
    priceDisplay: "Request a Quote",
    isMonthly: true,
    features: [
      "All Growth features",
      "Increased content production",
      "High-authority link acquisition",
      "Conversion & analytics optimization",
      "Review & reputation support",
      "Quarterly deep-dive SEO audit"
    ],
    suffix: "Includes Growth features"
  }
];

const pricingLdJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital SEO & Marketing Pricing",
  description: "Starter, Growth, and Scale monthly SEO packages (25% discount applied).",
  itemListElement: seoPackages.map((p, i) => {
    const offer: any = {
      "@type": "Offer",
      position: i + 1,
      name: p.title,
      description: `${p.subtitle}. ${p.features.join(", ")}`,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://nutab.ca/services/seo-marketing#${p.id}`,
      seller: { "@id": "https://nutab.ca/#organization" },
      itemOffered: {
        "@type": "Service",
        name: p.title,
        serviceType: "SEO & Digital Marketing",
        provider: { "@id": "https://nutab.ca/#organization" },
      },
    };

        if (typeof p.priceNumber === "number") {
          offer.price = p.priceNumber;
          offer.priceSpecification = {
            "@type": "UnitPriceSpecification",
            price: p.priceNumber,
            priceCurrency: "CAD",
            billingDuration: p.isMonthly ? "P1M" : undefined,
          };
    }

    return offer;
  }),
};

const SEOMarketing: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="relative dark">
      <Background />
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "SEO & Digital Marketing" }
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
              { "@type": "ListItem", position: 3, name: "SEO & Digital Marketing", item: "https://nutab.ca/services/seo-marketing" }
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
            "@id": "https://nutab.ca/services/seo-marketing#service",
            name: "SEO & Digital Marketing",
            description: "Comprehensive search engine optimization and digital marketing services to boost online visibility and drive business growth.",
            serviceType: "Digital Marketing",
            url: "https://nutab.ca/services/seo-marketing",
            image: "https://nutab.ca/photos/3d-nutab-logo.png",
            datePublished: "2024-01-15",
            dateModified: "2025-12-11",
            provider: { "@id": "https://nutab.ca/#organization" },
            areaServed: {
              "@type": "City",
              name: "Calgary",
              containedIn: { "@type": "AdministrativeArea", name: "Alberta" }
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://nutab.ca/services/seo-marketing"
            }
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-500/20 border border-green-500/20 dark:border-green-500/30 mb-8">
            <Search className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">Calgary SEO Experts</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Grow Your Online</span>
            <br />
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Visibility
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Dominate search results and connect with your ideal customers. Our Calgary-based marketing team 
            delivers data-driven SEO, PPC campaigns, and content strategies that drive traffic, leads, and 
            revenue for Alberta businesses.
          </p>
          
          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Search, label: "Search Engine Optimization", color: "text-green-500" },
              { icon: Megaphone, label: "PPC Advertising", color: "text-emerald-500" },
              { icon: FileText, label: "Content Marketing", color: "text-teal-500" },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex flex-col items-center gap-2 group">
                <div className="p-4 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105"
            >
              Get Free SEO Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300"
            >
              Our Services
              <ChevronDown className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Digital Marketing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Invest in <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Digital Marketing?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Digital marketing delivers measurable results and sustainable growth for businesses 
              ready to compete in the modern marketplace.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Organic Traffic Growth",
                description: "Rank higher in search results and attract qualified visitors who are actively looking for your products or services.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Target,
                title: "Targeted Reach",
                description: "Connect with your ideal customers through precise targeting based on demographics, interests, and search behavior.",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: BarChart3,
                title: "Measurable ROI",
                description: "Track every click, conversion, and dollar spent. Make data-driven decisions that maximize your marketing investment.",
                gradient: "from-teal-500 to-cyan-500"
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
              Our Marketing Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to boost your online presence and drive growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Search Engine Optimization (SEO)",
                description: "On-page optimization, technical SEO, link building, and local SEO to improve your search rankings and organic traffic.",
                icon: Search
              },
              {
                title: "Pay-Per-Click Advertising (PPC)",
                description: "Google Ads, Microsoft Ads, and social media advertising campaigns that deliver immediate traffic and conversions.",
                icon: MousePointer
              },
              {
                title: "Content Marketing",
                description: "Blog posts, articles, guides, and multimedia content that engages your audience and establishes thought leadership.",
                icon: FileText
              },
              {
                title: "Social Media Marketing",
                description: "Strategic social media management, content creation, community engagement, and paid social campaigns.",
                icon: Share2
              },
              {
                title: "Analytics & Reporting",
                description: "Comprehensive tracking, regular reporting, and data-driven insights to optimize your marketing performance.",
                icon: LineChart
              }
            ].map(({ title, description, icon: Icon }) => (
              <div 
                key={title}
                className="group flex gap-5 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:shadow-green-500/5 dark:hover:shadow-green-500/10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Benefits of Digital Marketing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Strategic marketing delivers compounding returns and sustainable competitive advantages.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: TrendingUp, title: "More Traffic", description: "Increased organic visitors" },
              { icon: Target, title: "Better Leads", description: "Qualified prospects ready to buy" },
              { icon: BarChart3, title: "Higher ROI", description: "Measurable marketing spend" },
              { icon: Users, title: "Brand Authority", description: "Trusted industry presence" },
              { icon: Sparkles, title: "Long-term Growth", description: "Compounding organic results" }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center group">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We deliver results-driven marketing for businesses across diverse sectors.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["E-Commerce", "Healthcare", "Professional Services", "Real Estate", "Home Services", "Finance", "Legal", "B2B Tech"].map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 cursor-default"
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
              Our Marketing Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A data-driven approach that delivers measurable results and continuous improvement.
            </p>
          </div>
          
          <div className="relative dark">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 transform -translate-y-1/2 z-0" />
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Discovery", description: "Audit current performance and identify opportunities" },
                { step: "02", title: "Strategy", description: "Develop customized marketing plan and goals" },
                { step: "03", title: "Implementation", description: "Execute campaigns, content, and optimizations" },
                { step: "04", title: "Analysis", description: "Track results, gather insights, measure ROI" },
                { step: "05", title: "Optimization", description: "Refine strategies for continuous improvement" }
              ].map(({ step, title, description }) => (
                <div key={step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 text-white font-bold text-lg mb-4 shadow-lg shadow-green-500/25">
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
              Partner with Calgary&apos;s trusted digital marketing team for results that matter.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Data-Driven Approach", description: "Every decision backed by analytics, not guesswork" },
              { title: "White-Hat Strategies", description: "Sustainable tactics that protect your brand reputation" },
              { title: "Transparent Reporting", description: "Clear metrics and regular updates on your campaigns" },
              { title: "Local Expertise", description: "Deep understanding of Calgary and Alberta markets" },
              { title: "Proven Results", description: "Track record of rankings, traffic, and revenue growth" },
              { title: "Dedicated Support", description: "Responsive team committed to your success" }
            ].map(({ title, description }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
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
            Explore more ways we can help grow your business online.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "E-Commerce Development", href: "/services/ecommerce" },
              { label: "Graphic & Brand Design", href: "/services/brand-design" },
              { label: "Photography & Media", href: "/services/photo-media" }
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
              >
                {label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        packages={seoPackages}
        title="SEO & Marketing Pricing"
        subtitle="Monthly packages for sustainable growth. All plans include reporting and strategy calls."
        accentColor="green"
        ldJson={pricingLdJson}
      />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Grow Your Online Presence?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free SEO audit and marketing consultation. Let&apos;s build a strategy 
                that drives traffic, leads, and revenue for your business.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-green-600 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Get Your Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} lead="Common questions about our SEO and digital marketing services." accentColor="green" />
    </main>
  );
};

export default SEOMarketing;
