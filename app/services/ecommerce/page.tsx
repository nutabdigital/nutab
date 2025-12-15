import React from "react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { ShoppingCart, CreditCard, TrendingUp, ArrowRight, Package, BarChart3, CheckCircle2, ChevronDown, Store, Globe, Zap } from "lucide-react";
import Link from "next/link";
import FAQSection from "../../components/FAQSection/FAQSection";
import PricingSection, { PricingPackage } from "../../components/PricingSection/PricingSection";

export const generateMetadata = (): import("next").Metadata => ({
  title: "Ecommerce Development Calgary | Online Store Solutions | NuTab Digital",
  description:
    "Ecommerce development in Calgary. NuTab Digital builds high-converting online stores with Shopify, WooCommerce, and custom solutions. Start selling online today.",
  keywords: ["ecommerce Calgary", "online store Calgary", "Shopify Calgary", "WooCommerce Calgary", "ecommerce development Alberta", "online shopping website Calgary"],
  alternates: {
    canonical: "https://nutab.ca/services/ecommerce",
  },
  openGraph: {
    title: "Ecommerce Development Calgary | Online Store Solutions | NuTab Digital",
    description:
      "Ecommerce development in Calgary. NuTab Digital builds high-converting online stores with Shopify, WooCommerce, and custom solutions.",
    url: "https://nutab.ca/services/ecommerce",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-ecommerce.webp",
        width: 1200,
        height: 800,
        alt: "Ecommerce Development Services in Calgary, Alberta",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Development Calgary | Online Store Solutions | NuTab Digital",
    description: "Ecommerce development in Calgary building high-converting online stores.",
    images: ["https://nutab.ca/photos/og-ecommerce.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
});

const faqs = [
  {
    question: "What ecommerce platforms do you work with?",
    answer: "We specialize in Shopify, WooCommerce, and custom ecommerce solutions built on modern frameworks like Next.js with headless commerce backends."
  },
  {
    question: "How long does it take to build an online store?",
    answer: "Most ecommerce projects take 4–10 weeks depending on complexity. Simple stores can launch faster, while feature-rich platforms need more development time."
  },
  {
    question: "Can you migrate my existing store?",
    answer: "Yes, we handle migrations from any platform, preserving your products, customers, and SEO rankings while upgrading to a better solution."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Absolutely! We offer maintenance packages that include updates, security patches, performance monitoring, and feature enhancements."
  },
  {
    question: "What payment gateways do you support?",
    answer: "We integrate all major payment gateways including Stripe, PayPal, Square, and Canadian-specific options like Moneris and Interac."
  },
  {
    question: "Can you help with inventory management?",
    answer: "Yes, we set up inventory systems, integrate with suppliers, and implement multi-location stock management as needed."
  },
  {
    question: "Do you offer ecommerce services in Calgary?",
    answer: "Yes! NuTab Digital is a Calgary-based ecommerce development agency. We build online stores for businesses across Alberta and beyond."
  },
  {
    question: "Can Calgary businesses benefit from ecommerce?",
    answer: "Absolutely. Ecommerce enables Calgary businesses to reach customers locally and globally, expanding revenue potential significantly."
  },
  {
    question: "Is your development team based in Calgary?",
    answer: "Yes, our Calgary-based team provides in-person consultations and hands-on support for all ecommerce projects."
  }
];

const ecommercePackages: PricingPackage[] = [
  {
    id: "starter-store",
    title: "Starter Store",
    subtitle: "Essential online store for new sellers",
    priceNumber: 4000,
    priceDisplay: "$4,000",
    features: [
      "Up to 50 products",
      "Shopify or WooCommerce setup",
      "Mobile-responsive design",
      "Payment gateway integration",
      "Basic shipping setup",
      "30 days support"
    ]
  },
  {
    id: "growth-store",
    title: "Growth Store",
    subtitle: "Full-featured store for scaling businesses",
    badge: "Popular",
    priceNumber: 7500,
    priceDisplay: "$7,500",
    features: [
      "Up to 500 products",
      "Custom theme design",
      "Advanced payment options",
      "Inventory management",
      "Email marketing integration",
      "SEO optimization",
      "60 days support"
    ],
    suffix: "Includes Starter features"
  },
  {
    id: "scale-commerce",
    title: "Scale Commerce",
    subtitle: "Enterprise solution for high-volume sales",
    priceDisplay: "Request a quote",
    features: [
      "Unlimited products",
      "Headless commerce architecture",
      "Multi-currency support",
      "Advanced analytics & reporting",
      "ERP/CRM integrations",
      "Performance optimization",
      "Priority support (90 days)"
    ],
    suffix: "Includes Growth features"
  }
];

const pricingLdJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital Ecommerce Pricing",
  description: "Starter Store, Growth Store, and Scale Commerce packages (25% discount applied).",
  itemListElement: ecommercePackages.map((p, i) => {
    const offer: any = {
      "@type": "Offer",
      position: i + 1,
      name: p.title,
      description: `${p.subtitle}. ${p.features.join(", ")}`,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://nutab.ca/services/ecommerce#${p.id}`,
      seller: { "@id": "https://nutab.ca/#organization" },
      itemOffered: {
        "@type": "Service",
        name: p.title,
        serviceType: "Ecommerce Development",
        provider: { "@id": "https://nutab.ca/#organization" },
      },
    };

    if (typeof p.priceNumber === "number") {
      offer.price = p.priceNumber;
    }

    return offer;
  }),
};

const Ecommerce: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="relative dark">
      <Background />
      
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Ecommerce" }
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
              { "@type": "ListItem", position: 3, name: "Ecommerce", item: "https://nutab.ca/services/ecommerce" }
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
            "@id": "https://nutab.ca/services/ecommerce#service",
            name: "Ecommerce Development",
            description: "Ecommerce development services including online store setup, payment integration, and scaling solutions.",
            serviceType: "Ecommerce Development",
            url: "https://nutab.ca/services/ecommerce",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30 mb-8">
            <ShoppingCart className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Calgary Ecommerce Experts</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Launch Your</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Online Store
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Build a high-converting online store that drives sales and delights customers. Our Calgary-based 
            ecommerce team creates beautiful, fast storefronts on platforms you can trust.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Store, label: "Online Stores", color: "text-emerald-500" },
              { icon: CreditCard, label: "Payments", color: "text-teal-500" },
              { icon: TrendingUp, label: "Growth Tools", color: "text-cyan-500" },
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
            >
              Start Selling
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300"
            >
              View Pricing
              <ChevronDown className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Ecommerce Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Go <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Ecommerce?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Reach more customers, sell 24/7, and scale your business without geographic limits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Sell Everywhere",
                description: "Reach customers locally in Calgary, across Canada, or around the world with a professional online presence.",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: Zap,
                title: "Always Open",
                description: "Your store works 24/7, capturing sales while you sleep and serving customers in any timezone.",
                gradient: "from-teal-500 to-cyan-500"
              },
              {
                icon: TrendingUp,
                title: "Scale Easily",
                description: "Add products, expand to new markets, and grow revenue without the overhead of physical locations.",
                gradient: "from-cyan-500 to-emerald-500"
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
              Our Ecommerce Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to launch, grow, and scale your online store.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Store Setup",
                description: "Complete online store setup on Shopify, WooCommerce, or custom platforms with professional design.",
                icon: Store
              },
              {
                title: "Payment Integration",
                description: "Secure payment processing with Stripe, PayPal, Square, and Canadian gateways like Moneris.",
                icon: CreditCard
              },
              {
                title: "Product Management",
                description: "Inventory systems, variant management, and bulk product import/export capabilities.",
                icon: Package
              },
              {
                title: "Shipping & Fulfillment",
                description: "Automated shipping rates, label printing, and integration with carriers like Canada Post and UPS.",
                icon: ShoppingCart
              },
              {
                title: "Analytics & Reporting",
                description: "Sales dashboards, customer insights, and conversion tracking to optimize performance.",
                icon: BarChart3
              },
              {
                title: "Growth Marketing",
                description: "Email marketing, abandoned cart recovery, and promotional tools to boost sales.",
                icon: TrendingUp
              }
            ].map(({ title, description, icon: Icon }) => (
              <div 
                key={title}
                className="group flex gap-5 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:shadow-emerald-500/5 dark:hover:shadow-emerald-500/10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
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
        packages={ecommercePackages}
        title="Ecommerce Pricing"
        subtitle="Choose the package that fits your business. All packages include setup, training, and support."
        accentColor="emerald"
        ldJson={pricingLdJson}
      />

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Platforms We Work With
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Industry-leading ecommerce platforms for reliable online selling.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Shopify", "WooCommerce", "Shopify Plus", "BigCommerce", "Magento", "Custom Headless", "Next.js Commerce", "Medusa"].map((platform) => (
              <div
                key={platform}
                className="p-4 rounded-xl text-center font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300"
              >
                {platform}
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
              Our Launch Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A proven approach to get your store online and generating sales.
            </p>
          </div>
          
          <div className="relative dark">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transform -translate-y-1/2 z-0" />
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Discovery", description: "Define products and requirements" },
                { step: "02", title: "Design", description: "Create your store look and feel" },
                { step: "03", title: "Build", description: "Set up products and payments" },
                { step: "04", title: "Test", description: "Ensure everything works perfectly" },
                { step: "05", title: "Launch", description: "Go live and start selling" }
              ].map(({ step, title, description }) => (
                <div key={step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white font-bold text-lg mb-4 shadow-lg shadow-emerald-500/25">
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
              Partner with Calgary&apos;s ecommerce experts for stores that convert.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Conversion Focused", description: "Stores designed to turn visitors into customers with optimized UX" },
              { title: "Fast & Reliable", description: "High-performance stores that load quickly and never go down" },
              { title: "SEO Built-In", description: "Search-optimized product pages that rank in Google" },
              { title: "Mobile First", description: "Beautiful shopping experiences on any device" },
              { title: "Local Calgary Team", description: "In-person support and ongoing partnership" },
              { title: "Growth Ready", description: "Scalable solutions that grow with your business" }
            ].map(({ title, description }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300">
                <CheckCircle2 className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" />
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
            Explore more ways to grow your online business.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "SEO & Digital Marketing", href: "/services/seo-marketing" },
              { label: "Photography & Media", href: "/services/photo-media" },
              { label: "Brand Design", href: "/services/brand-design" }
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300"
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
          <div className="p-10 rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Start Selling Online?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s build your online store. Contact us today for a free consultation 
                with our Calgary ecommerce team.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-emerald-600 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
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
        lead="Common questions about our ecommerce development services."
        accentColor="emerald"
      />
    </main>
  );
};

export default Ecommerce;
