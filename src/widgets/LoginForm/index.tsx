'use client';

import Link from 'next/link';
import { FastButton, FastInput } from '@/src/shared';
import { useLoginFormStore } from './model';

type Props = {
  translationKeys: {
    buttonKey: string;
    signUpKey: string;
    emailKey: string;
    passwordKey: string;
  };
};

export function LoginForm({ translationKeys }: Props) {
  const { emailKey, signUpKey, buttonKey, passwordKey } = translationKeys;
  const { handleInputChange, loginData, handleSubmit, error } =
    useLoginFormStore();

  return (
    <form
      className="w-full md:w-96 grid gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div>
        <label className="text-primary" htmlFor="email">
          {emailKey}
        </label>
        <FastInput
          onChange={handleInputChange}
          type="email"
          value={loginData.email}
          name="email"
          required
        />
      </div>

      <div>
        <label className="text-primary" htmlFor="password">
          {passwordKey}
        </label>
        <FastInput
          onChange={handleInputChange}
          type="password"
          value={loginData.password}
          name="password"
          minLength={8}
          required
        />
      </div>

      <div className="text-red-600 whitespace-pre">{error}</div>

      <FastButton type="submit">{buttonKey}</FastButton>

      <Link href="/registration">{signUpKey}</Link>
    </form>
  );
}
