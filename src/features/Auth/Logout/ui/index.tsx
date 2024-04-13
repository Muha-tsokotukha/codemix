'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/shared';
import { logout } from '../model';

type Props = {
  logoutKey: string;
};

export function LogoutCard({ logoutKey }: Props) {
  const router = useRouter();
  const { user, logout: clearUser } = useAuth() || {};

  const onClick = () => {
    if (clearUser) clearUser();
    logout();
    router.push('/login');
  };

  return (
    <div className="grid content-center">
      {user && (
        <>
          <p className="text-primary font-medium text-lg">{user.name}</p>

          <button
            onClick={onClick}
            type="button"
            className="text-end text-md text-secondary"
          >
            {logoutKey}
          </button>
        </>
      )}
    </div>
  );
}
