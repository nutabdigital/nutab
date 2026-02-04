"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Zap,
  Gauge,
  Palette,
  Code2,
  Search,
  Server,
  Smartphone,
  Globe,
  TrendingUp,
  CheckCircle2,
  Scissors,
  BarChart3,
  Clock,
  Shield,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import Background from "../../components/Background/Background";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

// Color Palette for ChopChop Barber
const colorPalette = [
  { name: "Primary (Near-Black)", hex: "#030213", textColor: "white" },
  { name: "White", hex: "#FFFFFF", textColor: "black" },
  { name: "Accent Red", hex: "#DC2626", textColor: "white" },
  { name: "Accent Blue", hex: "#2563EB", textColor: "white" },
  { name: "Black (UI)", hex: "#000000", textColor: "white" },
  { name: "Muted / UI Gray", hex: "#ECECF0", textColor: "black" },
];

// Performance Metrics
const performanceMetrics = [
  { label: "Performance", score: 100, icon: Zap, color: "text-green-500" },
  { label: "Accessibility", score: 100, icon: CheckCircle2, color: "text-green-500" },
  { label: "Best Practices", score: 100, icon: Shield, color: "text-green-500" },
  { label: "SEO", score: 100, icon: Search, color: "text-green-500" },
];

// Tech Stack
const techStack = [
  { name: "Next.js 14", description: "React framework with App Router", icon: Globe },
  { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: Palette },
  { name: "Figma", description: "UI/UX design & prototyping", icon: Sparkles },
  { name: "TypeScript", description: "Type-safe development", icon: Code2 },
];

// Project highlights
const projectHighlights = [
  {
    icon: TrendingUp,
    title: "Performance Boost",
    description: "From 55 to 100 PageSpeed score",
    stat: "+81.8%",
  },
  {
    icon: Clock,
    title: "Load Time",
    description: "First Contentful Paint",
    stat: "0.8s",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Fully responsive design",
    stat: "100%",
  },
  {
    icon: BarChart3,
    title: "SEO Ready",
    description: "Perfect SEO score",
    stat: "100",
  },
];

export default function ChopChopPortfolio() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // JSON-LD Schema for SEO - Case Study / Creative Work
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "ChopChop Barber Shop Website Redesign",
    description: "A complete Calgary web development project transforming ChopChop Barber Shop from Squarespace to a blazing-fast Next.js application with perfect PageSpeed 100 scores.",
    author: {
      "@type": "Organization",
      name: "NuTab Digital",
      url: "https://nutab.ca",
    },
    datePublished: "2024-06-15",
    url: "https://nutab.ca/portfolio/chopchop",
    about: {
      "@type": "WebSite",
      name: "ChopChop Barber Shop",
      url: "https://chopchopbarber.com",
    },
    keywords: "Calgary web development, website redesign, SEO optimization, PageSpeed optimization, Next.js, small business website",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "NuTab Digital",
      url: "https://nutab.ca",
      areaServed: {
        "@type": "City",
        name: "Calgary",
      },
    },
    description: "Professional web development, SEO optimization, and digital marketing services for small businesses in Calgary, Alberta.",
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
          { label: "ChopChop Barber" },
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-500/20 border border-red-200 dark:border-red-500/30 mb-8"
          >
            <Scissors className="w-4 h-4 text-red-600 dark:text-red-500" />
            <span className="text-sm font-medium text-red-700 dark:text-red-400">
              Featured Project
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-gray-900 dark:text-white">ChopChop</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 bg-clip-text text-transparent">
              Barber Shop
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A complete <strong>Calgary web development</strong> project transforming a slow, outdated Squarespace site into a
            blazing-fast Next.js application with <strong>perfect PageSpeed 100 scores</strong> and comprehensive <strong>SEO optimization</strong>.
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
                <Icon className="w-6 h-6 text-red-500 mx-auto mb-2" />
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
              href="https://chopchopbarber.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105"
            >
              Visit Live Site
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Conversion Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/80 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The{" "}
              <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From a sluggish Squarespace site to a high-performance Next.js application
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border-2 border-red-500/30 bg-red-500/5 dark:bg-red-500/10"
            >
              <div className="text-red-500 text-sm font-semibold mb-4 uppercase tracking-wider">
                Before - Squarespace
              </div>
              <ul className="space-y-4">
                {[
                  "PageSpeed score of 55/100",
                  "Slow load times (6.9+ seconds)",
                  "Limited customization options",
                  "Generic template design",
                  "Poor mobile experience",
                  "Basic SEO capabilities",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border-2 border-green-500/30 bg-green-500/5 dark:bg-green-500/10"
            >
              <div className="text-green-500 text-sm font-semibold mb-4 uppercase tracking-wider">
                After - Next.js + Tailwind
              </div>
              <ul className="space-y-4">
                {[
                  "PageSpeed score of 100/100",
                  "Sub-second load times",
                  "Fully custom design system",
                  "Unique brand identity",
                  "Mobile-first responsive",
                  "Advanced SEO optimization",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
                Colour
              </span>{" "}
              Palette
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A bold, masculine color scheme reflecting the traditional barber shop aesthetic
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {colorPalette.map((color, index) => (
              <motion.div
                key={color.hex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div
                  className="aspect-square rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl flex items-end p-4"
                  style={{ backgroundColor: color.hex }}
                >
                  <div
                    className="w-full text-center"
                    style={{ color: color.textColor }}
                  >
                    <div className="text-xs font-medium opacity-80">{color.name}</div>
                    <div className="text-sm font-mono font-bold">{color.hex}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/80 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Performance{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Metrics
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Lighthouse scores demonstrating exceptional website performance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map(({ label, score, icon: Icon, color }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-8 h-8 ${color}`} />
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {score}
                  </span>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{label}</div>
                {/* Progress Bar */}
                <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tech{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Modern technologies powering exceptional web experiences
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
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 w-fit mb-4">
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

      {/* SEO & Analytics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/80 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              SEO &{" "}
              <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                Analytics
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Complete setup for tracking, optimization, and search visibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Google Search Console */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Google Search Console
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Sitemap submitted and indexed",
                  "Rich results eligibility verified",
                  "Mobile usability validated",
                  "Core Web Vitals monitored",
                  "Search appearance optimized",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Google Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Google Analytics 4
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Real-time visitor tracking",
                  "User behavior analysis",
                  "Conversion tracking setup",
                  "Custom event tracking",
                  "Performance insights dashboard",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hosting Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500">
                <Server className="w-10 h-10 text-white" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Hosted on Netlify
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Enterprise-grade hosting with automatic deployments, global CDN, and
                  continuous integration for seamless updates.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  {["Global CDN", "Auto SSL", "CI/CD", "Edge Functions"].map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full text-sm bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/80 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform{" "}
              <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
                Your Website?
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a high-performance, beautifully designed website that elevates
              your brand and drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://chopchopbarber.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300"
              >
                View Live Site
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
