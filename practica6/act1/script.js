let libro1 = new Libro ("El Quijote", "Cervantes", 299)
// let libroInvalido = new Libro (null, "Cervantes", 299)
// let libroInvalido2 = new Libro ("null", "Cervantes", "299")
let libro2 = new Libro ("El arte de la guerra", "Sun Tzu", 300)
let libro3 = new Libro("La Celestina", "Fernando de Rojas", 300)

libro1.describir()
libro1.esExtenso()
libro2.esExtenso()

document.body.innerHTML += "-------------------------------------------------</br>"

let catalogo = new Catalogo()

catalogo.añadirLibro(libro1)
catalogo.añadirLibro(libro2)
catalogo.añadirLibro(libro3)
catalogo.añadirLibro(libro1)
document.body.innerHTML += "-------------------------------------------------</br>"

catalogo.buscarLibro("El Quijote")
catalogo.eliminarLibro("El Quijote")
catalogo.buscarLibro("El Quijote")
document.body.innerHTML += "-------------------------------------------------</br>"

catalogo.buscarLibro("El arte de la guerra")
catalogo.buscarLibro("El Arte de la guerra")
catalogo.eliminarLibro("la celestina")
document.body.innerHTML += "-------------------------------------------------</br>"

catalogo.listarLibros()