export type ChatList = {
  id: string;
  title: string;
  userId: string;
  lastMessage: {
    text: string;
    timestamp: string;
  };
};
