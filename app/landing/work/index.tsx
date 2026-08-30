import Image from 'next/image';

import Button from '@/components/button';

import { BriefcaseIcon, ArrowDownIcon } from '@/app/landing/custom-icons';
import logoPlaceholder from '@/public/logos/placeholder.svg';

const Work = () => {
    // TODO: LAST — split Phaidra into Software Engineer I and Software Engineer II
    let resume = [
        {
            company: 'Phaidra',
            title: 'Software Engineer II',
            logo: logoPlaceholder,
            logoAlt: 'Placeholder logo for Phaidra — replace with official logo',
            start: '2021',
            end: {
                label: '2026',
                dateTime: '2026',
            },
        },
        {
            company: 'Thanos, CNCF',
            title: 'LFX Mentee',
            logo: logoPlaceholder,
            logoAlt:
                'Placeholder logo for Thanos / CNCF — replace with official logo',
            start: '2021',
            end: {
                label: '2021',
                dateTime: '2021',
            },
        },
        {
            company: 'Reliance Jio',
            title: 'Software Engineer',
            logo: logoPlaceholder,
            logoAlt: 'Placeholder logo for Reliance Jio — replace with official logo',
            start: '2021',
            end: {
                label: '2021',
                dateTime: '2021',
            },
        },
        {
            company: 'Rakuten',
            title: 'Software Engineer Intern',
            logo: logoPlaceholder,
            logoAlt: 'Placeholder logo for Rakuten — replace with official logo',
            start: '2021',
            end: {
                label: '2021',
                dateTime: '2021',
            },
        },
    ];

    return (
        <div className="rounded-2xl border border-bright-pink bg-space-cadet bg-topography-bright-pink p-6">
            <h2 className="flex rounded-md bg-[#ffffff33] p-2 text-sm font-semibold text-zinc-100 backdrop-blur-[10px]">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li
                        key={roleIndex}
                        className="flex gap-4 rounded-md bg-[#ffffff33] p-2 backdrop-blur-[10px]"
                    >
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                            <Image
                                src={role.logo}
                                alt={role.logoAlt}
                                className="h-7 w-7"
                                unoptimized
                            />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-200">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-300">{role.title}</dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400"
                                aria-label={`${role.start} until ${role.end.label ?? role.end}`}
                            >
                                <time dateTime={role.start}>{role.start}</time>{' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end.dateTime ?? role.end}>
                                    {role.end.label ?? role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <Button
                href="./CV/Akansha_Tiwari_SWE.pdf"
                download="Akansha_Tiwari_SWE.pdf"
                variant="primary"
                className="group mt-6 w-full"
                text="Download CV"
                icon={ArrowDownIcon({
                    className:
                        'h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50',
                })}
            ></Button>
        </div>
    );
}

export default Work;