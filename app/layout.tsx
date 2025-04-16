import type { Metadata } from "next"; // Type import from Next.js to type-check metadata.
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "NuTab Digital - Custom Software Development in Calgary, Alberta",
  description:
    "NuTab Digital offers custom software solutions, mobile & web app development, SEO & digital marketing, and e-commerce development in Calgary, Alberta. We provide tailored software solutions for businesses and individuals.",
  keywords:
    "custom software solutions, mobile app development, web app development, SEO, digital marketing, e-commerce development, Calgary, Alberta, NuTab Digital, software company Calgary, software development Calgary",
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
        <meta
          name="keywords"
          content="custom software solutions, mobile app development, web app development, SEO, digital marketing, e-commerce development, Calgary, Alberta, NuTab Digital, software company Calgary, software development Calgary"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="NuTab Digital - Custom Software Development in Calgary, Alberta" />
        <meta property="og:description" content="NuTab Digital offers custom software solutions, mobile & web app development, SEO & digital marketing, and e-commerce development in Calgary, Alberta. We provide tailored software solutions for businesses and individuals." />
        <meta property="og:image" content="https://nutab.ca/photos/nutab-logo.png" />
        <meta property="og:url" content="https://nutab.ca" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NuTab Digital - Custom Software Development in Calgary, Alberta" />
        <meta name="twitter:description" content="NuTab Digital offers custom software solutions, mobile & web app development, SEO & digital marketing, and e-commerce development in Calgary, Alberta. We provide tailored software solutions for businesses and individuals." />
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
        {/* <meta http-equiv="X-Content-Type-Options" content="nosniff" />
        <meta http-equiv="X-Frame-Options" content="DENY" />
        <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          http-equiv="Strict-Transport-Security"
          content="max-age=63072000; includeSubDomains; preload"
        />
        <meta name="referrer" content="no-referrer" /> */}
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
