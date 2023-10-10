import Image from 'next/image';

export default function TheHeader() {
    return (
        <header
            className="border-gray-200 bg-white dark:border-gray-600 sticky top-0 z-40 mx-auto w-full flex-none border-b">
            <nav className="border-gray-200 bg-white dark:bg-gray-800 px-4 py-2 lg:px-6">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
                    <a href="/" className="flex items-center">
                        <Image
                            src="/img/logo/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt=" Logo"
                            width="36"
                            height="36"
                        />
                        <span className="text-xl font-semibold dark:text-white self-center whitespace-nowrap">
              SideBy
            </span>
                    </a>

                    <div className="flex items-center lg:order-2">
                        <a
                            href="#"
                            className="rounded-lg text-sm text-gray-800 hover:bg-gray-50 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 mr-2 px-4 py-2 font-medium focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5"
                        >
                            Log in
                        </a>
                        <div>
                            <form>
                                <select
                                    id="countries"
                                    className="rounded-lg border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500 block w-full border p-2.5"
                                >
                                    <option key={1} defaultValue={'en'} value="en">
                                        English
                                    </option>
                                    <option key={2} value="cn">
                                        简体中文
                                    </option>
                                </select>
                            </form>
                        </div>

                        {/*--  a flex removed from button -*/}
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-1 inline-flex items-center p-2 focus:outline-none focus:ring-2 lg:hidden"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="hidden h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div
                        className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
                        id="mobile-menu-2"
                    >
                        <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                            <li>
                                <a
                                    href="/conferences"
                                    className="rounded text-white bg-primary-700 dark:text-white lg:text-primary-700 block py-2 pl-3 pr-4 lg:bg-transparent lg:p-0"
                                    aria-current="page"
                                >
                                    <p>Conferences</p>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="events"
                                    className="border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hover:text-primary-700 lg:dark:hover:text-white block border-b py-2 pl-3 pr-4 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent"
                                    aria-current="page"
                                >
                                    <p>Events</p>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="spaces"
                                    className="border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hover:text-primary-700 lg:dark:hover:text-white block border-b py-2 pl-3 pr-4 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent"
                                >
                                    <p>Spaces</p>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="venues"
                                    className="border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hover:text-primary-700 lg:dark:hover:text-white block border-b py-2 pl-3 pr-4 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent"
                                >
                                    Venues
                                </a>
                            </li>
                            <li>
                                <a
                                    href="sharing"
                                    className="border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hover:text-primary-700 lg:dark:hover:text-white block border-b py-2 pl-3 pr-4 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent"
                                >
                                    Sharing
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
