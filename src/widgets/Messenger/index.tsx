'use client';

import { useSearchParams } from 'next/navigation';
import { useMessageHistory } from '@/src/shared';
import { MessageCard, MessageHeader } from '@/src/entities';
import { SendInputMessageBar } from '@/src/features';

type Props = {
  status: string;
  promtPlaceholder: string;
};

export function ChatMessenger({ status, promtPlaceholder }: Props) {
  const searchParams = useSearchParams();
  const isOpen = searchParams?.get('isOpen') === 'true';
  const { history = [], participant } = useMessageHistory() || {};

  return (
    <section className={`${isOpen && 'hidden'} md:block`}>
      <MessageHeader name={participant?.name || 'AIBOT'} status={status} />

      <section className="p-10 bg-brand-gray overflow-auto grid content-start gap-6 h-[calc(100dvh-248px)]">
        {history?.map(({ message, isSentByUser }, index) => {
          const key = `${message}-${index}`;

          return (
            <MessageCard
              key={key}
              message={message}
              isSentByUser={isSentByUser}
            />
          );
        })}
      </section>

      <SendInputMessageBar promtPlaceholder={promtPlaceholder} />
    </section>
  );
}
