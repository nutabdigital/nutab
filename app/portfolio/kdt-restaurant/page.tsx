"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  UtensilsCrossed,
  Clock,
  Smartphone,
  Globe,
  Palette,
  Code2,
  Sparkles,
} from "lucide-react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

// Tech Stack
const techStack = [
  { name: "Modern Design", description: "Clean, appetizing visuals", icon: Palette },
  { name: "Responsive", description: "Mobile-first approach", icon: Smartphone },
  { name: "Fast Loading", description: "Optimized performance", icon: Clock },
  { name: "SEO Ready", description: "Search engine optimized", icon: Globe },
];

// Project highlights
const projectHighlights = [
  {
    icon: UtensilsCrossed,
    title: "Online Menu",
    description: "Easy-to-browse menu",
    stat: "Digital",
  },
  {
    icon: Clock,
    title: "Quick Load",
    description: "Fast page loading",
    stat: "<2s",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design",
    stat: "100%",
  },
  {
    icon: Globe,
    title: "Online Presence",
    description: "Increased visibility",
    stat: "24/7",
  },
];

export default function KDTRestaurantPortfolio() {
  // JSON-LD Schema for SEO - Case Study / Creative Work
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "KDT Restaurant Website Design",
    description: "Calgary web development project creating a modern, SEO-optimized website for KDT Restaurant with mobile-first responsive design and online menu features.",
    author: {
      "@type": "Organization",
      name: "NuTab Digital",
      url: "https://nutab.ca",
    },
    datePublished: "2024-09-20",
    url: "https://nutab.ca/portfolio/kdt-restaurant",
    about: {
      "@type": "WebSite",
      name: "KDT Restaurant",
      url: "https://kdtrestaurant.com",
    },
    keywords: "Calgary web development, restaurant website design, SEO optimization, mobile-first design, online menu, small business marketing",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Restaurant Website Design",
    provider: {
      "@type": "Organization",
      name: "NuTab Digital",
      url: "https://nutab.ca",
      areaServed: {
        "@type": "City",
        name: "Calgary",
      },
    },
    description: "Professional restaurant website design, SEO optimization, and digital marketing services for food service businesses in Calgary, Alberta.",
  };

  return (
    <main id="main-content" role="main" tabIndex={-1} className="relative">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Background />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "KDT Restaurant" },
        ]}
      />

      {/* Back to Portfolio link removed per request */}

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-500/20 border border-amber-200 dark:border-amber-500/30 mb-8"
          >
            <UtensilsCrossed className="w-4 h-4 text-amber-600 dark:text-amber-500" />
            <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
              Restaurant Website
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-gray-900 dark:text-white">KDT</span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Restaurant
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A modern, <strong>SEO-optimized restaurant website</strong> designed by our <strong>Calgary web development</strong> team
            to showcase the menu, create a welcoming atmosphere, and drive <strong>local search visibility</strong> for new customers.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          >
            {projectHighlights.map(({ icon: Icon, title, description, stat }) => (
              <div
                key={title}
                className="p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
              >
                <Icon className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{description}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://kdtrestaurant.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105"
            >
              Visit Live Site
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/80 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-center"
          >
            <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Full Case Study{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              We&apos;re currently documenting this project&apos;s journey, including the design
              process, technical challenges, and results achieved. Check back soon for the
              complete case study!
            </p>
            <a
              href="https://kdtrestaurant.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400 font-semibold hover:underline"
            >
              Preview the live website
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Project{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Highlights
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Key features and technologies used in this project
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map(({ name, description, icon: Icon }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-3xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 w-fit mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/80 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Need a Website for{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Your Restaurant?
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s create an appetizing online presence that brings more customers
              to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300"
              >
                View More Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
