import { fetcher } from '@/src/shared';
import { MessageItem } from './types';

export async function getChatMessages(chatId: string): Promise<MessageItem[]> {
  const url = `/openai/chats/${chatId}`;

  const res = await fetcher(url);
  const data = await res.json();

  return data?.error ? [] : data;
}
