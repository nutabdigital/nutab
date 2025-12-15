import React from "react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Briefcase, Users, Lightbulb, ArrowRight, Sparkles, Target, Cloud, ShieldCheck, CheckCircle2, ChevronDown, LineChart, Settings } from "lucide-react";
import Link from "next/link";
import FAQSection from "../../components/FAQSection/FAQSection";
import PricingSection, { PricingPackage } from "../../components/PricingSection/PricingSection";

export const generateMetadata = (): import("next").Metadata => ({
  title: "IT Consulting Calgary | Business Technology Strategy | NuTab Digital",
  description:
    "Calgary's business and IT consulting experts. NuTab Digital provides digital transformation, cloud strategy, and technology consulting for Alberta companies. Local support. Free consultation.",
  keywords: ["IT consulting Calgary", "business consulting Calgary", "digital transformation Alberta", "cloud migration Calgary", "technology consulting Calgary", "IT strategy Alberta"],
  alternates: {
    canonical: "https://nutab.ca/services/it-consulting",
  },
  openGraph: {
    title: "IT Consulting Calgary | Business Technology Strategy | NuTab Digital",
    description:
      "Calgary's business and IT consulting experts. NuTab Digital provides digital transformation, cloud strategy, and technology consulting for Alberta companies.",
    url: "https://nutab.ca/services/it-consulting",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-it-consulting.webp",
        width: 1200,
        height: 800,
        alt: "Business & IT Consulting Services in Calgary, Alberta",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Consulting Calgary | Business Technology Strategy | NuTab Digital",
    description:
      "Calgary's business and IT consulting experts. Digital transformation and technology consulting for Alberta companies.",
    images: ["https://nutab.ca/photos/og-it-consulting.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
});

const faqs = [
  {
    question: "What is business & IT consulting?",
    answer: "Business & IT consulting provides expert advice on technology, strategy, and operations to help organizations achieve their goals and solve challenges."
  },
  {
    question: "How can consulting help my business?",
    answer: "Consulting helps you make informed decisions, optimize processes, adopt new technologies, and drive growth."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide ongoing advice and optimization to ensure your business continues to succeed."
  },
  {
    question: "Can you help with digital transformation?",
    answer: "Absolutely! We specialize in guiding organizations through digital transformation and technology adoption."
  },
  {
    question: "Is consulting right for small businesses?",
    answer: "Yes, our consulting services are tailored for businesses of all sizes, including startups and small enterprises."
  },
  {
    question: "What are the benefits of hiring an IT consultant?",
    answer: "IT consultants provide expert guidance, help reduce costs, improve security, and ensure your technology aligns with business goals."
  },
  {
    question: "How do I choose the right IT consulting firm?",
    answer: "Look for experience, proven results, and a collaborative approach. We offer free consultations to discuss your needs and goals."
  },
  {
    question: "Can you help with cloud migration and strategy?",
    answer: "Yes, we plan and execute secure cloud migrations, ensuring minimal disruption and maximum value."
  },
  {
    question: "Is IT consulting confidential?",
    answer: "We treat all client information with strict confidentiality and can sign NDAs for sensitive projects."
  },
  {
    question: "How quickly can I see results from consulting?",
    answer: "Many clients see improvements within weeks. We provide clear roadmaps and measurable outcomes for every engagement."
  },
  {
    question: "Do you offer IT consulting services in Calgary?",
    answer: "Yes! NuTab Digital is a Calgary-based IT consulting firm serving businesses across Alberta. We provide digital transformation, cloud strategy, and technology consulting for local companies."
  },
  {
    question: "Can Calgary businesses benefit from IT consulting?",
    answer: "Absolutely. We help Calgary businesses of all sizes optimize their technology, reduce costs, and drive growth through strategic IT consulting."
  },
  {
    question: "Is your consulting team based in Calgary?",
    answer: "Yes, our Calgary-based team provides local support, in-person consultations, and ongoing collaboration for IT consulting projects throughout Alberta."
  }
];

const consultingPackages: PricingPackage[] = [
  {
    id: "assessment",
    title: "IT Assessment",
    subtitle: "Comprehensive technology audit",
    priceNumber: 2500,
    priceDisplay: "$2,500",
    features: [
      "Infrastructure & security audit",
      "Process gap analysis",
      "Risk assessment",
      "Prioritized recommendations",
      "Executive summary report"
    ]
  },
  {
    id: "optimization",
    title: "Optimization",
    subtitle: "Strategy & implementation support",
    badge: "Popular",
    priceDisplay: "Request a Quote",
    features: [
      "Full IT assessment",
      "Technology roadmap",
      "Cloud strategy planning",
      "Vendor evaluation",
      "Implementation guidance",
      "60 days support"
    ],
    suffix: "Includes Assessment"
  },
  {
    id: "transformation",
    title: "Transformation",
    subtitle: "End-to-end digital transformation",
    priceDisplay: "Request a Quote",
    features: [
      "Complete strategy & roadmap",
      "Change management planning",
      "Hands-on implementation",
      "Training & documentation",
      "Security & compliance setup",
      "90 days priority support"
    ],
    suffix: "Includes Optimization"
  }
];

const pricingLdJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital IT Consulting Pricing",
  description: "IT Assessment, Optimization, and Transformation packages (25% discount applied).",
  itemListElement: consultingPackages.map((p, i) => {
    const offer: any = {
      "@type": "Offer",
      position: i + 1,
      name: p.title,
      description: `${p.subtitle}. ${p.features.join(", ")}`,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://nutab.ca/services/it-consulting#${p.id}`,
      seller: { "@id": "https://nutab.ca/#organization" },
      itemOffered: {
        "@type": "Service",
        name: p.title,
        serviceType: "IT Consulting",
        provider: { "@id": "https://nutab.ca/#organization" },
      },
    };

    if (typeof p.priceNumber === "number") {
      offer.price = p.priceNumber;
    }

    return offer;
  }),
};

const ITConsulting: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="relative dark">
      <Background />
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Business & IT Consulting" }
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
              { "@type": "ListItem", position: 3, name: "Business & IT Consulting", item: "https://nutab.ca/services/it-consulting" }
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
            "@id": "https://nutab.ca/services/it-consulting#service",
            name: "Business & IT Consulting",
            description: "Expert technology consulting to help organizations achieve their goals through digital transformation and strategic IT planning.",
            serviceType: "IT Consulting",
            url: "https://nutab.ca/services/it-consulting",
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
              serviceUrl: "https://nutab.ca/services/it-consulting"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/20 dark:border-amber-500/30 mb-8">
            <Briefcase className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">Calgary IT Consultants</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Strategic Technology</span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Consulting
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Navigate digital transformation with confidence. Our Calgary-based consultants help businesses 
            align technology with strategy, optimize operations, and drive measurable results. From cloud 
            migration to security assessments, we&apos;re your trusted technology partner.
          </p>
          
          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Lightbulb, label: "Digital Strategy", color: "text-amber-500" },
              { icon: Cloud, label: "Cloud Solutions", color: "text-orange-500" },
              { icon: ShieldCheck, label: "Security & Compliance", color: "text-red-500" },
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300"
            >
              Our Services
              <ChevronDown className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why IT Consulting Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Invest in <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">IT Consulting?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Expert guidance helps you make smarter technology decisions, avoid costly mistakes, 
              and accelerate your digital transformation journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Digital Transformation",
                description: "Roadmaps and strategies to modernize your systems, processes, and customer experiences for the digital age.",
                gradient: "from-amber-500 to-yellow-500"
              },
              {
                icon: Cloud,
                title: "Cloud Strategy",
                description: "Plan and execute secure cloud migrations with minimal disruption and maximum ROI for your business.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: ShieldCheck,
                title: "Security & Compliance",
                description: "Risk assessments, security policies, and controls to protect your business and meet regulatory requirements.",
                gradient: "from-red-500 to-rose-500"
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
              Our Consulting Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Strategic guidance to help your business thrive in the digital landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Digital Transformation Strategy",
                description: "Comprehensive roadmaps and plans to modernize your systems, processes, and customer experiences.",
                icon: Lightbulb
              },
              {
                title: "IT Roadmapping",
                description: "Align technology investments with business goals and priorities for maximum impact.",
                icon: Target
              },
              {
                title: "Cloud Strategy & Migration",
                description: "Plan and execute secure cloud moves with minimal disruption and optimal cost efficiency.",
                icon: Cloud
              },
              {
                title: "Security & Compliance",
                description: "Risk assessments, security policies, and controls tailored to your industry&apos;s regulatory needs.",
                icon: ShieldCheck
              },
              {
                title: "Operational Optimization",
                description: "Improve processes, reduce costs, and increase efficiency across your organization.",
                icon: Settings
              }
            ].map(({ title, description, icon: Icon }) => (
              <div 
                key={title}
                className="group flex gap-5 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:shadow-amber-500/5 dark:hover:shadow-amber-500/10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
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
              Benefits of IT Consulting
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Expert consulting delivers measurable results and competitive advantages for your business.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Target, title: "Clear Roadmaps", description: "Actionable plans that reduce risk" },
              { icon: LineChart, title: "Cost Efficiency", description: "Optimize spend across all areas" },
              { icon: ShieldCheck, title: "Security", description: "Stronger posture and compliance" },
              { icon: Sparkles, title: "Fast Results", description: "Prioritized initiatives that deliver" },
              { icon: Settings, title: "Scalability", description: "Foundation that grows with you" }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center group">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
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
              We provide IT consulting for businesses across diverse sectors.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["Healthcare", "Finance", "Retail", "Manufacturing", "Professional Services", "Energy & Utilities", "Education", "Government"].map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 cursor-default"
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
              Our Consulting Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A structured approach that delivers actionable insights and measurable results.
            </p>
          </div>
          
          <div className="relative dark">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 transform -translate-y-1/2 z-0" />
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Discovery", description: "Understand objectives, constraints, and opportunities" },
                { step: "02", title: "Assessment", description: "Audit current systems, security, and processes" },
                { step: "03", title: "Strategy", description: "Develop prioritized roadmap and success metrics" },
                { step: "04", title: "Implementation", description: "Deliver projects, integrations, and change management" },
                { step: "05", title: "Support", description: "Ongoing monitoring, optimization, and training" }
              ].map(({ step, title, description }) => (
                <div key={step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-600 text-white font-bold text-lg mb-4 shadow-lg shadow-amber-500/25">
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
              Partner with Calgary&apos;s trusted IT consulting team for strategic technology guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Strategic Expertise", description: "Deep experience aligning technology with business goals and outcomes" },
              { title: "Industry Knowledge", description: "Understanding of sector-specific challenges and compliance requirements" },
              { title: "Vendor-Agnostic", description: "Unbiased recommendations based on what's best for your business" },
              { title: "Results-Focused", description: "Clear metrics and measurable outcomes for every engagement" },
              { title: "Local Calgary Team", description: "Calgary-based consultants available for in-person collaboration" },
              { title: "Ongoing Partnership", description: "Long-term support to help you adapt and grow" }
            ].map(({ title, description }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
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
            Explore more ways we can help transform your business.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Custom Software Development", href: "/services/app-development" },
              { label: "AI & Automation Solutions", href: "/services/ai-automation" },
              { label: "SEO & Digital Marketing", href: "/services/seo-marketing" }
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300"
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
        packages={consultingPackages}
        title="IT Consulting Pricing"
        subtitle="Strategic packages to guide your technology transformation. Custom engagements available."
        accentColor="amber"
        ldJson={pricingLdJson}
      />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Get expert IT consulting to align your technology with your business goals. 
                Contact us today for a free consultation with our Calgary team.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-amber-600 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} lead="Common questions about our business and IT consulting services." accentColor="amber" />
    </main>
  );
};

export default ITConsulting;
