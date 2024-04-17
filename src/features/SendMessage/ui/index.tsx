'use client';

import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { SendIcon, useAuth, useMessageHistory } from '@/src/shared';
// import { sendMessageToBot } from '../model/api';

type Props = {
  promtPlaceholder: string;
};

export function SendInputMessageBar({ promtPlaceholder }: Props) {
  const [message, setMessage] = useState('');
  // const { push } = useRouter();
  const params = useParams();
  const chatId = params?.chatId?.[0];
  const { registerMessage } = useMessageHistory() || {};
  const { user } = useAuth() || {};

  const [socket, setSocket] = useState<WebSocket | null>(null);

  const handleIncomingMessage = useCallback(
    (event: MessageEvent) => {
      const data = JSON.parse(event.data);

      if (registerMessage) {
        registerMessage({
          message: data.message,
          isSentByUser: false,
        });
      }
    },
    [registerMessage]
  );

  const handleSubmitWS = () => {
    if (socket && message.trim() !== '' && user) {
      const data = JSON.stringify({
        message,
        userId: user?.id,
        userName: user?.name,
        chatId,
      });
      socket.send(data);
      setMessage('');
    }
  };

  // const handleSubmit = async () => {
  //   if (registerMessage && user) {
  //     registerMessage({ message, isSentByUser: true });
  //     setMessage('');

  //     try {
  //       const res = await sendMessageToBot({
  //         message,
  //         userId: user?.id,
  //         userName: user?.name,
  //         chatId,
  //       });

  //       registerMessage({
  //         message: res.message,
  //         isSentByUser: false,
  //       });

  //       push(`/${res.chatId}`);
  //     } catch (err) {
  //       registerMessage({
  //         message: 'Sorry, error occured trying to respond to you :(',
  //         isSentByUser: false,
  //       });
  //       throw err;
  //     }
  //   }
  // };

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:5000/ws'); // Adjust URL as needed
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.addEventListener('message', handleIncomingMessage);
    }

    return () => {
      if (socket) {
        socket.removeEventListener('message', handleIncomingMessage);
      }
    };
  }, [socket, handleIncomingMessage]);

  return (
    <section className="flex items-center justify-between overflow-hidden h-16 border-t border-gray">
      <textarea
        onChange={(e) => setMessage(e.currentTarget.value)}
        className="outline-none h-16 w-11/12 py-5 px-[30px] resize-none [&::-webkit-scrollbar]:hidden"
        placeholder={promtPlaceholder}
        value={message}
      />
      <button className="mr-6 sm:mr-10" onClick={handleSubmitWS}>
        <SendIcon />
      </button>
    </section>
  );
}
