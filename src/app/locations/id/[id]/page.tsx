import Residents from '@/components/Residents';
import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';

async function Location({ params }: { params: { id: string } }) {
  const query = gql`
    query{
        location(id: ${params.id}){
            name
            type
            dimension
            residents{
                name
                id
                status
                species
                type
                gender
                origin{
                    dimension
                }
                image
            }
        }
    }
    `;

  const data = await getClient().query({ query });

  return (
    <>
      <div className="flex flex-col gap-2 p-3">
        <span className="text-3xl underline">Location</span>
        {data.data.location.name}
      </div>
      <div className="flex flex-col gap-2 p-3">
        <span className="text-3xl underline">Type</span>
        {data.data.location.type}
      </div>
      <div className="flex flex-col gap-2 p-3">
        <span className="text-3xl underline">Dimension</span>
        {data.data.location.dimension}
      </div>
      <Residents residents={data.data.location.residents} />
    </>
  );
}

export default Location;
