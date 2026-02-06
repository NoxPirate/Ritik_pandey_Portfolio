import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Site configuration from environment variables
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ruturaj-nawale.vercel.app';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Ruturaj Nawale Portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: "Full-stack developer specializing in AI/ML, cloud architecture, and modern web technologies. Explore my projects, research, and professional journey.",
  keywords: [
    "Ruturaj Nawale",
    "Full Stack Developer",
    "AI/ML Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Cloud Architecture",
    "Portfolio",
  ],
  authors: [{ name: "Ruturaj Nawale" }],
  creator: "Ruturaj Nawale",
  publisher: "Ruturaj Nawale",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteName,
    description: "Full-stack developer specializing in AI/ML, cloud architecture, and modern web technologies.",
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/hero-portrait.png`,
        width: 1200,
        height: 630,
        alt: "Ruturaj Nawale - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Full-stack developer specializing in AI/ML, cloud architecture, and modern web technologies.",
    images: [`${siteUrl}/hero-portrait.png`],
    // Add your Twitter handle when available
    // creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        {children}
      </body>
    </html>
  );
}
