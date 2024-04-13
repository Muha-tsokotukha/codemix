import { User } from '@/src/entities';

export type SignUpUserRequest = {
  name: string;
  password: string;
  email: string;
};

export type SignUpUserResponse = {
  user?: User;
  token?: string;
  errors?: SignUpUserRequest;
};
