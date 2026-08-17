// app/layout.tsx — font swap to Hive's Quicksand + Noto Sans.
// Replaces the current Inter/Space Grotesk setup. Keep the rest of your shell.
import type { Metadata } from 'next';
import { Quicksand, Noto_Sans } from 'next/font/google';
import Script from 'next/script';
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
  metadataBase: new URL('https://tryhive.in'),
  title: 'Hive · Find people who want to be there',
  description:
    'Find people nearby who share what you love, and book real, unhurried time together. No swiping. No pressure. Book time, not expectations.',
  icons: { icon: '/assets/favicon/app_icon.svg' },
  openGraph: {
    title: 'Hive · Find people who want to be there',
    description:
      'Find people nearby who share what you love, and book real time together. Connection without pressure.',
    type: 'website',
    url: 'https://tryhive.in',
    siteName: 'Hive',
    images: [
      {
        url: '/assets/og/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hive — Find people who want to be there',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hive · Find people who want to be there',
    description:
      'Find people nearby who share what you love, and book real time together. Connection without pressure.',
    images: ['/assets/og/og-image.jpg'],
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PS34S25D');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PS34S25D"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
