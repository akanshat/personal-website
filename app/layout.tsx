import './globals.css';
import 'devicon/devicon.min.css';

import type { Metadata } from 'next';
import Script from 'next/script';

// Components
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StarsCanvas } from '@/components/canvas/stars';

const siteUrl = 'https://placeholder-domain';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Akansha Tiwari',
    template: '%s | Akansha Tiwari',
  },
  description:
    'Akansha Tiwari — fullstack software engineer and AI engineer. Open to work, interviewing, and freelance.',
  openGraph: {
    title: 'Akansha Tiwari',
    description:
      'Akansha Tiwari — fullstack software engineer and AI engineer. Open to work, interviewing, and freelance.',
    url: siteUrl,
    siteName: 'Akansha Tiwari',
    images: [
      {
        url: `${siteUrl}/og.jpg`,
        width: 1920,
        height: 1080,
        alt: `Akansha Tiwari's portfolio homepage`,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Akansha Tiwari',
    card: 'summary_large_image',
    description:
      'Akansha Tiwari — fullstack software engineer and AI engineer. Open to work, interviewing, and freelance.',
    images: [
      {
        url: `${siteUrl}/og.jpg`,
        alt: `Akansha Tiwari's portfolio homepage`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full">
      <head>
        <Script id="set-theme">{`
          let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

          updateMode()
          darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
          window.addEventListener('storage', updateModeWithoutTransitions)

          function updateMode() {
          let isSystemDarkMode = darkModeMediaQuery.matches
          let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

            if (isDarkMode) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }

            if (isDarkMode === isSystemDarkMode) {
              delete window.localStorage.isDarkMode
            }
          }

          function disableTransitionsTemporarily() {
            document.documentElement.classList.add('[&_*]:!transition-none')
            window.setTimeout(() => {
              document.documentElement.classList.remove('[&_*]:!transition-none')
            }, 0)
          }

          function updateModeWithoutTransitions() {
            disableTransitionsTemporarily()
            updateMode()}
          `}</Script>
        <link rel="icon" type="image/png" href="/my-favicon/favicon-96x96.png?v=20260831" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/my-favicon/favicon.svg?v=20260831" />
        <link rel="shortcut icon" href="/my-favicon/favicon.ico?v=20260831" />
        <link rel="apple-touch-icon" sizes="180x180" href="/my-favicon/apple-touch-icon.png?v=20260831" />
        <link rel="manifest" href="/my-favicon/site.webmanifest?v=20260831" />
      </head>
      <body className="flex h-full flex-col bg-[#12071f]">
        <StarsCanvas />
        <div className="fixed inset-0 flex w-screen justify-center overflow-x-hidden sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-aquamarine dark:bg-zinc-900"></div>
          </div>
        </div>
        <div className="relative overflow-x-visible">
          <Header />
          <main className="w-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
