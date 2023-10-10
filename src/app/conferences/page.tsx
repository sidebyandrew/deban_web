import { button, title } from '@/components/primitives';
import { Button } from '@nextui-org/button';

export default function PricingPage() {
  console.error(button({ size: 'lg', color: 'warn' }));
  console.error('=====');
  console.error(button.defaultVariants);
  return (
    <div>
      <h1 className={title()}>Conferences</h1>

      <Button radius="full" className={button()}>
        @nextui-org/button{' '}
      </Button>
    </div>
  );
}
