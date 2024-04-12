'use client';

import { useRouter } from 'next/navigation';
import { logout } from '../model';

type Props = {
  logoutKey: string;
};

export function LogoutCard({ logoutKey }: Props) {
  const router = useRouter();

  const onClick = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="grid content-center">
      <p className="text-primary font-medium text-lg">Samurai Meow</p>

      <button
        onClick={onClick}
        type="button"
        className="text-end text-md text-secondary"
      >
        {logoutKey}
      </button>
    </div>
  );
}
