'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function CustomCard({
  data,
  characters,
  path,
}: {
  data: {
    name: string;
    id: string;
  };
  characters: { image: string }[];
  path: string;
}) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/${path}/id/${data.id}`)}
      className={` border border-white rounded-xl  relative overflow-hidden w-52 h-60 bg-[#aaa] cursor-pointer ${
        characters.length >= 4
          ? 'grid grid-rows-2 grid-cols-2'
          : characters.length < 4 && characters.length >= 2
          ? 'grid grid-cols-2 grid-rows-1'
          : ''
      }`}
    >
      <div className="backdrop-blur absolute top-full -translate-y-full w-full left-0 z-10 p-2 justify-center flex items-center">
        <span>{data.name}</span>
      </div>
      {characters.length >= 4 ? (
        <>
          <div className="overflow-hidden relative">
            <Image
              fill
              alt="character image"
              placeholder="empty"
              src={characters[0].image}
              style={{ objectFit: 'cover', backgroundColor: '#aaa' }}
            />
          </div>
          <div className="overflow-hidden relative">
            <Image
              fill
              placeholder="empty"
              alt="character image"
              src={characters[1].image}
              style={{ objectFit: 'cover', backgroundColor: '#aaa' }}
            />
          </div>
          <div className="overflow-hidden relative">
            <Image
              fill
              placeholder="empty"
              alt="character image"
              src={characters[2].image}
              style={{ objectFit: 'cover', backgroundColor: '#aaa' }}
            />
          </div>
          <div className="overflow-hidden relative">
            <Image
              fill
              alt="character image"
              placeholder="empty"
              src={characters[3].image}
              style={{ objectFit: 'cover', backgroundColor: '#aaa' }}
            />
          </div>
        </>
      ) : characters.length < 4 && characters.length >= 2 ? (
        <>
          <div className="overflow-hidden relative">
            <Image
              fill
              alt="character image"
              src={characters[0].image}
              placeholder="empty"
              style={{ objectFit: 'cover', backgroundColor: '#aaa' }}
            />
          </div>
          <div className="overflow-hidden relative">
            <Image
              placeholder="empty"
              fill
              alt="character image"
              src={characters[1].image}
              style={{ objectFit: 'cover', backgroundColor: '#aaa' }}
            />
          </div>
        </>
      ) : characters.length > 0 ? (
        <Image
          placeholder="empty"
          fill
          alt="character image"
          src={characters[0].image}
          style={{ objectFit: 'cover', backgroundColor: '#aaa' }}
        />
      ) : (
        <span className="p-3">No residents known</span>
      )}
    </div>
  );
}

export default CustomCard;
