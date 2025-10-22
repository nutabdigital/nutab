"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./FAQSection.css";

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  faqs: FAQ[];
  title: string;
  subtitle?: string;
}

export default function FAQSection({
  faqs,
  title,
  subtitle,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-card">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="faq-title"
          >
            {title}
          </motion.h2>
          {subtitle && <p className="faq-subtitle">{subtitle}</p>}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="faq-accordion-wrapper"
          >
            <div className="faq-accordion">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`faq-accordion-item ${
                    openIndex === idx ? "faq-accordion-item-open" : ""
                  }`}
                >
                  <button
                    className="faq-accordion-trigger"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={openIndex === idx}
                  >
                    <span className="faq-question">{faq.question}</span>
                    <ChevronDown
                      className={`faq-chevron ${
                        openIndex === idx ? "faq-chevron-open" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="faq-answer-wrapper"
                        style={{ overflow: "visible" }} // <-- Fix: ensure answer is visible
                      >
                        <div className="faq-answer">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
