import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KDT Restaurant | Portfolio | NuTab Digital",
  description:
    "Explore how NuTab Digital created a modern, appetizing website for KDT Restaurant featuring online ordering and an elegant menu showcase.",
  keywords: [
    "KDT Restaurant website",
    "Calgary restaurant website design",
    "restaurant web development",
    "online menu website",
    "Calgary web development case study",
  ],
  alternates: {
    canonical: "https://nutab.ca/portfolio/kdt-restaurant",
  },
  openGraph: {
    title: "KDT Restaurant | Portfolio | NuTab Digital",
    description:
      "Explore how NuTab Digital created a modern website for KDT Restaurant with online ordering and elegant design.",
    url: "https://nutab.ca/portfolio/kdt-restaurant",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-portfolio.webp",
        width: 1200,
        height: 800,
        alt: "KDT Restaurant Website by NuTab Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KDT Restaurant | Portfolio | NuTab Digital",
    description:
      "Restaurant website case study: Modern design with online ordering features.",
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
