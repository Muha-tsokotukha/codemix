export type SignUpUserRequest = {
  name: string;
  password: string;
  email: string;
};

export type SignUpUserResponse = {
  email?: string;
  token?: string;
  errors?: SignUpUserRequest;
};
