'use client';
import { Character } from '@/app/characters/[page]/page';
import { useState } from 'react';
import CharacterCards from './CharacterCards';

function Residents({ residents }: { residents: Character[] }) {
  const [active, setActive] = useState(false);

  return (
    <div className="p-3">
      <div>
        <div className="w-1/4 flex justify-between">
          <span className="text-3xl underline">Residents</span>
          {residents.length > 0 && (
            <span
              className="cursor-pointer text-3xl transition-all"
              onClick={() => setActive((prev) => !prev)}
            >
              {active ? 'v' : '>'}
            </span>
          )}
        </div>
      </div>
      {residents.length > 0 ? (
        <div
          className={`${
            active ? 'block' : 'hidden'
          } flex gap-10 flex-wrap mx-auto justify-around py-8`}
        >
          {residents.map((resident) => (
            <CharacterCards character={resident} />
          ))}
        </div>
      ) : (
        <p className='my-3'>
        No residents known
        </p>
      )}
    </div>
  );
}

export default Residents;
