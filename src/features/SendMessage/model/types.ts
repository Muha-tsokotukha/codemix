export type SendNewMessageBot = {
  userId: string;
  message: string;
};

export type SendNewMessageBotResponse = {
  message: string;
  chatId: string;
};
