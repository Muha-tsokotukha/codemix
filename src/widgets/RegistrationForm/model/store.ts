import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { setToken } from '@/src/shared';
import { signUp } from '@/src/features';

export function useRegistrationFormStore() {
  const router = useRouter();

  const defaultValues = {
    name: '',
    password: '',
    email: '',
  };
  const [errors, setErrors] = useState(defaultValues);
  const [signUpData, setSignUpData] = useState({
    ...defaultValues,
    repeatPassword: '',
  });
  const isPasswordMatch = signUpData.password === signUpData.repeatPassword;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const { repeatPassword, ...data } = signUpData;
    if (!isPasswordMatch) return;

    const res = await signUp(data);

    if (res.errors) {
      setErrors(res.errors);
    } else if (res.token) {
      setToken(res.token);
      router.push('/');
    }
  };

  return {
    handleInputChange,
    handleSubmit,
    errors,
    signUpData,
    isPasswordMatch,
  };
}
