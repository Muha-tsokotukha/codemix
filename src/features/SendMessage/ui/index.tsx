'use client';

import { useContext, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { AuthContext, ChatHistoryContext, SendIcon } from '@/src/shared';
import { sendMessageToBot } from '../model/api';

type Props = {
  promtPlaceholder: string;
};

export function SendInputMessageBar({ promtPlaceholder }: Props) {
  const [message, setMessage] = useState('');
  const { push } = useRouter();
  const params = useParams();
  const chatId = params?.chatId?.[0];
  const { registerMessage } = useContext(ChatHistoryContext) || {};
  const { user } = useContext(AuthContext) || {};

  const handleSubmit = async () => {
    if (registerMessage && user) {
      registerMessage({ message, isSentByUser: true });
      setMessage('');

      try {
        const res = await sendMessageToBot({
          message,
          userId: user?.id,
          chatId,
        });

        registerMessage({
          message: res.message,
          isSentByUser: false,
        });

        push(`/${res.chatId}`);
      } catch (err) {
        registerMessage({
          message: 'Sorry, error occured trying to respond to you :(',
          isSentByUser: false,
        });
        throw err;
      }
    }
  };

  return (
    <section className="flex items-center justify-between overflow-hidden h-16 border-t border-gray">
      <textarea
        onChange={(e) => setMessage(e.currentTarget.value)}
        className="outline-none h-16 w-11/12 py-5 px-[30px] resize-none [&::-webkit-scrollbar]:hidden"
        placeholder={promtPlaceholder}
        value={message}
      />
      <button className="mr-6 sm:mr-10" onClick={handleSubmit}>
        <SendIcon />
      </button>
    </section>
  );
}
