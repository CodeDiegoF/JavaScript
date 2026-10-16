const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=5";


const promesaRespuesta = fetch(urlPokemon);
console.log(promesaRespuesta);

function mostrarPokemon(pokemon) {

    document.body.innerHTML = `
      <h1>DATOS POKÉMON</h1>
      <article style= "border: 1px solid #999; width: 220px">
        <ul>Número de pokedex: ${pokemon.id}</ul>
        <ul>${pokemon.name}</ul>
        <ul> tipo ${pokemon.types[0].type.name}</ul>
        <img src="${pokemon.sprites.front_default}">
      </article>
    `;

  }
  
function obtenerDatos(url) {
  return fetch(url)
  .then(respuesta => {
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    return respuesta.json();
  })
  .then(listado => {
      console.log(listado.results)
      console.log("Tipo de dato: " + typeof listado)

      const urlPrimero = listado.results[0].url

      return fetch(urlPrimero)
    })
  .then(respuesta => {
      if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
    }
      return respuesta.json();
    })
}

function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(() => { resolve("Cargando...") }, ms);
  });
}

document.body.innerHTML = "<h1>POKEDEX</h1><p>Cargando...</p>";

obtenerDatos(urlPokemon)
    .then(pokemon => {
      mostrarPokemon(pokemon);
      console.log(pokemon.name)
      console.log("Tipo de dato: " + typeof pokemon)
    })
    .catch(error => {
      console.error("No se pudo obtener el pokémon :", error.message);
      document.body.innerHTML = `
        <h1>POKEDEX</h1>
        <p>No se pudo cargar el pokémon: ${error.message}</p>
      `;
    })
    .finally(() => console.log("Petición terminada"));



const urlPikachu = "https://pokeapi.co/api/v2/pokemon/pikachu"
const promesaPickahu = fetch(urlPikachu)

esperar(5000)
    .then(() =>  {
        console.log("Cargando Pikachu...");
        return fetch(urlPikachu);
    })
    .then(respuesta =>  {
      if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
      }

        return respuesta.json();
    })
    .then(pikachu => {
      console.log("numero de pickachu: " + pikachu.id)
      console.log(pikachu.name)
      console.log(pikachu.sprites.front_default)
      console.log(pikachu.types[0].type.name)

      mostrarPokemon(pikachu)
    })


