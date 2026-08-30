// Dependencies
import { Metadata } from 'next';

// Components
import { Container } from '@/components/container';
import ExperienceTimeline from '@/components/experience-timeline';
import TechSection from '@/components/tech-section';

const siteUrl = 'https://placeholder-domain';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Experience as a fullstack software engineer and AI engineer — Phaidra, CNCF Thanos, Reliance Jio, and Rakuten.',
  openGraph: {
    title: 'Experience | Akansha Tiwari',
    description:
      'Experience as a fullstack software engineer and AI engineer — Phaidra, CNCF Thanos, Reliance Jio, and Rakuten.',
    url: `${siteUrl}/experience`,
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
    title: 'Experience | Akansha Tiwari',
    card: 'summary_large_image',
    description:
      'Akansha Tiwari — fullstack software engineer and AI engineer.',
    images: [
      {
        url: `${siteUrl}/og.jpg`,
        alt: `Akansha Tiwari's portfolio homepage`,
      },
    ],
  },
};

export default function Experience() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {`Work I've `}
            <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
              Shipped
            </span>{' '}
            Along The Way
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Production debugging tools, constraint engines, open source, and
            partner platforms — plus the languages and frameworks I reach for.
          </p>
        </div>
      </Container>
      <Container className="mt-20 flex flex-col">
        <ExperienceTimeline />
      </Container>
      <Container className="mt-16">
        <TechSection />
      </Container>
    </>
  );
}
