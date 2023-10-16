'use client';

import HomeFeature from '@/components/home/feature';
import { HomeHero } from '@/components/home/hero';
import { conferencesList } from '@/utils/data';
import { Card, CardBody, CardFooter, Divider, Image } from '@nextui-org/react';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HomeHero />

      <div className="mt-20 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
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
              <b>{item.host.name}</b>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div>
        <HomeFeature />
      </div>
    </section>
  );
}
