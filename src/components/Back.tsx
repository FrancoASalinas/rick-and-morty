'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Back() {

    const router = useRouter();
    const pathname = usePathname();

    return ( 
        <div className="px-4 h-full flex items-center justify-center absolute top-0 left-0 text-white text-2xl">
        {pathname !== '/' && <button onClick={() => router.back()}>{'<-'}</button>}
        </div>
     );
}

export default Back;