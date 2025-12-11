import React from "react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { MonitorSmartphone, Layers, ShieldCheck, ArrowRight, Sparkles, Rocket, Users, Zap, Code2, CheckCircle2, ChevronDown, Smartphone, Globe } from "lucide-react";
import Link from "next/link";
import FAQSection from "../../components/FAQSection/FAQSection";
import PricingSection, { PricingPackage } from "../../components/PricingSection/PricingSection";

export const generateMetadata = (): import("next").Metadata => ({
  title: "Mobile & Web App Development Calgary | iOS, Android & Web Apps | NuTab Digital",
  description:
    "Calgary's top-rated mobile and web app development company. NuTab Digital builds custom iOS, Android, and web applications for Alberta businesses. Cross-platform expertise. Free quote.",
  keywords: ["app development Calgary", "mobile app developers Calgary", "web app development Alberta", "iOS app Calgary", "Android app Calgary", "cross-platform apps Alberta"],
  alternates: {
    canonical: "https://nutab.ca/services/app-development",
  },
  openGraph: {
    title: "Mobile & Web App Development Calgary | iOS, Android & Web Apps | NuTab Digital",
    description:
      "Calgary's top-rated mobile and web app development company. NuTab Digital builds custom iOS, Android, and web applications for Alberta businesses.",
    url: "https://nutab.ca/services/app-development",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-app-development.webp",
        width: 1200,
        height: 800,
        alt: "Mobile & Web App Development Services in Calgary, Alberta",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile & Web App Development Calgary | iOS, Android & Web Apps | NuTab Digital",
    description:
      "Calgary's top-rated mobile and web app development company. Build custom apps for iOS, Android, and the web.",
    images: ["https://nutab.ca/photos/og-app-development.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
});

const faqs = [
  {
    question: "What is mobile and web app development?",
    answer: "Mobile and web app development involves creating applications for mobile devices (iOS and Android) and web browsers with seamless user experiences."
  },
  {
    question: "How long does it take to develop an app?",
    answer: "Timelines vary by complexity — simple apps can be completed in weeks, complex projects may take several months."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer maintenance, monitoring, and iterative improvements post-launch."
  },
  {
    question: "How much does it cost to develop a mobile or web app?",
    answer: "App development costs depend on features, platforms, and complexity. We provide transparent quotes and scalable solutions for every budget."
  },
  {
    question: "Can you build apps for both iOS and Android?",
    answer: "Yes, we specialize in cross-platform development, delivering apps that work seamlessly on both iOS and Android devices."
  },
  {
    question: "Will my app be optimized for SEO and performance?",
    answer: "Absolutely. We follow best practices for SEO, speed, and accessibility to ensure your app ranks well and delivers a great user experience."
  },
  {
    question: "Do you help with app store submission and launch?",
    answer: "Yes, we guide you through app store submission, launch, and post-launch support to maximize your app's success."
  },
  {
    question: "Is my app idea safe and confidential?",
    answer: "We treat every project with strict confidentiality and can sign NDAs to protect your app idea and business information."
  },
  {
    question: "Do you offer app development services in Calgary?",
    answer: "Yes! NuTab Digital is a Calgary-based app development company serving businesses across Alberta. We build iOS, Android, and web applications for local clients."
  },
  {
    question: "Can I meet with your Calgary app developers in person?",
    answer: "Absolutely. Our Calgary team is available for in-person consultations, demos, and ongoing project collaboration with local businesses."
  },
  {
    question: "Do you build apps for Calgary startups?",
    answer: "Yes, we specialize in helping Calgary startups and small businesses bring their app ideas to life with scalable, user-friendly solutions."
  }
];

const appDevPackages: PricingPackage[] = [
  {
    id: "app-prototype",
    title: "Prototype App",
    subtitle: "MVP to validate your concept",
    priceNumber: 6000,
    priceDisplay: "$6,000",
    features: [
      "Core feature set (2–4 screens)",
      "Responsive UI & basic navigation",
      "User authentication",
      "Basic API integration",
      "Error handling & logging"
    ]
  },
  {
    id: "app-growth",
    title: "Growth App",
    subtitle: "Expand features & scalability",
    badge: "Popular",
    priceNumber: 12000,
    priceDisplay: "$12,000",
    features: [
      "8–12 screens / modules",
      "Role-based access control",
      "CI/CD setup & automated tests",
      "Performance profiling",
      "Analytics instrumentation"
    ],
    suffix: "Includes Prototype features"
  },
  {
    id: "app-platform",
    title: "Platform Build",
    subtitle: "Custom architecture & integrations",
    priceNumber: 24000,
    priceDisplay: "$24,000",
    features: [
      "Complex domain modeling",
      "Advanced caching & queues",
      "Third-party integrations",
      "Security & compliance review",
      "Load & performance testing",
      "Observability dashboards"
    ],
    suffix: "Includes Growth features"
  }
];

const pricingLdJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital App Development Pricing",
  description: "Prototype, Growth and Platform app development packages (25% discount applied).",
  itemListElement: appDevPackages.map((p, i) => {
    const discounted = Math.round(p.priceNumber * 0.75);
    return {
      "@type": "Offer",
      position: i + 1,
      name: p.title,
      description: `${p.subtitle}. ${p.features.join(", ")}`,
      price: discounted,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://nutab.ca/services/app-development#${p.id}`,
      seller: { "@id": "https://nutab.ca/#organization" },
      itemOffered: {
        "@type": "Service",
        name: p.title,
        serviceType: "Application Development",
        provider: { "@id": "https://nutab.ca/#organization" },
      },
    };
  }),
};

const AppDevelopment: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="relative">
      <Background />
      
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Mobile & Web App Development" }
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
              { "@type": "ListItem", position: 3, name: "Mobile & Web App Development", item: "https://nutab.ca/services/app-development" }
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
            "@id": "https://nutab.ca/services/app-development#service",
            name: "Mobile & Web App Development",
            description: "Build performant, scalable apps for iOS, Android, and the web with Calgary's experienced development team.",
            serviceType: "App Development",
            url: "https://nutab.ca/services/app-development",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 dark:border-blue-500/30 mb-8">
            <MonitorSmartphone className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Calgary App Developers</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Build Powerful</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Mobile & Web Apps
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Turn your ideas into reality with high-performance iOS, Android, and web applications. 
            Our Calgary-based team delivers scalable, user-centric solutions that drive engagement 
            and business growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Smartphone, label: "Cross-Platform", color: "text-blue-500" },
              { icon: Layers, label: "Scalable Architecture", color: "text-cyan-500" },
              { icon: ShieldCheck, label: "Secure by Design", color: "text-teal-500" },
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

      {/* Why App Development Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Build <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Custom Apps?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Custom apps give you complete control over features, branding, and user experience 
              while positioning your business for long-term growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MonitorSmartphone,
                title: "Cross-Platform Reach",
                description: "Reach users on iOS, Android, and the web with a single codebase. Maximize your audience with less development overhead.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Rocket,
                title: "Performance First",
                description: "Fast, responsive apps that load quickly and handle complex operations without compromising user experience.",
                gradient: "from-cyan-500 to-teal-500"
              },
              {
                icon: ShieldCheck,
                title: "Enterprise Security",
                description: "Built-in security measures, encrypted data storage, and compliance-ready architecture for sensitive applications.",
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
              Our App Development Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              End-to-end development services from concept to launch and beyond.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "iOS App Development",
                description: "Native and cross-platform iOS apps optimized for iPhone and iPad with intuitive interfaces and App Store readiness.",
                icon: Smartphone
              },
              {
                title: "Android App Development",
                description: "High-performance Android apps that work across devices, from smartphones to tablets and beyond.",
                icon: MonitorSmartphone
              },
              {
                title: "Progressive Web Apps",
                description: "Web applications that feel native, with offline support, push notifications, and fast loading times.",
                icon: Globe
              },
              {
                title: "Backend & API Development",
                description: "Scalable server infrastructure, RESTful APIs, and database design to power your applications.",
                icon: Code2
              },
              {
                title: "UI/UX Design",
                description: "User-centered design that balances aesthetics with functionality for intuitive, engaging experiences.",
                icon: Layers
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
        packages={appDevPackages}
        title="App Development Pricing"
        subtitle="Choose the package that matches your app's complexity. All packages include dedicated project management and documentation."
        accentColor="blue"
        ldJson={pricingLdJson}
      />

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Benefits of Custom Apps
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Investing in custom app development delivers lasting value and competitive advantages.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Users, title: "User Engagement", description: "Direct connection with your audience" },
              { icon: Zap, title: "Performance", description: "Fast, responsive experiences" },
              { icon: Rocket, title: "Scalability", description: "Grow without rebuilding" },
              { icon: ShieldCheck, title: "Security", description: "Enterprise-grade protection" },
              { icon: Sparkles, title: "Innovation", description: "Stand out from competitors" }
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
              We build apps for businesses across diverse sectors.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["Healthcare", "Finance", "E-Commerce", "Education", "Real Estate", "Logistics", "Entertainment", "SaaS"].map((industry) => (
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
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A structured approach that delivers quality apps on time and within budget.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transform -translate-y-1/2 z-0" />
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Discovery", description: "Define goals, users, and requirements" },
                { step: "02", title: "Design", description: "UX wireframes and visual design" },
                { step: "03", title: "Development", description: "Build, integrate, and iterate" },
                { step: "04", title: "Testing", description: "QA, performance, and security testing" },
                { step: "05", title: "Launch", description: "Deploy, monitor, and support" }
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
              Partner with Calgary&apos;s trusted app development team for results that matter.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Full-Stack Expertise", description: "End-to-end development from frontend to backend and infrastructure" },
              { title: "Agile Methodology", description: "Iterative development with regular updates and flexibility" },
              { title: "Quality Assurance", description: "Rigorous testing ensures reliable, bug-free applications" },
              { title: "Post-Launch Support", description: "Ongoing maintenance, updates, and performance optimization" },
              { title: "Local Calgary Team", description: "In-person consultations and collaboration with Alberta businesses" },
              { title: "Transparent Communication", description: "Regular progress updates and clear project milestones" }
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
              { label: "Custom Software Development", href: "/services/custom-software" },
              { label: "AI & Automation", href: "/services/ai-automation" },
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
                Ready to Build Your App?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s turn your idea into a powerful application. Contact us today for a free consultation 
                and discover how NuTab Digital can bring your vision to life.
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
        lead="Common questions about our mobile and web app development services."
        accentColor="blue"
      />
    </main>
  );
};

export default AppDevelopment;
