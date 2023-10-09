'use client';
import * as Popover from '@radix-ui/react-popover';
import { Button, Flex, Text } from '@radix-ui/themes';

export default function Home() {
  return (
    <>
      <Popover.Root>
        <Popover.Trigger className={'bg-red-9'}>More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={'bg-red-9 text-green-4'}>
            Some more info…
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Lets go</Button>
      </Flex>
    </>
  );
}
