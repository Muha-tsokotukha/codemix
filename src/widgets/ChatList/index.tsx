'use client';

import { useEffect } from 'react';
import { useSearchParams, redirect } from 'next/navigation';
import { ChatLink } from '@/src/entities';

type Props = {
  title: string;
};

export function ChatList({ title }: Props) {
  const searchParams = useSearchParams();
  const isOpen = searchParams?.get('isOpen') === 'true';

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      redirect('/login');
    }
  });

  return (
    <aside
      className={`${isOpen ? 'w-full' : 'w-0'} md:w-[375px] xl:w-[512px] overflow-hidden`}
    >
      <section className="border-r border-gray flex items-center py-5 pl-6 sm:pl-10  pr-8 sm:h-[92px] border-b border-gray">
        <p className="text-primary font-semibold text-xl">{title}(3)</p>
      </section>

      <section className="h-[calc(100dvh-184px)] border-r border-gray overflow-y-auto">
        <ChatLink chatId="1" />
        <ChatLink chatId="2" isNewMessage />
        <ChatLink chatId="3" />
      </section>
    </aside>
  );
}
