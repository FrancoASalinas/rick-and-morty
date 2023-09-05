import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';
import { Character } from '../../[page]/page';
import CharacterCards from '@/components/CharacterCards';

async function CharacterSearch({ params }: { params: { input: string } }) {
  const data = await getClient().query({
    query: gql`query{
            charactersName: characters(filter: {name: "${params.input}"}) {
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
            charactersStatus: characters(filter: {status: "${params.input}"}) {
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
            charactersSpecies: characters(filter: {species: "${params.input}"}) {
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
            charactersType: characters(filter: {type: "${params.input}"}) {
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
            charactersGender: characters(filter: {gender: "${params.input}"}) {
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
          }`,
  });

  return (
    <div className="cards-container">
      {data.data.charactersName.results.length > 0 ||
      data.data.charactersStatus.results.length > 0 ||
      data.data.charactersSpecies.results.length > 0 ||
      data.data.charactersType.results.length > 0 ||
      data.data.charactersGender.results.length > 0 ? (
        <>
          {data.data.charactersName.results.map((character: Character) => (
            <CharacterCards character={character} />
          ))}
          {data.data.charactersStatus.results.map((character: Character) => (
            <CharacterCards character={character} />
          ))}
          {data.data.charactersSpecies.results.map((character: Character) => (
            <CharacterCards character={character} />
          ))}
          {data.data.charactersType.results.map((character: Character) => (
            <CharacterCards character={character} />
          ))}
          {data.data.charactersGender.results.map((character: Character) => (
            <CharacterCards character={character} />
          ))}
        </>
      ) : (
        <span className='text-2xl text-lb'>
            No Results found
        </span>
      )}
    </div>
  );
}

export default CharacterSearch;
