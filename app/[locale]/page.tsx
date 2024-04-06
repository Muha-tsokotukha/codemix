import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return <main className="text-rose-200">{t('title')}</main>;
}
