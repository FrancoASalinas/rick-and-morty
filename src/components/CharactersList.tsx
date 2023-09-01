'use client';
import { Character } from '@/app/characters/[page]/page';
import { useState } from 'react';
import CharacterCards from './CharacterCards';

function CharactersList({ characters, subject }: { characters: Character[]; subject: 'characters' | 'residents' }) {
  const [active, setActive] = useState(false);

  return (
    <div className="p-3">
      <div>
        <div className="w-1/4 flex justify-between">
          <span className="text-3xl underline">{subject[0].toUpperCase() + subject.slice(1)}</span>
          {characters.length > 0 && (
            <span
              className="cursor-pointer text-3xl transition-all"
              onClick={() => setActive((prev) => !prev)}
            >
              {active ? 'v' : '>'}
            </span>
          )}
        </div>
      </div>
      {characters.length > 0 ? (
        <div
          className={`${
            active ? 'block' : 'hidden'
          } flex gap-10 flex-wrap mx-auto justify-around py-8`}
        >
          {characters.map((resident) => (
            <CharacterCards character={resident} />
          ))}
        </div>
      ) : (
        <p className='my-3'>
        No ${subject} known
        </p>
      )}
    </div>
  );
}

export default CharactersList;
