"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  ShoppingBag,
  Store,
  Layers,
  Palette,
  BookOpen,
  Shirt,
  BadgeCheck,
  Upload,
  Tag,
  Users,
  Lock,
  Search,
  Accessibility,
  Zap,
  Code2,
  Puzzle,
  Boxes,
  ClipboardList,
  CheckCircle2,
  Server,
  SlidersHorizontal,
  Settings2,
  LayoutTemplate,
} from "lucide-react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const LIVE_URL = "https://www.wishfulthinking.ca";

// Hero stats
const projectHighlights = [
  { icon: Layers, stat: "2", description: "Interactive product designers" },
  { icon: Store, stat: "B2B + B2C", description: "Retail & wholesale in one store" },
  { icon: Palette, stat: "50+", description: "Configurable design tokens" },
  { icon: BookOpen, stat: "5", description: "Decoration guide categories" },
];

// Store requirements vs. what was built
const challenges = [
  "Customers upload artwork and preview it on the product before ordering",
  "Retail shoppers and wholesale buyers need different levels of access",
  "Some custom items need a quote rather than a fixed price",
  "Buyers need guidance to compare decoration methods",
  "Proofing, handling, and liability terms need dedicated pages",
  "Store staff need to manage content from the Shopify admin",
];

const solutions = [
  "Interactive hat and name badge designers with logo upload and preview",
  "Approval-based wholesale accounts with tier-gated pages",
  "Metafield-driven “Contact us for pricing” button linking to a quote page",
  "A five-category Decoration Guide with technique article pages",
  "Dedicated pages for proofing, handling, and liability terms",
  "Custom sections and theme settings managed in the Shopify theme editor",
];

