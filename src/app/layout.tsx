import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Site configuration from environment variables
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ritik-pandey.vercel.app';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Ritik Pandey Portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: "AI/ML Software Engineer & Full-Stack Developer specializing in MLOps, Agentic AI, and scalable cloud solutions. Explore my projects, research, and professional journey.",
  keywords: [
    "Ritik Pandey",
    "Full Stack Developer",
    "AI/ML Engineer",
    "MLOps Engineer",
    "Agentic AI",
    "Python Developer",
    "React Developer",
    "Next.js",
    "Salesforce",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Ritik Pandey" }],
  creator: "Ritik Pandey",
  publisher: "Ritik Pandey",
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
    description: "AI/ML Software Engineer & Full-Stack Developer specializing in MLOps, Agentic AI, and scalable cloud solutions.",
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/hero-portrait.png`,
        width: 1200,
        height: 630,
        alt: "Ritik Pandey - AI/ML Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "AI/ML Software Engineer & Full-Stack Developer specializing in MLOps, Agentic AI, and scalable cloud solutions.",
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
