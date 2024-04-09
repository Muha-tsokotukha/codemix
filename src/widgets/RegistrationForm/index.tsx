import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FastButton, FastInput } from '@/src/shared';

export function RegistrationForm() {
  const t = useTranslations('HomePage');

  return (
    <form className="w-full md:w-96 grid gap-3">
      <div>
        <label className="text-primary" htmlFor="email">
          {t('email')}
        </label>
        <FastInput />
      </div>

      <div>
        <label className="text-primary" htmlFor="password">
          {t('password')}
        </label>
        <FastInput />
      </div>

      <div>
        <label className="text-primary" htmlFor="password">
          {t('password')}
        </label>
        <FastInput />
      </div>

      <FastButton />

      <Link href="/login">{t('login')}</Link>
    </form>
  );
}
