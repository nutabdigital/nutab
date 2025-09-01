import type { Metadata } from "next"; // Type import from Next.js to type-check metadata.
import "./styles/globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { SectionProvider } from "../app/context/SectionContext"; // Import SectionProvider if using context for currentSection
import dynamic from "next/dynamic";
import Header from "./components/Header/Header"; // Import Header component
import Footer from "./components/Footer/Footer"; // Import Footer component

// Dynamically import the ModelWrapper component
const ModelWrapper = dynamic(() => import("./context/ModelWrapper"), { ssr: false });

export const metadata: Metadata = {
  title: "Software Development Calgary Alberta - Custom Solutions | NuTab Digital",
  description:
    "Leading software development company in Calgary, Alberta. NuTab Digital specializes in custom software solutions, mobile & web app development, SEO & digital marketing, and e-commerce development. Expert Calgary software developers delivering tailored solutions for businesses.",
  keywords:
    "software development Calgary, software development Calgary Alberta, custom software development, Calgary software company, Alberta software developers, mobile app development Calgary, web app development Calgary, SEO digital marketing Calgary, e-commerce development Calgary, NuTab Digital, software solutions Calgary, Calgary tech company, Alberta software development",
  robots: "index, follow",
};

// Define structured data as a JavaScript object
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://nutab.ca/#organization",
  "name": "NuTab Digital",
  "alternateName": "NuTab Digital Software Development",
  "url": "https://nutab.ca",
  "logo": "https://nutab.ca/icons/logo-light.svg",
  "image": "https://nutab.ca/photos/nutab-logo.png",
  "description": "Leading software development company in Calgary, Alberta specializing in custom software solutions, mobile & web app development, SEO & digital marketing, and e-commerce development.",
  "slogan": "Open a New Tab, Start Something Extraordinary",
  "foundingDate": "2023",
  "telephone": "+1-587-707-2495",
  "email": "info@nutab.ca",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.0447,
    "longitude": -114.0719
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Calgary",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Alberta"
      }
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Alberta"
    },
    {
      "@type": "Country",
      "name": "Canada"
    }
  ],
  "serviceType": "Software Development",
  "knowsAbout": [
    "Software Development",
    "Custom Software Solutions", 
    "Mobile App Development",
    "Web App Development",
    "SEO & Digital Marketing",
    "E-commerce Development",
    "Calgary Software Development",
    "Alberta Software Development"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-587-707-2495",
    "contactType": "Customer Service",
    "areaServed": "Calgary, Alberta",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://nutab.ca"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development",
          "description": "We create custom software that streamlines operations and boosts efficiency, tailored to your business needs.",
          "serviceType": "Software Development",
          "areaServed": "Calgary, Alberta"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile & Web App Development",
          "description": "We create user-friendly apps that provide seamless experiences and help businesses engage customers.",
          "serviceType": "Application Development",
          "areaServed": "Calgary, Alberta"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "SEO & Digital Marketing",
          "description": "Enhance online visibility and attract customers with SEO and targeted digital marketing strategies.",
          "serviceType": "Digital Marketing",
          "areaServed": "Calgary, Alberta"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-Commerce Development", 
          "description": "Build scalable e-commerce sites with seamless shopping experiences, secure payments, and inventory management.",
          "serviceType": "E-commerce Development",
          "areaServed": "Calgary, Alberta"
        }
      }
    ]
  }
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
          content="Leading software development company in Calgary, Alberta. NuTab Digital specializes in custom software solutions, mobile & web app development, SEO & digital marketing, and e-commerce development. Expert Calgary software developers delivering tailored solutions for businesses."
        />
        <meta
          name="keywords"
          content="software development Calgary, software development Calgary Alberta, custom software development, Calgary software company, Alberta software developers, mobile app development Calgary, web app development Calgary, SEO digital marketing Calgary, e-commerce development Calgary, NuTab Digital, software solutions Calgary, Calgary tech company, Alberta software development"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Software Development Calgary Alberta - Custom Solutions | NuTab Digital" />
        <meta property="og:description" content="Leading software development company in Calgary, Alberta. NuTab Digital specializes in custom software solutions, mobile & web app development, SEO & digital marketing, and e-commerce development. Expert Calgary software developers delivering tailored solutions for businesses." />
        <meta property="og:image" content="https://nutab.ca/photos/nutab-logo.png" />
        <meta property="og:url" content="https://nutab.ca" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Development Calgary Alberta - Custom Solutions | NuTab Digital" />
        <meta name="twitter:description" content="Leading software development company in Calgary, Alberta. NuTab Digital specializes in custom software solutions, mobile & web app development, SEO & digital marketing, and e-commerce development. Expert Calgary software developers delivering tailored solutions for businesses." />
        <meta name="twitter:image" content="https://nutab.ca/photos/nutab-logo.png" />

        {/* Properly insert JSON-LD structured data to avoid hydration issues */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BSE95BQFCB"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BSE95BQFCB');
            `,
          }}
        />

        {/* Security Meta Tags */}

        {/* Prevent MIME type sniffing */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />

        {/* Prevent clickjacking by disallowing the site to be embedded in an iframe */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />

        {/* Enable browser's built-in XSS protection */}
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Enforce HTTPS and prevent protocol downgrade attacks */}
        <meta httpEquiv="Strict-Transport-Security" content="max-age=63072000; includeSubDomains; preload" />

        {/* <meta
          http-equiv="Content-Security-Policy"
          content="
            default-src 'self'; 
            script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; 
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
            font-src 'self' https://fonts.gstatic.com; 
            img-src 'self'; 
            connect-src 'self' https://www.google-analytics.com; 
            form-action 'self';
          "
        /> */}
      </head>
      <body>
        <ThemeProvider>
          <SectionProvider>
            <Header />
            {/* Render the Model component */}
            <ModelWrapper />
            {/* Render the page content */}
            {children}
            <Footer />
          </SectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
