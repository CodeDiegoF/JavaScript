let libro1 = new Libro ("El Quijote", "Cervantes", "500")
libro1.describir()
libro1.esExtenso()


let libros = []
let catalogo = new Catalogo (libros)


catalogo.añadirLibro(libro1)
catalogo.eliminarLibro("El Quije")
catalogo.añadirLibro(libro1)