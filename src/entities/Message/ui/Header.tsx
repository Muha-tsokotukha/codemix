import { useTranslations } from 'next-intl';

type Props = {
  name: string;
  isOnline: boolean;
};

export function MessageHeader({ name, isOnline }: Props) {
  const t = useTranslations('HomePage');

  return (
    <section className="py-5 px-6 sm:px-10 h-[92px] border-b border-gray">
      <p className="text-primary font-medium text-lg">{name}</p>
      <p className="text-md text-secondary">
        {isOnline ? t('online') : t('offline')}
      </p>
    </section>
  );
}
