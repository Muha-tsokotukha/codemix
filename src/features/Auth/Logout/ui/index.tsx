import { useTranslations } from 'next-intl';

export function LogoutCard() {
  const t = useTranslations('Auth');

  return (
    <div className="grid content-center">
      <p className="text-primary font-medium text-lg">Samurai Meow</p>
      <button type="button" className="text-end text-md text-secondary">
        {t('logout')}
      </button>
    </div>
  );
}
