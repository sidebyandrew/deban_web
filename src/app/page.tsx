'use client';

import { Counter } from '@/components/counter';
import { GithubIcon } from '@/components/icons';
import { subtitle, title } from '@/components/primitives';
import { siteConfig } from '@/config/site';
import { conferencesList } from '@/utils/data';
import { Link } from '@nextui-org/link';
import { Card, CardBody, CardFooter, Divider, Image } from '@nextui-org/react';
import { button as buttonStyles } from '@nextui-org/theme';
import NextLink from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block  justify-center text-center">
        <h1 className={title()}>
          Social&nbsp;{' '}
          <span className={title({ color: 'violet' })}>Events&nbsp;</span>
          With Pleasure!
        </h1>
        <br />
        <h1 className={title()}></h1>
        <h2 className={subtitle({ class: 'mt-4' })}>
          Epic conferences, side events, local meetups, webinars, venues rating,
          hotel sharing...
        </h2>
      </div>

      <div className="flex gap-3">
        <Counter />

        <Link
          isExternal
          as={NextLink}
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
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
                className="object-fit mb- h-64 w-full"
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
    </section>
  );
}
