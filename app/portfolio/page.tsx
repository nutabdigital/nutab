"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Scissors,
  UtensilsCrossed,
  Truck,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import Background from "../components/Background/Background";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

// Portfolio projects data
const portfolioProjects = [
  {
    id: "chopchop",
    name: "ChopChop Barber Shop",
    description: "A complete website transformation from Squarespace to a blazing-fast Next.js application with perfect PageSpeed scores.",
    icon: Scissors,
    href: "/portfolio/chopchop",
    externalUrl: "https://chopchopbarber.com",
    gradient: "from-red-500 via-rose-500 to-orange-500",
    glowColor: "shadow-red-500/30 hover:shadow-red-500/50",
    borderColor: "border-red-500/20 hover:border-red-500/40",
    iconBg: "from-red-500 to-rose-500",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
  },
  {
    id: "kdt-restaurant",
    name: "KDT Restaurant",
    description: "A modern, appetizing website for KDT Restaurant featuring online ordering and an elegant menu showcase.",
    icon: UtensilsCrossed,
    href: "/portfolio/kdt-restaurant",
    externalUrl: "https://kdtrestaurant.com/",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    glowColor: "shadow-amber-500/30 hover:shadow-amber-500/50",
    borderColor: "border-amber-500/20 hover:border-amber-500/40",
    iconBg: "from-amber-500 to-orange-500",
    tags: ["Restaurant", "Online Menu", "Reservations"],
  },
  {
    id: "kingseye-towing",
    name: "King's Eye Towing",
    description: "Professional towing service website with 24/7 availability information and quick contact features for emergencies.",
    icon: Truck,
    href: "/portfolio/kingseye-towing",
    externalUrl: "https://kingseyetowing.netlify.app/",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    glowColor: "shadow-blue-500/30 hover:shadow-blue-500/50",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
    iconBg: "from-blue-500 to-indigo-500",
    tags: ["Service Business", "24/7 Contact", "Emergency"],
  },
];

// Glass button component with viewport detection for mobile
function PortfolioCard({
  project,
  index,
}: {
  project: typeof portfolioProjects[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInCenter, setIsInCenter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Calculate if the element is in the center third of the viewport
          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = viewportHeight / 2;
          const threshold = viewportHeight / 3;

          const isNearCenter = Math.abs(elementCenter - viewportCenter) < threshold;
          setIsInCenter(entry.isIntersecting && isNearCenter);
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    observer.observe(cardRef.current);

    // Also add scroll listener for more responsive updates
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const threshold = viewportHeight / 4;

      setIsInCenter(Math.abs(elementCenter - viewportCenter) < threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const Icon = project.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      <Link href={project.href}>
        <div
          className={`
            relative p-8 rounded-3xl cursor-pointer
            transition-all duration-500 ease-out

            /* Glass morphism effect */
            bg-white/10 dark:bg-white/5
            backdrop-blur-xl
            border ${project.borderColor}

            /* Shadow and glow */
            shadow-lg ${project.glowColor}

            /* Hover and mobile center state */
            ${isInCenter ? "scale-105 !shadow-2xl" : ""}
            hover:scale-105 hover:shadow-2xl

            /* Inner glow effect */
            before:absolute before:inset-0 before:rounded-3xl
            before:bg-gradient-to-br before:${project.gradient}
            before:opacity-0 before:transition-opacity before:duration-500
            hover:before:opacity-5
            ${isInCenter ? "before:!opacity-5" : ""}

            /* Shine effect on hover */
            overflow-hidden
            after:absolute after:inset-0 after:rounded-3xl
            after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent
            after:translate-x-[-100%] after:transition-transform after:duration-700
            hover:after:translate-x-[100%]
            ${isInCenter ? "after:translate-x-[100%]" : ""}
          `}
        >
          {/* Icon */}
          <div
            className={`
              relative z-10 w-16 h-16 rounded-2xl mb-6
              bg-gradient-to-br ${project.iconBg}
              flex items-center justify-center
              shadow-lg
              transition-transform duration-500
              group-hover:scale-110 group-hover:rotate-3
              ${isInCenter ? "scale-110 rotate-3" : ""}
            `}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3
              className={`
                text-2xl font-bold mb-3
                bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent
              `}
            >
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full
                    bg-white/50 dark:bg-white/10
                    text-gray-700 dark:text-gray-300
                    border border-gray-200/50 dark:border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold">
              <span>View Case Study</span>
              <ArrowRight
                className={`
                  w-5 h-5 transition-transform duration-300
                  group-hover:translate-x-2
                  ${isInCenter ? "translate-x-2" : ""}
                `}
              />
            </div>
          </div>

          {/* External link indicator */}
          <div
            className={`
              absolute top-6 right-6 z-10
              opacity-0 transition-opacity duration-300
              group-hover:opacity-100
              ${isInCenter ? "!opacity-100" : ""}
            `}
          >
            <ExternalLink className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="relative">
      <Background />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Portfolio" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-500/20 border border-red-200 dark:border-red-500/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-red-600 dark:text-red-500" />
            <span className="text-sm font-medium text-red-700 dark:text-red-400">
              Our Work
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-gray-900 dark:text-white">Projects We&apos;re</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 bg-clip-text text-transparent">
              Proud Of
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our portfolio of successful projects. Each website is crafted with
            attention to detail, performance, and results that matter.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <PortfolioCard key={project.id} project={project} index={index} />
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
              Ready to Start{" "}
              <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
                Your Project?
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s create something amazing together. Get in touch to discuss your
              next digital project.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
