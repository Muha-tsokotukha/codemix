'use client';

import { createContext, useContext } from 'react';

type Message = {
  message: string;
  isSentByUser?: boolean;
};

type ChatHistoryContextType = {
  history: Message[];
  registerMessage: (val: Message) => void;
};

export const ChatHistoryContext = createContext<
  ChatHistoryContextType | undefined
>(undefined);

export const useMessageHistory = () => {
  const history = useContext(ChatHistoryContext);

  return history;
};
