import Link from 'next/link';
import { ChevronIcon } from '@/src/shared';

type Props = {
  name: string;
  status: string;
};

export function MessageHeader({ name, status }: Props) {
  return (
    <section className="py-3 sm:py-5 px-6 sm:px-10 h-[76px] sm:h-[92px] border-b border-gray flex gap-2">
      <span className="mt-0.5 block md:hidden">
        <Link href="?isOpen=true">
          <ChevronIcon />
        </Link>
      </span>
      <section>
        <p className="text-primary font-medium text-lg">{name}</p>
        <p className="text-md text-secondary">{status}</p>
      </section>
    </section>
  );
}
