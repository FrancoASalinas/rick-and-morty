import { gql } from '@apollo/client';
import { getClient } from '@/lib/client';
import { notFound, redirect } from 'next/navigation';
import Pages from '@/components/Pages';
import Image from 'next/image';
import CharacterCards from '@/components/CharacterCards';

export interface Character {
  name: string;
  id: number | string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    dimension: string
  };
}

async function Characters({ params }: { params: { page: string } }) {
  const query = gql`
  query {
    characterPages: characters{
      info{
        pages
      }
    }
    characters(page: ${params.page}) {
      results {
        name
        id
        image
        status
        species
        type
        gender
        origin{
          dimension
        }
      }
    }
  }
  `;

  const data = await getClient().query({ query });

  return (
    <>
      <Pages data={data.data.characterPages.info.pages} path='characters'/>
      <div className="flex gap-10 flex-wrap mx-auto justify-around py-8">
        {data.data.characters.results.map((character: Character) => (
          <CharacterCards character={character} />
        ))}
      </div>
      <Pages data={data.data.characterPages.info.pages} path='characters'/>
    </>
  );
}

export default Characters;
