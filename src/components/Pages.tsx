'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
function Pages({
  data,
  path
}: {
  data: string;
  path: string
}) {
  const pagesNumber = data;
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

    return pagesArray[1] !== 2
      ? [pagesArray[0], '...', ...pagesArray.slice(1)]
      : pagesArray[-0] !== Number(pagesNumber)
      ? [...pagesArray, '...', Number(pagesNumber)]
      : pagesArray;
  }

  const pages = updatePagelist();

  return (
    <div className="flex w-full gap-5 justify-center text-xl">
      {actualPage > 1 && <Link href={`${actualPage - 1}`}>{'<'}</Link>}
      {pages.map((page) =>
        page === '...' ? (
          <span>...</span>
        ) : page === actualPage ? (
          <span className="text-lb">{page}</span>
        ) : (
          <Link className="hover:underline " href={`/${path}/${page}`}>
            {page}
          </Link>
        )
      )}
      {actualPage < Number(pagesNumber) && (
        <Link href={`${actualPage + 1}`}>{'>'}</Link>
      )}
    </div>
  );
}

export default Pages;
