'use client';

import { createContext, useContext } from 'react';

type User = {
  name: string;
  id: string;
};

type AuthContextType = {
  user?: User;
  login: (userData: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};
