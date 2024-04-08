import { ChatList, ChatMessenger } from '@/src/widgets';

export function NewChatPage() {
  return (
    <>
      <section className="hidden md:block">
        <ChatList />
      </section>
      <section className="flex-1">
        <ChatMessenger />
      </section>
    </>
  );
}
