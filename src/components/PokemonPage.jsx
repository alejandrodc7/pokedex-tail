import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemon, getPokemonByName } from "../services/pokeapi";

export default function PokemonPage() {
    const { name } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState (null);
    useEffect(()=>{
        async function fetchData() {
            const data = await getPokemonByName(name)
            setPokemon(data)
        }
        fetchData()
    },[name])
    if(!pokemon){
        return(
            <div className="text-center">
                404 - Pokemon no encontrado...

            </div>
        )
    }
    return(
        <div className="max-w-md mx-auto p-4 text-center">
            <h1 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h1>
        </div>
    )
}