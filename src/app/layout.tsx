import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import TheHeader from "@/components/header";
import TheFooter from "@/components/footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Deban | Social Events',
    description: 'Social Events With Pleasure!',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
        <body className={inter.className + " bg-gray-50 dark:bg-gray-900 text-white "}>
        <TheHeader/>
        {children}
        <TheFooter/>
        </body>
        </html>
    )
}
