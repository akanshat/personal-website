import Image from 'next/image';

import logoPlaceholder from '@/public/logos/placeholder.svg';
import { AcademicCap } from '../custom-icons';

const Education = () => {
    let education = [
        {
            school: 'IIIT Gwalior',
            course: 'Bachelor of Technology, Computer Science',
            grade: 'CGPA 8.08 / 10',
            logo: logoPlaceholder,
            logoAlt:
                'Placeholder logo for ABV-IIITM Gwalior — replace with official logo',
            start: '2017',
            end: '2021',
        },
    ];

    return (
        <div className="rounded-2xl border border-aquamarine bg-space-cadet bg-topography-aquamarine p-6">
            <h2 className="flex rounded-md bg-[#ffffff33] p-2 text-sm font-semibold text-zinc-100 backdrop-blur-[10px]">
                <AcademicCap className="h-6 w-6 flex-none" />
                <span className="ml-3">Education</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {education.map((role, roleIndex) => (
                    <li
                        key={roleIndex}
                        className="flex gap-4 rounded-md bg-[#ffffff33] p-2 shadow-md backdrop-blur-[10px]"
                    >
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                            <Image
                                src={role.logo}
                                alt={role.logoAlt}
                                className="h-7 w-7"
                                unoptimized
                            />
                        </div>
                        <dl className="flex flex-auto flex-col flex-wrap gap-x-2">
                            <dt className="sr-only">University</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-100">
                                {role.school}
                            </dd>
                            <dt className="sr-only">Course</dt>
                            <dd className="text-xs text-zinc-300">{role.course}</dd>
                            <dt className="sr-only">Grade</dt>
                            <dd className="text-xs text-zinc-300">{role.grade}</dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="block text-xs text-zinc-400"
                                aria-label={`${role.start} until ${role.end}`}
                            >
                                <time dateTime={role.start}>{role.start}</time>{' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end}>{role.end}</time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Education;