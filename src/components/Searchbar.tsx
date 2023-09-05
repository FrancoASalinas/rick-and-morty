'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Searchbar({ path, label }: { path: string; label: string }) {
  const [input, setInput] = useState('');
  const router = useRouter();

  const search = (e: any) =>{ 
    e.preventDefault();
    input !== '' && router.push(`/${path}/search/${input}`)
};

  return (
    <div className="w-full flex justify-center py-5 items-center">
      <form onSubmit={search}>
        <div className="p-2 border self border-[#aaaa22] px-3 w-fit items-center rounded-full flex bg-[#222] gap-3">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent placeholder:text[#555] focus:outline-none"
            placeholder={`Search ${label}`}
          />
          <button type="submit">
            <svg
              className="fill-lb"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;