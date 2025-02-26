import type { Metadata } from "next"; // Type import from Next.js to type-check metadata.
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "NuTab Digital - Custom Software Development in Calgary, Alberta",
  description:
    "NuTab Digital offers custom software development, mobile app development, web development, and cloud solutions in Calgary, Alberta. We provide tailored software solutions for businesses and individuals.",
  keywords:
    "custom software development, mobile app development, web development, cloud solutions, Calgary, Alberta, NuTab Digital, software company Calgary, software development Calgary",
  robots: "index, follow",
};

// Define structured data as a JavaScript object
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NuTab Digital",
  "url": "https://nutab.ca",
  "logo": "https://nutab.ca/icons/logo-light.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-587-707-2495",
    "contactType": "Customer Service",
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "addressCountry": "CA",
  },
  "department": [
    {
      "@type": "Organization",
      "name": "Custom Software Development",
      "url": "https://nutab.ca#custom-software",
      "description": "We create tailored software solutions that meet the unique needs of your business."
    },
    {
      "@type": "Organization",
      "name": "Mobile App Development",
      "url": "https://nutab.ca#mobile-app",
      "description": "Our team specializes in developing user-friendly mobile applications for iOS and Android."
    },
    {
      "@type": "Organization",
      "name": "Web Development",
      "url": "https://nutab.ca#web-development",
      "description": "We design and build responsive websites that provide seamless user experiences."
    },
    {
      "@type": "Organization",
      "name": "Cloud Solutions",
      "url": "https://nutab.ca#cloud-solutions",
      "description": "We offer cloud-based solutions that enhance efficiency and scale with your business."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tomorrow:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="NuTab Digital offers custom software development, mobile app development, web development, and cloud solutions in Calgary, Alberta. We provide tailored software solutions for businesses and individuals."
        />
        <meta
          name="keywords"
          content="custom software development, mobile app development, web development, cloud solutions, Calgary, Alberta, NuTab Digital, software company Calgary, software development Calgary"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="NuTab Digital - Custom Software Development in Calgary, Alberta" />
        <meta property="og:description" content="NuTab Digital offers custom software development, mobile app development, web development, and cloud solutions in Calgary, Alberta. We provide tailored software solutions for businesses and individuals." />
        <meta property="og:image" content="https://nutab.ca/photos/nutab-logo.png" />
        <meta property="og:url" content="https://nutab.ca" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />


        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NuTab Digital - Custom Software Development in Calgary, Alberta" />
        <meta name="twitter:description" content="NuTab Digital offers custom software development, mobile app development, web development, and cloud solutions in Calgary, Alberta. We provide tailored software solutions for businesses and individuals." />
        <meta name="twitter:image" content="https://nutab.ca/photos/nutab-logo.png" />

        {/* Properly insert JSON-LD structured data to avoid hydration issues */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
