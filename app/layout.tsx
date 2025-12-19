import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackgroundMusic } from "@/components/ui/BackgroundMusic";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullah Çalargün | Liderlik & Vizyon",
  description: "Yönetici ruhlu bir liderin düşünceleri, tecrübeleri ve vizyonu.",
  icons: {
    icon: '/profile.png',
    apple: '/profile.png',
  },
  openGraph: {
    title: "Abdullah Çalargün | Liderlik & Vizyon",
    description: "Yönetici ruhlu bir liderin düşünceleri, tecrübeleri ve vizyonu.",
    url: 'https://abdullahcalargun.com',
    siteName: 'Abdullah Çalargün',
    images: [
      {
        url: 'https://abdullahcalargun.com/profile.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
};

import { Analytics } from "@vercel/analytics/react";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
        <BackgroundMusic />
        <Analytics />
      </body>
    </html>
  );
}
