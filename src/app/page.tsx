'use client';

import EpicConferences from '@/components/home/epic-conferences';
import HomeFeature from '@/components/home/feature';
import { HomeHero } from '@/components/home/hero';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HomeHero />

      <h3 className="mt-20 text-left text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
        Epic Conferences
      </h3>
      <EpicConferences />

      <div>
        <h3 className="mt-20 text-left text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          Features
        </h3>
        <HomeFeature />
      </div>
    </section>
  );
}
