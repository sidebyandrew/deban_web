import { Theme, ThemePanel } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
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
    <html lang="en">
      <body>
        {/*<TheHeader />*/}
        <Theme
          appearance="dark"
          accentColor="pink"
          grayColor="sand"
          radius="large"
        >
          {children}
          <ThemePanel />
        </Theme>
        {/*<TheFooter />*/}
      </body>
    </html>
  );
}
