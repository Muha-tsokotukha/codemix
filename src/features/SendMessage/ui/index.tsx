'use client';

import { useContext, useState } from 'react';
import { ChatHistoryContext, SendIcon } from '@/src/shared';
import { sendMessageToBot } from '../model/api';

type Props = {
  promtPlaceholder: string;
};

export function SendInputMessageBar({ promtPlaceholder }: Props) {
  const [message, setMessage] = useState('');
  const { registerMessage } = useContext(ChatHistoryContext) || {};

  const handleSubmit = async () => {
    if (registerMessage) {
      registerMessage({ message, isSentByUser: true });
      setMessage('');

      try {
        const resMessage = await sendMessageToBot(message);
        registerMessage({ message: resMessage, isSentByUser: false });
      } catch (err) {
        registerMessage({
          message: 'Sorry, error occured trying to respond to you :(',
          isSentByUser: false,
        });
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
