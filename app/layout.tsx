import type { Metadata } from "next"; // Type import from Next.js to type-check metadata.
import "./styles/globals.css";
import dynamic from "next/dynamic";
import AppClientProviders from "./AppClientProviders";
import { Tomorrow } from "next/font/google";

// Dynamically import the ModelWrapper component
const ModelWrapper = dynamic(() => import("./context/ModelWrapper"), { ssr: false });

export const metadata: Metadata = {
  title: "NuTab Digital - Custom Software Development | Calgary",
  description:
    "Custom software solutions, mobile & web app development, SEO & digital marketing, and e-commerce development in Calgary, Alberta.",
  robots: "index, follow",
  openGraph: {
    title: "NuTab Digital - Custom Software Development | Calgary",
    description: "Custom software solutions, mobile & web app development, SEO & digital marketing in Calgary, Alberta.",
    url: "https://nutab.ca",
    siteName: "NuTab Digital",
    images: [{
      url: "https://nutab.ca/photos/og-home.jpg", // Updated path
      width: 1200,
      height: 800,
      alt: "NuTab Digital - Calgary Software Development"
    }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NuTab Digital - Custom Software Development | Calgary",
    description: "Custom software solutions in Calgary, Alberta.",
    images: ["https://nutab.ca/photos/og-home.jpg"], // Updated path
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
};

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // Can optimize by deleting unused
  display: "swap",
});


// Define structured data as a JavaScript object
const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://nutab.ca/#organization",
  "name": "NuTab Digital",
  "url": "https://nutab.ca",
  "logo": "https://nutab.ca/icons/logo-light.svg",
  "image": "https://nutab.ca/photos/og-home.jpg",
  "telephone": "+1-587-707-2495",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "addressCountry": "CA",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-587-707-2495",
    "contactType": "customer service",
    "areaServed": "CA",
    "availableLanguage": ["en"],
  },
  "sameAs": [
    "https://www.instagram.com/nutab_digital/",
    "https://twitter.com/NuTabDigital",
    "https://www.facebook.com/profile.php?id=61575073651409",
    "https://www.linkedin.com/company/nutab-digital-inc/"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Canada"
  },
  "priceRange": "$$",
  "makesOffer": [
    {
      "@type": "Offer",
      "url": "https://nutab.ca/services/custom-software",
      "itemOffered": {
        "@type": "Service",
        "name": "Custom Software Development",
        "description": "Tailored custom software that streamlines operations and boosts efficiency for businesses.",
        "serviceType": "Software Development",
        "provider": {
          "@type": "Organization",
          "name": "NuTab Digital"
        }
      }
    },
    {
      "@type": "Offer",
      "url": "https://nutab.ca/services/mobile-web-app-development",
      "itemOffered": {
        "@type": "Service",
        "name": "Mobile & Web App Development",
        "description": "User-friendly mobile and web applications that provide seamless experiences and drive customer engagement.",
        "serviceType": "Application Development",
        "provider": {
          "@type": "Organization",
          "name": "NuTab Digital"
        }
      }
    },
    {
      "@type": "Offer",
      "url": "https://nutab.ca/services/seo-digital-marketing",
      "itemOffered": {
        "@type": "Service",
        "name": "SEO & Digital Marketing",
        "description": "Search engine optimization and targeted digital marketing strategies to enhance online visibility.",
        "serviceType": "Marketing Services",
        "provider": {
          "@type": "Organization",
          "name": "NuTab Digital"
        }
      }
    },
    {
      "@type": "Offer",
      "url": "https://nutab.ca/services/ecommerce-development",
      "itemOffered": {
        "@type": "Service",
        "name": "E-Commerce Development",
        "description": "Scalable e-commerce websites with secure payments, inventory management, and seamless shopping experiences.",
        "serviceType": "E-Commerce Development",
        "provider": {
          "@type": "Organization",
          "name": "NuTab Digital"
        }
      }
    },
    {
      "@type": "Offer",
      "url": "https://nutab.ca/services/ai-automation",
      "itemOffered": {
        "@type": "Service",
        "name": "AI & Automation Solutions",
        "description": "Intelligent automation and AI-powered solutions to optimize business processes and increase efficiency.",
        "serviceType": "Automation Services",
        "provider": {
          "@type": "Organization",
          "name": "NuTab Digital"
        }
      }
    },
    {
      "@type": "Offer",
      "url": "https://nutab.ca/services/business-it-consulting",
      "itemOffered": {
        "@type": "Service",
        "name": "Business & IT Consulting",
        "description": "Strategic technology consulting to align IT infrastructure with business goals and drive digital transformation.",
        "serviceType": "Consulting Services",
        "provider": {
          "@type": "Organization",
          "name": "NuTab Digital"
        }
      }
    },
    {
      "@type": "Offer",
      "url": "https://nutab.ca/services/graphic-brand-design",
      "itemOffered": {
        "@type": "Service",
        "name": "Graphic & Brand Design",
        "description": "Creative graphic design and brand identity services to establish strong visual presence and brand recognition.",
        "serviceType": "Design Services",
        "provider": {
          "@type": "Organization",
          "name": "NuTab Digital"
        }
      }
    },
    {
      "@type": "Offer",
      "url": "https://nutab.ca/services/photography-media-production",
      "itemOffered": {
        "@type": "Service",
        "name": "Photography & Media Production",
        "description": "Professional photography and media production services for compelling visual content and brand storytelling.",
        "serviceType": "Media Production",
        "provider": {
          "@type": "Organization",
          "name": "NuTab Digital"
        }
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* No-flash of incorrect theme: set data-theme ASAP */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var t = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', t || 'dark');
  } catch (e) {
    document.documentElement.setAttribute('data-theme','dark');
  }
})();`,
          }}
        />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        {/* Social verification/SEO */}
        <link rel="me" href="https://www.instagram.com/nutab_digital/" />
        <link rel="me" href="https://x.com/NuTabDigital" />
        <link rel="me" href="https://www.facebook.com/profile.php?id=61575073651409" />
        <link rel="me" href="https://www.linkedin.com/company/nutab-digital-inc/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Google Tag Manager – deferred load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    `,
          }}
        />

        {/* Load the GTM script after render */}
        <script
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-BSE95BQFCB"
        />

        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
      window.addEventListener('load', function() {
        gtag('config', 'G-BSE95BQFCB', { send_page_view: true });
      });
    `,
          }}
        />


      </head>
      <body className={tomorrow.className}>
        <AppClientProviders>{children}</AppClientProviders>
      </body>
    </html>
  );
}
