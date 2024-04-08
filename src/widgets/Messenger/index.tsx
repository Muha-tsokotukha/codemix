'use client';

import { useSearchParams } from 'next/navigation';
import { MessageCard, MessageHeader } from '@/src/entities';
import { SendInputMessageBar } from '@/src/features';

type Props = {
  status: string;
  promtPlaceholder: string;
};

export function ChatMessenger({ status, promtPlaceholder }: Props) {
  const searchParams = useSearchParams();
  const isOpen = searchParams?.get('isOpen') === 'true';

  return (
    <section className={`${isOpen && 'hidden'} md:block`}>
      <MessageHeader name="Aslan" status={status} />

      <section className="p-10 bg-brand-gray overflow-auto grid content-start gap-6 h-[calc(100vh-248px)]">
        <MessageCard message="heeeey" isSentByUser />
        <MessageCard message="hello, send dudes" />
        <MessageCard message="u mean nudes?" isSentByUser />
        <MessageCard message="I need dudes" />
        <MessageCard message="Im in the middle of the fight" />
        <MessageCard message="..." isSentByUser />
        <MessageCard message="sup" />
        <MessageCard
          message="Dudes are on the way dont worry man they are coming so wait please then lorem ipsumDudes are on the way dont worry man they are coming so wait please then lorem ipsum"
          isSentByUser
        />
      </section>

      <SendInputMessageBar promtPlaceholder={promtPlaceholder} />
    </section>
  );
}
