import Image from 'next/image';
import Link from 'next/link';
import LoadingImage from './LoadingImage';
import { reduceEachLeadingCommentRange } from 'typescript';

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
  const randomImages = (y: number, length: number) => {
    const arr: number[] = [];

    let number: number = 0;

    const randomNumber = () => (number = Math.floor(Math.random() * y));

    randomNumber();

    for (let i = 0; arr.length < length; i++) {
      if (arr.includes(number)) {
        randomNumber();
      } else {
        arr.push(number);
      }
    }

    return arr;
  };

  const PopulatedCard = () => {
    const imagesArray = randomImages(
      characters.length,
      characters.length >= 4
        ? 4
        : characters.length >= 2 && characters.length < 4
        ? 2
        : 1
    );

    return (
      <Link href={`/${path}/id/${data.id}`}>
        <div
          className={` border border-white rounded-xl  relative overflow-hidden w-52 h-60 bg-[#aaa] cursor-pointer hover:scale-125 transition-all hover:z-20 ${
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
          {imagesArray.map((item, index, arr) => {
            return arr.length === 1 ? (
              <LoadingImage
                image={characters[imagesArray[index]].image}
              />
            ) : (
              <div className="overflow-hidden relative">
                <LoadingImage
                  image={characters[imagesArray[index]].image}
                />
              </div>
            );
          })}
        </div>
      </Link>
    );
  };

  const NoCharactersCard = () => {
    return (
      <Link href={`/${path}/id/${data.id}`}>
        <div
          className={` border border-white rounded-xl  relative overflow-hidden w-52 h-60 bg-[#aaa] cursor-pointer hover:scale-125 transition-all hover:z-20`}
        >
          <div className="backdrop-blur absolute top-full -translate-y-full w-full left-0 z-10 p-2 justify-center flex items-center">
            <span>{data.name}</span>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <span className="p-3">No residents known</span>
          </div>
        </div>
      </Link>
    );
  };

  return characters.length > 0 ? <PopulatedCard /> : <NoCharactersCard />;
}

export default CustomCard;
