import { useState, useEffect } from "react"
import { getPokemon } from "../services/pokeapi"
import PokemonCard from "./PokemonCard"
export default function PokemonList(){
    const [pokemons, setPokemons] = useState([])
    useEffect(()=>{
        async function fetchData() {
            const data = await getPokemon(50)
            setPokemons(data)
        }
        fetchData()
    }
    ,[])
    return(
        <>
            <h3>Pokedex</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pokemons.map(pokemon =>(
                    <PokemonCard key={pokemon.id} pokemon={pokemon}/>

                ))}
            </div>
        </>
    )
}