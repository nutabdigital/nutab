import React from "react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Code2, Server, Database, ArrowRight, Settings, Shield, Cloud, CheckCircle2, ChevronDown, Cog, Monitor, Lock } from "lucide-react";
import Link from "next/link";
import FAQSection from "../../components/FAQSection/FAQSection";
import PricingSection, { PricingPackage } from "../../components/PricingSection/PricingSection";

export const generateMetadata = (): import("next").Metadata => ({
  title: "Custom Software Development Calgary | Tailored Business Solutions | NuTab Digital",
  description:
    "Custom software development in Calgary. NuTab Digital builds scalable, secure applications tailored to your business needs. Enterprise solutions, APIs, and integrations.",
  keywords: ["custom software Calgary", "software development Alberta", "enterprise software Calgary", "business applications Calgary", "API development Calgary", "software integrations"],
  alternates: {
    canonical: "https://nutab.ca/services/custom-software",
  },
  openGraph: {
    title: "Custom Software Development Calgary | Tailored Business Solutions | NuTab Digital",
    description:
      "Custom software development in Calgary. NuTab Digital builds scalable, secure applications tailored to your business needs.",
    url: "https://nutab.ca/services/custom-software",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-custom-software.webp",
        width: 1200,
        height: 800,
        alt: "Custom Software Development Services in Calgary, Alberta",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Calgary | Tailored Business Solutions | NuTab Digital",
    description: "Custom software development in Calgary delivering scalable, secure business applications.",
    images: ["https://nutab.ca/photos/og-custom-software.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
});

const faqs = [
  {
    question: "What is custom software development?",
    answer: "Custom software development involves creating tailored applications designed specifically for your business needs, rather than using off-the-shelf solutions."
  },
  {
    question: "How long does a custom software project take?",
    answer: "Timelines vary based on complexity. Simple applications may take 4–8 weeks, while enterprise systems can take several months. We provide detailed timelines after discovery."
  },
  {
    question: "What technologies do you use?",
    answer: "We work with modern technologies including React, Next.js, Node.js, Python, PostgreSQL, MongoDB, and cloud platforms like AWS and Azure."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer maintenance and support packages to keep your software updated, secure, and performing optimally."
  },
  {
    question: "Can you integrate with existing systems?",
    answer: "Absolutely! We specialize in creating integrations with existing software, APIs, and third-party services to create unified workflows."
  },
  {
    question: "How do you ensure software security?",
    answer: "Security is built into our development process with encryption, authentication, regular audits, and compliance with industry standards."
  },
  {
    question: "Do you offer custom software development in Calgary?",
    answer: "Yes! NuTab Digital is a Calgary-based software development company serving businesses across Alberta. We provide custom applications, APIs, and enterprise solutions."
  },
  {
    question: "Can Calgary businesses benefit from custom software?",
    answer: "Absolutely. Custom software gives Calgary businesses competitive advantages through tailored solutions that address specific operational challenges."
  },
  {
    question: "Is your development team based in Calgary?",
    answer: "Yes, our Calgary-based development team provides in-person consultations and ongoing support for custom software projects."
  }
];

const softwarePackages: PricingPackage[] = [
  {
    id: "starter",
    title: "Starter Website",
    subtitle: "Clean brochure site for small teams",
    priceNumber: 800,
    priceDisplay: "$800",
    features: [
      "Up to 3 pages (Home, About, Contact)",
      "Mobile-friendly layout",
      "Contact form & basic CMS",
      "Basic SEO setup"
    ]
  },
  {
    id: "business",
    title: "Business Website",
    subtitle: "Adds blog, forms, and integrations",
    badge: "Popular",
    priceNumber: 1600,
    priceDisplay: "$1,600",
    features: [
      "Up to 6 pages",
      "Blog/CMS setup & dynamic content",
      "Improved SEO & sitemap",
      "Analytics setup",
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
      "Custom components & complex features",
      "Third-party integrations",
      "Advanced SEO strategy",
      "Priority support (90 days)"
    ],
    suffix: "Includes all Business features"
  }
];

const pricingLdJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital Custom Software Pricing",
  description: "Starter, Business, and Advanced custom software packages (25% discount applied).",
  itemListElement: softwarePackages.map((p, i) => {
    const discounted = Math.round(p.priceNumber * 0.75);
    return {
      "@type": "Offer",
      position: i + 1,
      name: p.title,
      description: `${p.subtitle}. ${p.features.join(", ")}`,
      price: discounted,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://nutab.ca/services/custom-software#${p.id}`,
      seller: { "@id": "https://nutab.ca/#organization" },
      itemOffered: {
        "@type": "Service",
        name: p.title,
        serviceType: "Custom Software Development",
        provider: { "@id": "https://nutab.ca/#organization" },
      },
    };
  }),
};

const CustomSoftware: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="relative dark">
      <Background />
      
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Custom Software" }
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
              { "@type": "ListItem", position: 3, name: "Custom Software", item: "https://nutab.ca/services/custom-software" }
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
            "@id": "https://nutab.ca/services/custom-software#service",
            name: "Custom Software Development",
            description: "Custom software development services including enterprise applications, APIs, and integrations.",
            serviceType: "Software Development",
            url: "https://nutab.ca/services/custom-software",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 dark:border-indigo-500/30 mb-8">
            <Code2 className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Calgary Software Experts</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Custom Software</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
              Built for Your Business
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform your operations with tailor-made software solutions. Our Calgary-based development 
            team creates scalable, secure applications that solve your unique business challenges and 
            drive growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Server, label: "Enterprise Apps", color: "text-indigo-500" },
              { icon: Database, label: "Data Systems", color: "text-purple-500" },
              { icon: Settings, label: "Integrations", color: "text-violet-500" },
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
            >
              View Pricing
              <ChevronDown className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Custom Software Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Custom Software?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Off-the-shelf solutions can&apos;t address every business need. Custom software is built 
              around your unique processes and requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Cog,
                title: "Perfect Fit",
                description: "Software designed specifically for your workflows, eliminating workarounds and increasing efficiency.",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: Monitor,
                title: "Scalable Growth",
                description: "Built to scale with your business, handling increased load and new features as you expand.",
                gradient: "from-purple-500 to-violet-500"
              },
              {
                icon: Lock,
                title: "Competitive Edge",
                description: "Proprietary tools that give you capabilities competitors using generic software can't match.",
                gradient: "from-violet-500 to-indigo-500"
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
              Our Development Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              End-to-end custom software development for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Enterprise Applications",
                description: "Large-scale systems that power complex business operations with reliability and security.",
                icon: Server
              },
              {
                title: "API Development",
                description: "Robust APIs that connect your systems, enable integrations, and power modern applications.",
                icon: Code2
              },
              {
                title: "Database Solutions",
                description: "Custom database design and optimization for efficient data management and retrieval.",
                icon: Database
              },
              {
                title: "System Integrations",
                description: "Connect disparate systems and services into unified, automated workflows.",
                icon: Settings
              },
              {
                title: "Cloud Infrastructure",
                description: "Scalable cloud solutions on AWS, Azure, or GCP with DevOps best practices.",
                icon: Cloud
              },
              {
                title: "Security & Compliance",
                description: "Secure software with encryption, authentication, and compliance with industry standards.",
                icon: Shield
              }
            ].map(({ title, description, icon: Icon }) => (
              <div 
                key={title}
                className="group flex gap-5 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
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
        packages={softwarePackages}
        title="Custom Software Pricing"
        subtitle="Flexible packages to match your project scope. Custom quotes available for enterprise needs."
        accentColor="indigo"
        ldJson={pricingLdJson}
      />

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Modern, battle-tested technologies for reliable software.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React / Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS / Azure", "Docker", "TypeScript"].map((tech) => (
              <div
                key={tech}
                className="p-4 rounded-xl text-center font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A proven methodology that delivers quality software on time and on budget.
            </p>
          </div>
          
          <div className="relative dark">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 transform -translate-y-1/2 z-0" />
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Discovery", description: "Define requirements and scope" },
                { step: "02", title: "Architecture", description: "Design system and data models" },
                { step: "03", title: "Development", description: "Agile sprints with regular demos" },
                { step: "04", title: "Testing", description: "Comprehensive QA and security" },
                { step: "05", title: "Deployment", description: "Launch and ongoing support" }
              ].map(({ step, title, description }) => (
                <div key={step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold text-lg mb-4 shadow-lg shadow-indigo-500/25">
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
              Partner with Calgary&apos;s custom software experts for solutions that work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Technical Expertise", description: "Senior developers with deep experience across technologies and industries" },
              { title: "Agile Methodology", description: "Iterative development with transparency and regular deliverables" },
              { title: "Security First", description: "Built-in security practices and compliance with industry standards" },
              { title: "Scalable Architecture", description: "Software designed to grow with your business needs" },
              { title: "Local Calgary Team", description: "In-person collaboration and ongoing technical support" },
              { title: "Long-term Partnership", description: "Maintenance, updates, and enhancements as your needs evolve" }
            ].map(({ title, description }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300">
                <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
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
            Explore complementary services for your technology needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Mobile & Web Apps", href: "/services/app-development" },
              { label: "AI & Automation", href: "/services/ai-automation" },
              { label: "IT Consulting", href: "/services/it-consulting" }
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300"
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
          <div className="p-10 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Build Your Custom Solution?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your software requirements. Contact us today for a free consultation 
                with our Calgary development team.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
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
        lead="Common questions about our custom software development services."
        accentColor="indigo"
      />
    </main>
  );
};

export default CustomSoftware;
