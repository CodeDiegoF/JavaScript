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

async function obtenerDatos() {
  document.body.innerHTML = "<h1>POKEDEX</h1><p>Cargando...</p>";

  try {
    const respuesta = await fetch(urlPokemon);

    
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    
    const listado = await respuesta.json();
    const urlPrimero = listado.results[0].url;

    const respuestaPokemon = await fetch(urlPrimero)

    if (!respuestaPokemon.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const pokemon = await respuestaPokemon.json();

    console.log("Pokémon recibido:", pokemon);
    mostrarPokemon(pokemon);
  } catch (error) {
    console.error("No se pudo obtener el pokémon :", error.message);
      document.body.innerHTML = `
        <h1>POKEDEX</h1>
        <p>No se pudo cargar el pokémon: ${error.message}</p>
      `;
  } finally {
    console.log("Petición terminada");
  }
}

document.body.innerHTML = "<h1>POKEDEX</h1><p>Cargando...</p>"


obtenerDatos();


