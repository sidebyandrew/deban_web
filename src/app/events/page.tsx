'use client'

import Link from "next/link";
import {Navbar} from "flowbite-react";
import Image from "next/image";

export default function Page() {
    return <> <h1>Hello Events</h1>

        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <Image
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                    width={36}
                    height={36}
                />
                <span
                    className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    About
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Services
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
        <Link href="/conferences">Conferences</Link>
    </>
}
