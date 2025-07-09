export default function PokemonCard({pokemon}){
    return(
        <div className="bg-white shadow-md rotate-lg overflow-hidden text-center p-4 transition hover:scale-105">
            <img src={pokemon.sprites.front_default} alt="pokemon.name" className="w-24 h-24 mx-auto" />
            <div className='pokeTypes'>
                {
                pokemon.types.map((type, i) => {
                    return (
                    <div className='pokeSkill' key={i}>
                        {type.type.name}
                    </div>
                    )
                })
                }
            </div>
        </div>
    )
}