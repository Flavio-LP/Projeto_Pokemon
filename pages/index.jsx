import axios from 'axios'
import Chart from './Chart/Barchart'
import react, {useEffect, useState} from 'react'

export default function Home(){

    const [pokemons=[],setPokemons]=useState(); 
    const [pokemon='nenhum',setPokemon] = useState();


    async function troca_pokemon(){

        let p= await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
        //console.log(p.data.stats[1].base_stat)
        setPokemon(p.data.species.name)
        return setPokemons(p.data);

    }

    useEffect(()=>{

        troca_pokemon(pokemons);

    },[])

    //console.log({pokemons})

    return(
        <>
        <h1>Pokémon: {pokemon}</h1>
        <div>
            <Chart>{pokemons}</Chart>
        </div>
        </>

    )


}



