'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

function Pages({ pagesNumber, path }: { pagesNumber: string; path: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const actualPage = Number(pathname.split('/').slice(-1));

  function updatePagelist() {
    let pagesArray = [1];

    for (let i = 2; i <= Number(pagesNumber); i++) {
      if (i >= actualPage - 4 && i < actualPage) {
        pagesArray.push(i);
      } else if (i <= actualPage + 4 && i >= actualPage) {
        pagesArray.push(i);
      }
    }

    if (pagesArray[1] !== 2 && pagesArray.slice(-1)[0] !== Number(pagesNumber)) {
      return [
        pagesArray[0],
        '...',
        ...pagesArray.slice(1),
        '...',
        Number(pagesNumber),
      ];
    } else if (pagesArray[1] !== 2 && pagesArray.length > 1) {
      return [pagesArray[0], '...', ...pagesArray.slice(1)];
    } else if (pagesArray.slice(-1)[0] !== Number(pagesNumber)) {
      return [...pagesArray, '...', Number(pagesNumber)];
    } else {
      return pagesArray;
    }
  }

  const pages = updatePagelist();

  return (
    <div className="flex w-full sm:gap-5 gap-2 justify-center py-3 text-white text-xl">
      {actualPage > 1 && (
        <Link
          href={
            `${actualPage - 1}` +
            (searchParams.toString().length > 0 ?
              `?${new URLSearchParams(searchParams.toString())}` : '')
          }
          className="hover:underline"
        >
          {'Back'}
        </Link>
      )}
      {pages.length > 1 &&
        pages.map((page, index) =>
          page === '...' ? (
            <span key={index + page}>...</span>
          ) : page === actualPage ? (
            <span key={page.toString()} className="text-lb">{page}</span>
          ) : (
            <Link
            key={page.toString()}
              className="hover:underline "
              href={
                `${page}` +
                (searchParams.toString().length > 0 ?
                  `?${new URLSearchParams(searchParams.toString())}` : '')
              }
            >
              {page}
            </Link>
          )
        )}
      {actualPage < Number(pagesNumber) && (
        <Link
          href={
            `${actualPage + 1}` +
            (searchParams.toString().length > 0 ?
              `?${new URLSearchParams(searchParams.toString())}` : '')
          }
          className="hover:underline"
        >
          {'Next'}
        </Link>
      )}
    </div>
  );
}

export default Pages;
