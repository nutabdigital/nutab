import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Portfolio | Calgary SEO & Digital Marketing | NuTab Digital",
  description:
    "Explore NuTab Digital's portfolio of Calgary web development, SEO optimization, and digital marketing projects. See how our expert team transforms local businesses with custom websites, perfect PageSpeed scores, and results-driven marketing strategies.",
  keywords: [
    "Calgary web development portfolio",
    "Calgary SEO company",
    "web design agency Alberta",
    "digital marketing Calgary",
    "website development case studies",
    "small business web design Calgary",
    "SEO optimization services",
    "professional website examples",
    "local business marketing Alberta",
    "custom web development",
  ],
  alternates: {
    canonical: "https://nutab.ca/portfolio",
  },
  openGraph: {
    title: "Portfolio | Calgary Web Development Projects | NuTab Digital",
    description:
      "Explore NuTab Digital's portfolio of Calgary web development projects. See how we've transformed businesses with custom websites, apps, and digital solutions.",
    url: "https://nutab.ca/portfolio",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-portfolio.webp",
        width: 1200,
        height: 800,
        alt: "NuTab Digital Portfolio - Calgary Web Development Projects",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Calgary Web Development Projects | NuTab Digital",
    description:
      "Explore NuTab Digital's portfolio of Calgary web development projects showcasing real results.",
    images: ["https://nutab.ca/photos/og-portfolio.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="portfolio-root">{children}</div>;
}
