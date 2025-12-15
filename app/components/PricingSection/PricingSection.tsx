"use client";

import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

export interface PricingPackage {
  id: string;
  title: string;
  subtitle: string;
  priceNumber?: number;
  priceDisplay: string;
  features: string[];
  badge?: string;
  suffix?: string;
  isMonthly?: boolean;
}

export interface PricingCardProps {
  pkg: PricingPackage;
  accentColor?: "purple" | "blue" | "green" | "amber" | "rose" | "emerald" | "pink" | "indigo";
  showDiscount?: boolean;
  discountPercent?: number;
}

const accentColors = {
  purple: {
    gradient: "from-purple-600 to-violet-600",
    border: "border-purple-500",
    bg: "bg-purple-500/10 dark:bg-purple-500/20",
    text: "text-purple-600 dark:text-purple-400",
    badge: "bg-gradient-to-r from-purple-600 to-violet-600",
    check: "text-purple-500",
    button: "bg-gradient-to-r from-purple-600 to-violet-600 hover:shadow-purple-500/25",
    promo: "bg-purple-600",
  },
  blue: {
    gradient: "from-blue-600 to-cyan-600",
    border: "border-blue-500",
    bg: "bg-blue-500/10 dark:bg-blue-500/20",
    text: "text-blue-600 dark:text-blue-400",
    badge: "bg-gradient-to-r from-blue-600 to-cyan-600",
    check: "text-blue-500",
    button: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-blue-500/25",
    promo: "bg-blue-600",
  },
  green: {
    gradient: "from-green-600 to-emerald-600",
    border: "border-green-500",
    bg: "bg-green-500/10 dark:bg-green-500/20",
    text: "text-green-600 dark:text-green-400",
    badge: "bg-gradient-to-r from-green-600 to-emerald-600",
    check: "text-green-500",
    button: "bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-green-500/25",
    promo: "bg-green-600",
  },
  amber: {
    gradient: "from-amber-600 to-orange-600",
    border: "border-amber-500",
    bg: "bg-amber-500/10 dark:bg-amber-500/20",
    text: "text-amber-600 dark:text-amber-400",
    badge: "bg-gradient-to-r from-amber-600 to-orange-600",
    check: "text-amber-500",
    button: "bg-gradient-to-r from-amber-600 to-orange-600 hover:shadow-amber-500/25",
    promo: "bg-amber-600",
  },
  rose: {
    gradient: "from-rose-600 to-pink-600",
    border: "border-rose-500",
    bg: "bg-rose-500/10 dark:bg-rose-500/20",
    text: "text-rose-600 dark:text-rose-400",
    badge: "bg-gradient-to-r from-rose-600 to-pink-600",
    check: "text-rose-500",
    button: "bg-gradient-to-r from-rose-600 to-pink-600 hover:shadow-rose-500/25",
    promo: "bg-rose-600",
  },
  emerald: {
    gradient: "from-emerald-600 to-teal-600",
    border: "border-emerald-500",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    text: "text-emerald-600 dark:text-emerald-400",
    badge: "bg-gradient-to-r from-emerald-600 to-teal-600",
    check: "text-emerald-500",
    button: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:shadow-emerald-500/25",
    promo: "bg-emerald-600",
  },
  pink: {
    gradient: "from-pink-600 to-rose-600",
    border: "border-pink-500",
    bg: "bg-pink-500/10 dark:bg-pink-500/20",
    text: "text-pink-600 dark:text-pink-400",
    badge: "bg-gradient-to-r from-pink-600 to-rose-600",
    check: "text-pink-500",
    button: "bg-gradient-to-r from-pink-600 to-rose-600 hover:shadow-pink-500/25",
    promo: "bg-pink-600",
  },
  indigo: {
    gradient: "from-indigo-600 to-purple-600",
    border: "border-indigo-500",
    bg: "bg-indigo-500/10 dark:bg-indigo-500/20",
    text: "text-indigo-600 dark:text-indigo-400",
    badge: "bg-gradient-to-r from-indigo-600 to-purple-600",
    check: "text-indigo-500",
    button: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-indigo-500/25",
    promo: "bg-indigo-600",
  },
};

export const PricingCard: React.FC<PricingCardProps> = ({
  pkg,
  accentColor = "purple",
}) => {
  const colors = accentColors[accentColor];
  const formatPrice = (n: number) =>
    "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (pkg.isMonthly ? "/mo" : "");

  return (
    <article
      id={pkg.id}
      className={`relative flex flex-col h-full p-6 sm:p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-xl ${
        pkg.badge
          ? `${colors.border} ${colors.bg}`
          : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
      }`}
      itemScope
      itemType="https://schema.org/Offer"
    >
      {/* Popular Badge */}
      {pkg.badge && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white ${colors.badge} shadow-lg`}
        >
          {pkg.badge}
        </span>
      )}

      {/* Discount removed: always show base price or contact label */}

      {/* Title & Subtitle */}
      <div className="mb-2">
        <h3
          className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2"
          itemProp="name"
        >
          {pkg.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm" itemProp="description">
          {pkg.subtitle}
        </p>
      </div>

      {/* Pricing */}
      <div className="mb-6" itemProp="priceSpecification" itemScope itemType="https://schema.org/UnitPriceSpecification">
        {typeof pkg.priceNumber === "number" ? (
          <>
            <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">Starting from</span>
            <meta itemProp="priceCurrency" content="CAD" />
            <div className="flex items-baseline gap-3">
              <span
                className={`text-3xl sm:text-4xl font-bold ${colors.text}`}
                itemProp="price"
                content={String(pkg.priceNumber)}
              >
                {formatPrice(pkg.priceNumber)}
              </span>
            </div>
          </>
        ) : (
          <span className={`text-3xl sm:text-4xl font-bold ${colors.text}`}>
            {pkg.priceDisplay}
          </span>
        )}

        {pkg.suffix && (
          <span className="block mt-4 text-xs text-gray-500 dark:text-gray-400">
            {pkg.suffix}
          </span>
        )}
      </div>

      {/* Features */}
      <ul className="flex-grow space-y-3 mb-8" aria-label={`${pkg.title} features`}>
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className={`w-5 h-5 ${colors.check} flex-shrink-0 mt-0.5`} />
            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href="/#contact"
        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:scale-[1.02] ${colors.button}`}
      >
        Get Started
      </Link>
    </article>
  );
};

export interface PricingSectionProps {
  packages: PricingPackage[];
  title: string;
  subtitle: string;
  accentColor?: "purple" | "blue" | "green" | "amber" | "rose" | "emerald" | "pink" | "indigo";
  showDiscount?: boolean;
  discountPercent?: number;
  ldJson?: object;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  packages,
  title,
  subtitle,
  accentColor = "purple",
  showDiscount = true,
  discountPercent = 25,
  ldJson,
}) => {
  const colors = accentColors[accentColor];

  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="pricing-heading"
    >
      {ldJson && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      )}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="pricing-heading"
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
              <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                {title}
              </span>
            )}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
          {/* Discounts removed — always show base pricing */}
        </div>

        {/* Pricing Cards Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label="Pricing packages"
        >
          {packages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              pkg={pkg}
              accentColor={accentColor}
              showDiscount={showDiscount}
              discountPercent={discountPercent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
