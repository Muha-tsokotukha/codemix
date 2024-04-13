import { fetcher } from '@/src/shared';

export async function sendMessageToBot(message: string): Promise<string> {
  const url = '/openai/message';

  const res = await fetcher(url, {
    method: 'POST',
    body: JSON.stringify({ message }),
  });

  const data = await res.json();

  return data.message;
}
