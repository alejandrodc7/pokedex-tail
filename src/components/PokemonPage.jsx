import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonByName } from "../services/pokeapi";
export default function PokemonPage(){
    const { name } = useParams();
    const navigate =  useNavigate();
    const [pokemon, setPokemon] = useState("carga");
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
                404 Pokemon no encontrado...
                <button onClick={()=>navigate(-1)}
                    className="mt-6 bg-red-600 hover:bg-red-700 text-black">
                volver</button>
            </div>
        )
    }else if(pokemon == "carga"){
        return <div className="text-center">Cargando</div>
    }
    return(
        <div className="max-w-md mx-auto p-4 text-center">
            <h1 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h1>
            <button onClick={()=>navigate(-1)}
                className="mt-6 bg-red-600 hover:bg-red-700 text-black">
                volver</button>
        </div>
    ) 
}