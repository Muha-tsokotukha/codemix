import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { setToken, useAuth } from '@/src/shared';
import { login } from '@/src/features';

export function useLoginFormStore() {
  const router = useRouter();
  const { login: loginUser } = useAuth() || {};

  const defaultValues = {
    password: '',
    email: '',
  };
  const [error, setError] = useState('');
  const [loginData, setLoginData] = useState(defaultValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const res = await login(loginData);

    const { message, user, token } = res;

    if (message) {
      setError(message);
    } else if (token && user && loginUser) {
      loginUser(user);
      setToken(token);
      router.push('/');
    }
  };

  return {
    handleInputChange,
    handleSubmit,
    error,
    loginData,
  };
}
