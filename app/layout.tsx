import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Whats Nxt",
    template: '%s | Whats Nxt',
  },
  description: "Welcome to WHATS NXT, where we believe in empowering individuals to shape their future and embrace their full potential. As a trailblazing company, we specialize in crafting transformative impact planners, journals, and workbooks that guide you through a journey of self-discovery, productivity, and holistic well-being.",
  metadataBase: new URL('https://www.whatsnxt.org'),
  openGraph: {
    images: '/opengraph-image.png',
    type: 'website',
    siteName: 'Whats Nxt',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image'
  },
  keywords: ['Whats Nxt', 'Impact Planning and Journaling', 'Self Help', 'Fitness Planner', 'Planner', 'Goal Setting', 'Mental Health', 'Emotions Wheel', 'Vision Board', 'Journal', 'Planner']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <main className="flex flex-col min-h-screen">
          <CartProvider>
            <Header />
            {children}
            <ScrollToTop />
            <Footer />
          </CartProvider>
        </main>
      </body>
    </html>
  );
}
