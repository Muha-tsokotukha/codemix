export type SendNewMessageBot = {
  userId: string;
  message: string;
  userName: string;
  chatId?: string;
};

export type SendNewMessageBotResponse = {
  message: string;
  chatId: string;
};
