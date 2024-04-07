import { useTranslations } from 'next-intl';
import { ChatLink } from '@/src/entities';

export function ChatList() {
  const t = useTranslations('HomePage');

  return (
    <aside className="md:w-[375px] xl:w-[512px]">
      <section className="border-r border-gray flex items-center py-5 pl-6 sm:pl-10  pr-8 sm:h-[92px] border-b border-gray">
        <p className="text-primary font-semibold text-xl">{t('messages')}(3)</p>
      </section>

      <section className="h-[calc(100vh-184px)] border-r border-gray overflow-y-auto">
        <ChatLink />
        <ChatLink isNewMessage />
        <ChatLink />
      </section>
    </aside>
  );
}
