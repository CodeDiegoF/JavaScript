const urlCafe = "https://api.sampleapis.com/coffee/hot/2";

function mostrarCafe(cafe) {
  const ingredientes = cafe.ingredients
    .map(ingrediente => `<li>${ingrediente}</li>`)
    .join("");

  document.body.innerHTML = `
    <h1>Catálogo de cafés</h1>
    <article>
      <h2>${cafe.title}</h2>
      <img src="${cafe.image}" alt="${cafe.title}" height="300">
      <p>${cafe.description}</p>
      <h3>Ingredientes</h3>
      <ul>${ingredientes}</ul>
    </article>
  `;
}

async function obtenerCafe() {
  document.body.innerHTML = "<h1>Catálogo de cafés</h1><p>Cargando...</p>";

  try {
    const respuesta = await fetch(urlCafe);

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const cafe = await respuesta.json();
    console.log("Café recibido:", cafe);
    mostrarCafe(cafe);
  } catch (error) {
    console.error("No se pudo obtener el café:", error.message);
    document.body.innerHTML = `
      <h1>Catálogo de cafés</h1>
      <p>No se pudo cargar el café: ${error.message}</p>
    `;
  } finally {
    console.log("Petición terminada");
  }
}

document.body.innerHTML = "<h1>Catálogo de cafés</h1><p>Cargando...</p>";


obtenerCafe();


