'use client';
import { Character } from '@/app/characters/[page]/page';
import { useState } from 'react';
import CharacterCards from './CharacterCards';

function CharactersList({ characters, subject }: { characters: Character[]; subject: 'characters' | 'residents' }) {
  const [active, setActive] = useState(false);

  return (
    <div className="p-3">
      <div>
        <div className="w-1/4 flex justify-between items-center">
          <span className="text-3xl underline">{subject[0].toUpperCase() + subject.slice(1)}</span>
          {characters.length > 0 && (
            <span
              className="cursor-pointer text-3xl transition-all"
              onClick={() => setActive((prev) => !prev)}
            >
              <svg className={`fill-white transition-all ${active ? 'rotate-90' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
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
