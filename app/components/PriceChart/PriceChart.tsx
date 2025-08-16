"use client";

import React from "react";
import "./PriceChart.css";
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton";

const bundles = [
	{
		id: "essential",
		title: "Essential Site",
		subtitle: "Ideal for solo entrepreneurs",
		price: "$897",
		priceNumber: 897,
		priceSuffix: "/one-time",
		features: [
			"Up to 3 polished pages",
			"Responsive on all devices",
			"Contact & inquiry forms",
			"Basic on-page SEO",
		],
	},
	{
		id: "growth",
		title: "Growth Site",
		subtitle: "For expanding businesses",
		badge: "Popular",
		price: "$1,797",
		priceNumber: 1797,
		priceSuffix: "/one-time",
		features: [
			"Up to 5 content-rich pages",
			"Simple e‑commerce or shop setup",
			"Booking / order intake integration",
			"Enhanced SEO & indexing",
			"Basic analytics configuration",
		],
	},
	{
		id: "enterprise-pro",
		title: "Enterprise Pro",
		subtitle: "Full-stack digital platform",
		price: "$3,597",
		priceNumber: 3597,
		priceSuffix: "/one-time",
		features: [
			"10+ pages with custom layouts",
			"Robust e‑commerce platform",
			"Third‑party integrations & APIs",
			"Advanced analytics & reporting",
			"Priority onboarding & support",
		],
	},
];

const ldJson = {
	"@context": "https://schema.org",
	"@type": "OfferCatalog",
	name: "NuTab Digital — Pricing Bundles",
	itemListElement: bundles.map((b, index) => ({
		"@type": "Offer",
		name: b.title,
		description: b.subtitle + " — includes: " + b.features.join("; "),
		price: b.priceNumber,
		priceCurrency: "CAD",
		url: "/#contact",
		position: index + 1,
	})),
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

			<div className="price-chart__intro">
				<p className="muted">Clear, predictable pricing</p>
				<h2 id="pricing-heading">Pick the plan that matches your goals</h2>
				<p id="pricing-desc" className="price-intro">
					Starting-from pricing shown below. Each plan is tailored for
					different stages of growth — contact us for a custom scope and exact
					quote.
				</p>
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
							<meta itemProp="url" content="/#contact" />
							<span
								className="bundle__price-amount"
								itemProp="price"
								content={String(b.priceNumber)}
								aria-hidden="false"
							>
								{b.price}
							</span>
							<span className="bundle__price-suffix">{b.priceSuffix}</span>
						</div>

						<ul
							className="bundle__features"
							aria-label={`${b.title} features`}
						>
							{b.features.map((f, i) => (
								<li key={i} itemProp="serviceOutput">
									{f}
								</li>
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