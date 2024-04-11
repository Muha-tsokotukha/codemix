import { SignUpUserRequest, SignUpUserResponse } from './types';

export async function signUp(
  data: SignUpUserRequest
): Promise<SignUpUserResponse> {
  const url = 'http://localhost:5000/signup';

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
