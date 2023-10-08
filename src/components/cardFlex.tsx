import Link from "next/link";
import Image from "next/image";
import IconMap from "@/components/icon/map";
import IconCalendar from "@/components/icon/calendar";
import BadgeVerified from "@/components/icon/badgeVerified";
import BadgeInfo from "@/components/icon/badgeInfo";
import {conferences} from "@/utils/data";

async function getConferencesData(url: string) {
    const res = await fetch(url)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function CardFlex() {
    let listItems = conferences.map((conference: any) => <div
        key={conference.id}
        className="p-2 lg:w-1/2"
    >
        <div className="bg-gray-800 bg-opacity-40 p-3 rounded-lg">
            <Link href={conference.origin}>
                <div>
                    <Image
                        className="h-46 rounded w-full object-fill mb-2"
                        src={conference.cover}
                        alt="content"
                        width={256}
                        height={256}
                    />
                </div>

                <h2
                    className="text-lg md:text-xl text-white title-font mb-4 dark:text-white font-media tracking-tight"
                >
                    {conference.title}
                </h2>
                <div
                    className="flex flex-row tracking-widest text-blue-400 text-xs font-medium title-font"
                >
                    <IconMap addClass=" text-blue-800 dark:text-blue-400 mr-1 "/>
                    {conference.venue}
                </div>
                <div className="flex flex-row leading-relaxed text-base">
                    <IconCalendar
                        addClass=" text-gray-400 dark:text-gray-500 mt-1 "
                    />
                    {conference.start_time} - {conference.end_time}
                </div>

                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>

                <div className="flex flex-row">
                    <div className="basis-2/3 flex flex-row" id="this is 1/2 host info">
                        <div>
                            <Image
                                className="w-6 h-6 rounded-full m-1"
                                src={conference.host.logo}
                                alt="logo"
                                width={36}
                                height={36}
                            />
                        </div>

                        <div
                            className="mt-2 ml-1 g-5 h-6 text-justify tracking-widest text-gray-400 text-xs font-medium title-font"
                        >
                            {conference.host.name}
                        </div>

                        {conference.host.verified && <BadgeVerified/>}
                        {!conference.host.verified && <BadgeInfo/>}
                    </div>
                    <div
                        className="mt-2 ml-1 g-5 h-6 basis-1/3 flex flex-row place-content-end gap-2"
                    >
                        <div
                            className="text-justify tracking-widest text-gray-400 text-xs font-medium title-font"
                        >
                            Side Events
                        </div>
                        <div
                            className="text-justify tracking-widest text-gray-400 text-xs font-medium title-font"
                        >
                            {conference.side_events_count}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </div>);


    return <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-2 py-2 mx-auto">
            <div className="flex flex-wrap -m-4">

                {listItems}
            </div>
        </div>
    </section>
}
