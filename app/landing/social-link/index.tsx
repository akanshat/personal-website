import Link from 'next/link';

const SocialLink = ({
    Icon,
    href,
    'aria-label': ariaLabel,
}: {
    Icon: React.JSXElementConstructor<any>;
    href: string;
    'aria-label'?: string;
}) => {
    return (
        <Link className="group -m-1 p-1" href={href} aria-label={ariaLabel}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-aquamarine dark:fill-zinc-400" />
        </Link>
    );
}

export default SocialLink;