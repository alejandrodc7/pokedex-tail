import { Link } from "react-router-dom"
export default function PokemonCard({pokemon}){
    return(
        <Link to={`/pokemon/${pokemon.name}`}>
            <div className="bg-white shadow-md rotate-lg overflow-hidden text-center p-4 transition hover:scale-105">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24 mx-auto" />
            </div>
            <h2 className="capitalize font-bold mt-2">{pokemon.name}</h2>
        </Link>
    )
}