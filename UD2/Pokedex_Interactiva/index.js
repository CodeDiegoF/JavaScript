const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=20";

const formulario_busqueda = document.querySelector("#formulario_busqueda")
const nombre_pokemon = document.querySelector("#nombre_pokemon")
const estado_busqueda = document.querySelector("#estado_busqueda")
const listado_pokemon = document.querySelector("#listado_pokemon")

if (!formulario_busqueda || !nombre_pokemon || !estado_busqueda || !listado_pokemon) {
  throw new Error("Faltan elementos necesarios en el HTML");
}


async function obtenerDatos(url) {
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status}`);
  }

  return respuesta.json();
}

function mostrarPokemon(resultado) {
  const partes = resultado.url.split("/");
  const numero = partes[partes.length - 2];

  const tarjeta = document.createElement("article");
  tarjeta.style.border = "1px solid #999";
  tarjeta.style.width = "10em";

  const id = document.createElement("p");
  id.textContent = `#${numero}`;

  const nombre = document.createElement("p");
  nombre.textContent = resultado.name;

  const imagen = document.createElement("img");
  imagen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numero}.png`;
  imagen.alt = resultado.name;
  imagen.loading = "lazy";
  imagen.style.width = "10em";


  const boton = document.createElement("button");
  boton.type = "button";
  boton.textContent = "Ficha completa";
  boton.dataset.nombre = resultado.name;


  tarjeta.append(id, nombre, imagen, boton);
  listado_pokemon.append(tarjeta);
}


async function cargarListado() {
  estado_busqueda.textContent = "Cargando Pokémon...";
  listado_pokemon.replaceChildren();

  try {
    const listado = await obtenerDatos(urlPokemon);

  for (let i = 0; i < listado.results.length; i++) {
      mostrarPokemon(listado.results[i]);
  }

    estado_busqueda.textContent = "";
  } catch (error) {
    console.error("No se pudo obtener el pokémon :", error);
    estado_busqueda.textContent = `No se pudo cargar el Pokémon: ${error.message}`;
  } finally {
    console.log("Petición terminada");
  }
}


listado_pokemon.addEventListener("click", (evento) => {
  if (!(evento.target instanceof Element)) {
    return;
  }

  const boton = evento.target.closest("button[data-nombre]");

  if (!boton) {
    return;
  }

  const nombre = boton.dataset.nombre;
  console.log("Ficha de:", nombre);

  window.location.href = `ficha.html?pokemon=${encodeURIComponent(nombre)}`;
});


formulario_busqueda.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const nombre = String(nombre_pokemon.value).trim().toLowerCase();
  if(nombre === ""){
    estado_busqueda.textContent = "Escribe un nombre válido";
    return;
  }

  estado_busqueda.textContent = "Buscando..."

  try {
    const pokemon = await obtenerDatos(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nombre)}`);
    window.location.href = `ficha.html?pokemon=${encodeURIComponent(pokemon.name)}`;
  } catch (error) {
      if (error.message === "Error HTTP: 404") {
        estado_busqueda.textContent = "No se ha encontrado ese Pokémon";
      } else {
        console.error("Error en la búsqueda:", error);
        estado_busqueda.textContent = "No se pudo realizar la búsqueda. Inténtalo de nuevo.";
      }
    }
});
cargarListado();