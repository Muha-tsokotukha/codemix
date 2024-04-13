import { LoginUserRequest, LoginUserResponse } from './types';

export async function login(
  data: LoginUserRequest
): Promise<LoginUserResponse> {
  const url = 'http://localhost:5000/login';

  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const response = await res.json();

  return response;
}
