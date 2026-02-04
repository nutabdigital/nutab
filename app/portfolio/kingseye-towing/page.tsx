"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Truck,
  Clock,
  Smartphone,
  Globe,
  Phone,
  MapPin,
  Shield,
  Sparkles,
} from "lucide-react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

// Tech Stack
const techStack = [
  { name: "24/7 Contact", description: "Always accessible", icon: Phone },
  { name: "Mobile First", description: "Easy mobile access", icon: Smartphone },
  { name: "Location Info", description: "Service area display", icon: MapPin },
  { name: "Fast Loading", description: "Emergency ready", icon: Clock },
];

// Project highlights
const projectHighlights = [
  {
    icon: Truck,
    title: "Service Focus",
    description: "Clear service info",
    stat: "Pro",
  },
  {
    icon: Clock,
    title: "Always On",
    description: "24/7 availability",
    stat: "24/7",
  },
  {
    icon: Phone,
    title: "Quick Contact",
    description: "One-tap calling",
    stat: "1-Tap",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Trust signals",
    stat: "100%",
  },
];

export default function KingseyeTowingPortfolio() {
  // JSON-LD Schema for SEO - Case Study / Creative Work
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "King's Eye Towing Website Development",
    description: "Calgary web development project creating a professional, SEO-optimized website for King's Eye Towing with 24/7 availability features and local search optimization.",
    author: {
      "@type": "Organization",
      name: "NuTab Digital",
      url: "https://nutab.ca",
    },
    datePublished: "2024-11-10",
    url: "https://nutab.ca/portfolio/kingseye-towing",
    about: {
      "@type": "WebSite",
      name: "King's Eye Towing",
      url: "https://kingseyetowing.netlify.app",
    },
    keywords: "Calgary web development, towing company website, local SEO, service business website, mobile-first design, emergency service website",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Service Business Website Design",
    provider: {
      "@type": "Organization",
      name: "NuTab Digital",
      url: "https://nutab.ca",
      areaServed: {
        "@type": "City",
        name: "Calgary",
      },
    },
    description: "Professional website design and local SEO services for service businesses, including towing companies, contractors, and emergency services in Calgary, Alberta.",
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
          { label: "King's Eye Towing" },
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-500/30 mb-8"
          >
            <Truck className="w-4 h-4 text-blue-600 dark:text-blue-500" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
              Service Business
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-gray-900 dark:text-white">King&apos;s Eye</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Towing
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A professional <strong>service business website</strong> built by our <strong>Calgary web development</strong> team with
            24/7 availability information, one-tap calling, and <strong>local SEO optimization</strong> designed for emergency situations.
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
                <Icon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
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
              href="https://kingseyetowing.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
            >
              Visit Live Site
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
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
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 text-center"
          >
            <Sparkles className="w-12 h-12 text-blue-500 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Full Case Study{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              We&apos;re currently documenting this project&apos;s journey, including the design
              process, technical challenges, and results achieved. Check back soon for the
              complete case study!
            </p>
            <a
              href="https://kingseyetowing.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
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
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Highlights
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Key features designed for emergency service businesses
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
                className="group p-6 rounded-3xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 w-fit mb-4">
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
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Your Service Business?
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a professional online presence that helps customers find
              and contact you when they need you most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
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
