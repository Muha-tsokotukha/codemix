import { fetcher } from '@/src/shared';
import { SendNewMessageBot, SendNewMessageBotResponse } from './types';

export async function sendMessageToBot(
  reqData: SendNewMessageBot
): Promise<SendNewMessageBotResponse> {
  const url = '/openai/message';

  const res = await fetcher(url, {
    method: 'POST',
    body: JSON.stringify(reqData),
  });

  const data: SendNewMessageBotResponse = await res.json();

  return data;
}
