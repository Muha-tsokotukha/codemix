type Props = {
  isNewMessage?: boolean;
};

export function ChatLink({ isNewMessage }: Props) {
  return (
    <section className="flex justify-between py-5 pl-10 pr-8 h-[92px] border-b border-gray">
      <section>
        <p className="text-primary font-medium text-lg">Aslan</p>
        <p className="text-end text-md text-secondary">Send nuds</p>
      </section>

      <section className="flex flex-col justify-between items-center">
        {isNewMessage ? (
          <p className="w-6 h-6 bg-brand rounded-full text-white text-center overflow-hidden">
            1
          </p>
        ) : (
          <p> </p>
        )}

        <p className="text-sm text-tertiary">10:21</p>
      </section>
    </section>
  );
}
