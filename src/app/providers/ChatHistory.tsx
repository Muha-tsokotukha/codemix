'use client';

import React, { useState, ReactNode, useMemo } from 'react';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { ChatHistoryContext } from '@/src/shared';
import { getChatMessages } from '@/src/entities';

type Message = {
  message: string;
  isSentByUser?: boolean;
};

export function ChatHistoryProvider({ children }: { children: ReactNode }) {
  const params = useParams();
  const chatId = params?.chatId?.[0];

  const { data } = useSWR(chatId ? `${chatId}-messages` : null, () =>
    getChatMessages(`${chatId}`)
  );

  const [messages, setMessages] = useState<Message[]>([
    {
      message: 'Hello! How can I help you today?',
    },
  ]);

  const registerMessage = ({ message, isSentByUser }: Message) => {
    setMessages((prev) => [...prev, { message, isSentByUser }]);
  };

  const contextValue = useMemo(() => {
    const history = data
      ? data?.map((item) => ({
          message: item?.text,
          isSentByUser: item?.senderId !== 'AI',
        }))
      : messages;

    return { history, registerMessage };
  }, [messages, data]);

  return (
    <ChatHistoryContext.Provider value={contextValue}>
      {children}
    </ChatHistoryContext.Provider>
  );
}
