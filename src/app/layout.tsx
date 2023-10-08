import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";

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
        <html lang="en">
        <body className={inter.className + " bg-indigo-700 dark:bg-gray-700 border m-6 p-6 "}>
        <div className="bg-sky-600 ">Top layout 中文显示字体 😝</div>
        {children}</body>
        </html>
    )
}
