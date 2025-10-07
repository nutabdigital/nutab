import type { Metadata } from "next"; // Type import from Next.js to type-check metadata.
import "./styles/globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { SectionProvider } from "./context/SectionContext"; // Import SectionProvider if using context for currentSection
import dynamic from "next/dynamic";
import Header from "./components/Header/Header"; // Import Header component
import Footer from "./components/Footer/Footer"; // Import Footer component

// Dynamically import the ModelWrapper component
const ModelWrapper = dynamic(() => import("./context/ModelWrapper"), { ssr: false });

export const metadata: Metadata = {
  title: "NuTab Digital - Custom Software Development in Calgary, Alberta",
  description:
    "NuTab Digital offers custom software solutions, mobile & web app development, SEO & digital marketing, and e-commerce development in Calgary, Alberta. We provide tailored software solutions for businesses and individuals.",
  keywords:
    "custom software solutions, mobile app development, web app development, SEO, digital marketing, e-commerce development, Calgary, Alberta, NuTab Digital, software company Calgary, software development Calgary",
  robots: "index, follow",
};

// Define structured data as JavaScript objects
const structuredDataOrganization = {
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
      "name": "Custom Software Solutions",
      "url": "https://nutab.ca#custom-software",
      "description": "We create custom software that streamlines operations and boosts efficiency, tailored to your business needs.",
      "keywords": "custom software solutions, enterprise software, SaaS solutions, bespoke applications"
    },
    {
      "@type": "Organization",
      "name": "Mobile & Web App Development",
      "url": "https://nutab.ca#app-development",
      "description": "We create user-friendly apps that provide seamless experiences and help businesses engage customers.",
      "keywords": "mobile app development, web app development, iOS development, Android development, user engagement, mobile experiences"
    },
    {
      "@type": "Organization",
      "name": "SEO & Digital Marketing",
      "url": "https://nutab.ca#seo-digital-marketing",
      "description": "Enhance online visibility and attract customers with SEO and targeted digital marketing strategies.",
      "keywords": "SEO, digital marketing, online visibility, customer attraction, targeted marketing"
    },
    {
      "@type": "Organization",
      "name": "E-Commerce Development",
      "url": "https://nutab.ca#ecommerce-development",
      "description": "Build scalable e-commerce sites with seamless shopping experiences, secure payments, and inventory management.",
      "keywords": "e-commerce development, scalable e-commerce, shopping experiences, secure payments, inventory management"
    }
  ]
};

// const structuredDataWebSite = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   "name": "NuTab Digital",
//   "url": "https://nutab.ca",
//   "potentialAction": {
//     "@type": "SearchAction",
//     "target": "https://nutab.ca/search?q={search_term_string}",
//     "query-input": "required name=search_term_string"
//   }
// };

const structuredDataLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NuTab Digital",
  "image": "https://nutab.ca/photos/nutab-logo.webp",
  "telephone": "+1-587-707-2495",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "addressCountry": "CA"
  },
  "url": "https://nutab.ca",
  "priceRange": "$$"
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
          content="NuTab Digital offers custom software solutions, mobile & web app development, SEO & digital marketing, and e-commerce development in Calgary, Alberta. We provide tailored software solutions for businesses and individuals."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="NuTab Digital - Custom Software Development in Calgary, Alberta" />
        <meta property="og:description" content="NuTab Digital offers custom software solutions, mobile & web app development, SEO & digital marketing, and e-commerce development in Calgary, Alberta. We provide tailored software solutions for businesses and individuals." />
        <meta property="og:image" content="https://nutab.ca/photos/nutab-logo.webp" />
        <meta property="og:url" content="https://nutab.ca" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NuTab Digital - Custom Software Development in Calgary, Alberta" />
        <meta name="twitter:description" content="NuTab Digital offers custom software solutions, mobile & web app development, SEO & digital marketing, and e-commerce development in Calgary, Alberta. We provide tailored software solutions for businesses and individuals." />
        <meta name="twitter:image" content="https://nutab.ca/photos/nutab-logo.webp" />

        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOrganization) }}
        />
        {/* Structured Data: WebSite */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataWebSite) }}
        /> */}
        {/* Structured Data: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataLocalBusiness) }}
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

      </head>
      <body>
        <ThemeProvider>
          <SectionProvider>
            <Header />
            <ModelWrapper />
            {children}
            <Footer />
          </SectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
