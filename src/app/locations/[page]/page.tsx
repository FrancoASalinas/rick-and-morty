import CustomCard from '@/components/CustomCard';
import Pages from '@/components/Pages';
import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';
import Image from 'next/image';

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
    <div>
      <Pages data={data.data.locationPages.info.pages} path='locations'/>
      <div className="py-8 px-5 flex flex-wrap justify-around gap-5 text-black">
        {data.data.locations.results.map(
          (location: 
            {
            name: string;
            type: string;
            dimension: string;
            residents: { image: string }[];
            id: string
        }) => <CustomCard data={location} path='locations' characters={location.residents} />
        )}
      </div>
      <Pages data={data.data.locationPages.info.pages} path='locations' />
    </div>
  );
}

export default Page;
