'use client';

import { SectionWrapper } from '@/hoc';
import { BallView, GlobalCanvas } from '../canvas/ball';

import { technologies } from '@/lib/constants';


function Tech() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <GlobalCanvas>
        <div className="flex flex-row flex-wrap justify-center gap-10 p-10">
          {technologies.map((tech, index) => (
            <BallView
              key={tech.name}
              icon={tech.icon}
            />
          ))}
        </div>
      </GlobalCanvas>
    </div>
  );
}

export default SectionWrapper(Tech, '');
