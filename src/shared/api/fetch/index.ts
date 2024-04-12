export function fetcher(url: string, config?: RequestInit) {
  const { headers, ...rest } = config || {};

  return fetch(`http://localhost:5000${url}`, {
    headers: {
      'Content-type': 'application/json',
      'Auth-token': localStorage.getItem('token') || '',
      ...headers,
    },
    ...rest,
  });
}
