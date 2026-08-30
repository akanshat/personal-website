'use client';
import dynamic from 'next/dynamic';

// Force Next.js to skip compile optimization on this component layout during builds
const ExperienceTimelineComponent = dynamic(
  () => import('./experience-card').then((mod) => mod.ClientTimeline),
  { ssr: false }
);

export default function ExperienceTimeline() {
  return <ExperienceTimelineComponent />;
}
