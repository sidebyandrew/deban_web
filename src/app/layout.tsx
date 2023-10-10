import { Providers } from '@/app/providers';
import TheFooter from '@/components/footer';
import TheHeader from '@/components/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deban | Social Events',
  description: 'Social Events With Pleasure!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <TheHeader />
          {children}
          <TheFooter />
        </Providers>
      </body>
    </html>
  );
}
