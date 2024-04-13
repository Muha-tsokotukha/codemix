'use client';

import React, { useState, ReactNode, useMemo, useEffect } from 'react';
import { AuthContext } from '@/src/shared';
import { User } from '@/src/entities';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const localUser: User = JSON.parse(localStorage.getItem('user') || '{}');
    if (localUser.id) setUser(localUser);
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
