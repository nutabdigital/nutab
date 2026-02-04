import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "King's Eye Towing Website | Calgary Web Development & Local SEO | NuTab Digital",
  description:
    "Calgary web development case study: NuTab Digital built a professional, SEO-optimized website for King's Eye Towing with 24/7 availability, quick contact features, and local search optimization for emergency services.",
  keywords: [
    "Calgary web development",
    "towing company website design",
    "Calgary web design services",
    "local SEO Calgary",
    "service business website development",
    "emergency service web design",
    "small business SEO Alberta",
    "professional website development",
    "mobile-first website design",
    "local business digital marketing",
  ],
  alternates: {
    canonical: "https://nutab.ca/portfolio/kingseye-towing",
  },
  openGraph: {
    title: "King's Eye Towing Website | Calgary Web Development & Local SEO",
    description:
      "See how NuTab Digital's web development and local SEO expertise created a professional, high-converting website for King's Eye Towing.",
    url: "https://nutab.ca/portfolio/kingseye-towing",
    siteName: "NuTab Digital - Calgary Web Development",
    images: [
      {
        url: "https://nutab.ca/photos/og-portfolio.webp",
        width: 1200,
        height: 800,
        alt: "King's Eye Towing Website by NuTab Digital Calgary",
      },
    ],
    locale: "en_CA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "King's Eye Towing | Calgary Web Development Case Study",
    description:
      "Service business website case study: Professional SEO-optimized design with 24/7 emergency features. Calgary web development expertise.",
    images: ["https://nutab.ca/photos/og-portfolio.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
};

export default function KingseyeTowingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
