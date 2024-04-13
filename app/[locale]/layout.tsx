import type { Metadata } from 'next';
import { Header } from '@/src/widgets';
import { AuthProvider, ChatHistoryProvider } from '@/src/app/providers';

export const metadata: Metadata = {
  title: 'Cloudmix',
  description: 'Chat with AI and friends',
};

export default function LocaleRootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body>
        <AuthProvider>
          <Header />
          <ChatHistoryProvider>
            <main className="flex">{children}</main>
          </ChatHistoryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
