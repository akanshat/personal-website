import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/container';
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/social-icons';
import portraitImage from '@/public/portrait-1.png';
import portraitImage2 from '@/public/portrait-2.jpg';
import galleryArt from '@/public/home-gallery/vaporwave-background-2.png';
import { ReactNode } from 'react';

interface SocialLinkTypes {
  className?: string;
  href: string;
  children: ReactNode;
  Icon: React.JSXElementConstructor<any>;
}

function SocialLink({ className, href, children, Icon }: SocialLinkTypes) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-aquamarine dark:text-zinc-200"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Akansha Tiwari — fullstack software engineer and AI engineer. Open to work, interviewing, and freelance.',
};

const About = () => {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs lg:max-w-none">
              {/* TODO: LAST — replace avatar.jpg with a real headshot */}
              <Image
                src={portraitImage}
                alt="Portrait photo of Akansha Tiwari"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>

          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m{' '}
              <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
                Akansha Tiwari
              </span>
              , a fullstack software engineer and AI engineer.
            </h1>
            {/* TODO: LAST — add current city when ready */}
            {/* Location: [city] */}
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              {/* TODO: LAST — replace with a full personal About story */}
              <p>
                I studied Computer Science at ABV-IIITM Gwalior (B.Tech, 2017–2021, CGPA 8.08/10),
                then spent four years at Phaidra shipping production systems end-to-end, building a debugging
                tool for industrial operators, a versioned constraint evaluation engine, and frontend
                on-call ownership across production incidents.
              </p>
              <p>
                Before that I led a platform migration at Reliance Jio (native Android to responsive web),
                contributed meaningful open-source work to Thanos (CNCF) in Go, and interned at Rakuten
                building internal tooling. Day to day I work in TypeScript, React, Next.js, Node.js, Go,
                and Java. I'm actively learning Python and deepening my distributed systems knowledge.
              </p>
              <p>
                I use Claude and Cursor for daily development and think carefully about how AI tooling
                fits into sustainable engineering practices. I'm drawn to problems where reliability and
                observability aren't optional — where good engineering directly impacts users.
              </p>
              <p>
                Based in India (IST). Open to full-time roles, contract work, and collaboration with
                strong teams.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list" className="border-t border-aquamarine pt-8">
              <SocialLink href="https://github.com/akanshat" Icon={GitHubIcon}>
                @akanshat
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/akansha-tiwari-10/"
                Icon={LinkedInIcon}
                className="mt-4"
              >
                @akansha-tiwari-10
              </SocialLink>
              <SocialLink
                href="mailto:akanshat1999@gmail.com"
                Icon={MailIcon}
                className="mt-8 border-t border-aquamarine pt-8"
              >
                akanshat1999@gmail.com
              </SocialLink>
            </ul>
            <div className="mt-8 border-t border-aquamarine pt-8">
              <div className="max-w-xs lg:max-w-none">
                <Image
                  src={portraitImage2}
                  alt="Vaporwave artwork"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About