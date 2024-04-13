import { mutate } from 'swr';
import { fetcher } from '@/src/shared';
import { SendNewMessageBot, SendNewMessageBotResponse } from './types';

export async function sendMessageToBot({
  chatId,
  ...reqData
}: SendNewMessageBot): Promise<SendNewMessageBotResponse> {
  const url = chatId ? `/openai/message/${chatId}` : '/openai/message';

  const res = await fetcher(url, {
    method: 'POST',
    body: JSON.stringify(reqData),
  });

  const data: SendNewMessageBotResponse = await res.json();

  mutate(`${chatId}-messages`);

  return data;
}
