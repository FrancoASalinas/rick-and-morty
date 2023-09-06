import { Character } from '@/app/characters/[page]/page';
import Image from 'next/image';

function CharacterCards({ character }: { character: Character }) {
  return (
    <div className="rounded-xl overflow-hidden w-36 h-52 flip hover:scale-125 hover:z-30">
      <div className="flip-content w-full h-full transition-all duration-200">
        <div className="face">
          <div className="top-full absolute left-0 -translate-y-full z-10 mx-auto backdrop-blur p-2 border-t-lb border-t w-full flex justify-center">
            <span className="z-20 text-sm text-black">{character.name}</span>
          </div>
          <Image
            src={character.image}
            fill
            placeholder="empty"
            alt="character image"
            style={{ objectFit: 'cover', zIndex: '5', backgroundColor: '#aaa' }}
          />
        </div>
        <div
          className={`face backface  bg-[length:40px_40px] relative rounded-xl ${
            character.status === 'Alive'
              ? 'bg-boxes-green'
              : character.status === 'Dead'
              ? 'bg-boxes-red'
              : character.status === 'unknown'
              ? 'bg-boxes-gray'
              : 'bg-lb'
          }`}
        >
          <div className="backdrop-blur-[1px] bg-opacity-30 bg-black text-center justify-around flex-col  text-white border border-[#aaa] rounded-xl top-0 left-0 flex h-full w-full absolute flex-wrap">
            <span className="text-xl text-center self-center">
              {character.name}
            </span>
            <span>{character.status === 'unknown' ? 'Status Unknown' : character.status}</span>
            <span>
              {character.species + (character.type && ', ' + character.type)}
            </span>
            <span>{character.gender}</span>
            <span>{character.origin.dimension === 'unknown' ? 'Dimension Unknown' : character.origin.dimension}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCards;
