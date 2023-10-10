'use client';

import CardFlex from '../../components/cardFlex';
import CardSwitch from '../../components/icon/CardSwitch';
import TheTabTitle from '../../components/TheTabTitle';

export default function Page() {
  return (
    <>
      <section className="body-font bg-gray-900 text-gray-400">
        <div className="container mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <TheTabTitle title="Conferences">
            <div>
              <CardSwitch isLargeView={false} />
            </div>
          </TheTabTitle>
          <div className="flex w-full flex-wrap">
            <div className="md:py-6 md:pr-10">
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="bg-gray-800 pointer-events-none h-full w-1"></div>
                </div>
                <div className="rounded-full bg-blue-800 text-white relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>

                <div className="flex-grow pl-4">
                  <h2 className="title-font text-lg tracking-wider text-white mb-1 font-medium">
                    September
                  </h2>
                  <div className="leading-relaxed mt-6">
                    <CardFlex />
                  </div>
                </div>
              </div>

              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="bg-gray-800 pointer-events-none h-full w-1"></div>
                </div>
                <div className="rounded-full bg-blue-500 text-white relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font text-lg tracking-wider text-white mb-1 font-medium">
                    October
                  </h2>
                  <div className="leading-relaxed">
                    card
                    {/*-- <CardFlex card_md_w="2" card_xl_w="4" /> -*/}
                  </div>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="bg-gray-800 pointer-events-none h-full w-1"></div>
                </div>
                <div className="rounded-full bg-blue-500 text-white relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font text-sm tracking-wider text-white mb-1 font-medium">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed">
                    Coloring book nar whal glossier master cleanse umami. Salvia
                    +1 master cleanse blog taiyaki.
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="bg-gray-800 pointer-events-none h-full w-1"></div>
                </div>
                <div className="rounded-full bg-blue-500 text-white relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font text-sm tracking-wider text-white mb-1 font-medium">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed">card</p>
                </div>
              </div>

              <div className="relative flex">
                <div className="rounded-full bg-blue-500 text-white relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font text-sm tracking-wider text-white mb-1 font-medium">
                    FINISH
                  </h2>
                  <div className="leading-relaxed">
                    Pitchfork ugh tattooed scenester echo park gastropub
                    whatever cold-pressed retro.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
