'use client';
import Image from 'next/image';
import title from '../../public/title.svg';
import Link from 'next/link';
import Back from './Back';
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/' && (
        <header className="backdrop-blur-[2px] p-4 max-w-2xl mx-auto w-full flex justify-center relative">
          <Back />
          <Link href="/" className="w-40 h-auto block sm:w-56">
            <Image src={title} alt="Rick and Morty" />
          </Link>
        </header>
      )}
    </>
  );
}

export default Header;
