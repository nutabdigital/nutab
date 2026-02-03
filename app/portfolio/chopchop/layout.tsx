import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChopChop Barber Shop | Portfolio | NuTab Digital",
  description:
    "See how NuTab Digital transformed ChopChop Barber Shop's website from a slow Squarespace site to a blazing-fast Next.js application with perfect PageSpeed scores.",
  keywords: [
    "ChopChop Barber Shop website",
    "Calgary barber website design",
    "Squarespace to Next.js migration",
    "website performance optimization",
    "Calgary web development case study",
  ],
  alternates: {
    canonical: "https://nutab.ca/portfolio/chopchop",
  },
  openGraph: {
    title: "ChopChop Barber Shop | Portfolio | NuTab Digital",
    description:
      "See how NuTab Digital transformed ChopChop Barber Shop's website with a complete redesign and migration to Next.js.",
    url: "https://nutab.ca/portfolio/chopchop",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-portfolio.webp",
        width: 1200,
        height: 800,
        alt: "ChopChop Barber Shop Website Transformation",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChopChop Barber Shop | Portfolio | NuTab Digital",
    description:
      "Website transformation case study: From Squarespace to Next.js with perfect PageSpeed scores.",
    images: ["https://nutab.ca/photos/og-portfolio.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
};

export default function ChopChopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
