import { MailIcon } from '../custom-icons';
import Button from '@/components/button';

const GetInContact = () => {
    return (
        <div className="rounded-2xl border border-sunglow bg-space-cadet bg-topography-sunglow p-6">
            <h2 className="flex rounded-md bg-[#ffffff33] p-2 text-sm font-semibold text-zinc-100 backdrop-blur-[10px]">
                <MailIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Get In Contact</span>
            </h2>
            <p className="mt-2 rounded-md bg-[#ffffff33] p-2 text-sm text-zinc-300 backdrop-blur-[10px]">
                Open to full-time roles, interviewing, and freelance. Email is the
                fastest way to reach me.
            </p>
            <p className="mt-2 rounded-md bg-[#ffffff33] p-2 text-sm text-zinc-300 backdrop-blur-[10px]">
                akanshat1999@gmail.com
            </p>
            <Button
                href="/contact"
                variant="primary"
                text="Email me"
                type="button"
                className="mt-6 w-full"
            ></Button>
        </div>
    );
}

export default GetInContact;