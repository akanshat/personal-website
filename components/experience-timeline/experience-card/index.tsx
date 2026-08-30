'use client';
import {
    VerticalTimeline as OriginalVerticalTimeline,
    VerticalTimelineElement as OriginalVerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Image from 'next/image';

import logoPlaceholder from '@/public/logos/placeholder.svg';
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

// TODO: LAST — split Phaidra into Software Engineer I vs II

const experiences = [
    {
        title: 'Software Engineer Intern',
        company_name: 'Rakuten',
        icon: logoPlaceholder,
        iconAlt: 'Placeholder logo for Rakuten — replace with official logo',
        iconBg: '#20271f',
        date: 'Jan 2021 - Jun 2021',
        points: [
            // TODO: expand more
            'Contributed to frontend development on an internal tooling project, gaining early exposure to production codebases and collaborative engineering workflows.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.',
            'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes.',
        ],
    },
    {
        title: 'Software Engineer',
        company_name: 'Reliance Jio',
        icon: logoPlaceholder,
        iconAlt: 'Placeholder logo for Reliance Jio — replace with official logo',
        iconBg: '#ffffff',
        date: 'Jul 2021 - Nov 2021',
        points: [
            // TODO: expand more
            'Delivered production features for a large-scale B2B partner onboarding platform and led migration of partner workflows from native Android to responsive web, maintaining full functional parity across platforms.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            'Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.',
        ],
    },
    {
        title: 'LFX Mentee – Open Source Mentorship',
        company_name: 'Thanos, CNCF',
        icon: logoPlaceholder,
        iconAlt: 'Placeholder logo for Thanos / CNCF — replace with official logo',
        iconBg: '#20271f',
        date: 'Sep 2021 - Nov 2021',
        points: [
            'Implemented a caching layer in Go for Thanos Store, improving query reliability across distributed storage workflows.',
            'Refactored to use galaxycache after maintainer review, ramping quickly in a large production codebase and incorporating expert feedback under real constraints.',
        ],
    },
    {
        title: 'Software Engineer I – Software Engineer II',
        company_name: 'Phaidra',
        icon: logoPlaceholder,
        iconAlt: 'Placeholder logo for Phaidra — replace with official logo',
        iconBg: '#ED1C24',
        date: 'Dec 2021 - Jan 2026',
        points: [
            // TODO: expand more — product name (if public), metrics, team size
            'Designed and shipped a production debugging tool for industrial plant operators, replacing manual log triage with step-by-step visual execution traces so operations teams could see automation failures without engineering involvement.',
            'Led the system from an ambiguous brief to production adoption: chose a timeline execution model over tabular output, aligned engineering, product, and operations, and delivered the team’s primary debugging workflow.',
            'Built a versioned constraint evaluation engine so operators could update automation rules without risking production regressions.',
            'Defined versioning and change-management semantics from scratch, aligned stakeholders across competing models, and shipped a maintainable MVP on deadline.',
            'Owned frontend on-call: investigated, diagnosed, fixed, and verified production issues, coordinating with backend and platform for cross-boundary failures.',
            'Used AI-assisted tools including Cursor and Claude to speed up implementation, testing, and documentation while keeping engineering standards high.',
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
