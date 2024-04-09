import { useTranslations } from 'next-intl';
import { RegistrationForm } from '@/src/widgets';

export function RegistrationPage() {
  const t = useTranslations('HomePage');

  return (
    <section className="w-full flex flex-col content-center items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-center mb-4">{t('register')}</h1>

      <RegistrationForm />
    </section>
  );
}
