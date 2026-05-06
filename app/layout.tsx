import type { Metadata } from "next";
import { Orbitron, Ubuntu_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "cyber-romulus.com | Vladyslav Shevchenko",
  description: "Senior Fullstack Engineer — .NET, React, Next.js. 7+ years across ERP, E-commerce, Military tech, and Private Equity.",
  openGraph: {
    title: "cyber-romulus.com | Vladyslav Shevchenko",
    description: "Senior Fullstack Engineer specializing in .NET and React.",
    url: "https://cyber-romulus.com",
    siteName: "cyber-romulus.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cyber-romulus.com | Vladyslav Shevchenko",
    description: "Senior Fullstack Engineer — .NET + React",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${ubuntuMono.variable}`}>
      <body>
        <div className="grid-bg" aria-hidden="true" />
        <div className="scanlines" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
