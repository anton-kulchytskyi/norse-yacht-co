import type { Metadata } from 'next';

import Navbar from '@/components/MainLayout/Navbar';
import Footer from '@/components/MainLayout/Footer';

import './globals.css';

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
    <html lang="en">
      <body className="bg-white text-black font-roboto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
