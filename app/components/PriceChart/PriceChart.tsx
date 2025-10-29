"use client";

import React from "react";
import "./PriceChart.css";
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton";

const bundles = [
	{
		id: "essential",
		title: "Essential Site",
		subtitle: "Ideal for solo entrepreneurs",
		price: "$899",
		priceNumber: 899,
		priceSuffix: "",
		features: [
			"Up to 3 professionally designed pages",
			"Mobile-optimized design",
			"Contact & inquiry forms",
			"Basic SEO setup",
			"30 days of post-launch support & bug fixes",
		],
	},
	{
		id: "growth",
		title: "Growth Site",
		subtitle: "For expanding businesses",
		badge: "Optimal",
		price: "$1,799",
		priceNumber: 1799,
		priceSuffix: "Includes everything from the Essential plan",
		features: [
			"Up to 5 content-rich pages",
			"E-commerce setup with product catalog",
			"Booking / order intake integration",
			"SEO optimization & sitemap",
			"Google Analytics setup",
			"90 days of post-launch support & bug fixes",
		],
	},
	{
		id: "enterprise-pro",
		title: "Enterprise Pro",
		subtitle: "For market leaders",
		price: "$3,599",
		priceNumber: 3599,
		priceSuffix: "Includes everything from the Growth and Essential plans",
		features: [
			"10–20 custom pages with tailored layouts",
			"Robust e-commerce platform",
			"Third-party integrations & APIs",
			"Comprehensive SEO strategy",
			"Advanced analytics & reporting",
			"Priority onboarding & support",
		],
	},
];

const ldJson = {
	"@context": "https://schema.org",
	"@type": "ItemList", // Changed from OfferCatalog - better for Google in 2025
	name: "NuTab Digital Web Design Pricing",
	description: "Transparent web design packages with clear deliverables",
	itemListElement: bundles.map((b, index) => ({
		"@type": "Offer",
		position: index + 1,
		name: b.title,
		description: `${b.subtitle}. ${b.features.join(", ")}`,
		price: b.priceNumber,
		priceCurrency: "CAD",
		availability: "https://schema.org/InStock",
		url: `https://nutab.ca/pricing#${b.id}`,
		seller: {
			"@type": "Organization",
			name: "NuTab Digital",
			url: "https://nutab.ca",
		},
		priceSpecification: {
			"@type": "UnitPriceSpecification",
			price: b.priceNumber,
			priceCurrency: "CAD",
			// REMOVE: valueAddedTaxIncluded - unnecessary
		},
		itemOffered: {
			"@type": "Service",
			name: b.title,
			serviceType: "Web Design and Development",
			provider: {
				"@type": "Organization",
				name: "NuTab Digital",
			},
		},
	})),
};

const breadcrumbJson = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: "https://nutab.ca",
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "Pricing",
			item: "https://nutab.ca/pricing",
		},
	],
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
				text: "Our web design packages start at $899 for Essential, $1,799 for Growth, and $3,599 for Enterprise Pro. All prices are starting points and can be customized to your specific needs.",
			},
		},
		{
			"@type": "Question",
			name: "What's included in each package?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Each package includes professionally designed pages, mobile optimization, SEO setup, and post-launch support. Higher tiers add e-commerce, analytics, integrations, and extended support periods.",
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

const PriceChart: React.FC = () => {
	return (
		<section
			className="price-chart"
			aria-labelledby="pricing-heading"
			aria-describedby="pricing-desc"
		>
			<script
				type="application/ld+json"
				// JSON-LD included for rich snippet guidance
				dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
				{bundles.map((b) => (
					<article
						key={b.id}
						className={`bundle ${b.badge ? "bundle--popular" : ""}`}
						aria-labelledby={`${b.id}-title`}
						itemScope
						itemType="https://schema.org/Service"
					>
						{b.badge && <span className="bundle__badge">{b.badge}</span>}

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
							<meta itemProp="url" content="https://nutab.ca/pricing" /> {/* Fixed URL */}
							<meta itemProp="availability" content="https://schema.org/InStock" />
							<span
								className="bundle__price-amount"
								itemProp="price"
								content={String(b.priceNumber)}
							>
								{b.price}
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
				))}
			</div>
		</section>
	);
};

export default PriceChart;