import CharactersList from "@/components/CharactersList";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

async function Episode({params}: {params: {id: string}}) {

    const query = gql`
        query{
            episode(id: ${params.id}) {
                name
                air_date
                characters {
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
        }
    `

    const data = await getClient().query({query})

    return ( 
        <>
        <div className="flex flex-col gap-2 p-3">
          <span className="text-3xl underline">Episode</span>
          {data.data.episode.name}
        </div>
        <div className="flex flex-col gap-2 p-3">
          <span className="text-3xl underline">Air Date</span>
          {data.data.episode.air_date}
        </div>
        <CharactersList characters={data.data.episode.characters} subject='characters'  />
      </>
     );
}

export default Episode;