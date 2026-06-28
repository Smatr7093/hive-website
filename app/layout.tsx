// app/layout.tsx — font swap to Hive's Quicksand + Noto Sans.
// Replaces the current Inter/Space Grotesk setup. Keep the rest of your shell.

import type { Metadata } from 'next';
import { Quicksand, Noto_Sans } from 'next/font/google';
import './globals.css';

const display = Quicksand({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
});

const body = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Hive · Find people who want to be there',
  description:
    'Find people nearby who share what you love, and book real, unhurried time together. No swiping. No pressure. Book time, not expectations.',
  icons: { icon: '/assets/favicon/app_icon.svg' },
  openGraph: {
    title: 'Hive · Find people who want to be there',
    description:
      'Find people nearby who share what you love, and book real time together. Connection without pressure.',
    type: 'website',
    images: ['/assets/app_icon/app_icon.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
