import type { Metadata } from 'next';
import { Header } from '@/src/widgets';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cloudmix',
  description: 'Chat with AI and friends',
};

export default function RootLayout({
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
        {children}
      </body>
    </html>
  );
}
