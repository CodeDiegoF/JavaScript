const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=5";


const promesaRespuesta = fetch(urlPokemon);
console.log(promesaRespuesta);

function mostrarPokemon(pokemon) {
  const pokemons = pokemon.results
    .map(results => `<li>${results.name + " url: " + results.url}</li>`)
    .join("");

  document.body.innerHTML = `
    <h1>POKEDEX</h1>
    <article>
      <ul>${pokemons}</ul>
      <p> tipo de dato => ${typeof pokemon}</p>
    </article>
  `;
}

fetch(urlPokemon)
    .then(respuesta =>  {
      if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
      }

        return respuesta.json();
    })
    .then(pokemon => {
      mostrarPokemon(pokemon);
      console.log(pokemon.results)
      console.log(typeof pokemon)
    })
    .catch(error => {
      console.error("No se pudo obtener el pokémon :", error.message);
      document.body.innerHTML = `
        <h1>POKEDEX</h1>
        <p>No se pudo cargar el pokémon: ${error.message}</p>
      `;
    })




const urlPikachu = "https://pokeapi.co/api/v2/pokemon/pikachu"
const promesaPickahu = fetch(urlPikachu)
    .then(respuesta =>  {
      if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
      }

        return respuesta.json();
    })

