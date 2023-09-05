import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';
import { Episode } from '../../[page]/page';
import CustomCard from '@/components/CustomCard';

async function EpisodeSearch({ params }: { params: { input: string } }) {
  const data = await getClient().query({
    query: gql`
    query{
        episodes(filter: {name: "${params.input}"}){
       results{
         id
         name
                characters{
           image
         }
       }
     }
   }`,
  });

  return (
    <div className="cards-container">
      {data.data.episodes.results.length > 0 ? (
        <>
          {data.data.episodes.results.map((episode: Episode) => (
            <CustomCard
              characters={episode.characters}
              data={episode}
              path="episodes"
            />
          ))}
        </>
      ) : (
        <span className="text-2xl text-lb">No results Found</span>
      )}
    </div>
  );
}

export default EpisodeSearch;
