'use client'

import Link from "next/link";
import { useState } from "react";
function Header() {
    const [nav, setNav] = useState(false);

  return (
    <>
      <header className="h-16 border-b border-black flex md:hidden justify-between bg-blue items-center p-3">
        <Link href='/'>R&M DB</Link>
        <button onClick={() => setNav(prev => !prev)} className="text-3xl/[5px] h-full flex items-center">
            ...
        </button>
        <nav className={`${nav ? 'absolute' : 'hidden'} left-1/2 translate-x-[-50%] top-52 translate-y-[-50%] rounded-2xl bg-dark p-3`}>
          <ul>
            <li className="p-2"><Link href='characters'>Characters</Link></li>
            <li className="p-2"><Link href='locations'>Locations</Link></li>
            <li className="p-2"><Link href='episodes'>Episodes</Link></li>
          </ul>
        </nav>
      </header>
      <header className="h-16 border-b border-black hidden md:flex justify-between bg-blue items-center p-3">
      <Link href='/'>R&M DB</Link>
        <nav>
          <ul className="flex justify-between">
          <li className="p-2"><Link href='characters'>Characters</Link></li>
            <li className="p-2"><Link href='locations'>Locations</Link></li>
            <li className="p-2"><Link href='episodes'>Episodes</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
