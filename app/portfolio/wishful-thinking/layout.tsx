import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishful Thinking Shopify Ecommerce Case Study | Calgary Ecommerce Development",
  description:
    "Calgary ecommerce development case study: NuTab Digital built a Shopify store for Wishful Thinking with interactive hat and name badge designers, wholesale account access, quote-based ordering, and a custom design-token system.",
  keywords: [
    "Calgary ecommerce development",
    "Shopify developer Calgary",
    "custom Shopify theme development",
    "Shopify B2B wholesale store",
    "product customizer Shopify",
    "custom Shopify app development",
    "ecommerce web design Calgary",
    "online store development Alberta",
    "custom apparel ecommerce website",
    "Shopify Online Store 2.0",
  ],
  alternates: {
    canonical: "https://nutab.ca/portfolio/wishful-thinking/",
  },
  openGraph: {
    title: "Wishful Thinking Shopify Ecommerce Case Study | NuTab Digital",
    description:
      "See how NuTab Digital built a Shopify store with interactive product designers, wholesale account access, and quote-based ordering for Calgary custom decor company Wishful Thinking.",
    url: "https://nutab.ca/portfolio/wishful-thinking/",
    siteName: "NuTab Digital",
    images: [
      {
        url: "https://nutab.ca/photos/og-ecommerce.webp",
        width: 1200,
        height: 800,
        alt: "Wishful Thinking custom Shopify ecommerce store by NuTab Digital Calgary",
      },
    ],
    locale: "en_CA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishful Thinking | Shopify Ecommerce Case Study",
    description:
      "A Shopify store with interactive product designers, wholesale account access, and quote-based ordering. Calgary ecommerce development by NuTab Digital.",
    images: ["https://nutab.ca/photos/og-ecommerce.webp"],
    site: "@NuTabDigital",
    creator: "@NuTabDigital",
  },
};

export default function WishfulThinkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
