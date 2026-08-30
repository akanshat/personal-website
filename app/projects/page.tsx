import { Metadata } from 'next';

import ProjectCard from '@/components/project-card';
import { SimpleLayout } from '@/components/simple-layout';

/* Placeholder images until real project screenshots and logos are added */
import logoPlaceholder from '@/public/logos/placeholder.svg';
import screenshotPlaceholder from '@/public/home-gallery/vaporwave-background-1.png';

type Project = {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: typeof screenshotPlaceholder;
  logo: typeof logoPlaceholder;
  appLink?: string;
  sourceCodeLink?: string;
};

// TODO: LAST — add professional projects (screenshots, links, tags)
const professionalProjects: Project[] = [
  {
    name: 'Professional project placeholder',
    description:
      'Placeholder for a professional project (Phaidra debugging tool, constraint engine, Jio partner onboarding, and so on). Replace this card when you have a public write-up, screenshot, and links.',
    tags: [
      { name: 'TypeScript', color: 'text-blue-400' },
      { name: 'React', color: 'text-aquamarine' },
      { name: 'Next.js', color: 'text-zinc-100' },
    ],
    image: screenshotPlaceholder,
    logo: logoPlaceholder,
  },
];

// TODO: LAST — add personal / open-source projects and an AI / LangChain / RAG card
const personalProjects: Project[] = [
  {
    name: 'Personal project placeholder',
    description:
      'Placeholder for GitHub work (Thanos Store cache, side projects, RAG / LangChain). Add name, stack, repo, live demo, and screenshot later.',
    tags: [
      { name: 'Go', color: 'text-cyan-400' },
      { name: 'LangChain', color: 'text-sunglow' },
      { name: 'RAG', color: 'text-bright-pink' },
    ],
    image: screenshotPlaceholder,
    logo: logoPlaceholder,
    sourceCodeLink: 'https://github.com/akanshat',
  },
];

function HighLightedWord() {
  return (
    <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
      Projects:
    </span>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Professional and personal projects by Akansha Tiwari, fullstack software engineer and AI engineer.',
};

export default function Projects() {
  return (
    <SimpleLayout
      HighlightedWord={HighLightedWord()}
      title="Things I've Built For Operators, Partners, And Myself"
      intro="A short list of work I am proud of. Professional cards and personal repos will land here once screenshots and write-ups are ready."
    >
      <h2 className="text-4xl font-semibold text-aquamarine sm:text-5xl">
        Professional Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
        {professionalProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <h2 className="mt-10 text-4xl font-semibold text-bright-pink sm:text-5xl">
        Personal Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
        {personalProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SimpleLayout>
  );
}
