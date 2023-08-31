import { Character } from "@/app/characters/[page]/page";
import Image from "next/image";

function CharacterCards({character}: {character:  Character}) {
    return ( 
        <div className="rounded-xl overflow-hidden w-36 h-52 flip hover:scale-125 hover:z-30">
            <div className="flip-content w-full h-full transition-all duration-200">
              <div className="face">
                <div className="top-full absolute left-0 -translate-y-full z-10 mx-auto backdrop-blur p-2 border-t-lb border-t w-full flex justify-center">
                  <span className="z-20 text-sm text-black">
                    {character.name}
                  </span>
                </div>
                <Image
                  src={character.image}
                  fill
                  alt="character image"
                  style={{ objectFit: 'cover', zIndex: '5' }}
                />
              </div>
              <div
                className={`face backface text-black flex flex-wrap justify-around flex-col ${
                  character.status === 'Alive'
                    ? 'bg-green-500'
                    : character.status === 'Dead'
                    ? 'bg-red-500'
                    : character.status === 'unknown'
                    ? 'bg-gray-500'
                    : 'bg-lb'
                }`}
              >
                <span className="text-xl self-center">{character.name}</span>
                <span>{character.status}</span>
                <span>
                  {character.species +
                    (character.type && ', ' + character.type)}
                </span>
                <span>{character.gender}</span>
                <span>{character.origin.dimension}</span>
              </div>
            </div>
          </div>
     );
}

export default CharacterCards;