'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, redirect } from 'next/navigation';
import useSWR from 'swr';
import { useAuth } from '@/src/shared';
import { ChatLink, getChatList } from '@/src/entities';

type Props = {
  title: string;
};

export function ChatList({ title }: Props) {
  const { user } = useAuth() || {};
  const searchParams = useSearchParams();
  const isOpen = searchParams?.get('isOpen') === 'true';
  const { data } = useSWR(user?.id ? 'chatList' : null, () =>
    getChatList(`${user?.id}`)
  );

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
        <p className="text-primary font-semibold text-xl">
          {title}({data?.length})
        </p>
      </section>

      <section className="h-[calc(100dvh-184px)] border-r border-gray overflow-y-auto">
        <Link href="/">
          <section className="text-brand flex justify-between py-5 pl-6 sm:pl-10 pr-8 border-b border-gray text-xl">
            New Chat +
          </section>
        </Link>
        {data?.map(
          ({ id, lastMessage: { text, timestamp }, title: chatTitle }) => {
            const date = new Date(timestamp);
            const hours = date.getUTCHours().toString().padStart(2, '0');
            const minutes = date.getUTCMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes}`;

            return (
              <ChatLink
                key={id}
                chatId={id}
                title={text}
                name={chatTitle}
                timestamp={formattedTime}
              />
            );
          }
        )}
      </section>
    </aside>
  );
}
