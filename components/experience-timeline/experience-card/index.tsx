'use client';
import {
    VerticalTimeline as OriginalVerticalTimeline,
    VerticalTimelineElement as OriginalVerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Image from 'next/image';

import logoPlaceholder from '@/public/logos/placeholder.svg';
import RakutenLogo from '@/public/logos/rakuten.png'
import ThanosLogo from '@/public/logos/thanos-logo.png'
import JioLogo from '@/public/logos/jio-logo.png'
import PhaidraLogo from '@/public/logos/phaidra-logo.png'

import 'react-vertical-timeline-component/style.min.css';
import topographyAquamarine from '@/public/patterns/topography-aquamarine.svg';

const VerticalTimeline = OriginalVerticalTimeline as any;
const VerticalTimelineElement = OriginalVerticalTimelineElement as any;

interface ExperienceTypes {
    title: string;
    company_name: string;
    icon: any;
    iconAlt: string;
    iconBg: string;
    date: string;
    points: string[];
}

const experiences = [
    // {
    //     title: 'Software Engineer Intern',
    //     company_name: 'EnLume Inc',
    //     icon: logoPlaceholder,
    //     iconAlt: 'Placeholder logo for EnLume Inc — replace with official logo',
    //     iconBg: '#ffffff',
    //     date: 'Apr 2020 - Jul 2020',
    //     points: [
    //         'Implemented and debugged backend services using Node.js, PostgreSQL, and MySQL, shipping features that powered the platform.',
    //         'Worked on database migrations and optimizations, improving query performance and system reliability.',
    //         'Contributed to debugging and resolving local deployment issues, helping the team maintain smooth development workflows.',
    //         'Developed comprehensive Swagger documentation for REST APIs and standardized logging across the backend, improving observability and developer experience.',
    //         'Researched Jitsi Meet UI integration and contributed technical findings to guide product decisions.',
    //     ],
    // },
    {
        title: 'Software Engineer Intern',
        company_name: 'Rakuten',
        icon: RakutenLogo,
        iconAlt: 'Placeholder logo for Rakuten — replace with official logo',
        iconBg: '#20271f',
        date: 'Jan 2021 - Jun 2021',
        points: [
            'Built a testing tool with automated test plans and test steps for QA developers, streamlining test execution workflows.',
            'Participated in product requirement planning meetings and design reviews, gaining early exposure to full product development cycles.',
            'Contributed to frontend development on production codebases and learned collaborative engineering workflows.',
        ],
    },
    {
        title: 'Software Engineer',
        company_name: 'Reliance Jio',
        icon: JioLogo,
        iconAlt: 'Placeholder logo for Reliance Jio — replace with official logo',
        iconBg: '#ffffff',
        date: 'Jul 2021 - Nov 2021',
        points: [
            'Led migration of the JioMart B2B app from native Android to a responsive web application, maintaining full functional parity across platforms.',
            'Shipped production features for a large-scale B2B partner onboarding platform used by thousands of partners.',
            'Wrote comprehensive test coverage and established a design system for the product, standardizing UI components and design patterns.',
        ],
    },
    {
        title: 'LFX Mentee – Open Source Mentorship',
        company_name: 'Thanos, CNCF',
        icon: ThanosLogo,
        iconAlt: 'Placeholder logo for Thanos / CNCF — replace with official logo',
        iconBg: '#975EF8',
        date: 'Sep 2021 - Nov 2021',
        points: [
            'Implemented a caching layer in Go for Thanos Store, improving query reliability across distributed storage workflows.',
            'Refactored the design to use galaxycache following maintainer review, demonstrating ability to ramp quickly in a large production codebase and incorporate expert feedback.',
        ],
    },
    {
        title: 'Software Engineer I',
        company_name: 'Phaidra',
        icon: PhaidraLogo,
        iconAlt: 'Placeholder logo for Phaidra — replace with official logo',
        iconBg: '#A3EC9F',
        date: 'Dec 2021 - Jul 2023',
        points: [
            'Designed and shipped a production debugging tool for industrial plant operators, replacing manual log triage with step-by-step visual execution traces so operations teams could diagnose automation failures without engineering involvement.',
            "Led the system from an ambiguous brief to production adoption: chose a timeline execution model over tabular output, aligned engineering, product, and operations stakeholders, and delivered the team's primary debugging workflow.",
            'Built a versioned constraint evaluation engine enabling operators to safely update automation rules without risking production regressions.',
        ],
    },
    {
        title: 'Software Engineer II',
        company_name: 'Phaidra',
        icon: PhaidraLogo,
        iconAlt: 'Placeholder logo for Phaidra — replace with official logo',
        iconBg: '#F82C16',
        date: 'Jul 2023 - Jan 2026',
        points: [
            'Defined versioning and change-management semantics from scratch in an ambiguous problem space, aligned stakeholders across competing models, and shipped a correct, maintainable constraint evaluation system on deadline.',
            'Owned frontend on-call: investigated, diagnosed, fixed, and verified production issues, coordinating with backend and platform teams for cross-boundary distributed system failures.',
            'Used AI-assisted development tools including Cursor and Claude to accelerate implementation, testing, and documentation while maintaining high engineering standards.',
            'Contributed to architectural and design decisions across the product, helping shape technical direction and engineering standards for the team.',
        ],
    },
];
const ExperienceCard = ({ experience }: { experience: ExperienceTypes }) => {
    return (
        <VerticalTimelineElement
            visible={true} // Assures element layout calculation mounts immediately
            contentStyle={{
                background: '#FB6A82',
                color: '#fff',
                backgroundImage: `url(${topographyAquamarine.src})`,
            }}
            contentArrowStyle={{ borderRight: '7px solid #fb6a82' }}
            date={experience.date}
            dateClassName="rounded-md bg-[#ffffff33] p-2 backdrop-blur-[10px] text-zinc-100 lg:text-zinc-800 dark:text-zinc-100 text-bold opacity-100"
            iconStyle={{ background: experience.iconBg, borderColor: '#00FFAB' }}
            icon={
                <div className="flex h-full w-full items-center justify-center">
                    <Image
                        src={experience.icon}
                        alt={experience.iconAlt}
                        className="h-[60%] w-[60%] object-contain"
                    />
                </div>
            }
        >
            <div className="mb-2 rounded-md bg-[#ffffff33] p-2 backdrop-blur-[10px]">
                <div className="py-5">
                    <h3 className="text-xl font-semibold leading-6 text-zinc-100">
                        {experience.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm font-thin text-zinc-100" style={{ margin: 0 }}>
                        {experience.company_name}
                    </p>
                </div>

                <div className="border-t border-aquamarine px-4 py-5 sm:p-0">
                    <ul className="mt-5 ml-5 list-disc space-y-2">
                        {experience.points.map((point, index) => (
                            <li key={`experience-point-${index}`} className="text-white-100 pl-1 text-[14px] tracking-wider">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </VerticalTimelineElement>
    );
};

// Export the raw component structure
export function ClientTimeline() {
    return (
        <VerticalTimeline lineColor="#00FFAB">
            {experiences.map((experience, index) => (
                <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
        </VerticalTimeline>
    );
}
