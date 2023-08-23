import {gql} from '@apollo/client';
import { getClient } from '@/lib/client';
import {notFound} from 'next/navigation';

export async function generateStaticParams(){
    const query = gql`query{
        characters(page: 1){
            results{id}
        }
    }`
    const res = await getClient().query({query})

    return res.data.characters.results.map((character: {id: number | string}) => ({id: character.id}))
}


async function Character({params}: {params: {id: number | string}}) {

    if(Number(params.id) > 826){
        notFound();
    }
    
    const query = gql`query{
        character(id : ${params.id}){
            name
        }
    }`

    const data = await getClient().query({query});

    console.log(data);

    return ( 
        <>
        <h2>{data.data.character.name}</h2>
        </>
     );
}

export default Character;