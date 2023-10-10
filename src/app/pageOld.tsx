import CardFlex from '@/components/cardFlex';

export default function Home() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 bg-[url('/img/jumbotron/hero-pattern.svg')] dark:bg-[url('/img/jumbotron/hero-pattern-dark.svg')]">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-10">
          <a
            href="https://cosmoverse.org/"
            target="_blank"
            className="rounded-full bg-blue-100 text-sm text-indigo-700 hover:bg-blue-200 dark:bg-indigo-900 dark:text-blue-300 dark:hover:bg-indigo-800 mb-7 inline-flex items-center justify-between px-1 py-1 pr-4"
          >
            <span className="rounded-full bg-indigo-600 text-xs text-white mr-3 px-4 py-1.5">
              Upcoming
            </span>
            <span className="text-sm font-medium">Cosmmoverse at Istabbul</span>
            <svg
              className="ml-2 h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
          <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-5xl lg:text-6xl mb-4">
            Social Events With Pleasure.
          </h1>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-200 lg:text-xl mb-8 hidden sm:px-16 lg:block lg:px-48">
            Epic conferences, side events, local meetups, webinars, venues
            rating, hotel sharing... Well not quite anything, but all your need.
          </p>
          <form className="mx-auto w-full max-w-md">
            <label
              htmlFor="default-email"
              className="text-sm text-gray-900 dark:text-white sr-only mb-2 font-medium"
            >
              Search Events
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                <svg
                  className="text-gray-500 dark:text-gray-400 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="input"
                id="default-search"
                className="rounded-lg border-gray-300 bg-white text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 block w-full border p-4 pl-10"
                placeholder="event keywords..."
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-blue-700 text-sm text-white hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-2.5 right-2.5 px-4 py-2 font-medium focus:outline-none focus:ring-4"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="from-indigo-100 dark:from-gray-900 absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b to-transparent"></div>
      </section>

      <main className="relative">
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-10">
            <div className="mx-auto mb-2 text-center lg:mb-2">
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl mb-4 text-left">
                Epic Conferences
              </h3>
            </div>

            <CardFlex />
          </div>
        </section>
      </main>
    </div>
  );
}
