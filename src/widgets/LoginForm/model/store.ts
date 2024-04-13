import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { setToken } from '@/src/shared';
import { login } from '@/src/features';

export function useLoginFormStore() {
  const router = useRouter();

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

    if (res.message) {
      setError(res.message);
    } else if (res.token) {
      setToken(res.token);
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
