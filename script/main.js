const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset${offset}0&limits${limit}`;


fetch(url)
    .then((response)=>response.json()
    .then((responseBody)=>response.json())
    .then((jsonBody)=> console.log(jsonBody))
).catch((error)=>console.log(error))
.finally(()=>console.log("Request completed"));
