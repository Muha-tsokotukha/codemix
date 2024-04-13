import { fetcher } from '@/src/shared';
import { ChatList } from './type';

export async function getChatList(userId: string): Promise<ChatList[]> {
  const url = `/openai/chats?userId=${userId}`;

  const res = await fetcher(url);
  const data: ChatList[] = await res.json();

  return data;
}
