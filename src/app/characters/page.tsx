import { gql } from "@apollo/client";
import {getClient} from '@/lib/client'
import { link } from "fs";
import Link from "next/link";

const query = gql`query {
    characters(
  page: 1
    ){
      results{name, id}
    }
    
  }`

async function Characters() {
    const data = await getClient().query({query})


    return ( 
        <>
        <h1>Characters</h1>
        <ul>
            {data.data.characters.results.map((character:{name: string, id: number|string}) => (
            <li>
                <Link href={`/characters/${character.id}`}>
                {character.name}
                </Link>
            </li>
            ))}
        </ul>
        </>
     );
}

export default Characters;