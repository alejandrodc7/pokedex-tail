const API_URL = "https://pokeapi.co/api/v2/"
export async function getPokemon(offset=50) {
    let data = []
    for(let i=1;i<=offset;i++){
            try {
            const response = await fetch(`${API_URL}/pokemon/${i}`)
            const pokemon = await response.json()
            data.push(pokemon)
    } catch (error) {
        console.error(error)
        return false
    }
    }
    return data
}