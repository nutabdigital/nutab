import React from "react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Code2, Server, Database, ArrowRight, Settings, Shield, Cloud, CheckCircle2, ChevronDown, Smartphone, MonitorSmartphone, Layers } from "lucide-react";
import Link from "next/link";
import FAQSection from "../../components/FAQSection/FAQSection";
import PricingSection, { PricingPackage } from "../../components/PricingSection/PricingSection";

export const generateMetadata = (): import("next").Metadata => ({
  title: "Custom App & Software Development Calgary | Mobile, Web & Enterprise Solutions | NuTab Digital",
  description:
    "Full-service custom app and software development in Calgary. NuTab Digital builds iOS, Android, web apps, and enterprise software solutions tailored to your business needs.",
  keywords: ["custom software Calgary", "app development Calgary", "mobile app developers Calgary", "enterprise software Alberta", "iOS app Calgary", "Android app Calgary", "software development Alberta"],
  alternates: {
    canonical: "https://nutab.ca/services/app-development",
  },
  openGraph: {
    title: "Custom App & Software Development Calgary | Mobile, Web & Enterprise Solutions | NuTab Digital",
    description:
      "Full-service custom app and software development in Calgary. Build scalable mobile apps, web applications, and enterprise software solutions.",
    url: "https://nutab.ca/services/app-development",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-custom-software.webp",
        width: 1200,
        height: 800,
        alt: "Custom App & Software Development Services in Calgary, Alberta",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom App & Software Development Calgary | Mobile, Web & Enterprise Solutions | NuTab Digital",
    description: "Full-service custom app and software development delivering scalable, secure business solutions.",
    images: ["https://nutab.ca/photos/og-custom-software.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
});

const faqs = [
  {
    question: "What is custom app and software development?",
    answer: "Custom app and software development involves creating tailored mobile applications (iOS/Android), web apps, and enterprise software designed specifically for your business needs, rather than using off-the-shelf solutions."
  },
  {
    question: "How long does a custom app or software project take?",
    answer: "Timelines vary based on complexity. Simple apps may take 4–8 weeks, while enterprise systems can take several months. We provide detailed timelines after discovery."
  },
  {
    question: "What technologies do you use?",
    answer: "We work with modern technologies including React Native, Flutter, Swift, Kotlin, React, Next.js, Node.js, Python, PostgreSQL, MongoDB, and cloud platforms like AWS and Azure."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer maintenance and support packages to keep your software updated, secure, and performing optimally with regular updates and monitoring."
  },
  {
    question: "Can you build apps for both iOS and Android?",
    answer: "Yes! We specialize in cross-platform development, delivering apps that work seamlessly on both iOS and Android devices using frameworks like React Native and Flutter."
  },
  {
    question: "Can you integrate with existing systems?",
    answer: "Absolutely! We specialize in creating integrations with existing software, APIs, and third-party services to create unified workflows."
  },
  {
    question: "How do you ensure software security?",
    answer: "Security is built into our development process with encryption, authentication, regular audits, and compliance with industry standards like GDPR and HIPAA."
  },
  {
    question: "Do you offer custom software development in Calgary?",
    answer: "Yes! NuTab Digital is a Calgary-based development company serving businesses across Alberta. We provide custom applications, mobile apps, APIs, and enterprise solutions."
  },
  {
    question: "Is your development team based in Calgary?",
    answer: "Yes, our Calgary-based development team provides in-person consultations and ongoing support for all software and app projects."
  }
];

const devPackages: PricingPackage[] = [
  {
    id: "mvp-app",
    title: "MVP App",
    subtitle: "Launch your idea quickly",
    priceNumber: 6000,
    priceDisplay: "$6,000",
    features: [
      "Single platform (iOS, Android, or Web)",
      "Core feature set (4–6 screens)",
      "User authentication & profiles",
      "Basic API integration",
      "App store submission support",
      "30 days post-launch support"
    ]
  },
  {
    id: "growth-platform",
    title: "Growth Platform",
    subtitle: "Scale with advanced features",
    badge: "Popular",
    priceNumber: 14000,
    priceDisplay: "$14000",
    features: [
      "Cross-platform (iOS + Android or Web)",
      "Advanced features (10–15 screens)",
      "Role-based access & permissions",
      "Third-party integrations",
      "Analytics & monitoring setup",
      "CI/CD pipeline & automated testing",
      "90 days support & updates"
    ],
    suffix: "Includes MVP features"
  },
  {
    id: "enterprise-solution",
    title: "Enterprise Solution",
    subtitle: "Custom architecture for complex needs",
    priceDisplay: "Please Contact",
    features: [
      "Multi-platform ecosystem",
      "Complex business logic & workflows",
      "Advanced security & compliance",
      "Microservices architecture",
      "Data warehousing & analytics",
      "Load balancing & auto-scaling",
      "DevOps & infrastructure automation",
      "6 months priority support"
    ],
    suffix: "Includes all Growth features"
  }
];

const pricingLdJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital App & Software Development Pricing",
  description: "MVP App, Growth Platform, and Enterprise Solution packages (25% discount applied).",
  itemListElement: devPackages.map((p, i) => {
    const offer: any = {
      "@type": "Offer",
      position: i + 1,
      name: p.title,
      description: `${p.subtitle}. ${p.features.join(", ")}`,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://nutab.ca/services/app-development#${p.id}`,
      seller: { "@id": "https://nutab.ca/#organization" },
      itemOffered: {
        "@type": "Service",
        name: p.title,
        serviceType: "Custom Software & App Development",
        provider: { "@id": "https://nutab.ca/#organization" },
      },
    };

    if (typeof p.priceNumber === "number") {
      offer.price = p.priceNumber;
    }

    return offer;
  }),
};

const AppSoftwareDevelopment: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="relative dark">
      <Background />

      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Custom App & Software Development" }
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
              { "@type": "ListItem", position: 3, name: "Custom App & Software Development", item: "https://nutab.ca/services/app-development" }
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
            name: "Custom App & Software Development",
            description: "Custom software and mobile app development services including iOS, Android, web applications, and enterprise solutions.",
            serviceType: "Software & App Development",
            url: "https://nutab.ca/services/app-development",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 dark:border-indigo-500/30 mb-8">
            <Code2 className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Calgary Software & App Experts</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Custom App & Software</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
              Built for Your Business
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform your business with custom mobile apps, web applications, and enterprise software.
            Our Calgary-based development team creates scalable, secure solutions that solve your unique
            challenges and drive growth.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Smartphone, label: "Mobile Apps", color: "text-indigo-500" },
              { icon: Server, label: "Enterprise Software", color: "text-purple-500" },
              { icon: Database, label: "Data Systems", color: "text-violet-500" },
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

      {/* Why Custom Development Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Custom Development?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Off-the-shelf solutions can&apos;t address every business need. Custom software and apps are built
              around your unique processes, brand, and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MonitorSmartphone,
                title: "Cross-Platform Reach",
                description: "Reach users on iOS, Android, and web with unified experiences. Maximize your audience while minimizing development costs.",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: Layers,
                title: "Scalable Architecture",
                description: "Built to scale with your business, handling increased load and new features as you expand without rebuilding.",
                gradient: "from-purple-500 to-violet-500"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Proprietary tools with built-in security, encrypted data storage, and compliance-ready architecture.",
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
              End-to-end development services from concept to launch and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "iOS & Android Apps",
                description: "Native and cross-platform mobile apps with intuitive interfaces, offline support, and seamless performance.",
                icon: Smartphone
              },
              {
                title: "Web Applications",
                description: "Progressive web apps and single-page applications with responsive design and modern frameworks.",
                icon: MonitorSmartphone
              },
              {
                title: "Enterprise Applications",
                description: "Large-scale systems that power complex business operations with reliability, security, and scalability.",
                icon: Server
              },
              {
                title: "API Development",
                description: "Robust APIs that connect your systems, enable integrations, and power modern applications.",
                icon: Code2
              },
              {
                title: "Database Solutions",
                description: "Custom database design, optimization, and data warehousing for efficient management and analytics.",
                icon: Database
              },
              {
                title: "Cloud & DevOps",
                description: "Scalable cloud infrastructure on AWS, Azure, or GCP with CI/CD pipelines and automated deployments.",
                icon: Cloud
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
        packages={devPackages}
        title="Development Pricing"
        subtitle="Flexible packages to match your project scope. All packages include dedicated project management, documentation, and source code ownership."
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
              Modern, battle-tested technologies for reliable software and mobile apps.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React Native", "Flutter", "Swift / Kotlin", "React / Next.js", "Node.js", "Python", "PostgreSQL", "AWS / Azure", "Docker", "TypeScript", "GraphQL", "MongoDB"].map((tech) => (
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
                { step: "01", title: "Discovery", description: "Define requirements, goals, and users" },
                { step: "02", title: "Design", description: "UX wireframes and visual design" },
                { step: "03", title: "Development", description: "Agile sprints with regular demos" },
                { step: "04", title: "Testing", description: "Comprehensive QA and security" },
                { step: "05", title: "Launch", description: "Deployment and ongoing support" }
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
              Partner with Calgary&apos;s trusted development team for solutions that work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Full-Stack Expertise", description: "End-to-end development from mobile apps to backend infrastructure" },
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
              { label: "Web Design & Development", href: "/services/web-design" },
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
                Let&apos;s discuss your app or software requirements. Contact us today for a free consultation
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
        lead="Common questions about our custom app and software development services."
        accentColor="indigo"
      />
    </main>
  );
};

export default AppSoftwareDevelopment;
