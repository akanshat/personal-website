import Image from 'next/image';
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next"

import { Container, OuterContainer } from '@/components/container';
import HeroCard from '@/components/hero-card';
import { GitHubIcon, LinkedInIcon, MailIcon as SocialMailIcon } from '../components/social-icons';

import gallery1 from '@/public/home-gallery/vaporwave-background-1.png';
import gallery2 from '@/public/home-gallery/vaporwave-background-2.png';
import gallery3 from '@/public/home-gallery/vaporwave-background-3.png';
import gallery4 from '@/public/home-gallery/vaporwave-background-4.png';
import gallery5 from '@/public/home-gallery/vaporwave-background-5.png';
import widePicture from '@/public/home-gallery/vaporwave-wide-aspect.png';

import Work from '@/app/landing/work';
import Education from '@/app/landing/education';
import GetInContact from '@/app/landing/get-in-contact';
import SocialLink from '@/app/landing/social-link';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Akansha Tiwari, a fullstack software engineer and AI engineer. Open to work, interviewing, and freelance.',
};

export default function Home() {
  return (
    <>
      <Analytics />
      <Container className="mt-9">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="xl:max-w-wxl w-full max-w-xs lg:shrink-0">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Full-Stack Engineer. Production Obsessed. And Always
                {' '}
                <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-7xl">
                  Shipping.
                </span>
              </h1>
              {/* TODO: LAST — add current city when ready */}
              {/* Location: [city] */}
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {`I’m Akansha Tiwari, a fullstack software engineer and AI engineer. I build production web systems and AI-assisted workflows — from operator-facing tools and versioned constraint engines to RAG-style applications. Recently Software Engineer II at Phaidra. Open to full-time roles, interviewing, and freelance.`}
              </p>
              <div className="mt-6 flex gap-6">
                <SocialLink
                  href="https://github.com/akanshat"
                  aria-label="Follow on GitHub"
                  Icon={GitHubIcon}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/akansha-tiwari-10/"
                  aria-label="Follow on LinkedIn"
                  Icon={LinkedInIcon}
                />
                <SocialLink
                  href="mailto:akanshat1999@gmail.com"
                  aria-label="Email Akansha"
                  Icon={SocialMailIcon}
                />
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-60 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <Image
                    src={gallery1}
                    alt="psychedelic vaporwave artwork of a giant statue staring over an ocean"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <Image
                    src={gallery2}
                    alt="vaporwave side profile of a woman looking out at a distorted world"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    src={gallery3}
                    alt="A crusty retrofutristic living room that has a window peering out into the psychedelic ocean"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <Image
                    src={gallery4}
                    alt="A piece of ground raised up with a statue of man composed of clay like grey matter"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    src={gallery5}
                    alt="A phantasmagoric alien world where the stone appears almost cloudlike"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-9">
        <HeroCard />
      </Container>
      <OuterContainer className="mt-9">
        <Image
          src={widePicture}
          alt="An ethereal backdrop"
        />
      </OuterContainer>
      <Container className="mt-12 md:mt-14">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-2">
          <Work />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Education />
            <GetInContact />
          </div>
        </div>
      </Container>
    </>
  );
}
