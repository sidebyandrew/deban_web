'use client';
import { conferencesList } from '@/utils/data';
import { Card, CardBody, CardFooter, Divider, Image } from '@nextui-org/react';

export default function App() {
  const list = [
    {
      title: 'Orange',
      img: '/images/fruit-1.jpeg',
      price: '$5.50',
    },
    {
      title: 'Tangerine',
      img: '/images/fruit-2.jpeg',
      price: '$3.00',
    },
    {
      title: 'Raspberry',
      img: '/images/fruit-3.jpeg',
      price: '$10.00',
    },
    {
      title: 'Lemon',
      img: '/images/fruit-4.jpeg',
      price: '$5.30',
    },
    {
      title: 'Avocado',
      img: '/images/fruit-5.jpeg',
      price: '$15.70',
    },
    {
      title: 'Lemon 2',
      img: '/images/fruit-6.jpeg',
      price: '$8.00',
    },
    {
      title: 'Banana',
      img: '/images/fruit-7.jpeg',
      price: '$7.50',
    },
    {
      title: 'Watermelon',
      img: '/images/fruit-8.jpeg',
      price: '$12.20',
    },
  ];

  return (
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
  );
}
