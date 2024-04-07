import { LogoutCard } from '@/src/features';
import { LogoIcon } from '@/src/shared';

export function Header() {
  return (
    <header className="flex justify-between items-center h-[92px] px-6 sm:px-10  border-b border-gray">
      <LogoIcon />
      <LogoutCard />
    </header>
  );
}
