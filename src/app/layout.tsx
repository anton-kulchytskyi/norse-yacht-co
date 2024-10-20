import type { Metadata } from 'next';

import Navbar from '@/components/MainLayout/Navbar';
import Footer from '@/components/MainLayout/Footer';

import './globals.css';
import React from 'react';

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
      {/*чтобы передвинуть футер вниз, можно использовать flex для страницы*/}
      <body className="bg-white text-black font-roboto min-h-screen flex flex-col">
        <Navbar />
        <main className={'flex-1'}>
          {children}
        </main>
        <hr />
        <Footer />
      </body>
    </html>
  );
}
