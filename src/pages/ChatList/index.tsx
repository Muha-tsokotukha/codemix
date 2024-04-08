import { useTranslations } from 'next-intl';
import { ChatList, ChatMessenger } from '@/src/widgets';

export function ChatListPage() {
  const t = useTranslations('HomePage');
  const status = true;

  return (
    <>
      <ChatList title={t('messages')} />
      <section className="flex-1">
        <ChatMessenger
          status={status ? t('online') : t('offline')}
          promtPlaceholder={t('promtPlaceholder')}
        />
      </section>
    </>
  );
}
