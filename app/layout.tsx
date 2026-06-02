import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains"
});

const siteUrl = "https://ramikanawati.com";

export const metadata: Metadata = {
  title: "Rami Kanawati — Tech Lead & Full-Stack Engineer",
  description:
    "Tech Lead & Co-founder building production-grade web, mobile, and autonomous AI systems. Next.js, React Native, .NET, local LLMs.",
  keywords: [
    "Tech Lead",
    "Full-Stack Engineer",
    "Next.js",
    "React Native",
    "ASP.NET Core",
    "AI Agents",
    "LLMs",
    "Cloud Architecture",
    "Web Development",
    "Mobile Development"
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "Rami Kanawati — Tech Lead & Full-Stack Engineer",
    description:
      "Building production-grade web, mobile, and autonomous AI systems across the UK and UAE.",
    type: "website",
    url: siteUrl,
    siteName: "Rami Kanawati",
    locale: "en_GB",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Rami Kanawati — Tech Lead & Full-Stack Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rami Kanawati — Tech Lead & Full-Stack Engineer",
    description: "Building production-grade systems and autonomous AI agents",
    creator: "@rkanawati96",
    images: [`${siteUrl}/og-image.png`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  authors: [
    {
      name: "Rami Kanawati",
      url: siteUrl
    }
  ]
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
