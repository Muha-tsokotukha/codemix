import { User } from '@/src/entities';

export type LoginUserRequest = {
  password: string;
  email: string;
};

export type LoginUserResponse = {
  token?: string;
  message?: string;
  user?: User;
};
