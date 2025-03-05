import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/landing/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SNS Premium | Transform Your Digital Experience",
  description:
    "SNS Premium offers exclusive access to high-quality podcasts, documentaries, and original series. Join our community of innovators and thought leaders. Stream in 4K, access premium content, and elevate your entertainment experience.",
  keywords: [
    "SNS Premium",
    "digital content",
    "streaming platform",
    "podcasts",
    "documentaries",
    "original series",
    "4K streaming",
    "thought leadership",
    "premium content",
    "digital entertainment",
  ],
  authors: [{ name: "SNS Premium Team" }],
  creator: "SNS Premium",
  publisher: "SNS Premium",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snspremium.com",
    siteName: "SNS Premium",
    title: "SNS Premium | Transform Your Digital Experience",
    description:
      "Access exclusive podcasts, documentaries, and original series. Join our community of innovators and thought leaders. Stream in 4K and elevate your entertainment experience.",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "SNS Premium Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SNS Premium | Transform Your Digital Experience",
    description:
      "Access exclusive podcasts, documentaries, and original series. Join our community of innovators and thought leaders.",
    creator: "@snspremium",
    images: ["/twitter-image.jpg"], // Make sure to add this image to your public folder
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: "#F27321",
  manifest: "/manifest.json", // Add a web manifest file for PWA support
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
