import type { Metadata } from "next"; // Type import from Next.js to type-check metadata.
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "NuTab Digital",
  description:
    "NuTab Digital is a software development company specializing in creating innovative solutions tailored to meet our clients' needs.",
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
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
