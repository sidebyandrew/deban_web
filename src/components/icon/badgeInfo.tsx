export default function BadgeInfo({addClass}: { addClass?: string }) {
    return <span
        className={"mt-1 inline-flex items-center justify-center w-6 h-6 mr-2 text-sm font-semibold dark:text-gray-700 " + addClass}
    >
    <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
      <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
      />
    </svg>
    <span className="sr-only">Icon description</span>
  </span>
}
