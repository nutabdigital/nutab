import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChopChop Barber Shop Website Redesign | Calgary Web Development",
  description:
    "Calgary web development case study: NuTab Digital transformed ChopChop Barber Shop from a slow Squarespace site to a blazing-fast Next.js application with perfect PageSpeed 100 scores. Expert SEO optimization and modern web design.",
  keywords: [
    "Calgary web development",
    "Calgary web design company",
    "barber shop website design",
    "Squarespace to Next.js migration",
    "website performance optimization Calgary",
    "SEO optimization Alberta",
    "small business web development",
    "professional website redesign",
    "PageSpeed optimization",
    "local business SEO Calgary",
  ],
  alternates: {
    canonical: "https://nutab.ca/portfolio/chopchop",
  },
  openGraph: {
    title: "ChopChop Barber Shop Website Redesign | Calgary Web Development",
    description:
      "See how NuTab Digital's web development and SEO expertise transformed ChopChop Barber Shop's online presence with a complete redesign achieving perfect PageSpeed scores.",
    url: "https://nutab.ca/portfolio/chopchop",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-portfolio.webp",
        width: 1200,
        height: 800,
        alt: "ChopChop Barber Shop Website Transformation by NuTab Digital Calgary",
      },
    ],
    locale: "en_CA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChopChop Barber Shop | Calgary Web Development Case Study",
    description:
      "Website transformation: From Squarespace to Next.js with perfect PageSpeed 100 scores. Calgary web development expertise.",
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
