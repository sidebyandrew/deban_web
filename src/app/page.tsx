'use client';
import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="m-1 gap-2 p-2">
      <Button variant={'destructive'}>Click Me2</Button>
      <ModeToggle />

      <Button variant="outline" asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}
