'use client';

import Link from 'next/link';
import { FastButton, FastInput } from '@/src/shared';
import { useRegistrationFormStore } from './model';

type Props = {
  translationKeys: {
    emailKey: string;
    passwordKey: string;
    repeatPasswordKey: string;
    nameKey: string;
    loginKey: string;
    buttonKey: string;
    repeatPasswordError: string;
  };
};

export function RegistrationForm({ translationKeys }: Props) {
  const {
    handleInputChange,
    handleSubmit,
    errors,
    signUpData,
    isPasswordMatch,
  } = useRegistrationFormStore();
  const {
    emailKey,
    nameKey,
    passwordKey,
    loginKey,
    repeatPasswordKey,
    buttonKey,
    repeatPasswordError,
  } = translationKeys;

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
          value={signUpData.email}
          name="email"
          required
        />

        <div className="text-red-600 whitespace-pre">{errors?.email}</div>
      </div>

      <div>
        <label className="text-primary" htmlFor="name">
          {nameKey}
        </label>
        <FastInput
          onChange={handleInputChange}
          value={signUpData.name}
          name="name"
          required
        />

        <div className="text-red-600 whitespace-pre">{errors?.name}</div>
      </div>

      <div>
        <label className="text-primary" htmlFor="password">
          {passwordKey}
        </label>
        <FastInput
          onChange={handleInputChange}
          type="password"
          value={signUpData.password}
          name="password"
          minLength={8}
          required
        />

        <div className="text-red-600 whitespace-pre">{errors?.password}</div>
      </div>

      <div>
        <label className="text-primary" htmlFor="repeatPassword">
          {repeatPasswordKey}
        </label>
        <FastInput
          onChange={handleInputChange}
          type="password"
          value={signUpData.repeatPassword}
          name="repeatPassword"
          minLength={8}
          required
        />

        {!isPasswordMatch && (
          <div className="text-red-600 whitespace-pre">
            {repeatPasswordError}
          </div>
        )}
      </div>

      <FastButton type="submit">{buttonKey}</FastButton>

      <Link href="/login">{loginKey}</Link>
    </form>
  );
}
