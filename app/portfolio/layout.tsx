import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Calgary Web Development Projects | NuTab Digital",
  description:
    "Explore NuTab Digital's portfolio of Calgary web development projects. See how we've transformed businesses with custom websites, apps, and digital solutions. Real results, real clients.",
  keywords: [
    "Calgary web development portfolio",
    "website projects Calgary",
    "web design examples Alberta",
    "NuTab Digital portfolio",
    "Calgary software development case studies",
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
  return <>{children}</>;
}
