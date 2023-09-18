import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';
import { Episode } from '../../../[page]/page';
import CustomCard from '@/components/CustomCard';
import Pages from '@/components/Pages';

async function EpisodeSearch({
  params,
}: {
  params: { input: string; page: string };
}) {
  const data = await getClient().query({
    query: gql`
    query{
        episodes(filter: {name: "${params.input}"}, page: ${params.page}){
          info{
            pages
          }
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
          <Pages
            pagesNumber={data.data.episodes.info.pages}
            path={`episodes/search/${params.input}`}
          />
          {data.data.episodes.results.map((episode: Episode) => (
            <CustomCard
              characters={episode.characters}
              data={episode}
              path="episodes"
              key={episode.id}
            />
          ))}
          <Pages
            pagesNumber={data.data.episodes.info.pages}
            path={`episodes/search/${params.input}`}
          />
        </>
      ) : (
        <span className="text-2xl text-lb">No results Found</span>
      )}
    </div>
  );
}

export default EpisodeSearch;
