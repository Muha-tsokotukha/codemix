export type ChatList = {
  id: string;
  title: string;
  participants: { name: string; id: string }[];
  lastMessage: {
    text: string;
    timestamp: string;
  };
};
