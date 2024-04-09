import type { Metadata } from 'next';
import { Header } from '@/src/widgets';

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
        <Header />
        <main className="flex">{children}</main>
      </body>
    </html>
  );
}
