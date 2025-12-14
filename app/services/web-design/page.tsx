import React from "react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Globe, Palette, Zap, ArrowRight, Layout, SearchCheck, Smartphone, CheckCircle2, ChevronDown, Monitor, Sparkles, Code2 } from "lucide-react";
import Link from "next/link";
import FAQSection from "../../components/FAQSection/FAQSection";
import PricingSection, { PricingPackage } from "../../components/PricingSection/PricingSection";

export const generateMetadata = (): import("next").Metadata => ({
  title: "Web Design & Development Calgary | Custom Websites | NuTab Digital",
  description:
    "Professional web design and development in Calgary. NuTab Digital creates stunning, responsive websites that drive results. SEO-optimized, mobile-friendly, and conversion-focused.",
  keywords: ["web design Calgary", "website development Alberta", "responsive web design Calgary", "custom websites Calgary", "web developers Calgary", "SEO web design Alberta"],
  alternates: {
    canonical: "https://nutab.ca/services/web-design",
  },
  openGraph: {
    title: "Web Design & Development Calgary | Custom Websites | NuTab Digital",
    description:
      "Professional web design and development in Calgary. Create stunning, responsive websites that convert visitors into customers.",
    url: "https://nutab.ca/services/web-design",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-web-design.webp",
        width: 1200,
        height: 800,
        alt: "Web Design & Development Services in Calgary, Alberta",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Calgary | Custom Websites | NuTab Digital",
    description:
      "Professional web design and development in Calgary. Build beautiful, high-performing websites.",
    images: ["https://nutab.ca/photos/og-web-design.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
});

const faqs = [
  {
    question: "What is included in web design and development?",
    answer: "Our web design and development services include custom design, responsive layouts, SEO optimization, content management systems, hosting setup, and ongoing support."
  },
  {
    question: "How long does it take to build a website?",
    answer: "A basic website can be completed in 2-4 weeks, while more complex sites with custom features may take 6-12 weeks. We provide detailed timelines after the initial consultation."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops to ensure a great user experience across all screen sizes."
  },
  {
    question: "Do you provide SEO services?",
    answer: "Yes, all our websites are built with SEO best practices including optimized code, meta tags, schema markup, fast loading speeds, and mobile optimization."
  },
  {
    question: "Can I update my website content myself?",
    answer: "Yes! We build websites with user-friendly content management systems (CMS) that allow you to easily update text, images, and pages without technical knowledge."
  },
  {
    question: "What platforms do you build websites on?",
    answer: "We specialize in modern frameworks like React, Next.js, WordPress, and custom solutions depending on your needs. We recommend the best platform for your specific requirements."
  },
  {
    question: "Do you offer website maintenance?",
    answer: "Yes, we offer ongoing maintenance packages including updates, security monitoring, backups, performance optimization, and content updates."
  },
  {
    question: "How much does a website cost?",
    answer: "Website costs vary based on complexity and features. Our packages start at $800 for basic sites and go up to $3,200+ for advanced custom builds. We provide transparent quotes."
  },
  {
    question: "Do you offer web design services in Calgary?",
    answer: "Yes! NuTab Digital is a Calgary-based web design company serving businesses across Alberta. We provide in-person consultations and local support."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely! We can redesign your existing website with modern design, improved performance, better SEO, and enhanced user experience while preserving your brand identity."
  }
];

const webDesignPackages: PricingPackage[] = [
  {
    id: "starter",
    title: "Starter Website",
    subtitle: "Clean brochure site for small teams",
    priceNumber: 800,
    priceDisplay: "$800",
    features: [
      "Up to 3 pages (Home, About, Contact)",
      "Mobile-friendly responsive design",
      "Contact form integration",
      "Basic SEO setup & meta tags",
      "SSL certificate & secure hosting",
      "30 days support"
    ]
  },
  {
    id: "business",
    title: "Business Website",
    subtitle: "Feature-rich site with CMS",
    badge: "Popular",
    priceNumber: 1600,
    priceDisplay: "$1,600",
    features: [
      "Up to 6 pages",
      "Custom design & branding",
      "Blog/CMS for content updates",
      "Advanced SEO & analytics",
      "Performance optimization",
      "Social media integration",
      "60 days support"
    ],
    suffix: "Includes Starter features"
  },
  {
    id: "advanced",
    title: "Advanced Website",
    subtitle: "Full custom build with complex features",
    priceNumber: 3200,
    priceDisplay: "$3,200",
    features: [
      "10–20 custom pages",
      "Advanced custom components",
      "Third-party API integrations",
      "Advanced SEO strategy",
      "Custom CMS & admin panel",
      "Multi-language support (optional)",
      "Performance & security audit",
      "90 days priority support"
    ],
    suffix: "Includes all Business features"
  }
];

const pricingLdJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital Web Design Pricing",
  description: "Starter, Business, and Advanced website packages (25% discount applied).",
  itemListElement: webDesignPackages.map((p, i) => {
    const discounted = Math.round(p.priceNumber * 0.75);
    return {
      "@type": "Offer",
      position: i + 1,
      name: p.title,
      description: `${p.subtitle}. ${p.features.join(", ")}`,
      price: discounted,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://nutab.ca/services/web-design#${p.id}`,
      seller: { "@id": "https://nutab.ca/#organization" },
      itemOffered: {
        "@type": "Service",
        name: p.title,
        serviceType: "Web Design & Development",
        provider: { "@id": "https://nutab.ca/#organization" },
      },
    };
  }),
};

const WebDesign: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="relative dark">
      <Background />

      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Web Design & Development" }
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
              { "@type": "ListItem", position: 3, name: "Web Design & Development", item: "https://nutab.ca/services/web-design" }
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
            "@id": "https://nutab.ca/services/web-design#service",
            name: "Web Design & Development",
            description: "Professional web design and development services creating stunning, responsive websites that drive results for Calgary businesses.",
            serviceType: "Web Design & Development",
            url: "https://nutab.ca/services/web-design",
            image: "https://nutab.ca/photos/3d-nutab-logo.png",
            datePublished: "2024-01-15",
            dateModified: "2025-12-13",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 dark:border-blue-500/30 mb-8">
            <Globe className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Calgary Web Design Experts</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Beautiful Websites</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              That Drive Results
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform your online presence with stunning, responsive websites that convert visitors into
            customers. Our Calgary-based team creates fast, SEO-optimized sites that grow your business.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Smartphone, label: "Mobile-First", color: "text-blue-500" },
              { icon: Zap, label: "Lightning Fast", color: "text-cyan-500" },
              { icon: SearchCheck, label: "SEO Optimized", color: "text-teal-500" },
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              View Pricing
              <ChevronDown className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Web Design Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Professional Web Design?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Your website is often the first impression customers have of your business. Make it count
              with professional design that builds trust and drives conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "First Impressions Matter",
                description: "94% of first impressions are design-related. A professional website builds credibility and trust with your audience instantly.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Fast-loading websites improve user experience, boost SEO rankings, and increase conversion rates by keeping visitors engaged.",
                gradient: "from-cyan-500 to-teal-500"
              },
              {
                icon: SearchCheck,
                title: "SEO Foundation",
                description: "Well-structured, SEO-optimized websites rank higher in search results, bringing more organic traffic to your business.",
                gradient: "from-teal-500 to-emerald-500"
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
              Our Web Design Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive web design and development services from concept to launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Custom Web Design",
                description: "Unique, brand-aligned designs that reflect your business identity and engage your target audience effectively.",
                icon: Palette
              },
              {
                title: "Responsive Development",
                description: "Mobile-first development ensuring perfect display and functionality across all devices and screen sizes.",
                icon: Smartphone
              },
              {
                title: "Content Management",
                description: "User-friendly CMS integration allowing you to easily update content, images, and pages without coding knowledge.",
                icon: Layout
              },
              {
                title: "SEO Optimization",
                description: "Built-in SEO best practices including meta tags, schema markup, sitemap, and performance optimization for better rankings.",
                icon: SearchCheck
              },
              {
                title: "Performance Tuning",
                description: "Lightning-fast loading speeds through code optimization, image compression, and caching strategies.",
                icon: Zap
              },
              {
                title: "Ongoing Support",
                description: "Regular updates, security monitoring, backups, and technical support to keep your website running smoothly.",
                icon: CheckCircle2
              }
            ].map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group flex gap-5 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
        packages={webDesignPackages}
        title="Web Design Pricing"
        subtitle="Choose the package that fits your needs. All packages include responsive design, SEO setup, and professional support."
        accentColor="blue"
        ldJson={pricingLdJson}
      />

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Benefits of Professional Web Design
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Investing in professional web design delivers lasting value for your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: "Brand Credibility", description: "Build trust and authority" },
              { icon: Zap, title: "Higher Conversions", description: "Turn visitors into customers" },
              { icon: SearchCheck, title: "Better SEO", description: "Rank higher in searches" },
              { icon: Monitor, title: "Mobile Ready", description: "Perfect on all devices" }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center group">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We design websites for businesses across diverse sectors.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Healthcare", "Law Firms", "Real Estate", "Restaurants", "Retail", "Professional Services", "Non-Profit", "Education", "Construction", "Finance"].map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A proven approach that delivers beautiful, high-performing websites.
            </p>
          </div>

          <div className="relative dark">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transform -translate-y-1/2 z-0" />

            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Discovery", description: "Understand your goals and audience" },
                { step: "02", title: "Design", description: "Create stunning visual concepts" },
                { step: "03", title: "Development", description: "Build responsive, fast websites" },
                { step: "04", title: "Testing", description: "Ensure quality across devices" },
                { step: "05", title: "Launch", description: "Deploy and monitor performance" }
              ].map(({ step, title, description }) => (
                <div key={step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold text-lg mb-4 shadow-lg shadow-blue-500/25">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose NuTab Digital?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Partner with Calgary&apos;s trusted web design team for results that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Design Excellence", description: "Beautiful, modern designs that reflect your brand and engage visitors" },
              { title: "SEO Expertise", description: "Built-in SEO best practices for better visibility and organic traffic" },
              { title: "Mobile-First Approach", description: "Responsive designs that work perfectly on all devices" },
              { title: "Fast Loading", description: "Optimized performance for better user experience and rankings" },
              { title: "Local Calgary Team", description: "In-person consultations and support for Alberta businesses" },
              { title: "Ongoing Support", description: "Maintenance, updates, and technical assistance when you need it" }
            ].map(({ title, description }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                <CheckCircle2 className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Related Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            Explore more ways we can help build your digital presence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Custom App & Software Development", href: "/services/app-development" },
              { label: "SEO & Digital Marketing", href: "/services/seo-marketing" },
              { label: "E-Commerce Development", href: "/services/ecommerce" }
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
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
          <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Launch Your Website?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s create a stunning website that drives results. Contact us today for a free consultation
                and discover how NuTab Digital can transform your online presence.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
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
        lead="Common questions about our web design and development services."
        accentColor="blue"
      />
    </main>
  );
};

export default WebDesign;
