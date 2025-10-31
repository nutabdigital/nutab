import type { Metadata } from "next";
import Background from "../components/Background/Background";
import ServicesSummary from "../components/ServicesSummary/Services";
import "./page.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | NuTab Digital",
  description: "Explore NuTab Digital services.",
  alternates: { canonical: "https://nutab.ca/services" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Services | NuTab Digital",
    description: "Explore NuTab Digital services.",
    url: "https://nutab.ca/services",
    siteName: "NuTab Digital",
    images: [{ url: "https://nutab.ca/photos/og-home.jpg", width: 1200, height: 800, alt: "NuTab Digital services" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | NuTab Digital",
    description: "Explore NuTab Digital services.",
    images: ["https://nutab.ca/photos/og-home.jpg"],
  },
};

export default function ServicesIndex() {
  return (
    <>
      <Background />

      {/* Visible breadcrumbs (SSR) */}
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li aria-current="page">Services</li>
        </ol>
      </nav>

      {/* Breadcrumb JSON-LD (matches visible trail) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://nutab.ca/services#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://nutab.ca" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://nutab.ca/services" },
            ],
          }),
        }}
      />

      <div className="services-summary-wrapper">
        <ServicesSummary />
      </div>
    </>
  );
}
