'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

function Filters({
  filters,
}: {
  filters: { title: string; filters: string[] }[];
}) {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleQueryParam(key: string, value: string): void {
    key = key.toLowerCase();
    value = value.toLowerCase();

    const currentQueries = new URLSearchParams(
      Array.from(searchParams.entries())
    );

    if(currentQueries.get(key) === value){
      currentQueries.delete(key);
    }
     else if (currentQueries.get(key) !== null) {
      currentQueries.delete(key);
      currentQueries.set(key, value);
    } else {
      currentQueries.set(key, value);
    }

    router.push(`?${currentQueries.toString()}`);
  }

  return (
    <div className="relative ml-6 border w-max border-white p-2 rounded-t bg-black">
      <button
        onClick={() => setActive((prev) => !prev)}
        className="flex gap-2 items-center justify-center px-3"
      >
        Filter{' '}
        <svg
          className={`fill-white rotate-90`}
          xmlns="http://www.w3.org/2000/svg"
          height="1rem"
          viewBox="0 0 320 512"
        >
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </button>
      <ul
        className={` ${
          active ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-1/4'
        } absolute top-full border transition-all border-white p-2 divide-y space-y-3 bg-black w-max z-30 left-0`}
      >
        {filters.map((filter) => (
          <li>
            <span className='text-xl text-center w-full'>
            {filter.title}
            </span>
            <ul>
            {filter.filters.map((item) => (
              <li className='flex justify-between items-center w-full'>
                <label htmlFor={item}>
                  {item}
                  </label>
                  <input
                    type="radio"
                    id={item}
                    checked={
                      searchParams.get(filter.title.toLowerCase()) ===
                      item.toLowerCase()
                    }
                    className='appearance-none block w-4 h-4 checked:bg-lb border rounded-full border-white bg-black'
                    name={filter.title}
                    onClick={(event: any) => event.target.checked && handleQueryParam(filter.title, item)}
                    onChange={(e) => handleQueryParam(filter.title, item)}
                  />
                
              </li>
            ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filters;
