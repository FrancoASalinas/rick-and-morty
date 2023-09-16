import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local'


const myFont = localFont({
  src: '../../public/get_schwifty.ttf',
  display: 'swap',
  variable: '--font-get-shwifty'
})

export const metadata: Metadata = {
  title: 'Rick and Morty DB',
  description: 'Rick and Morty Database, data by Rick and Morty API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${myFont.variable}`}>
      <body className="bg-black bg-polka bg-[length:26px_26px]">
        <main className="min-h-screen w-full mx-auto max-w-4xl backdrop-blur-[2px] text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
