'use client';

import React, { useState, ReactNode, useMemo, useEffect } from 'react';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { ChatHistoryContext } from '@/src/shared';
import { User, getChatMessages } from '@/src/entities';

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

  const [messages, setMessages] = useState<Message[]>([]);
  const [participant, setParticipant] = useState<User>();

  const registerMessage = ({ message, isSentByUser }: Message) => {
    setMessages((prev) => [...prev, { message, isSentByUser }]);
  };

  useEffect(() => {
    if (!chatId) setMessages([]);
    else if (data) {
      const newMessages = data?.map((item) => ({
        message: item?.text,
        isSentByUser: item?.senderId !== 'AI',
      }));
      setMessages(newMessages);
    }
  }, [data, chatId]);

  const contextValue = useMemo(
    () => ({ history: messages, registerMessage, participant, setParticipant }),
    [messages, participant]
  );

  return (
    <ChatHistoryContext.Provider value={contextValue}>
      {children}
    </ChatHistoryContext.Provider>
  );
}
