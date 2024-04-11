import { ChangeEvent } from 'react';

type Props = {
  type?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  minLength?: number;
  required?: boolean;
};

export function FastInput({
  type = 'text',
  placeholder,
  onChange,
  value,
  name,
  minLength = 3,
  required,
}: Props) {
  return (
    <input
      className="appearance-none block w-full bg-white text-gray-700 border brand-500 rounded py-3 px-4 leading-tight focus:outline-none focus:brand focus:border-brand"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      name={name}
      minLength={minLength}
      maxLength={64}
      required={required}
    />
  );
}
