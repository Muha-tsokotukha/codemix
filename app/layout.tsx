import type { Metadata } from 'next';
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
      <body>{children}</body>
    </html>
  );
}