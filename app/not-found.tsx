import type { Metadata } from "next";
import Link from "next/link";
import Background from "./components/Background/Background";
import "./styles/page.css";

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
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="min-h-[70vh] flex items-center justify-center px-4 py-8 relative mt-20"
    >
      <Background />

      <div
        role="region"
        aria-labelledby="nf-title"
        className="bg-white text-slate-900 rounded-[16px] shadow-[0_10px_30px_rgba(3,3,3,0.15)] p-6 max-w-[720px] w-full text-center border border-[rgba(3,3,3,0.06)] relative z-20 dark:bg-[#0b0b0b] dark:text-white dark:border-[rgba(255,255,255,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        <h1
          id="nf-title"
          className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent m-0"
        >
          Page not found
        </h1>

        <p className="text-base opacity-90 mb-4">The page you&apos;re looking for doesn&apos;t exist.</p>

        <Link href="/" aria-label="Go to homepage" className="block">
          <img
            src="/photos/og-home.webp"
            alt="NuTab Digital homepage preview"
            width={480}
            height={320}
            className="mx-auto max-w-full h-auto rounded-lg shadow-[0_6px_20px_rgba(0,0,0,0.2)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.5)]"
          />
        </Link>

        <div className="mt-4">
          <Link
            href="/"
            className="inline-block px-3 py-2 rounded-[10px] text-white bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] shadow-[0_8px_18px_rgba(96,165,250,0.35)] transition-transform duration-150 hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(96,165,250,0.4)] dark:shadow-[0_8px_18px_rgba(147,51,234,0.35)]"
            aria-label="Return to homepage"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
