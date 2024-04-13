'use client';

import { useContext } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChatHistoryContext } from '@/src/shared';
import { MessageCard, MessageHeader } from '@/src/entities';
import { SendInputMessageBar } from '@/src/features';

type Props = {
  status: string;
  promtPlaceholder: string;
};

export function ChatMessenger({ status, promtPlaceholder }: Props) {
  const searchParams = useSearchParams();
  const isOpen = searchParams?.get('isOpen') === 'true';
  const { history = [] } = useContext(ChatHistoryContext) || {};

  return (
    <section className={`${isOpen && 'hidden'} md:block`}>
      <MessageHeader name="Aslan" status={status} />

      <section className="p-10 bg-brand-gray overflow-auto grid content-start gap-6 h-[calc(100dvh-248px)]">
        {history?.map(({ message, isSentByUser }) => (
          <MessageCard
            key={message}
            message={message}
            isSentByUser={isSentByUser}
          />
        ))}
      </section>

      <SendInputMessageBar promtPlaceholder={promtPlaceholder} />
    </section>
  );
}
