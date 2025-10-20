"use client";

import { motion } from "framer-motion";
import "./BenefitsSection.css";

export interface Benefit {
  title: string;
  description: string;
}

export interface BenefitsSectionProps {
  benefits?: Benefit[];
  title?: string;
  subtitle?: string;
}

const defaultBenefits: Benefit[] = [
  {
    title: "Tailored Solutions",
    description: "Address your unique business challenges with software designed specifically for your needs.",
  },
  {
    title: "Scalability",
    description: "Ensure your software grows with your business, adapting to changing requirements.",
  },
  {
    title: "Improved Efficiency",
    description: "Automate repetitive tasks and streamline workflows to save time and resources.",
  },
  {
    title: "Competitive Advantage",
    description: "Stand out in your industry with innovative and unique software solutions.",
  },
  {
    title: "Enhanced Security",
    description: "Protect sensitive data with custom-built security features.",
  },
];

export default function BenefitsSection({
  benefits = defaultBenefits,
  title = "Benefits of Custom Software Development",
  subtitle = "Investing in custom software development offers numerous advantages for your business:",
}: BenefitsSectionProps) {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-card">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="benefits-title"
          >
            {title}
          </motion.h2>
          <p className="benefits-subtitle">
            {subtitle}
          </p>
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="benefit-item"
              >
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
