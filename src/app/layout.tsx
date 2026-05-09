import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A.S. Packaging | Premium Packaging Manufacturers in Mumbai",
  description: "Leading manufacturer of high-quality corrugated boxes, cake packaging, and custom retail solutions in Mumbai. Durable 5-ply, 7-ply, and 9-ply shipping cartons.",
  keywords: "Mumbai Cake Box Printing, Mithai Box Manufacturers Mumbai, Plain brown shipping boxes Mumbai, White carton box supplier India, Mango Packaging Corrugated Box Mumbai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
