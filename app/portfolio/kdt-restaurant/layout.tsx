import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KDT Restaurant Website Design | Calgary Web Development & SEO",
  description:
    "Calgary web development case study: NuTab Digital designed a modern, SEO-optimized website for KDT Restaurant featuring online menu and mobile-first responsive design. Expert restaurant marketing solutions.",
  keywords: [
    "Calgary web development",
    "restaurant website design Calgary",
    "Calgary web design agency",
    "restaurant SEO optimization",
    "online menu website development",
    "mobile-first web design",
    "local business marketing Calgary",
    "small business website Alberta",
    "professional web development services",
    "restaurant digital marketing",
  ],
  alternates: {
    canonical: "https://nutab.ca/portfolio/kdt-restaurant",
  },
  openGraph: {
    title: "KDT Restaurant Website Design | Calgary Web Development & SEO",
    description:
      "See how NuTab Digital's web development and digital marketing expertise created a stunning, SEO-optimized website for KDT Restaurant.",
    url: "https://nutab.ca/portfolio/kdt-restaurant",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-portfolio.webp",
        width: 1200,
        height: 800,
        alt: "KDT Restaurant Website by NuTab Digital Calgary",
      },
    ],
    locale: "en_CA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "KDT Restaurant | Calgary Web Development Case Study",
    description:
      "Restaurant website case study: Modern SEO-optimized design with mobile-first approach. Calgary web development expertise.",
    images: ["https://nutab.ca/photos/og-portfolio.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
};

export default function KDTRestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
