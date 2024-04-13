export type SendNewMessageBot = {
  userId: string;
  message: string;
  chatId?: string;
};

export type SendNewMessageBotResponse = {
  message: string;
  chatId: string;
};
