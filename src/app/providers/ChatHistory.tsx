'use client';

import React, { useState, ReactNode, useMemo } from 'react';
import { ChatHistoryContext } from '@/src/shared';

type Message = {
  message: string;
  isSentByUser?: boolean;
};

export function ChatHistoryProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      message: 'Hello! How can I help you today?',
    },
  ]);

  const registerMessage = ({ message, isSentByUser }: Message) => {
    setMessages((prev) => [...prev, { message, isSentByUser }]);
  };

  const contextValue = useMemo(
    () => ({
      history: messages,
      registerMessage,
    }),
    [messages]
  );

  return (
    <ChatHistoryContext.Provider value={contextValue}>
      {children}
    </ChatHistoryContext.Provider>
  );
}
