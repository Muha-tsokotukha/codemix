import Link from 'next/link';

type Props = {
  isNewMessage?: boolean;
  chatId: string;
  title?: string;
  timestamp?: string;
  name?: string;
};

export function ChatLink({
  isNewMessage,
  chatId,
  title,
  timestamp,
  name,
}: Props) {
  return (
    <Link href={`/${chatId}`}>
      <section className="flex justify-between py-5 pl-6 sm:pl-10  pr-8 h-[92px] border-b border-gray">
        <section>
          <p className="text-primary font-medium text-lg">{name}</p>
          <p className="text-md text-secondary">{title?.slice(0, 30)}</p>
        </section>

        <section className="flex flex-col justify-between items-center">
          {isNewMessage ? (
            <p className="w-6 h-6 bg-brand rounded-full text-white text-center overflow-hidden">
              1
            </p>
          ) : (
            <p> </p>
          )}

          <p className="text-sm text-tertiary">{timestamp}</p>
        </section>
      </section>
    </Link>
  );
}
