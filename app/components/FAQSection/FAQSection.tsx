"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQProps = {
  faqs: FAQItem[];
  title?: string;
  lead?: string;
  className?: string;
  /** Accent color theme for the component */
  accentColor?: "purple" | "blue" | "green" | "amber" | "rose" | "emerald" | "pink" | "indigo";
};

const accentColors = {
  purple: {
    gradient: "from-purple-500 to-violet-500",
    icon: "text-purple-500",
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    hover: "hover:border-purple-500/50",
    ring: "focus-visible:ring-purple-500",
  },
  blue: {
    gradient: "from-blue-500 to-cyan-500",
    icon: "text-blue-500",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    hover: "hover:border-blue-500/50",
    ring: "focus-visible:ring-blue-500",
  },
  green: {
    gradient: "from-green-500 to-emerald-500",
    icon: "text-green-500",
    border: "border-green-500/30",
    bg: "bg-green-500/10",
    hover: "hover:border-green-500/50",
    ring: "focus-visible:ring-green-500",
  },
  amber: {
    gradient: "from-amber-500 to-orange-500",
    icon: "text-amber-500",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    hover: "hover:border-amber-500/50",
    ring: "focus-visible:ring-amber-500",
  },
  rose: {
    gradient: "from-rose-500 to-pink-500",
    icon: "text-rose-500",
    border: "border-rose-500/30",
    bg: "bg-rose-500/10",
    hover: "hover:border-rose-500/50",
    ring: "focus-visible:ring-rose-500",
  },
  emerald: {
    gradient: "from-emerald-500 to-teal-500",
    icon: "text-emerald-500",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    hover: "hover:border-emerald-500/50",
    ring: "focus-visible:ring-emerald-500",
  },
  pink: {
    gradient: "from-pink-500 to-rose-500",
    icon: "text-pink-500",
    border: "border-pink-500/30",
    bg: "bg-pink-500/10",
    hover: "hover:border-pink-500/50",
    ring: "focus-visible:ring-pink-500",
  },
  indigo: {
    gradient: "from-indigo-500 to-purple-500",
    icon: "text-indigo-500",
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/10",
    hover: "hover:border-indigo-500/50",
    ring: "focus-visible:ring-indigo-500",
  },
};

const FAQSection: React.FC<FAQProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  lead = "",
  className = "",
  accentColor = "purple",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const colors = accentColors[accentColor];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50 ${className}`}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} border ${colors.border} mb-6`}>
            <HelpCircle className={`w-4 h-4 ${colors.icon}`} />
            <span className={`text-sm font-medium ${colors.icon}`}>FAQ</span>
          </div>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {title.includes(" ") ? (
              <>
                {title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                  {title.split(" ").slice(-1)}
                </span>
              </>
            ) : (
              title
            )}
          </h2>
          {lead && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {lead}
            </p>
          )}
        </div>

        {/* FAQ List */}
        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              role="listitem"
              className={`group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? `${colors.border} shadow-lg`
                  : `${colors.hover}`
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 ${colors.ring} focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 p-2 rounded-full ${
                    openIndex === index ? colors.bg : "bg-gray-100 dark:bg-gray-800"
                  } transition-colors duration-300`}
                >
                  <ChevronDown
                    className={`w-5 h-5 ${
                      openIndex === index ? colors.icon : "text-gray-500 dark:text-gray-400"
                    } transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <div className={`h-px w-full ${colors.bg} mb-4`} />
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
