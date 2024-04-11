import { ReactNode } from 'react';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
};

export function FastButton({ type = 'button', children }: Props) {
  return (
    <button
      className="bg-brand hover:opacity-90 text-white font-bold py-2 px-4 rounded"
      type={type}
    >
      {children}
    </button>
  );
}
