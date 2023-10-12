
const PokeApi = {}

PokeApi.getPokemons = (offset = 0,limit = 10) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset${offset}0&limits${limit}`;
    return fetch(url)
            .then((response)=>response.json())
            .then((jsonBody) => jsonBody.results)
            .catch((error) => console.error(error))
}