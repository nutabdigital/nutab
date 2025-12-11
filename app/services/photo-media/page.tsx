import React from "react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Camera, Video, Film, ArrowRight, Sparkles, Image, Aperture, CheckCircle2, ChevronDown, Users, Clapperboard, Play } from "lucide-react";
import Link from "next/link";
import FAQSection from "../../components/FAQSection/FAQSection";
import PricingSection, { PricingPackage } from "../../components/PricingSection/PricingSection";

export const generateMetadata = (): import("next").Metadata => ({
  title: "Photography & Media Production Calgary | NuTab Digital",
  description:
    "Calgary's professional photography and media production team. Commercial photography, video production, event coverage, and photo editing for Alberta businesses. Book your session today.",
  keywords: ["photography Calgary", "video production Calgary", "commercial photography Alberta", "event photography Calgary", "media production Calgary", "product photography Alberta"],
  alternates: {
    canonical: "https://nutab.ca/services/photo-media",
  },
  openGraph: {
    title: "Photography & Media Production Calgary | NuTab Digital",
    description:
      "Calgary's professional photography and media production team. Commercial photography, video production, event coverage, and photo editing for Alberta businesses.",
    url: "https://nutab.ca/services/photo-media",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-photo-media.webp",
        width: 1200,
        height: 800,
        alt: "Photography & Media Production Services in Calgary, Alberta",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography & Media Production Calgary | NuTab Digital",
    description:
      "Calgary's professional photography and media production team. Commercial photography, video production, and event coverage.",
    images: ["https://nutab.ca/photos/og-photo-media.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
});

const faqs = [
  {
    question: "What types of photography do you offer?",
    answer: "We offer commercial product photography, corporate headshots, event coverage, real estate photography, and lifestyle shoots for businesses of all sizes."
  },
  {
    question: "Do you provide video production services?",
    answer: "Yes! We produce promotional videos, corporate content, social media videos, interviews, and event coverage with professional-grade equipment."
  },
  {
    question: "Can you edit existing photos or videos?",
    answer: "Absolutely. We provide professional photo retouching, color correction, video editing, and post-production services."
  },
  {
    question: "How long does a typical shoot take?",
    answer: "Most shoots range from 2-4 hours depending on scope. We'll provide a detailed timeline during your consultation."
  },
  {
    question: "Do you offer on-location shoots in Calgary?",
    answer: "Yes, we travel throughout Calgary and Alberta for on-location photography and video production. Studio sessions are also available."
  },
  {
    question: "What equipment do you use?",
    answer: "We use professional-grade cameras, lighting, and audio equipment. Our team stays current with the latest technology to deliver stunning results."
  },
  {
    question: "How quickly will I receive my photos or videos?",
    answer: "Standard turnaround is 1-2 weeks for photos and 2-4 weeks for video projects. Rush delivery is available upon request."
  },
  {
    question: "Can you help with creative direction?",
    answer: "Yes! We provide creative consultation, mood boards, location scouting, and art direction to bring your vision to life."
  },
  {
    question: "Do you offer drone photography and videography?",
    answer: "Yes, we offer licensed drone services for aerial photography and videography, perfect for real estate, events, and promotional content."
  },
  {
    question: "What file formats do you deliver?",
    answer: "We deliver high-resolution images in JPEG and RAW formats. Videos are provided in MP4, MOV, or other formats based on your needs."
  },
  {
    question: "Do you offer photography services in Calgary?",
    answer: "Yes! NuTab Digital is a Calgary-based photography and media production team serving businesses across Alberta. We offer on-location and studio services."
  },
  {
    question: "Can Calgary businesses book same-day shoots?",
    answer: "We accommodate urgent requests when possible. Contact us to check availability for same-day or next-day photography services in Calgary."
  },
  {
    question: "Is your media production team based in Calgary?",
    answer: "Yes, our team is based in Calgary and travels throughout Alberta. We know the best locations and can handle any local production needs."
  }
];

const mediaPackages: PricingPackage[] = [
  {
    id: "basic-shoot",
    title: "Basic Shoot",
    subtitle: "Essential photography package",
    priceNumber: 600,
    priceDisplay: "$600",
    features: [
      "2-hour photo session",
      "Up to 20 edited images",
      "Basic retouching",
      "Digital delivery",
      "Commercial usage rights"
    ]
  },
  {
    id: "media-plus",
    title: "Media Plus",
    subtitle: "Photo + video content bundle",
    badge: "Popular",
    priceNumber: 1200,
    priceDisplay: "$1,200",
    features: [
      "Half-day shoot (4 hours)",
      "Up to 50 edited images",
      "1-2 minute promo video",
      "Advanced retouching",
      "Social media edits",
      "1 round of revisions"
    ],
    suffix: "Includes Basic features"
  },
  {
    id: "full-production",
    title: "Full Production",
    subtitle: "Complete media production",
    priceNumber: 2400,
    priceDisplay: "$2,400",
    features: [
      "Full-day shoot (8 hours)",
      "Unlimited edited images",
      "3-5 minute video content",
      "Drone/aerial coverage",
      "Motion graphics",
      "Priority turnaround",
      "2 rounds of revisions"
    ],
    suffix: "Includes Media Plus"
  }
];

const pricingLdJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital Photography & Media Pricing",
  description: "Basic Shoot, Media Plus, and Full Production packages (25% discount applied).",
  itemListElement: mediaPackages.map((p, i) => {
    const discounted = Math.round(p.priceNumber * 0.75);
    return {
      "@type": "Offer",
      position: i + 1,
      name: p.title,
      description: `${p.subtitle}. ${p.features.join(", ")}`,
      price: discounted,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://nutab.ca/services/photo-media#${p.id}`,
      seller: { "@id": "https://nutab.ca/#organization" },
      itemOffered: {
        "@type": "Service",
        name: p.title,
        serviceType: "Photography & Media Production",
        provider: { "@id": "https://nutab.ca/#organization" },
      },
    };
  }),
};

const PhotoMedia: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="relative">
      <Background />
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Photography & Media" }
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
              { "@type": "ListItem", position: 3, name: "Photography & Media", item: "https://nutab.ca/services/photo-media" }
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
            "@id": "https://nutab.ca/services/photo-media#service",
            name: "Photography & Media Production",
            description: "Professional photography and video production services for businesses, including commercial shoots, event coverage, and post-production editing.",
            serviceType: "Photography & Media Production",
            url: "https://nutab.ca/services/photo-media",
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
              serviceUrl: "https://nutab.ca/services/photo-media"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/20 dark:border-rose-500/30 mb-8">
            <Camera className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-medium text-rose-600 dark:text-rose-400">Calgary Media Production</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Stunning Visual</span>
            <br />
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              Storytelling
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Capture your brand&apos;s essence with professional photography and video production. Our Calgary-based 
            creative team delivers commercial shoots, event coverage, and polished content that connects with 
            your audience and elevates your brand.
          </p>
          
          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Camera, label: "Commercial Photography", color: "text-rose-500" },
              { icon: Video, label: "Video Production", color: "text-pink-500" },
              { icon: Film, label: "Post-Production", color: "text-fuchsia-500" },
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105"
            >
              Book Your Session
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-300"
            >
              Our Services
              <ChevronDown className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Visual Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Invest in <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Professional Media?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              High-quality visuals are essential for building trust, engaging your audience, 
              and standing out in a crowded marketplace.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Brand Credibility",
                description: "Professional imagery builds trust and positions your business as an industry leader worth investing in.",
                gradient: "from-rose-500 to-pink-500"
              },
              {
                icon: Sparkles,
                title: "Higher Engagement",
                description: "Visual content gets 2-3x more engagement than text alone. Stand out and capture attention.",
                gradient: "from-pink-500 to-fuchsia-500"
              },
              {
                icon: Play,
                title: "Increased Conversions",
                description: "Products with professional photos convert up to 30% better. Show your offerings at their best.",
                gradient: "from-fuchsia-500 to-purple-500"
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
              Our Media Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              End-to-end creative services to bring your visual content to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Commercial Photography",
                description: "Product shots, lifestyle imagery, corporate headshots, and brand photography that showcases your business.",
                icon: Camera
              },
              {
                title: "Video Production",
                description: "Promotional videos, corporate content, social media clips, and interviews with professional-grade quality.",
                icon: Video
              },
              {
                title: "Event Coverage",
                description: "Capture conferences, launches, and corporate events with comprehensive photo and video documentation.",
                icon: Users
              },
              {
                title: "Post-Production & Editing",
                description: "Professional retouching, color grading, video editing, and motion graphics that polish your content.",
                icon: Film
              },
              {
                title: "Drone & Aerial Media",
                description: "Licensed drone photography and videography for real estate, events, and cinematic promotional content.",
                icon: Aperture
              }
            ].map(({ title, description, icon: Icon }) => (
              <div 
                key={title}
                className="group flex gap-5 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:shadow-rose-500/5 dark:hover:shadow-rose-500/10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-rose-100 dark:bg-rose-900/30 group-hover:bg-rose-200 dark:group-hover:bg-rose-900/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-rose-600 dark:text-rose-400" />
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
              Benefits of Professional Media
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              High-quality visuals deliver lasting value for your brand and marketing efforts.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Sparkles, title: "Premium Quality", description: "Professional-grade results" },
              { icon: Image, title: "Brand Consistency", description: "Cohesive visual identity" },
              { icon: Users, title: "Audience Trust", description: "Build credibility quickly" },
              { icon: Clapperboard, title: "Versatile Assets", description: "Content for all channels" },
              { icon: Play, title: "Higher ROI", description: "Visuals that convert" }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center group">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-rose-600 dark:text-rose-400" />
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
              We create stunning visual content for businesses across diverse sectors.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["E-Commerce", "Real Estate", "Hospitality", "Healthcare", "Professional Services", "Events & Entertainment", "Food & Beverage", "Fashion & Retail"].map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-300 cursor-default"
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
              From concept to delivery, we ensure a seamless experience and exceptional results.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 transform -translate-y-1/2 z-0" />
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Consultation", description: "Discuss your vision, goals, and creative direction" },
                { step: "02", title: "Pre-Production", description: "Plan locations, shot lists, and logistics" },
                { step: "03", title: "Shoot Day", description: "Execute the creative vision with professional equipment" },
                { step: "04", title: "Post-Production", description: "Edit, retouch, and polish all content" },
                { step: "05", title: "Delivery", description: "Receive your final assets in multiple formats" }
              ].map(({ step, title, description }) => (
                <div key={step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-600 to-pink-600 text-white font-bold text-lg mb-4 shadow-lg shadow-rose-500/25">
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
              Partner with Calgary&apos;s creative media team for visual content that makes an impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Professional Equipment", description: "Industry-leading cameras, lighting, and audio for stunning results" },
              { title: "Creative Vision", description: "Art direction and creative consultation to bring your ideas to life" },
              { title: "Fast Turnaround", description: "Quick delivery without compromising on quality or attention to detail" },
              { title: "Flexible Packages", description: "Scalable services from single shoots to ongoing content partnerships" },
              { title: "Local Calgary Team", description: "On-location shoots throughout Calgary and Alberta" },
              { title: "Full-Service Production", description: "Everything from planning to final delivery under one roof" }
            ].map(({ title, description }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300">
                <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
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
            Explore more ways we can help elevate your brand.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Graphic & Brand Design", href: "/services/brand-design" },
              { label: "SEO & Digital Marketing", href: "/services/seo-marketing" },
              { label: "E-Commerce Development", href: "/services/ecommerce" }
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all duration-300"
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
        packages={mediaPackages}
        title="Photography & Media Pricing"
        subtitle="Flexible packages for any project. Custom quotes available for larger productions."
        accentColor="rose"
        ldJson={pricingLdJson}
      />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-600 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Capture Your Story?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s create stunning visual content that elevates your brand. 
                Contact us today to book your session with our Calgary creative team.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-rose-600 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} lead="Common questions about our photography and media production services." accentColor="rose" />
    </main>
  );
};

export default PhotoMedia;
