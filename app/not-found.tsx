import type { Metadata } from "next";
import Link from "next/link";
import Background from "./components/Background/Background";
import "./styles/page.css";
import "./not-found.css";

export const metadata: Metadata = {
  title: "Page Not Found | NuTab Digital",
  description: "The page you're looking for doesn't exist. Return to NuTab Digital's homepage to explore our custom software, web development, and SEO services in Calgary.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Page Not Found | NuTab Digital",
    description: "The page you're looking for doesn't exist. Return to NuTab Digital's homepage.",
    url: "https://nutab.ca/404",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-home.webp",
        width: 1200,
        height: 800,
        alt: "NuTab Digital - Calgary Software Development",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | NuTab Digital",
    description: "The page you're looking for doesn't exist. Return to NuTab Digital's homepage.",
    images: ["https://nutab.ca/photos/og-home.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
};

export default function NotFound() {
  return (
    <main id="main-content" role="main" tabIndex={-1} className="not-found">
      <Background />
      <div className="not-found-card" role="region" aria-labelledby="nf-title">
        <h1 id="nf-title" className="not-found-title">Page not found</h1>
        <p className="not-found-subtitle">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" aria-label="Go to homepage" className="not-found-link">
          <img
            src="/photos/og-home.webp"
            alt="NuTab Digital homepage preview"
            width={480}
            height={320}
            className="not-found-image"
          />
        </Link>
        <div className="not-found-actions">
          <Link href="/" className="btn-home" aria-label="Return to homepage">
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
