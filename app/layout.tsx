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
      url: "https://nutab.ca/og-home.jpg", // Create proper 1200x630 image
      width: 1200,
      height: 630,
      alt: "NuTab Digital - Calgary Software Development"
    }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NuTab Digital - Custom Software Development | Calgary",
    description: "Custom software solutions in Calgary, Alberta.",
    images: ["https://nutab.ca/og-home.jpg"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Keep ONLY these - everything else is in metadata object above */}
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        
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
