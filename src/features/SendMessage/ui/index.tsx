import { SendIcon } from '@/src/shared';

type Props = {
  promtPlaceholder: string;
};

export function SendInputMessageBar({ promtPlaceholder }: Props) {
  return (
    <section className="flex items-center justify-between overflow-hidden">
      <textarea
        className="outline-none border-t border-gray h-16 w-11/12 py-5 px-[30px] resize-none [&::-webkit-scrollbar]:hidden"
        placeholder={promtPlaceholder}
      />
      <span className="pr-10">
        <SendIcon />
      </span>
    </section>
  );
}
