import CustomCard from '@/components/CustomCard';
import Pages from '@/components/Pages';
import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';

export interface Episode {
  name: string;
  id: string;
  characters: { image: string }[];
}

async function Episodes({ params }: { params: { page: string } }) {
  const query = gql`
    query {
      episodesPages: episodes {
        info {
          pages
        }
      }
      episodes(page: ${params.page}) {
        results {
          name
          id
          characters {
            image
          }
        }
      }
    }
  `;

  const data = await getClient().query({ query });

  return (
    <>
      <Pages pagesNumber={data.data.episodesPages.info.pages} path="episodes" />
      <div className="cards-container">
        {data.data.episodes.results.map((episode: Episode) => (
          <CustomCard
            path="episodes"
            characters={episode.characters}
            data={episode}
          />
        ))}
      </div>
      <Pages pagesNumber={data.data.episodesPages.info.pages} path="episodes" />
    </>
  );
}

export default Episodes;
