'use client';

import HomeFeature from '@/components/home/feature';
import { HomeHero } from '@/components/home/hero';
import BadgeInfo from '@/components/icon/badgeInfo';
import BadgeVerified from '@/components/icon/badgeVerified';
import { conferencesList } from '@/utils/data';
import { Card, CardBody, CardFooter, Divider, Image } from '@nextui-org/react';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HomeHero />

      <h3 className="mt-20 text-left text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
        Epic Conferences
      </h3>
      <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {conferencesList.map((item, index) => (
          <Card
            shadow="lg"
            radius="sm"
            key={index}
            isPressable
            onPress={() => console.log({ item })}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="sm"
                width="100%"
                alt={item.title}
                className="object-fit mb- h-64 w-full hover:object-contain"
                src={item.cover}
              />
              <div>
                <p className="mx-2 line-clamp-2">{item.title}</p>
                <p className="mx-2 mt-2">{item.venue}</p>
                <p className="mx-2 mt-2">
                  {item.start_time}- {item.end_time}
                </p>
              </div>
              <Divider />
            </CardBody>
            <CardFooter className="justify-between text-small">
              <b>
                <Image
                  className="m-1 h-6 w-6 rounded-full"
                  src={item.host.logo}
                  alt="logo"
                  width={36}
                  height={36}
                />
                {item.host.name} {item.host.verified && <BadgeVerified />}
                {!item.host.verified && <BadgeInfo />}
              </b>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div>
        <h3 className="mt-20 text-left text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          Features
        </h3>
        <HomeFeature />
      </div>
    </section>
  );
}
