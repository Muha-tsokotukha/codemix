import { fetcher } from '@/src/shared';

export async function logout() {
  const url = '/logout';

  await fetcher(url);
  localStorage.removeItem('token');
}
