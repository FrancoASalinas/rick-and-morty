'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Back() {

    const router = useRouter();
    const pathname = usePathname();

    return ( 
        <div className="px-4 h-full flex items-center justify-center absolute top-0 left-0 text-white text-2xl">
        {pathname !== '/' && 
            <button onClick={() => router.back()}>
                <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </button>}
        </div>
     );
}

export default Back;