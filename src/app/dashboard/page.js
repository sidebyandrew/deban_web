'use client'

import Link from "next/link";
import {Alert} from "flowbite-react";

export default function Page() {
    return (
        <>
            <h1>Hello Confs</h1>
            <Alert color="info">Alert!</Alert>;
            <Link href="/events">Events</Link>
        </>)
}