// Key features
const features = [
  {
    icon: Shirt,
    title: "Interactive Hat Designer",
    description:
      "Customers upload front and back logos and see them positioned on a hat preview, and the preview details are passed along to the cart.",
    points: [
      "Front and back view tabs with separate logo uploads",
      "Preview details attached to the cart item",
      "Support for an additional logo placement",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Name Badge Designer",
    description:
      "A dedicated logo uploader and preview for name badges, paired with a combined pricing layout.",
    points: [
      "Logo upload with on-product preview",
      "Combined garment and design pricing layout",
      "Dedicated name badge product templates",
    ],
  },
  {
    icon: Tag,
    title: "Custom Pricing Block",
    description:
      "A pricing block built for products that combine a garment choice with a decoration choice, with configurable layouts and styling.",
    points: [
      "“Garment, then design” and combined page layouts",
      "Configurable pricing-table styling, including selected rows",
      "Quantity selector alongside pricing",
    ],
  },
  {
    icon: Users,
    title: "Wholesale (B2B) Access",
    description:
      "Selected pages can be limited to approved wholesale accounts, while other visitors see a sign-in or application prompt.",
    points: [
      "Account-tier and approval-status guard blocks",
      "Configurable messaging for guests and pending accounts",
      "Dedicated wholesale sign-up page",
    ],
  },
  {
    icon: ClipboardList,
    title: "Quote-Based Ordering",
    description:
      "Products flagged in Shopify swap the add-to-cart button for a “Contact us for pricing” button that links to the quote page with the product name included.",
    points: [
      "Enabled per product with a metafield",
      "Quantity controls hidden on flagged products",
      "Dedicated request-a-quote page template",
    ],
  },
  {
    icon: BookOpen,
    title: "Decoration Guide",
    description:
      "An educational section that explains heat transfers, dimensional branding, patches, decals, and accessories.",
    points: [
      "Five decoration categories, each with its own guide page",
      "Technique article template",
      "Guide products linked through a metafield",
    ],
  },
];

// Customer journeys
const retailJourney = [
  "Browse collections: hats, patches, stickers, name badges, zipper pulls, and bring-your-own",
  "Choose a product and variant",
  "Upload a logo and preview it",
  "Review pricing",
  "Add to cart with the preview details attached",
  "Check out through Shopify",
];

const wholesaleJourney = [
  "Apply on the wholesale sign-up page",
  "Account shows a “pending approval” message until reviewed",
  "Store team approves the account and assigns a tier",
  "Wholesale-only pages become available",
];

// Color palette// Implementation details visible in the theme code
const foundations = [
  {
    icon: Search,
    title: "SEO Foundations",
    gradient: "from-sky-500 to-blue-500",
    points: [
      "Canonical URL tag in the theme layout",
      "Open Graph and Twitter Card tags, including product price metadata",
      "Predictive search enabled",
      "Decoration guide pages and a technique article template",
    ],
  },
  {
    icon: Accessibility,
    title: "Accessibility Features",
    gradient: "from-blue-500 to-indigo-500",
    points: [
      "Skip-to-content link and screen-reader status messages",
      "Configurable keyboard focus styles",
      "44px minimum heights set for buttons, inputs, and dropdowns",
      "Shared form-styling tokens for theme fields, app blocks, and Shopify Forms",
    ],
  },
  {
    icon: Zap,
    title: "Performance Practices",
    gradient: "from-indigo-500 to-violet-500",
    points: [
      "Core theme scripts loaded with defer",
      "Font preconnect and swap-based font loading",
      "Component stylesheets loaded per section",
    ],
  },
];

// Merchant experience
const merchantFeatures = [
  {
    icon: LayoutTemplate,
    title: "Custom Section Library",
    description:
      "Twelve custom sections for the About, Contact, Decoration Guide, and Terms pages, available in the Shopify theme editor.",
  },
  {
    icon: SlidersHorizontal,
    title: "Metafield-Driven Control",
    description:
      "Metafields for request-quote, terms notices, and linked guide products let staff change behaviour per product from the Shopify admin.",
  },
  {
    icon: Settings2,
    title: "Global Theme Settings",
    description:
      "Colours, typography, buttons, inputs, upload fields, and pricing tables are adjustable from the theme settings panel.",
  },
];

// Color palette
const colorPalette = [
  { name: "Brand Blue", hex: "#0379C7", textColor: "white" },
  { name: "Focus Blue", hex: "#1A42D0", textColor: "white" },
  { name: "Charcoal", hex: "#121212", textColor: "white" },
  { name: "Slate", hex: "#242833", textColor: "white" },
  { name: "Soft Gray", hex: "#F3F3F3", textColor: "black" },
  { name: "White", hex: "#FFFFFF", textColor: "black" },
];

// Tech stack
const techStack = [
  { name: "Shopify", description: "Online Store 2.0 with JSON templates and sections", icon: ShoppingBag },
  { name: "Liquid", description: "Custom sections, snippets, and product templates", icon: Code2 },
  { name: "Theme App Extension", description: "Custom app blocks for designers, pricing, and access guards", icon: Puzzle },
  { name: "Metafields", description: "Product-level controls for quotes, terms, and guides", icon: Boxes },
  { name: "Customer Accounts", description: "Approval status and tier-based wholesale access", icon: Lock },
  { name: "CSS Design Tokens", description: "Shared custom properties across theme and apps", icon: Palette },
];

interface SectionHeaderProps {
  title: string;
  accent: string;
  gradient: string;
  subtitle: string;
  accentFirst?: boolean;
}

function SectionHeader({ title, accent, gradient, subtitle, accentFirst }: SectionHeaderProps) {
  const accentNode = (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{accent}</span>
  );
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {accentFirst ? (
          <>
            {accentNode} {title}
          </>
        ) : (
          <>
            {title} {accentNode}
          </>
        )}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

export default function WishfulThinkingPortfolio() {
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Wishful Thinking Shopify Ecommerce Store",
    description:
      "A custom Shopify build for Calgary custom decor company Wishful Thinking, featuring interactive hat and name badge designers, wholesale account access, quote-based ordering, and a custom design-token system.",
    author: {
      "@type": "Organization",
      name: "NuTab Digital",
      url: "https://nutab.ca",
    },
    datePublished: "2026-11-06",
    url: "https://nutab.ca/portfolio/wishful-thinking/",
    about: {
      "@type": "WebSite",
      name: "Wishful Thinking",
      url: LIVE_URL,
    },
    keywords:
      "Calgary ecommerce development, Shopify development, custom Shopify theme, B2B wholesale, product customizer",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ecommerce Development",
    provider: {
      "@type": "Organization",
      name: "NuTab Digital",
      url: "https://nutab.ca",
      areaServed: {
        "@type": "City",
        name: "Calgary",
      },
    },
    description:
      "Custom Shopify ecommerce development, product customizers, B2B wholesale portals, and store optimization for businesses in Calgary, Alberta.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nutab.ca/" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://nutab.ca/portfolio/" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Wishful Thinking",
        item: "https://nutab.ca/portfolio/wishful-thinking/",
      },
    ],
  };

  return (
    <main id="main-content" role="main" tabIndex={-1} className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Background />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Wishful Thinking" },
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 dark:bg-sky-500/20 border border-sky-200 dark:border-sky-500/30 mb-8"
          >
            <ShoppingBag className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span className="text-sm font-medium text-sky-700 dark:text-sky-300">
              Featured Project &middot; Ecommerce
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-gray-900 dark:text-white">Wishful Thinking</span>
            <br />
            <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Custom Decor Ecommerce
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A custom <strong>Shopify ecommerce store</strong> for a Calgary decoration company,
            combining <strong>interactive product designers</strong>, <strong>wholesale account
            access</strong>, and <strong>quote-based ordering</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          >
            {projectHighlights.map(({ icon: Icon, stat, description }) => (
              <div
                key={description}
                className="p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
              >
                <Icon className="w-6 h-6 text-sky-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{description}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105"
            >
              Visit Live Store
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/80 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="The"
            accent="Challenge & Solution"
            gradient="from-sky-500 to-blue-500"
            subtitle="What the store needed to support, and what we built"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border-2 border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10"
            >
              <div className="text-amber-600 dark:text-amber-500 text-sm font-semibold mb-4 uppercase tracking-wider">
                What the business needed
              </div>
              <ul className="space-y-4">
                {challenges.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border-2 border-sky-500/30 bg-sky-500/5 dark:bg-sky-500/10"
            >
              <div className="text-sky-600 dark:text-sky-400 text-sm font-semibold mb-4 uppercase tracking-wider">
                What we delivered
              </div>
              <ul className="space-y-4">
                {solutions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Features"
            accent="Key"
            accentFirst
            gradient="from-sky-500 to-indigo-500"
            subtitle="Custom functionality built for how Wishful Thinking's customers order"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description, points }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:border-sky-500/50 transition-all duration-300"
              >
                <div className="p-3 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-500 w-fit mb-5">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  {description}
                </p>
                <ul className="space-y-2">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Journeys */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/80 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Journeys"
            accent="Customer"
            accentFirst
            gradient="from-blue-500 to-indigo-500"
            subtitle="Two buyer types, two tailored paths, one store"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Upload,
                title: "Retail Custom Order",
                steps: retailJourney,
                gradient: "from-sky-500 to-blue-500",
              },
              {
                icon: Users,
                title: "Wholesale Account",
                steps: wholesaleJourney,
                gradient: "from-blue-500 to-indigo-500",
              },
            ].map(({ icon: Icon, title, steps, gradient }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                </div>
                <ol className="space-y-4">
                  {steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-4 text-gray-600 dark:text-gray-400">
                      <span
                        className={`flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r ${gradient} text-white text-sm font-semibold flex items-center justify-center`}
                      >
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Foundations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Foundations"
            accent="Technical"
            accentFirst
            gradient="from-blue-500 to-indigo-500"
            subtitle="Practices implemented in the store's theme code"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {foundations.map(({ icon: Icon, title, gradient, points }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                </div>
                <ul className="space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Merchant Experience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/80 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Management"
            accent="Merchant"
            accentFirst
            gradient="from-sky-500 to-blue-500"
            subtitle="Content and product behaviour the Wishful Thinking team can manage in Shopify"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {merchantFeatures.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:border-sky-500/50 transition-all duration-300"
              >
                <div className="p-3 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-500 w-fit mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Palette"
            accent="Colour"
            accentFirst
            gradient="from-sky-500 to-blue-500"
            subtitle="The store's palette is anchored on brand blue, with Manrope typography"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {colorPalette.map((color, index) => (
              <motion.div
                key={color.hex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div
                  className="aspect-square rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl flex items-end p-4"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="w-full text-center" style={{ color: color.textColor }}>
                    <div className="text-xs font-medium opacity-80">{color.name}</div>
                    <div className="text-sm font-mono font-bold">{color.hex}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/80 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Stack"
            accent="Tech"
            accentFirst
            gradient="from-blue-500 to-cyan-500"
            subtitle="Shopify's platform, extended with custom Liquid and app blocks"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map(({ name, description, icon: Icon }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="group p-6 rounded-3xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 w-fit mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/30"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-500">
                <Server className="w-10 h-10 text-white" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Built on Shopify
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  The store runs on Shopify&apos;s hosted platform, with checkout handled by Shopify.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  {["Online Store 2.0", "Shopify Checkout", "Theme Editor"].map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full text-sm bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/80 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Planning an{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
                Online Store?
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you need a product designer, wholesale accounts, or quote-based ordering,
              let&apos;s talk about what your store needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services/ecommerce/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-300"
              >
                Explore Ecommerce Services
              </Link>
            </div>
            <p className="mt-10 text-xs text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
              Project details describe the store&apos;s theme and configuration at the time of
              publication. The live store is managed by Wishful Thinking and may change.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
