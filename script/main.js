const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset${offset}0&limits${limit}`;

function convertPokemonHtml(pokemon){
    return `
    <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    
    <div class="details">
      <ol class="types">
        <li class="type">Grass</li>
        <li class="type">Poison</li>
      </ol>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}" >
    </div>
  </li>
    
  `
}

const pokemonList = document.getElementById('pokemonList');

PokeApi.getPokemons().then((pokemons) =>{
    const listItens = [];    
    for(let i = 0; i < pokemons.length;i++){
            const pokemon = pokemons[i];
            listItens.push(convertPokemonHtml(pokemon))
    }
    console.log(listItens);
})
    