import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';
import { Character } from '../../../[page]/page';
import CharacterCards from '@/components/CharacterCards';
import Pages from '@/components/Pages';

async function CharacterSearch({
  params,
  searchParams,
}: {
  params: { input: string; page: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchParamsQueries = {
    status: searchParams.status ? `status: "${searchParams.status}"` : '',
    gender: searchParams.gender ? `gender: "${searchParams.gender}"` : '',
  };
  
  const data = await getClient().query({
    query: gql`query{
      charactersName: characters(filter: {name: "${params.input}" ${searchParamsQueries.status} ${searchParamsQueries.gender}}, page: ${params.page}) {
        info{
          pages
        }
        results {
          name
          id
          image
          status
          species
          type
          gender
          origin {
            dimension
          }
        }
      }
      charactersStatus: characters(filter: {status: "${params.input}" ${searchParamsQueries.gender}}, page: ${params.page}) {
        info{
          pages
        }
        results {
          name
          id
          image
          status
          species
          type
          gender
          origin {
            dimension
          }
        }
      }
      charactersSpecies: characters(filter: {species: "${params.input}" ${searchParamsQueries.status} ${searchParamsQueries.gender}}, page: ${params.page}) {
        info{
          pages
        }
        results {
          name
          id
          image
          status
          species
          type
          gender
          origin {
            dimension
          }
        }
      }
      charactersType: characters(filter: {type: "${params.input}" ${searchParamsQueries.status} ${searchParamsQueries.gender}}, page: ${params.page}) {
        info{
          pages
        }
        results {
          name
          id
          image
          status
          species
          type
          gender
          origin {
            dimension
          }
        }
      }
      charactersGender: characters(filter: {gender: "${params.input}" ${searchParamsQueries.status}}, page: ${params.page}) {
        info{
          pages
        }
        results {
          name
          id
          image
          status
          species
          type
          gender
          origin {
            dimension
          }
        }
      }
    }`,
  });

  const charactersSearchResult = [
    ...data.data.charactersName.results,
    ...data.data.charactersStatus.results,
    ...data.data.charactersSpecies.results,
    ...data.data.charactersType.results,
    ...data.data.charactersGender.results,
  ];

  const numberOfPages =
    data.data.charactersName.info.pages +
    data.data.charactersStatus.info.pages +
    data.data.charactersSpecies.info.pages +
    data.data.charactersType.info.pages +
    data.data.charactersGender.info.pages;

  return (
    <>
      <Pages
        pagesNumber={numberOfPages.toString()}
        path={`characters/search/${params.input}`}
      />
      <div className="cards-container">
        {charactersSearchResult.length > 0 ? (
          charactersSearchResult.map((character: Character) => (
            <CharacterCards character={character} />
          ))
        ) : (
          <span className="text-2xl text-lb">No Results found</span>
        )}
      </div>
      <Pages
        pagesNumber={numberOfPages.toString()}
        path={`characters/search/${params.input}`}
      />
    </>
  );
}

export default CharacterSearch;
