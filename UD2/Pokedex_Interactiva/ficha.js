const parametros = new URLSearchParams(window.location.search);
const nombre = parametros.get("pokemon");

const estado_ficha = document.querySelector("#estado_ficha");
const ficha_pokemon = document.querySelector("#ficha_pokemon");


async function obtenerDatos(url) {
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status}`);
  }

  return respuesta.json();
}

function mostrarFicha(pokemon) {
  ficha_pokemon.replaceChildren();

  const titulo = document.createElement("h2");
  titulo.textContent = pokemon.name;

  const id = document.createElement("p");
  id.textContent = `Número de pokedex: #${pokemon.id}`;

  const imagen = document.createElement("img");
  imagen.src = pokemon.sprites.front_default;
  imagen.alt = pokemon.name;
  imagen.style.width = "10em";

  const tipos = document.createElement("p");
  const nombres_tipos = [];
  for (let i = 0; i < pokemon.types.length; i++) {
    nombres_tipos.push(pokemon.types[i].type.name);
  }
  tipos.textContent = `Tipos: ${nombres_tipos.join(", ")}`;

  const altura = document.createElement("p");
  altura.textContent = `Altura: ${pokemon.height / 10} m`;

  const peso = document.createElement("p");
  peso.textContent = `Peso: ${pokemon.weight / 10} kg`;

  const habilidades = document.createElement("p");
  const nombres_habilidades = [];
  for (let i = 0; i < pokemon.abilities.length; i++) {
    nombres_habilidades.push(pokemon.abilities[i].ability.name);
  }
  habilidades.textContent = `Habilidades: ${nombres_habilidades.join(", ")}`;
  
  const estadisticas = document.createElement("ul");
  for (let i = 0; i < pokemon.stats.length; i++) {
    const estadistica = document.createElement("li");
    estadistica.textContent = `${pokemon.stats[i].stat.name}: ${pokemon.stats[i].base_stat}`;
    estadisticas.append(estadistica);
  }

  const titulo_estadisticas = document.createElement("h3");
  titulo_estadisticas.textContent = "Estadísticas base";

  ficha_pokemon.append(titulo, id, imagen, tipos, altura, peso, habilidades, titulo_estadisticas, estadisticas);
}


async function cargarFicha() {
  if (!nombre || nombre.trim() === "") {
    estado_ficha.textContent = "No se ha indicado ningún Pokémon. Vuelve a la Pokédex.";
    return;
  }

  estado_ficha.textContent = "Cargando ficha...";

  try {
    const pokemon = await obtenerDatos(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nombre.trim().toLowerCase())}`);

    mostrarFicha(pokemon);
    estado_ficha.textContent = "";
  } catch (error) {
    if (error.message === "Error HTTP: 404") {
      estado_ficha.textContent = "No se ha encontrado ese Pokémon";
    } else {
      console.error("No se pudo cargar la ficha:", error);
      estado_ficha.textContent = "No se pudo cargar la ficha. Inténtalo de nuevo.";
    }
  }
}

cargarFicha();