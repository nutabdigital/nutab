import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "King's Eye Towing | Portfolio | NuTab Digital",
  description:
    "Explore how NuTab Digital created a professional towing service website for King's Eye Towing with 24/7 availability and quick contact features.",
  keywords: [
    "King's Eye Towing website",
    "Calgary towing website design",
    "towing service web development",
    "emergency service website",
    "Calgary web development case study",
  ],
  alternates: {
    canonical: "https://nutab.ca/portfolio/kingseye-towing",
  },
  openGraph: {
    title: "King's Eye Towing | Portfolio | NuTab Digital",
    description:
      "Explore how NuTab Digital created a professional website for King's Eye Towing with 24/7 emergency contact features.",
    url: "https://nutab.ca/portfolio/kingseye-towing",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-portfolio.webp",
        width: 1200,
        height: 800,
        alt: "King's Eye Towing Website by NuTab Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "King's Eye Towing | Portfolio | NuTab Digital",
    description:
      "Towing service website case study: Professional design with 24/7 emergency features.",
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
