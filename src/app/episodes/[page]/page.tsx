import CustomCard from '@/components/CustomCard';
import Pages from '@/components/Pages';
import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';

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
      <Pages data={data.data.episodesPages.info.pages} path='episodes' />
      <div className="py-8 px-5 flex flex-wrap justify-around gap-5 text-black">
        {data.data.episodes.results.map((episode: {name: string; id: string; characters: {image: string}[]}) => <CustomCard path='episodes' characters={episode.characters} data={episode} />)}
      </div>
      <Pages data={data.data.episodesPages.info.pages} path='episodes' />
    </>
  );
}

export default Episodes;
