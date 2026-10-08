class Catalogo {
    
    constructor(...libros){
        this.libros = libros
    }

    añadirLibro(Libro) {

        for(let libro of this.libros){
            if(Libro.titulo === this.titulo){
                document.body.innerHTML += ("\nEl libro con el título: " + libro.titulo + " ya existe")
            } else{
                this.libros.push(Libro)
            }
        }
        
    }

    eliminarLibro(titulo) {
        
        for(let libro of this.libros){
            if(Libro.titulo === titulo){
                this.libros.remove(libro)
            }
        }
    }


}