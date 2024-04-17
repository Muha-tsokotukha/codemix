'use client';

import { createContext, useContext } from 'react';

type Message = {
  message: string;
  isSentByUser?: boolean;
};

type User = {
  name: string;
  id: string;
};

type ChatHistoryContextType = {
  history: Message[];
  registerMessage: (val: Message) => void;
  setParticipant: (val?: User) => void;
  participant?: User;
};

export const ChatHistoryContext = createContext<
  ChatHistoryContextType | undefined
>(undefined);

export const useMessageHistory = () => {
  const history = useContext(ChatHistoryContext);

  return history;
};
