'use client';

import React, { useState, ReactNode, useMemo } from 'react';
import { AuthContext } from '@/src/shared';
import { User } from '@/src/entities';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(undefined);
  };

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
