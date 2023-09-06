import Pages from '@/components/Pages';
import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';
import { Location } from '@/app/locations/[page]/page';
import CustomCard from '@/components/CustomCard';

async function SearchLocation({
  params,
}: {
  params: { input: string; page: string };
}) {
  const data = await getClient().query({
    query: gql`
      query {
        locations(filter: {name: "${params.input}"}, page: ${params.page}) {
          info{
            pages
          }
          results {
            name
            type
            dimension
            id
            residents {
              image
            }
          }
        }
        locationsDimensions: locations(filter: {dimension: "${params.input}"}, page: ${params.page}) {
          info{
            pages
          }
          results {
            name
            type
            dimension
            id
            residents {
              image
            }
          }
        }
        locationsTypes: locations(filter: {type: "${params.input}"}, page: ${params.page}) {
          info{
            pages
          }
          results {
            name
            type
            id
            dimension
            residents {
              image
            }
          }
        }
      }
    `,
  });

  const locationsSearchResults = [
    ...data.data.locations.results,
    ...data.data.locationsDimensions.results,
    ...data.data.locationsTypes.results,
  ];
  const pagesNumber =
    data.data.locations.info.pages +
    data.data.locationsDimensions.info.pages +
    data.data.locationsTypes.info.pages;

  return (
    <>
      <Pages
        pagesNumber={pagesNumber}
        path={`locations/search/${params.input}`}
      />
      <div className="cards-container">
        {locationsSearchResults.length > 0 ? (
          locationsSearchResults.map((location: Location) => (
            <CustomCard
              data={location}
              characters={location.residents}
              path="locations"
            />
          ))
        ) : (
          <span className="text-2xl text-lb">No results found</span>
        )}
        <Pages
          pagesNumber={pagesNumber}
          path={`locations/search/${params.input}`}
        />
      </div>
    </>
  );
}

export default SearchLocation;
