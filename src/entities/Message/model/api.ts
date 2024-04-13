import { fetcher } from '@/src/shared';
import { MessageItem } from './types';

export async function getChatMessages(chatId: string): Promise<MessageItem[]> {
  const url = `/openai/chats/${chatId}`;

  const res = await fetcher(url);
  const data: MessageItem[] = await res.json();

  return data;
}
