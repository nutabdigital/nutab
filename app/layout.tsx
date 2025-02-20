import type { Metadata } from "next"; // Type import from Next.js to type-check metadata.
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "NuTab Digital - Custom Software Solutions",
  description: "NuTab Digital provides tailored software solutions for businesses and individuals.",
  keywords: "custom software, mobile app development, web development, cloud solutions",
  robots: "index, follow",
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
        <meta name="description" content="NuTab Digital provides tailored software solutions for businesses and individuals." />
        <meta name="keywords" content="custom software, mobile app development, web development, cloud solutions" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
