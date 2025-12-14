import React from "react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Brain, Zap, ShieldCheck, ArrowRight, Sparkles, Target, TrendingUp, Clock, DollarSign, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import FAQSection from "../../components/FAQSection/FAQSection";
import PricingSection, { PricingPackage } from "../../components/PricingSection/PricingSection";

export const generateMetadata = (): import("next").Metadata => ({
  title: "AI & Automation Solutions Calgary | Machine Learning & Workflow Automation | NuTab Digital",
  description:
    "Calgary's AI and automation experts. NuTab Digital helps Alberta businesses leverage artificial intelligence, machine learning, and workflow automation to reduce costs and improve efficiency. Free consultation.",
  keywords: ["AI solutions Calgary", "automation Calgary", "machine learning Alberta", "AI development Calgary", "workflow automation Calgary", "chatbot development Alberta"],
  alternates: {
    canonical: "https://nutab.ca/services/ai-automation",
  },
  openGraph: {
    title: "AI & Automation Solutions Calgary | Machine Learning & Workflow Automation | NuTab Digital",
    description:
      "Calgary's AI and automation experts. NuTab Digital helps Alberta businesses leverage artificial intelligence, machine learning, and workflow automation.",
    url: "https://nutab.ca/services/ai-automation",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-ai-automation.webp",
        width: 1200,
        height: 800,
        alt: "AI & Automation Solutions in Calgary, Alberta",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Automation Solutions Calgary | Machine Learning & Workflow Automation | NuTab Digital",
    description:
      "Calgary's AI and automation experts helping Alberta businesses leverage artificial intelligence and workflow automation.",
    images: ["https://nutab.ca/photos/og-ai-automation.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
});

const faqs = [
  {
    question: "What is AI & automation?",
    answer: "AI (Artificial Intelligence) uses computer systems to perform tasks that normally require human intelligence. Automation uses technology to perform tasks with minimal human intervention."
  },
  {
    question: "How can AI help my business?",
    answer: "AI can help you analyze data, automate decisions, improve customer service, and optimize operations for better results."
  },
  {
    question: "Is automation expensive?",
    answer: "Automation can reduce costs over time by saving labor and improving efficiency. We offer solutions for businesses of all sizes."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we provide ongoing support and optimization to ensure your AI and automation solutions continue to deliver value."
  },
  {
    question: "Can you integrate AI with my existing systems?",
    answer: "Absolutely! We specialize in integrating AI and automation tools with your current business software and workflows."
  },
  {
    question: "What are the main benefits of AI automation for businesses?",
    answer: "AI automation increases efficiency, reduces costs, improves accuracy, and enables smarter decision-making. It helps businesses stay competitive and scale operations easily."
  },
  {
    question: "Is AI automation secure for sensitive business data?",
    answer: "Yes, our AI automation solutions are designed with robust security protocols to protect your sensitive business data and ensure compliance with industry standards."
  },
  {
    question: "How do I get started with AI automation in my company?",
    answer: "Start by scheduling a consultation with our experts. We assess your needs, recommend the best AI automation strategies, and guide you through implementation."
  },
  {
    question: "Can small businesses benefit from AI automation?",
    answer: "Absolutely. AI automation is scalable and can help small businesses save time, reduce manual work, and improve customer service without large investments."
  },
  {
    question: "How long does it take to implement AI automation?",
    answer: "Implementation time varies based on project scope, but most businesses see results within weeks. We provide clear timelines and ongoing support throughout the process."
  },
  {
    question: "Do you offer AI automation services in Calgary?",
    answer: "Yes! NuTab Digital is based in Calgary and provides AI and automation solutions for Alberta businesses. We help local companies leverage AI to improve efficiency and reduce costs."
  },
  {
    question: "Can Calgary businesses benefit from AI automation?",
    answer: "Absolutely. We work with Calgary businesses of all sizes to implement AI chatbots, workflow automation, and machine learning solutions tailored to local market needs."
  },
  {
    question: "Is your AI team based in Calgary?",
    answer: "Yes, our Calgary-based team provides local support, in-person consultations, and ongoing collaboration for AI and automation projects."
  }
];

const aiPackages: PricingPackage[] = [
  {
    id: "ai-starter",
    title: "Automation Starter",
    subtitle: "Pilot one workflow with measurable ROI",
    priceNumber: 3000,
    priceDisplay: "$3,000",
    features: [
      "Process discovery workshop",
      "1 automated workflow (Zapier/Make/API)",
      "Basic data validation & logging",
      "Email/Slack notifications",
      "Handover + quickstart playbook",
    ],
  },
  {
    id: "ai-growth",
    title: "Automation Growth",
    subtitle: "Stack multiple automations across teams",
    badge: "Popular",
    priceNumber: 6000,
    priceDisplay: "$6,000",
    features: [
      "3–5 workflows across apps",
      "Human-in-the-loop approvals",
      "LLM prompts for drafting/emails",
      "Error handling & retries",
      "Observability dashboard",
    ],
    suffix: "Includes Starter features",
  },
  {
    id: "ai-scale",
    title: "Automation Scale",
    subtitle: "Custom agents, APIs, and governance",
    priceNumber: 12000,
    priceDisplay: "$12,000",
    features: [
      "Custom API/DB integrations",
      "RAG/embeddings for knowledge",
      "Fine-tuned prompts & evals",
      "Role-based access & audit",
      "Runbooks + enablement",
    ],
    suffix: "Includes Growth features",
  },
];

const pricingLdJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NuTab Digital AI Automation Pricing",
  description: "Starter, Growth and Scale automation packages (25% discount applied).",
  itemListElement: aiPackages.map((p, i) => {
    const discounted = Math.round(p.priceNumber * 0.75);
    return {
      "@type": "Offer",
      position: i + 1,
      name: p.title,
      description: `${p.subtitle}. ${p.features.join(", ")}`,
      price: discounted,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://nutab.ca/services/ai-automation#${p.id}`,
      seller: { "@id": "https://nutab.ca/#organization" },
      itemOffered: {
        "@type": "Service",
        name: p.title,
        serviceType: "AI Automation",
        provider: { "@id": "https://nutab.ca/#organization" },
      },
    };
  }),
};

const AIAutomation: React.FC = () => {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="relative dark">
      <Background />
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "AI & Automation" }
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
              { "@type": "ListItem", position: 3, name: "AI & Automation", item: "https://nutab.ca/services/ai-automation" }
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
            "@id": "https://nutab.ca/services/ai-automation#service",
            name: "AI & Automation Solutions",
            description: "Leverage artificial intelligence and automation to improve efficiency, reduce manual tasks, and make smarter decisions.",
            serviceType: "AI & Automation",
            url: "https://nutab.ca/services/ai-automation",
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
              serviceUrl: "https://nutab.ca/services/ai-automation"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 mb-8">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Calgary&apos;s AI Experts</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Transform Your Business with</span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
              AI & Automation
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Unlock the power of artificial intelligence and intelligent automation to streamline operations, 
            reduce costs, and make data-driven decisions. Our Calgary-based team delivers future-ready solutions 
            tailored to your business needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Brain, label: "Machine Learning", color: "text-purple-500" },
              { icon: Zap, label: "Workflow Automation", color: "text-blue-500" },
              { icon: ShieldCheck, label: "Secure & Reliable", color: "text-emerald-500" },
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
            >
              View Pricing
              <ChevronDown className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why AI & Automation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">AI & Automation?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Empower your business to work smarter, not harder. Automate repetitive tasks, gain insights from data, 
              and improve decision-making with intelligent solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Strategy & Consulting",
                description: "Develop comprehensive roadmaps to adopt AI responsibly and effectively, aligning technology with your business goals.",
                gradient: "from-purple-500 to-violet-500"
              },
              {
                icon: Zap,
                title: "End-to-End Automation",
                description: "Streamline workflows and eliminate manual bottlenecks with intelligent automation that scales with your operations.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: ShieldCheck,
                title: "Security & Compliance",
                description: "Build AI solutions that meet enterprise security standards and regulatory requirements without compromising performance.",
                gradient: "from-emerald-500 to-teal-500"
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
              Our AI & Automation Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions to help your organization harness the power of artificial intelligence 
              and intelligent automation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Machine Learning Models",
                description: "Custom ML models for prediction, classification, and intelligent recommendations that drive business outcomes.",
                icon: Brain
              },
              {
                title: "Workflow Automation",
                description: "Automate repetitive business processes, reduce manual work, and free your team for high-value activities.",
                icon: Zap
              },
              {
                title: "AI-Powered Chatbots",
                description: "Conversational AI assistants that enhance customer support, capture leads, and engage users 24/7.",
                icon: Sparkles
              },
              {
                title: "Data Engineering & Analytics",
                description: "Pipeline design, ETL processes, and data preparation for reliable AI insights and reporting.",
                icon: TrendingUp
              },
              {
                title: "Integration & APIs",
                description: "Seamlessly integrate AI capabilities into your existing systems, applications, and workflows.",
                icon: Target
              }
            ].map(({ title, description, icon: Icon }) => (
              <div 
                key={title}
                className="group flex gap-5 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:shadow-purple-500/5 dark:hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
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
        packages={aiPackages}
        title="AI Automation Pricing"
        subtitle="Choose the package that fits your automation needs. All packages include dedicated support and documentation."
        accentColor="purple"
        ldJson={pricingLdJson}
      />

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Benefits of AI & Automation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Investing in AI and automation delivers measurable ROI and competitive advantages for your business.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Clock, title: "Efficiency", description: "Automate repetitive tasks and free up valuable time" },
              { icon: Target, title: "Accuracy", description: "Reduce errors with data-driven decisions" },
              { icon: TrendingUp, title: "Scalability", description: "AI solutions that grow with your business" },
              { icon: DollarSign, title: "Cost Savings", description: "Lower operational costs through automation" },
              { icon: Sparkles, title: "Competitive Edge", description: "Stay ahead with innovative technology" }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center group">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
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
              Our AI & automation solutions support businesses across diverse industries.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["Healthcare", "Finance", "Retail", "Manufacturing", "Professional Services", "Energy", "Logistics"].map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 cursor-default"
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
              How We Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our proven process ensures reliable AI and automation solutions delivered on time and within budget.
            </p>
          </div>
          
          <div className="relative dark">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 transform -translate-y-1/2 z-0" />
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Discovery", description: "Assess needs, data, and opportunities for AI & automation" },
                { step: "02", title: "Design", description: "Prototype, model selection, and architecture planning" },
                { step: "03", title: "Implementation", description: "Develop, integrate, and deploy AI systems" },
                { step: "04", title: "Testing", description: "Validate performance, reliability, and safety" },
                { step: "05", title: "Support", description: "Ongoing monitoring, maintenance, and optimization" }
              ].map(({ step, title, description }) => (
                <div key={step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold text-lg mb-4 shadow-lg shadow-purple-500/25">
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
              Why Partner with NuTab Digital?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We pride ourselves on being a trusted AI and automation partner for Calgary businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Automation Expertise", description: "Deep experience streamlining operations with reliable automation solutions" },
              { title: "Secure Deployments", description: "Security-first approach for all AI solutions, protecting your data and systems" },
              { title: "Data-Driven Insights", description: "Turn your data into actionable business intelligence that drives growth" },
              { title: "Custom Integrations", description: "Seamless integration with your existing systems and workflows" },
              { title: "Local Calgary Team", description: "Calgary-based AI specialists who understand Alberta business needs" },
              { title: "Ongoing Support", description: "Continuous optimization and support to maximize your AI investment" }
            ].map(({ title, description }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
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
              { label: "Business IT Consulting", href: "/services/it-consulting" },
              { label: "SEO & Digital Marketing", href: "/services/seo-marketing" }
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
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
          <div className="p-10 rounded-3xl bg-gradient-to-br from-purple-600 via-violet-600 to-blue-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your business with AI & automation. Contact us today to discuss your goals 
                and discover how NuTab Digital can help you work smarter.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-purple-600 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
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
        lead="Quick answers to common questions about our AI & automation solutions."
        accentColor="purple"
      />
    </main>
  );
};

export default AIAutomation;
