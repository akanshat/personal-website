import { Metadata } from 'next';

import ProjectCard from '@/components/project-card';
import { SimpleLayout } from '@/components/simple-layout';

/* Placeholder images until real project screenshots and logos are added */
import logoPlaceholder from '@/public/logos/placeholder.svg';
import f1gptPreview from '@/public/assets/projects/f1-gpt.png'
import crwnClothingPreview from '@/public/assets/projects/crwn-clothing.png'
import foodcyPreview from '@/public/assets/projects/foodcy.png'
import smartbrainPreview from '@/public/assets/projects/smartbrain.png'
import jobListingPreview from '@/public/assets/projects/job-listings.png'

type Project = {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: typeof f1gptPreview;
  logo: typeof logoPlaceholder;
  appLink?: string;
  sourceCodeLink?: string;
};

// TODO: LAST — add professional projects (screenshots, links, tags)
const professionalProjects: Project[] = [
  // {
  //   name: 'Professional project placeholder',
  //   description:
  //     'Placeholder for a professional project (Phaidra debugging tool, constraint engine, Jio partner onboarding, and so on). Replace this card when you have a public write-up, screenshot, and links.',
  //   tags: [
  //     { name: 'TypeScript', color: 'text-blue-400' },
  //     { name: 'React', color: 'text-aquamarine' },
  //     { name: 'Next.js', color: 'text-zinc-100' },
  //   ],
  //   image: screenshotPlaceholder,
  //   logo: logoPlaceholder,
  // },
];

// TODO: LAST — add personal / open-source projects and an AI / LangChain / RAG card
const personalProjects: Project[] = [
  {
    name: 'F1 GPT',
    description:
      'A RAG chatbot that answers all f1 related queries. Made using nextjs, langchain.js, next.js, ollama and docker.',
    tags: [
      { name: 'Go', color: 'text-cyan-400' },
      { name: 'LangChain', color: 'text-sunglow' },
      { name: 'RAG', color: 'text-violet-300' },
      { name: 'TypeScript', color: 'text-green-400' },
      { name: 'Next.js', color: 'text-rose-300' },
    ],
    image: f1gptPreview,
    logo: logoPlaceholder,
    sourceCodeLink: 'https://github.com/akanshat/f1-gpt-rag',
  },
  {
    name: 'Crown Clothing',
    description:
      'An online store that lets you build a cart and checkout using stripe.',
    tags: [
      { name: 'React', color: 'text-rose-300' },
      { name: 'TypeScript', color: 'text-green-400' },
      { name: 'Firebase', color: 'text-cyan-400' },
      { name: 'Stripe', color: 'text-sunglow' },
    ],
    image: crwnClothingPreview,
    logo: logoPlaceholder,
    sourceCodeLink: 'https://github.com/akanshat/crwn-clothing',
    appLink: "https://crwn-clothing-9e4d.vercel.app/",
  },
  {
    name: 'SmartBrain',
    description:
      'A frontend app that uses Clarify AI api to detect faces in any image.',
    tags: [
      { name: 'Clarify', color: 'text-cyan-400' },
      { name: 'Node', color: 'text-sunglow' },
      { name: 'React', color: 'text-rose-300' },
      { name: 'TypeScript', color: 'text-green-400' },
    ],
    image: smartbrainPreview,
    logo: logoPlaceholder,
    sourceCodeLink: 'https://github.com/akanshat/smartbrain-frontend',
  },
  {
    name: 'Foodcy',
    description:
      'A food ordering web app that lets you explore restaurants, menus and post reviews.',
    tags: [
      { name: 'TypeScript', color: 'text-green-400' },
      { name: 'React', color: 'text-rose-300' },
      { name: 'Node', color: 'text-sunglow' },
    ],
    image: foodcyPreview,
    logo: logoPlaceholder,
    sourceCodeLink: 'https://github.com/akanshat/foodcy-frontend',
  },
  // {
  //   name: 'JinxedIn',
  //   description:
  //     'A job portal to search your openings, apply and get hired. Made using nextjs, tailwindcss, shadcn/ui, and supabase.',
  //   tags: [
  //     { name: 'Go', color: 'text-cyan-400' },
  //     { name: 'LangChain', color: 'text-sunglow' },
  //     { name: 'RAG', color: 'text-bright-pink' },
  //     { name: 'TypeScript', color: 'text-sea-blue' },
  //   ],
  //   image: jobListingPreview,
  //   logo: logoPlaceholder,
  //   sourceCodeLink: 'https://github.com/akanshat/f1-gpt-rag',
  //   appLink: 'https://job-listings-ui.vercel.app/',
  // },
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
      title="All The Rad Things That I've Made Over The Years"
      intro="A short list of work I am proud of. Check out the repos and live links if you like them 🥰."
    >
      {/* <h2 className="text-4xl font-semibold text-aquamarine sm:text-5xl">
        Professional Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
        {professionalProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}
      {/* <h2 className="mt-10 text-4xl font-semibold text-bright-pink sm:text-5xl">
        Personal Projects
      </h2> */}
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
        {personalProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SimpleLayout>
  );
}
