import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/lib/store/AppContext';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://weekendzthrills.com'),
  title: {
    default: 'Weekend Thrills | Luxury Weekend Stays & Camping in Alibaug, Lonavala & Pawna',
    template: '%s | Weekend Thrills',
  },
  description: 'Dive Into Divine Adventure with Weekend Thrills. Handpicked camping, luxury villas, boutique resorts, and heritage cottages in Alibaug, Lonavala, Pawna Lake & Matheran.',
  keywords: ['Alibaug camping', 'Pawna lake camping', 'Lonavala villas', 'Matheran jungle camping', 'Weekend Thrills', 'Alibaug resorts'],
  openGraph: {
    title: 'Weekend Thrills | Luxury Weekend Stays & Camping',
    description: 'Dive Into Divine Adventure. Handpicked stays in Alibaug, Lonavala, Pawna Lake & Matheran.',
    url: 'https://weekendzthrills.com',
    siteName: 'Weekend Thrills',
    images: [{ url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weekend Thrills',
    description: 'Handpicked weekend experiences in Alibaug, Lonavala, Pawna Lake & Matheran.',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-sans bg-cream text-espresso antialiased min-h-screen selection:bg-terracotta selection:text-cream">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
