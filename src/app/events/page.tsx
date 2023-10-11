import { button, title } from '@/components/primitives';
import { Button } from '@nextui-org/button';

export default function EventPage() {
  return (
    <div>
      <h1 className={title({ size: 'sm' })}>Events</h1>

      <Button radius="full" className={button()}>
        @nextui-org/button{' '}
      </Button>
    </div>
  );
}
