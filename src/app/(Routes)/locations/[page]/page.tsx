import CustomCard from '@/components/CustomCard';
import Pages from '@/components/Pages';
import Searchbar from '@/components/Searchbar';
import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';

export interface Location {
  name: string;
  type: string;
  dimension: string;
  residents: { image: string }[];
  id: string;
}

async function Page({ params }: { params: { page: string } }) {
  const query = gql`
    query {
        locations(page: ${params.page}){
      results{
        name
        type
        dimension
        id
        residents{
            image
        }
      }
    }
    locationPages: locations{
      info{
        pages
      }
    }
    }
    `;

  const data = await getClient().query({ query });

  return (
    <>
      <Pages
        pagesNumber={data.data.locationPages.info.pages}
        path="locations"
      />
      <div className="cards-container">
        {data.data.locations.results.map((location: Location) => (
          <CustomCard
          key={location.id}
            data={location}
            path="locations"
            characters={location.residents}
          />
        ))}
      </div>
      <Pages
        pagesNumber={data.data.locationPages.info.pages}
        path="locations"
      />
    </>
  );
}

export default Page;
