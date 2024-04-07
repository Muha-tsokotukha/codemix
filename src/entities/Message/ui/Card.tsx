type Props = {
  message: string;
  isSentByUser?: boolean;
};

export function MessageCard({ message, isSentByUser }: Props) {
  return (
    <section
      className={`max-w-[75%] w-fit py-3 px-6 text-md rounded-2xl ${isSentByUser ? 'text-white bg-brand ml-auto' : 'text-primary bg-white'}`}
    >
      {message}
    </section>
  );
}
