class Catalogo {
    
    constructor(...libros){
        this.libros = libros
    }

    añadirLibro(libro) {
        let existe = false

        for(let existente of this.libros){
            if(existente.titulo === libro.titulo){
                existe = true
            }
        }

        if(existe){
            document.body.innerHTML += ("El libro con el título: " + libro.titulo + " ya existe" + "<br>" )
        } else{
            document.body.innerHTML += ("El libro con el título: " + libro.titulo + " se ha añadido al catálogo" + "<br>" )
            this.libros.push(libro)
        }
        
    }

    eliminarLibro(titulo) {
        let eliminado = false

        for(let i = 0; i < this.libros.length; i++){
            if(this.libros[i].titulo === titulo){
                this.libros.splice(i, 1)
                eliminado = true
            }
        }

        if(eliminado){
            document.body.innerHTML += ("Libro eliminado: " + titulo + "<br>")
        }else {
            document.body.innerHTML += ("Libro no encontrado, no se ha eliminado" + "<br>")
        }
    }


    buscarLibro(titulo) {
        let encontrado = false

        for(let libro of this.libros){
            if(libro.titulo === titulo){
                encontrado = true
            }
        }

        if(encontrado){
            document.body.innerHTML += ("Libro encontrado: " + titulo + "<br>")
        } else{
            document.body.innerHTML += ("Libro no encontrado" + "<br>")
        }
    }


    listarLibros() {

        document.body.innerHTML += ("Número de libros en el catálogo -> " + this.libros.length + "<br>" )

        for(let libro of this.libros){
            document.body.innerHTML += ("Título: " + libro.titulo + "; Autor: " + libro.autor + "; Número de páginas: " + libro.num_paginas + ";<br>" )
        }
    }


}