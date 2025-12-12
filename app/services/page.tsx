import type { Metadata } from "next";
import Background from "../components/Background/Background";
import ServicesSummary from "../components/ServicesSummary/Services";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import "./page.css";

export const generateMetadata = (): Metadata => ({
  title: "Digital Services | Web Development, SEO & More | NuTab Digital Calgary",
  description: "Explore NuTab Digital's full range of services in Calgary: custom software development, mobile & web apps, SEO & digital marketing, e-commerce, AI automation, IT consulting, brand design, and photography.",
  keywords: ["Calgary software development", "web design Calgary", "SEO services Alberta", "custom software Calgary", "app development Calgary", "digital marketing Calgary"],
  robots: "index, follow",
  alternates: { canonical: "https://nutab.ca/services" },
  openGraph: {
    title: "Digital Services | Web Development, SEO & More | NuTab Digital Calgary",
    description: "Explore NuTab Digital's full range of services in Calgary: custom software, apps, SEO, e-commerce, AI, IT consulting, brand design, and photography.",
    url: "https://nutab.ca/services",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-services.webp",
        width: 1200,
        height: 800,
        alt: "NuTab Digital services - Custom Software, Web Development, SEO in Calgary",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services | Web Development, SEO & More | NuTab Digital Calgary",
    description: "Explore NuTab Digital's full range of services in Calgary: custom software, apps, SEO, e-commerce, AI, IT consulting, brand design, and photography.",
    images: ["https://nutab.ca/photos/og-services.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
});

export default function ServicesIndex() {
  return (
    <main id="main-content" role="main" tabIndex={-1}>
      {/* tabIndex={-1} enables programmatic focus; no visual rendering */}
      <Background />

      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* JSON-LD below is machine-readable only; it does not render anything visually */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://nutab.ca/services#breadcrumb",
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
                name: "Services",
                item: "https://nutab.ca/services",
              },
            ],
          }),
        }}
      />

      {/* Visually hidden H1 for SEO - visible heading is in ServicesSummary */}
      <h1 className="sr-only">Digital Services in Calgary - Web Development, SEO & More</h1>

      <div className="services-summary-wrapper">
        <ServicesSummary />
      </div>
    </main>
  );
}
