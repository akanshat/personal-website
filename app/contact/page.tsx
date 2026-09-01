import { Metadata } from 'next';

// Components
import Button from '@/components/button';
import { Container } from '@/components/container';
import Earth from '@/components/canvas/earth';
import ContactForm from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in contact with Akansha Tiwari. Open to full-time roles, interviewing, and freelance.',
};

export default function Contact() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Get In{' '}
            <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
              Contact
            </span>
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Open to full-time roles, interviewing, and freelance. Email me and I
            will get back to you.
          </p>
        </div>
      </Container>
      <Container className="mt-8 sm:mt-16">
        <div className="flex flex-col gap-10 overflow-hidden xl:flex-row-reverse xl:items-center">
          <Earth />
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
