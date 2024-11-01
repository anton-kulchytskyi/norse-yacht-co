import type { Metadata } from 'next';
import { roboto, baiJ, bEs } from '@/utils/fonts/pageFonts';

import Navbar from '@/components/MainLayout/Navbar';
import Footer from '@/components/MainLayout/Footer';

import './globals.css';
import { CurrencyProvider } from '@/context/CurrencyContext';

export const metadata: Metadata = {
  title: 'Norse Yacht Co | Selling yachts from Norway',
  description: 'Business Consulting and Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${baiJ.variable} ${bEs.variable}`}
    >
      <body className="bg-white text-black font-roboto h-screen flex flex-col justify-between max-w-screen-3xl mx-auto">
        <CurrencyProvider>
          <Navbar />
          {children}
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
