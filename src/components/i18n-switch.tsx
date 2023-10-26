'use client';

import { EarthIcon } from '@/components/icons';
import { Button } from '@nextui-org/button';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useIsSSR } from '@react-aria/ssr';
import { useEffect, useState } from 'react';

export default function I18NSwitch() {
  let isSSR = useIsSSR();
  const [currentDate, setCurrentDate] = useState('');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const serverTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    let intervalId = setInterval(() => setCurrentDate(new Date().toLocaleString()), 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Button variant={'light'} isIconOnly aria-label="i8n" onPress={onOpen}>
        <EarthIcon size={22} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Preferred Language and Timezone
              </ModalHeader>
              <ModalBody>
                <p>
                  <div> Current Time: {currentDate}</div>
                  <div> Server Timezone: {serverTimeZone}</div>
                  {!isSSR&&<div> Timezone: {new Intl.DateTimeFormat().resolvedOptions().timeZone}</div>}

                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
