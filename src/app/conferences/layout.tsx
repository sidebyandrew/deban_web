import { title } from '@/components/primitives';

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-start justify-start gap-4 py-1 md:py-2">
      <div className="inline-block max-w-lg justify-start text-start">
        <div className={'m-2'}>
          <h2 className={title({ size: 'sm' })}>Conferences</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
