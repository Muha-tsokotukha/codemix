import { ChatList, ChatMessenger } from '@/src/widgets';

export function ChatListPage() {
  return (
    <>
      <ChatList />
      <section className="hidden md:block flex-1">
        <ChatMessenger />
      </section>
    </>
  );
}
