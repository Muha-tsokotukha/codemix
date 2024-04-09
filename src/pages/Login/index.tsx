import { useTranslations } from 'next-intl';
import { LoginForm } from '@/src/widgets';

export function LoginPage() {
  const t = useTranslations('HomePage');

  return (
    <section className="w-full flex flex-col content-center items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-center mb-4">{t('login')}</h1>

      <LoginForm />
    </section>
  );
}
