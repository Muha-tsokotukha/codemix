import { useTranslations } from 'next-intl';
import { LogoutCard } from '@/src/features';
import { LogoIcon } from '@/src/shared';

export function Header() {
  const t = useTranslations('HomePage');

  return (
    <header className="flex justify-between items-center h-[92px] px-6 sm:px-10  border-b border-gray">
      <LogoIcon />
      <LogoutCard logoutKey={t('logout')} />
    </header>
  );
}
