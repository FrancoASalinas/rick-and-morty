import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-dark'>
        <Header />
        <main className='min-h-screen w-full sm:mt-36 p-10 sm:w-[640px] bg-blue mx-auto sm:rounded-tr-2xl sm:rounded-tl-2xl'>
          {children}
        </main>
      </body>
    </html>
  );
}
