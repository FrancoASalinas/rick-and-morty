import Pages from '@/components/Pages';
import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';
import { Location } from '../../[page]/page';
import CustomCard from '@/components/CustomCard';

async function SearchLocation({ params }: { params: { input: string } }) {
  const data = await getClient().query({
    query: gql`
      query {
        locations(filter: {name: "${params.input}"}) {
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
        locationsDimensions: locations(filter: {dimension: "${params.input}"}) {
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
        locationsTypes: locations(filter: {type: "${params.input}"}) {
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

  const locationsName = data.data.locations;
  const locationsDimensions = data.data.locationsDimensions;
  const locationsTypes = data.data.locationsTypes;

  return (
    <div className="cards-container">
      {locationsName.results.length > 0 ||
      locationsDimensions.results.length > 0 ||
      locationsTypes.results.length > 0 ? (
        <>
          {locationsName.results.map((location: Location) => (
            <CustomCard
              data={location}
              characters={location.residents}
              path="locations"
            />
          ))}
          {locationsDimensions.results.map((location: Location) => (
            <CustomCard
              data={location}
              characters={location.residents}
              path="locations"
            />
          ))}
          {locationsTypes.results.map((location: Location) => (
            <CustomCard
              data={location}
              characters={location.residents}
              path="locations"
            />
          ))}
        </>
      ) : (
        <span className="text-2xl text-lb">No results found</span>
      )}
    </div>
  );
}

export default SearchLocation;
