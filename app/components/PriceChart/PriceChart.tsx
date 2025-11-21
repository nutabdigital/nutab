"use client";

import React from "react";
import "./PriceChart.css";
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton";

const bundles = [
	{
		id: "starter",
		title: "Starter Website",
		subtitle: "Great for a simple online presence",
		price: "$800",
		priceNumber: 800,
		priceSuffix: "",
		features: [
			"Up to 3 pages (Home, About, Contact)",
			"Mobile-friendly layout",
			"Contact form",
			"Basic SEO setup",
		],
	},
	{
		id: "business",
		title: "Business Website",
		subtitle: "Adds selling & booking tools",
		badge: "Popular",
		price: "$1,600",
		priceNumber: 1600,
		priceSuffix: "Includes Starter features",
		features: [
			"Up to 6 pages",
			"Online store or booking setup",
			"Improved SEO & sitemap",
			"Analytics setup",
			"60 days support",
		],
	},
	{
		id: "advanced",
		title: "Advanced Website",
		subtitle: "Full custom build & integrations",
		price: "$3,200",
		priceNumber: 3200,
		priceSuffix: "Includes all Business features",
		features: [
			"10–20 custom pages",
			"Full store + complex features",
			"Third-party integrations",
			"Advanced SEO strategy",
			"Priority support (90 days)",
		],
	},
];

const ldJson = {
	"@context": "https://schema.org",
	"@type": "ItemList",
	name: "NuTab Digital Web Design Pricing",
	description: "Starter, Business, and Advanced web design packages (limited-time 25% discount applied).",
	itemListElement: bundles.map((b, index) => {
		const discounted = Math.round(b.priceNumber * 0.75);
		return {
			"@type": "Offer",
			position: index + 1,
			name: b.title,
			description: `${b.subtitle}. ${b.features.join(", ")}`,
			price: discounted,
			priceCurrency: "CAD",
			availability: "https://schema.org/InStock",
			url: `https://nutab.ca/pricing#${b.id}`,
			seller: {"@id": "https://nutab.ca/#organization"},
			priceSpecification: {"@type": "UnitPriceSpecification", price: discounted, priceCurrency: "CAD"},
			itemOffered: {"@type": "Service", name: b.title, serviceType: "Web Design and Development", provider: {"@id": "https://nutab.ca/#organization"}},
		};
	}),
};

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "How much does a website cost?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Our web design packages start at $800 for Starter, $1,600 for Business, and $3,200 for Advanced before discount. A limited-time 25% off is currently applied to all displayed prices.",
			},
		},
		{
			"@type": "Question",
			name: "What's included in each package?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Starter includes a simple 3-page mobile-friendly site with a contact form and basic SEO. Business adds more pages, selling or booking tools, improved SEO, analytics and extended support. Advanced adds custom pages, complex store features, integrations, advanced SEO strategy and priority support.",
			},
		},
		{
			"@type": "Question",
			name: "Do you offer payment plans?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Yes, we offer flexible payment options. Contact us to discuss a payment plan that works for your budget.",
			},
		},
		{
			"@type": "Question",
			name: "Can I upgrade my package later?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Absolutely. You can upgrade to a higher tier at any time, and we'll credit your initial investment toward the new package.",
			},
		},
	],
};

export default function PriceChart() {
	return (
		<section
			className="price-chart"
			aria-labelledby="pricing-heading"
			aria-describedby="pricing-desc"
		>
			{/* JSON-LD (consider SSR on the pricing page for best reliability) */}
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
			/>

			<div className="price-chart__intro">
				<h1 className="muted">Simple, transparent pricing</h1>
				<h2 id="pricing-heading">Find your perfect package</h2>
				<h3 id="pricing-desc" className="price-intro">
					All prices are starting points. We'll tailor a solution that matches your
					exact needs.
				</h3>
			</div>

			<div className="price-chart__grid">
				{bundles.map((b) => {
					const discountedRaw = Math.round(b.priceNumber * 0.75);
					const formatPrice = (num: number) =>
						"$" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
					const discountedDisplay = formatPrice(discountedRaw);

					return (
					<article
						key={b.id}
						className={`bundle ${b.badge ? "bundle--popular" : ""}`}
						aria-labelledby={`${b.id}-title`}
						itemScope
						itemType="https://schema.org/Service"
					>
						{b.badge && <span className="bundle__badge">{b.badge}</span>}
							<span className="bundle__promo-badge" aria-label="Limited time 25% off">25% OFF</span>

						<h3 id={`${b.id}-title`} className="bundle__title" itemProp="name">
							{b.title}
						</h3>

						<p className="bundle__subtitle" itemProp="description">
							{b.subtitle}
						</p>

							<div
								className="bundle__price"
								itemProp="offers"
								itemScope
								itemType="https://schema.org/Offer"
							>
								<span className="bundle__price-from">Starting from</span>
								<meta itemProp="priceCurrency" content="CAD" />
								<meta itemProp="url" content="https://nutab.ca/pricing" />
								<meta itemProp="availability" content="https://schema.org/InStock" />
								<span
									className="bundle__price-amount bundle__price-original"
									aria-label={`Original price ${b.price}`}
								>
									{b.price}
								</span>
								<span
									className="bundle__price-amount bundle__price-discounted"
									itemProp="price"
									content={String(discountedRaw)}
									aria-label={`Discounted price ${discountedDisplay}`}
								>
									{discountedDisplay}
								</span>
								{b.priceSuffix && (
									<span className="bundle__price-suffix">{b.priceSuffix}</span>
								)}
							</div>

						<ul
							className="bundle__features"
							aria-label={`${b.title} features`}
						>
							{b.features.map((f, i) => (
								<li key={i}>{f}</li>
							))}
						</ul>

						<div className="bundle__cta">
							<GetQuoteButton />
						</div>
						</article>
					);
					})}
			</div>
		</section>
	);
};