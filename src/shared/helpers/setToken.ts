export function setToken(token: string, user: { name: string; id: string }) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}
