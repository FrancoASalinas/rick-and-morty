import Header from '@/components/Header';
import localFont from 'next/font/local'


const myFont = localFont({
  src: '../../../public/get_schwifty.ttf',
  display: 'swap',
  variable: '--font-get-shwifty'
})

export default function RoutesLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
          <Header />
          <main className="min-h-screen overflow-x-hidden p-3 w-full mx-auto max-w-4xl backdrop-blur-[2px] text-white">
            {children}
          </main>
      </>
    );
  }