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
    <div className="backdrop-blur-[2px] text-white py-8">
      <Pages data={data.data.locationPages.info.pages} path='locations'/>
      <div className="py-8 px-5 flex flex-wrap justify-around gap-5 text-black">
        {data.data.locations.results.map(
          (location: {
            name: string;
            type: string;
            dimension: string;
            residents: { image: string }[];
          }) => {
            return (
              <div
                className={`rounded-xl border border-white relative overflow-hidden w-52 h-60 bg-white ${
                  location.residents.length >= 4
                    ? 'grid grid-rows-2 grid-cols-2'
                    : location.residents.length < 4 &&
                      location.residents.length >= 2
                    ? 'grid grid-cols-2 grid-rows-1'
                    : ''
                }`}
              >
                <div className="backdrop-blur absolute top-full -translate-y-full w-full left-0 z-10 p-2 justify-center flex items-center">
                  <span>{location.name}</span>
                </div>
                {location.residents.length >= 4 ? (
                  <>
                    <div className="overflow-hidden relative">
                      <Image
                        fill
                        alt="character image"
                        src={location.residents[0].image}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="overflow-hidden relative">
                      <Image
                        fill
                        alt="character image"
                        src={location.residents[1].image}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="overflow-hidden relative">
                      <Image
                        fill
                        alt="character image"
                        src={location.residents[2].image}
                        style={{ objectFit: 'fill' }}
                      />
                    </div>
                    <div className="overflow-hidden relative">
                      <Image
                        fill
                        alt="character image"
                        src={location.residents[3].image}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </>
                ) : location.residents.length < 4 &&
                  location.residents.length >= 2 ? (
                  <>
                    <div className="overflow-hidden relative">
                      <Image
                        fill
                        alt="character image"
                        src={location.residents[0].image}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="overflow-hidden relative">
                      <Image
                        fill
                        alt="character image"
                        src={location.residents[1].image}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </>
                ) : location.residents.length > 0 ? (
                  <Image
                    fill
                    alt="character image"
                    src={location.residents[0].image}
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <span className="p-3">No residents known</span>
                )}
              </div>
            );
          }
        )}
      </div>
      <Pages data={data.data.locationPages.info.pages} path='locations' />
    </div>
  );
}

export default Page;
